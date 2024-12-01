"use client";
import React, { useState } from 'react';
import { Sidebar, Navbar, Title, RoleTable, SearchBar } from '@/components/index';
import ButtonText from '@/components/ButtonText';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubTitle from '@/components/SubTitle';
import { usePathname } from 'next/navigation';
import NewPrivilegesAssignForm from '@/components/NewPrivilegesAssignForm';
import PrivilegeTable from '@/components/PrivilegeTable';
import { addPrivilegedUser } from '@/actions/roleCreation';

interface User {
    roleName: string;
    name: string;
    email: string;
    nic: string;
}

const ViewStaff = () => {
    const pathname = usePathname();
    const [users, setUsers] = useState<User[]>([]);
    const [isFormVisible, setFormVisible] = useState(false);

    const handleSearch = (searchText: string) => {
        
    };

    const toggleFormVisibility = () => {
        setFormVisible((prev) => !prev);
    };

    const handleFormSubmit = async (formData: {
        selectedRole: string;
        name: string;
        email: string;
        nic: string;
    }) => {
        try {
            const user = {
                roleName: formData.selectedRole,
                name: formData.name,
                email: formData.email,
                nic: formData.nic,
            };

            const response = await addPrivilegedUser(user); // API call to add the user
            console.log("Privileged user added successfully:", response);

            // Update state with the new user
            setUsers((prevUsers) => [...prevUsers, response]);

            alert("User account created successfully!");
        } catch (error) {
            console.error("Error creating user account:", error);
            alert("Failed to create user account. Please try again.");
        }
    };
    

    return (
        <div className='w-full'>
            <Navbar />
            <Sidebar />

            <div className='ml-64 flex flex-col min-h-screen bg-blue-50 px-20 py-10'>
                <Title text='Create new user account' />
                <Breadcrumbs />

                <div className="flex justify-between items-center mt-6 ml-2">
                    <ButtonText 
                        text="Create user account" 
                        onClick={toggleFormVisibility} 
                    />
                </div>

                {isFormVisible && (
                    <div className="mt-8">
                        <NewPrivilegesAssignForm
                            onSubmit={handleFormSubmit}
                        />
                    </div>
                )}

                <div className='mt-8'>
                    <SubTitle text='Recently created' />
                    <div className="mt-6">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                    {/* <PrivilegeTable users={users} /> */}
                </div>
            </div>
        </div>
    );
};

export default ViewStaff;
