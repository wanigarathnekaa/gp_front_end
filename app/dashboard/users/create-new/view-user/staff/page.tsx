"use client";
import React, { useState } from 'react'
import { Sidebar, Navbar, Title, RoleTable, Navigation, SearchBar,Card, SubmitButton } from '@/components/index';
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

        <div className=' mt-12 ml-64 flex flex-col min-h-screen bg-[#EEF2FF] p-4'>
            <Title text='User roles'/>

            <div className='flex justify-between items-center mt-10'>

              <div className=" ml-8">
                    <SearchBar onSearch={handleSearch}/>
              </div>

              <div className='flex justify-end mr-10'>
                <Link href='/dashboard/users/create-new/create-user-roles/staff'>
                  <SubmitButton text='Create new user role' />
                </Link>

              
              </div>

              
            </div>
            
            <div className='mt-10'>
              <RoleTable users ={users}/>
            </div>

        </div>
</div>
    )
}

export default ViewStaff