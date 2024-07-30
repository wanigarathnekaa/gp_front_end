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
    lecturerId:'1800947',
    email: 'user1@example.com',
    nic: '852234566234',
    phone: '0724646186',
    
  },
  {
    userId: '2',
    userName : "kennedy Doe",
    lecturerId:'1500947',
    email: 'user2@example.com',
    nic: '752234566234',
    phone: '0759746186',
    
  },

  {
    userId: '3',
    userName : "Michal Doe",
    lecturerId:'1900947',
    email: 'user3@example.com',
    nic: '782234566234',
    phone: '0780606186',
    
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

        <div className='flex flex-row gap-10 mt-8 ml-5 '>
          <Link href='/dashboard/users/enroll-new/EnrollIndividual/lecturer'>
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

        <div className='ml-8 mt-10'>
          <h4 className='text-xl font-semibold'>Enrollment history</h4>
        </div>

        <Table users={usersData} type='lecturer'/>
      </div>
    </div>
  )
}

export default EnrollLecturers