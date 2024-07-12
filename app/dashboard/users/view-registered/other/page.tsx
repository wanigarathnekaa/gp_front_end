"use client";
import React, { useState } from 'react'
import { Sidebar, Navbar, Title, Table, Navigation, SearchBar } from '@/components';


const usersData = [
    {
      userId: "1",
      userName : "John Doe",
      regNo: '2021CS100',
      email: 'user1@example.com',
      phone: '1234567890',
      role: "Director"
      
    },
    {
      userId: '2',
      userName : "John Doe",
      regNo: '2021CS001',
      email: 'user1@example.com',
      phone: '1234567890',
      role:"Post Graduate Head"
      
    },

    {
        userId: '3',
        userName : "Jack Hendersen",
        regNo: '2021CS001',
        email: 'user1@example.com',
        phone: '1234567890',
        role:"Undergraduate Head"
        
      },
];


const OtherData = () => {


  const [users, setUsers] = useState(usersData);

  const handleSearch =(searchText : string) => {
    const filteredUsers = usersData.filter(user =>
      user.userId.toLowerCase().includes(searchText.toLowerCase()) ||
      user.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      user.regNo.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.role.toLowerCase().includes(searchText.toLowerCase())
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

        <div className="flex items-center mb-4 mt-8 ml-12">
              <SearchBar onSearch={handleSearch}/>
        </div>

        <Table users ={users} type='other'/>

    </div>
</div>
)
  
}

export default OtherData