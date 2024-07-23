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
    email: 'user2@example.com',
    phone: '1234567890',
    
  },
];

const EnrollLecturers = () => {
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

        <div className='flex flex-row gap-10 mt-8 ml-10 '>
          <Link href='/dashboard/users/enroll-new/EnrollIndividual'>
          <Card 
            title="Individual Enrollment"
            description="Enroll lecturers individually"
            icon={FaUser}
            wide = {true}
          />
          </Link>

          <Link href='/dashboard/users/enroll-new/BulkEnrollment'>
          <Card 
            title="Bulk Enrollment"
            description="Enroll lecturers as groups"
            icon={FaUsers}
            wide = {true}
          />
          </Link>

          
        </div>

        <div className='ml-14 mt-10'>
          <h4 className='text-xl font-semibold'>Enrollment history</h4>
        </div>

        <Table users={usersData} type='lecturer'/>
      </div>
    </div>
  )
}

export default EnrollLecturers