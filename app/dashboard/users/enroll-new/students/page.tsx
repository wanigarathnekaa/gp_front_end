"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Card, Navigation } from   '@/components';
import { FaUser, FaUsers} from 'react-icons/fa'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
]

const Students = () => {
  const pathname = usePathname();
  return (
    <div className='w-full'>
      <Navbar/>
      <Sidebar/>

      <div className=' mt-14 ml-64  min-h-screen bg-[#D6D6FF] p-4'>
        <Title text='Enroll new users' />

        <>
          <Navigation/>
        </>

        <div className='flex flex-row gap-10 mt-8 ml-10 '>
          <Card 
            title="Individual Enrollment"
            description="Enroll students individually"
            icon={FaUser}
            wide = {true}
          />

          <Card 
            title="Bulk Enrollment"
            description="Enroll students as groups"
            icon={FaUsers}
            wide = {true}
          />
        </div>

        <div className='ml-10 mt-10'>
          <h4 className='text-xl font-semibold'>Enrollment history</h4>
        </div>

        <Table users={usersData} type='student'/>
      </div>
    </div>
  )
}

export default Students