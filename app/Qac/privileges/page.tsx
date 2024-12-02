"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, Navbar, Title, RoleTable, SearchBar } from "@/components/index";
import ButtonText from "@/components/ButtonText";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewRoleCreationForm from "@/components/NewRoleCreation";
import SubTitle from "@/components/SubTitle";
import { usePathname } from "next/navigation";
import { addRole, getRoles } from "@/actions/roleCreation";

const ViewStaff = () => {

    interface Role {
        id: string;
        roleName: string;
        roleDescription: string;
        selectedPrivileges: string[];
      }
      
  const pathname = usePathname();
  const [users, setUsers] = useState<Role[]>([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [selectedPrivileges, setSelectedPrivileges] = useState<string[]>([]);

  useEffect(() => {
    // Fetch roles when the component mounts
    const fetchRoles = async () => {
      try {
        const roles = await getRoles();
        setUsers(roles); // Set the fetched roles to the users state
      } catch (error) {
        alert("Failed to fetch roles");
      }
    };

    fetchRoles();
  }, []);

  const handleSearch = (searchText: string) => {
    const filteredUsers = users.filter((user: any) =>
      user.roleName.toLowerCase().includes(searchText.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await addRole({
        roleName,
        roleDescription,
        selectedPrivileges,
      });
      alert("Role created successfully");
      setUsers((prev) => [...prev, result]);
      setFormVisible(false);
    } catch (error) {
      alert("Failed to create role");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "roleName") {
      setRoleName(value);
    } else if (name === "roleDescription") {
      setRoleDescription(value);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedPrivileges((prev) => [...prev, name]);
    } else {
      setSelectedPrivileges((prev) => prev.filter((privilege) => privilege !== name));
    }
  };

  return (
    <div className="w-full">
      <Navbar />
      <Sidebar />

      <div className="ml-64 flex flex-col min-h-screen bg-blue-50 px-20 py-10">
        <Title text="Privileged User Roles" />
        <Breadcrumbs />

        <div className="flex justify-between items-center mt-6 ml-2">
          <ButtonText text="Create new user role" onClick={toggleFormVisibility} />
        </div>

        {isFormVisible && (
          <div className="mt-8">
            <NewRoleCreationForm
              roleName={roleName}
              roleDescription={roleDescription}
              selectedPrivileges={selectedPrivileges}
              onInputChange={handleInputChange}
              onCheckboxChange={handleCheckboxChange}
              onSubmit={handleFormSubmit}
            />
          </div>
        )}

        <div className="mt-8">
          <SubTitle text="Recently created" />
          <div className="mt-6">
            <SearchBar onSearch={handleSearch} />
          </div>
          <RoleTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default ViewStaff;
