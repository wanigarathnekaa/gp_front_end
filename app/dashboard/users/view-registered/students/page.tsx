import React from 'react'
import { Sidebar, Navbar, Title, Table, Navigation } from '@/components';
import Link from 'next/link';

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
  },
  
];

const StudentsData = () => {
  

  return (
    <div className='w-full'>
      <Navbar/>
      <Sidebar/>

      <div className=' mt-14 ml-64 flex flex-col min-h-screen bg-[#D6D6FF] p-4'>
      <Title text='Registered Users' />
      <Navigation/>
      
      <Table users={usersData} type="student"/>

    </div>
    </div>
    
  )
}

export default StudentsData;