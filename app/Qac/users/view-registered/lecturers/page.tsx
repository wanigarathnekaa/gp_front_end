"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Navigation, SearchBar } from '@/components/index';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Breadcrumbs from '@/components/Breadcrumbs';


const usersData = [
    {
      userId: "1",
      userName : "John Doe",
      lecturerId:'1800947',
      email: 'user1@example.com',
      nic: '852234566234',
      phone: '0724646186',
      
    },
    {
      userId: '2',
      userName : "kennedy Doe",
      lecturerId:'1500947',
      email: 'user2@example.com',
      nic: '752234566234',
      phone: '0759746186',
      
    },

    {
      userId: '3',
      userName : "Michal Doe",
      lecturerId:'1900947',
      email: 'user3@example.com',
      nic: '782234566234',
      phone: '0780606186',
      
    },
];

const links =[

  {
    href: '/dashboard/users/view-registered/other',
    label: 'Staff'

  },

  {
    href: '/dashboard/users/view-registered/lecturers',
    label: 'Lecturers'
  },

  {
    href: '/dashboard/users/view-registered/students',
    label: 'Students'
  },
    

   
  
];

const LecturerData = () => {

  const pathname = usePathname();

  const [users, setUsers] = useState(usersData);

  const handleSearch = (searchTerm: string) => {
    const filteredUsers = usersData.filter(user =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lecturerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.nic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setUsers(filteredUsers);
  };


  return (
    <div className='w-full'> 
        <Navbar/>
        <Sidebar/>

        <div className=' ml-64 flex flex-col min-h-screen bg-blue-50 px-20 py-10'>  
            <Title text='Registered lecturers'/>
            <Breadcrumbs/>

            
            

            <div className="flex justify-between">
              <SearchBar onSearch={handleSearch}/>
              <Navigation links={links} pathname={pathname}/>
            </div>

            <div className="mt-0">
              <Table users ={users} type='lecturer'/>
            </div>
        </div>
      </div>
 
  )
}

export default LecturerData;