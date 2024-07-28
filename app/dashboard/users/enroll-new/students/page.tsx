"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Card, Navigation } from   '@/components/index';
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
    nic:'6456788765',
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
    nic:'3456788765',
    year: '2nd Year',
    type:"Graduate",
  },
]

const Students = () => {
  const pathname = usePathname();
  const links =[

    {
      href: '/dashboard/users/enroll-new/staff',
      label: 'Staff'

    },

    {
      href: '/dashboard/users/enroll-new/lecturers',
      label: 'Lecturers'
    },

    {
      href: '/dashboard/users/enroll-new/students',
      label: 'Students'
    }
    
    
  ]
  return (
    <div className='w-full'>
      <Navbar/>
      <Sidebar/>

      <div className=' mt-14 ml-64  min-h-screen bg-[#D6D6FF] p-4'>
        <Title text='Enroll new users' />

        <>
          <Navigation links={links} pathname={pathname}/>
        </>

        <div className='flex flex-row gap-10 mt-8 ml-5 '>
          <Link href='/dashboard/users/enroll-new/EnrollIndividual'>
          <Card 
            title="Individual Enrollment"
            description="Enroll students individually"
            icon={FaUser}
            wide = {true}
          />
          </Link>


          <Link href='/dashboard/users/enroll-new/BulkEnrollment'>
          <Card 
            title="Bulk Enrollment"
            description="Enroll students as groups"
            icon={FaUsers}
            wide = {true}
          />
          </Link>
        </div>

        <div className='ml-8 mt-10'>
          <h4 className='text-xl font-semibold'>Enrollment history</h4>
        </div>

        <div className='mt-8'>
          <Table users={usersData} type='student'/>
        </div>
      </div>
    </div>
  )
}

export default Students