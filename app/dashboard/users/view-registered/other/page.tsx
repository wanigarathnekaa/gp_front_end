"use client";
import React, { useState } from 'react'
import { Sidebar, Navbar, Title, Table, Navigation, SearchBar } from '@/components';
import { usePathname } from 'next/navigation';


const usersData = [
    {
      userId: "1",
      userName : "John Doe",
      nic:'2345678967',
      staffId:'2100947',
      email: 'user1@example.com',
      phone: '1234567890',
      
      
    },
    {
      userId: '2',
      userName : "John Doe",
      staffId:'2109947',
      nic:'2345678997',
      email: 'user1@example.com',
      phone: '1234567890',
      
      
    },

    {
        userId: '3',
        userName : "Jack Hendersen",
        staffId:'2200947',
        nic:'2358778967',
        email: 'user1@example.com',
        phone: '1234567890',
        
        
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

    <div className=' mt-12 ml-64 flex flex-col min-h-screen bg-[#D6D6FF] p-4'>
        <Title text='Registered Users'/>

        <Navigation links={links} pathname={pathname}/>

        <div className="flex items-center mb-4 mt-8 ml-12">
              <SearchBar onSearch={handleSearch}/>
        </div>

        <Table users ={users} type='other'/>

    </div>
</div>
)
  
}

export default OtherData