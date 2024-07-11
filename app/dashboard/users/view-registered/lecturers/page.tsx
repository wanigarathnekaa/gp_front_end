"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Navigation, SearchBar } from '@/components';
import { useState } from 'react';


const usersData = [
    {
      userId: "1",
      userName : "John Doe",
      regNo: '2021CS100',
      email: 'user1@example.com',
      phone: '1234567890',
      
    },
    {
      userId: '2',
      userName : "kennedy Doe",
      regNo: '2021CS001',
      email: 'user1@example.com',
      phone: '1234567890',
      
    },

    {
      userId: '3',
      userName : "Michal Doe",
      regNo: '2021CS001',
      email: 'user1@example.com',
      phone: '1234567890',
      
    },
];

const LecturerData = () => {

  const [users, setUsers] = useState(usersData);

  const handleSearch = (searchTerm: string) => {
    const filteredUsers = usersData.filter(user =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setUsers(filteredUsers);
  };


  return (
    <div className='w-full'> 
        <Navbar/>
        <Sidebar/>

        <div className=' mt-14 ml-64 flex flex-col min-h-screen bg-[#D6D6FF] p-4'>
            <Title text='Registered Users'/>

            
            <Navigation/>

            <SearchBar onSearch={handleSearch}/>
            

            <Table users ={users} type='lecturer'/>

        </div>
    </div>
  )
}

export default LecturerData;