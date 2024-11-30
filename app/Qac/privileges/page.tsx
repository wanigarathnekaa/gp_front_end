"use client";
import React, { useState } from 'react';
import { Sidebar, Navbar, Title, RoleTable, SearchBar } from '@/components/index';
import ButtonText from '@/components/ButtonText';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubTitle from '@/components/SubTitle';
import { usePathname } from 'next/navigation';
import NewPrivilegesAssignForm from '@/components/NewPrivilegesAssignForm';
import PrivilegeTable from '@/components/PrivilegeTable';

const usersData = [
    {
        privilegeId: "101",
        privilegeName: "Manage Courses",
        assignedTo: "Post graduate head"
    },
    {
        privilegeId: "101",
        privilegeName: "Manage Courses",
        assignedTo: "Post graduate head"
    },
    {
        privilegeId: "101",
        privilegeName: "Manage Courses",
        assignedTo: ["Post graduate head", "Undergraduate head"]
    },
];

const ViewStaff = () => {
    const pathname = usePathname();
    const [users, setUsers] = useState(usersData);
    const [isFormVisible, setFormVisible] = useState(false);

    const handleSearch = (searchText: string) => {
        const filteredUsers = usersData.filter(user =>
            user.privilegeId.toLowerCase().includes(searchText.toLowerCase()) ||
            user.privilegeName.toLowerCase().includes(searchText.toLowerCase()) ||
            (typeof user.assignedTo === 'string'
                ? user.assignedTo.toLowerCase().includes(searchText.toLowerCase())
                : user.assignedTo.some(name => name.toLowerCase().includes(searchText.toLowerCase())))
        );

        setUsers(filteredUsers);
    };

    const toggleFormVisibility = () => {
        setFormVisible((prev) => !prev);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        // Add logic for handling form submission
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log(`${e.target.name}: ${e.target.value}`);
        // Add logic for handling input changes
    };

    return (
        <div className='w-full'>
            <Navbar />
            <Sidebar />

            <div className='ml-64 flex flex-col min-h-screen bg-blue-50 px-20 py-10'>
                <Title text='Privileges' />
                <Breadcrumbs />

                <div className="flex justify-between items-center mt-6 ml-2">
                    <ButtonText 
                        text="Assign Privileges" 
                        onClick={toggleFormVisibility} 
                    />
                </div>

                {isFormVisible && (
                    <div className="mt-8">
                        <NewPrivilegesAssignForm
                            userRoleId=""
                            userRoleName=""
                            status="Active"
                            createdDate=""
                            createdBy=""
                            onInputChange={handleInputChange}
                            onSubmit={handleFormSubmit}
                        />
                    </div>
                )}

                <div className='mt-8'>
                    <SubTitle text='Recently created' />
                    <div className="mt-6">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                    <PrivilegeTable users={users} />
                </div>
            </div>
        </div>
    );
};

export default ViewStaff;
