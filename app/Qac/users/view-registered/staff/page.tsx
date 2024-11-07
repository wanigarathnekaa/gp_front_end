"use client";
import React, { useState } from 'react'
import { Sidebar, Navbar, Title, Table, Navigation, SearchBar } from '@/components/index';
import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';


const usersData = [
  {
    userId: "1",
    userName : "Alice Johnson",
    nic:'1234567890',
    staffId:'3101947',
    email: 'alice@example.com',
    phone: '9876543210',
  },
  {
    userId: '2',
    userName : "Bob Smith",
    staffId:'3102947',
    nic:'0987654321',
    email: 'bob@example.com',
    phone: '8765432109',
  },
  {
      userId: '3',
      userName : "Catherine Lee",
      staffId:'3103947',
      nic:'1122334455',
      email: 'catherine@example.com',
      phone: '7654321098',
    },
];

const links=[

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

]


const OtherData = () => {
  const pathname = usePathname();


  const [users, setUsers] = useState(usersData);

  const handleSearch =(searchText : string) => {
    const filteredUsers = usersData.filter(user =>
      user.userId.toLowerCase().includes(searchText.toLowerCase()) ||
      user.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      user.staffId.toLowerCase().includes(searchText.toLowerCase()) ||
      user.nic.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase())
     
    );

    setUsers(filteredUsers);
  };

  return (
    <div className='w-full'> 
    <Navbar/>
    <Sidebar/>

    <div className='ml-64 flex flex-col min-h-screen bg-blue-50 px-20 py-10'>  
        <Title text='Registered staff members'/>
        <Breadcrumbs/>

        <div className="flex justify-between">
          <SearchBar onSearch={handleSearch}/>
          <Navigation links={links} pathname={pathname}/>
        </div>
        
              

        <Table users ={users} type='other'/>

    </div>
</div>
)
  
}

export default OtherData