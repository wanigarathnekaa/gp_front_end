"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Card, Navigation, Calendar, TaskList } from   '@/components/index';
import { FaUser, FaUsers, FaRegClock} from 'react-icons/fa'; 
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

      {/* <div className=' mt-14 ml-64  min-h-screen bg-[#EEF2FF] p-4 '> */}
        {/* <Title text='Enroll new users' /> */}
        <div className="mt-12 ml-64 flex flex-row min-h-screen">
          <div className="w-3/4 px-20 py-20  bg-[#EEF2FF]">
            <div className="text-4xl font-bold mb-2">
              <h1 className='mb-10 ml-3 text-black '>Enroll new users</h1>
            </div>

        <>
          <Navigation links={links} pathname={pathname}/>
        </>

        <div className="flex flex-row justify-between">
        <div className='flex flex-row mt-8'>
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
        </div>

        <div className='mt-10 mb-5  ml-3'>
          <h4 className='text-xl font-semibold text-gray-800'>Enrollment history</h4>
        </div>

        <div className='mt-8'>
          <Table users={usersData} type='student'/>
        </div>  
      </div>
      <div className="w-1/4 p-4 bg-white shadow-md">
            <Calendar />
            <TaskList 
              tasks={['Task 1', 'Task 2', 'Task 3', 'Task 4']}
              icon = {FaRegClock} 
            />
          </div>
    </div>
    </div>
  )
}

export default Students