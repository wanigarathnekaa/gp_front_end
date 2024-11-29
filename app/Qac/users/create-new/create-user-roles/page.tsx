"use client";
import React, { useState } from 'react';
import { Sidebar, Navbar, Title, RoleTable, SearchBar } from '@/components/index';
import ButtonText from '@/components/ButtonText';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewRoleCreationForm from '@/components/NewRoleCreation';
import SubTitle from '@/components/SubTitle';
import { usePathname } from 'next/navigation';
import { HiUserAdd } from "react-icons/hi";

const usersData = [
    {
        roleId: "1",
        roleName: "Post graduate head",
        status: 'Active',
        createdDate: '2024-07-01',
        createdBy: 'QAC'
    },
    {
        roleId: "2",
        roleName: "Undergraduate head",
        status: 'Active',
        createdDate: '2024-07-01',
        createdBy: 'QAC'
    },
    {
        roleId: "3",
        roleName: "Director",
        status: 'Active',
        createdDate: '2024-07-01',
        createdBy: 'QAC'
    },
];

const ViewStaff = () => {
    const pathname = usePathname();
    const [users, setUsers] = useState(usersData);
    const [isFormVisible, setFormVisible] = useState(false);

    const handleSearch = (searchText: string) => {
        const filteredUsers = usersData.filter(user =>
            user.roleId.toLowerCase().includes(searchText.toLowerCase()) ||
            user.roleName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.status.toLowerCase().includes(searchText.toLowerCase()) ||
            user.createdDate.toLowerCase().includes(searchText.toLowerCase()) ||
            user.createdBy.toLowerCase().includes(searchText.toLowerCase())
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
                <Title text='User roles' />
                <Breadcrumbs />

                <div className="flex justify-between items-center mt-6 ml-2">
                    <ButtonText 
                        text="Create new user role" 
                        onClick={toggleFormVisibility} 
                    />
                </div>

                {isFormVisible && (
                    <div className="mt-8">
                        <NewRoleCreationForm
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
                    <RoleTable users={users} />
                </div>
            </div>
        </div>
    );
};

export default ViewStaff;
