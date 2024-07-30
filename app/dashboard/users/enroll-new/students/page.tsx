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
    phone: '0724646186',
    nic: '982234566234',
    year: '2nd Year',
    type :"Postgraduate"
  },
  {
    userId: '2',
    userName : "Ann Fernando",
    regNo: '2021CS001',
    indexNo: 21345001,
    email: 'user2@example.com',
    phone: '0762341566',
    nic: '20179568445',
    year: '2nd Year',
    type:"Graduate",
  },

  {
    userId: '3',
    userName : "Alex Silva",
    regNo: '2021CS002',
    indexNo: 21385001,
    email: 'user3@example.com',
    phone: '0765456789',
    nic: '98704567890',
    year: '2nd Year',
    type: 'Undergraduate'
  },

  {
    userId: '4',
    userName : 'James Perera',
    regNo: '2020CS006',
    indexNo: 20345001,
    email: 'user4@example.com',
    phone: '0743217890',
    nic: '20025438796',
    year: '2nd Year',
    type:"Undergraduate",
  },
  
];



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
          <Link href='/dashboard/users/enroll-new/EnrollIndividual/student'>
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

        <div className='ml-10 mt-10'>
          <h4 className='text-xl font-semibold text-gray-800'>Enrollment history</h4>
        </div>

        <div className='mt-8'>
          <Table users={usersData} type='student'/>
        </div>
      </div>
    </div>
  )
}

export default Students