"use client";
import React, { useState } from 'react'
import { Sidebar, Navbar, Title, RoleTable, SearchBar} from '@/components/index';
import ButtonText from '@/components/ButtonText';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewRoleCreationForm from '@/components/NewRoleCreation';
import SubTitle from '@/components/SubTitle';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiUserAdd } from "react-icons/hi";

const usersData = [
    {
      roleId: "1",
      roleName : "Post graduate head",
      status: 'Active',
      createdDate: '2024-07-01',
      createdBy: 'QAC'
      
    },
    {

        roleId: "2",
        roleName : "Undergraduate head",
        status: 'Active',
        createdDate: '2024-07-01',
        createdBy: 'QAC'
      
    },

    {
        roleId: "3",
        roleName : "Director",
        status: 'Active',
        createdDate: '2024-07-01',
        createdBy: 'QAC'
            
      },
];

const ViewStaff = () => {

    const pathname = usePathname();


    const [users, setUsers] = useState(usersData);

    const handleSearch =(searchText : string) => {
        const filteredUsers = usersData.filter(user =>
        user.roleId.toLowerCase().includes(searchText.toLowerCase()) ||
        user.roleName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.status.toLowerCase().includes(searchText.toLowerCase()) ||
        user.createdDate.toLowerCase().includes(searchText.toLowerCase()) ||
        user.createdBy.toLowerCase().includes(searchText.toLowerCase())
        );

        setUsers(filteredUsers);
    };

    return (
        <div className='w-full'> 
        <Navbar/>
        <Sidebar/>

        <div className=' mt-12 ml-64 flex flex-col min-h-screen bg-[#EEF2FF] px-20 py-20'>
            <Title text='User roles'/>
            <Breadcrumbs />

            <div className="items-start justify-start">
                <NewRoleCreationForm/>
            </div>
            
            

            
            
            <div className='mt-5'>
                <SubTitle text='Recently created' />
                <div className="mt-6">
                    <SearchBar onSearch={handleSearch}/>
                </div>
                <RoleTable users ={users}/>
            </div>

        </div>
</div>
    )
}

export default ViewStaff