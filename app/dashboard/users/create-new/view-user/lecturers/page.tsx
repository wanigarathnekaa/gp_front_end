"use client";
import React, { useState } from 'react'
import { Sidebar, Navbar, Title, RoleTable, Navigation, SearchBar } from '@/components/index';
import Breadcrumbs from '@/components/Breadcrumbs';
import { usePathname } from 'next/navigation';

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

const links=[

  {
    href: '/dashboard/users/create-new/view-user/staff',
    label: 'Staff'

  },

  
  {
    href: '/dashboard/users/create-new/view-user/lecturers',
    label: 'Lecturers'
  },

  {
    href: '/dashboard/users/create-new/view-user/students',
    label: 'Students'
  },

]

const ViewLecturer = () => {

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

        <div className=' mt-14 ml-64 flex flex-col min-h-screen bg-[#EEF2FF] p-4'>
            <Title text='User roles'/>
            <Breadcrumbs/>

            <Navigation links={links} pathname={pathname}/>

            <div className="flex items-center mb-4 mt-8 ml-12">
                <SearchBar onSearch={handleSearch}/>
            </div>


            <div className='mt-8 ml-8'>
              <RoleTable users ={users}/>
            </div>

        </div>
</div>
    )
}

export default ViewLecturer