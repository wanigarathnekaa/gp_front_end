"use client";
import React, { useState } from 'react'
import { Sidebar, Navbar, Title, Table, Navigation, Dropdown, SearchBar } from '@/components';


const usersData = [
  {
    userId: "1",
    userName : "John Doe",
    regNo: '2021CS100',
    indexNo: 2100798,
    email: 'user1@example.com',
    phone: '1234567890',
    fixedLine: '0987654321',
    year: '2nd Year',
    type :"Postgraduate"
  },
  {
    userId: '2',
    userName : "John Doe",
    regNo: '2021CS001',
    indexNo: 21345001,
    email: 'user1@example.com',
    phone: '1234567890',
    fixedLine: '0987654321',
    year: '2nd Year',
    type:"Graduate",
  },

  {
    userId: '2',
    userName : "John Doe",
    regNo: '2021CS001',
    indexNo: 21345001,
    email: 'user1@example.com',
    phone: '1234567890',
    fixedLine: '0987654321',
    year: '2nd Year',
    type: 'Undergraduate'
  },

  {
    userId: '2',
    userName : "John Doe",
    regNo: '2021CS001',
    indexNo: 21345001,
    email: 'user1@example.com',
    phone: '1234567890',
    fixedLine: '0987654321',
    year: '2nd Year',
    type:"Undergraduate",
  },
  
];

const StudentsData = () => {

  const [selectedCategory, setSelectedCategory] = useState("Undergraduates");

  const handleSelect = (selectedOption : string) => {
    setSelectedCategory(selectedOption);
  };

  const [users, setUsers] = useState(usersData);

  const handleSearch = (searchTerm: string) => {
    const filteredUsers = usersData.filter(user =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setUsers(filteredUsers);
  };
  

  return (
    <div className='w-full'>
      <Navbar/>
      <Sidebar/>

      <div className=' mt-14 ml-64 flex flex-col min-h-screen bg-[#D6D6FF] p-4'>
      <Title text='Registered Users' />
      <Navigation/>

      <div className='flex items-center justify-start mt-8 mb-4 ml-16 gap-14'>

        <SearchBar onSearch={handleSearch}/>
        <Dropdown 
          options={['Undergraduates', 'Postgraduates', 'Graduates']}
          onSelect={handleSelect}
        />

        <Dropdown
          options={["1st Year", "2nd Year", "3rd Year", "4th Year"]}
          onSelect={handleSelect}
        />

        
      </div>
      
      <Table users={users} type="student"/>

    </div>
    </div>
    
  )
}

export default StudentsData;