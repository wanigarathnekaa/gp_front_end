"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Navigation, SearchBar } from '@/components/index';
import { useState } from 'react';
import { usePathname } from 'next/navigation';


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

        <div className=' mt-12 ml-64 flex flex-col min-h-screen bg-[#D6D6FF] p-4'>
            <Title text='Registered Users'/>

            
            <Navigation links={links} pathname={pathname}/>

            <div className="flex items-center mb-4 mt-8 ml-8">
              <SearchBar onSearch={handleSearch}/>
            </div>

            <Table users ={users} type='lecturer'/>

        </div>
    </div>
  )
}

export default LecturerData;