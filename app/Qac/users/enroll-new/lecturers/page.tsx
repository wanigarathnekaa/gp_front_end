"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Card, Navigation } from   '@/components/index';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubTitle from '@/components/SubTitle';
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
      href: '/Qac/users/enroll-new/staff',
      label: 'Staff'

    },

    {
      href: '/Qac/users/enroll-new/lecturers',
      label: 'Lecturers'
    },

    {
      href: '/Qac/users/enroll-new/students',
      label: 'Students'
    }
    
    
  ]
  return (
    <div className='w-full'>
      <Navbar/>
      <Sidebar/>

      <div className='ml-64 flex flex-col min-h-screen bg-blue-50 px-20 py-20'> 
        <Title text='Enroll new lecturers' />
        <div className="flex flex-row justify-between">
          <Breadcrumbs />

          <>
            <Navigation links={links} pathname={pathname}/>
          </>
        </div>

        <div className="flex flex-row items-center">
          <div className="w-1/2 pr-4">
            <Link href='/dashboard/users/enroll-new/EnrollIndividual/lecturer'>
              <Card 
                title="Individual Enrollment"
                description="Enroll lecturers individually"
                icon={FaUser}
                wide = {true}
              />
            </Link>
          </div>

          <div className="w-1/2 pr-2 pl-2">
            <Link href='/dashboard/users/enroll-new/BulkEnrollment'>
              <Card 
                title="Bulk Enrollment"
                description="Enroll lecturers as groups"
                icon={FaUsers}
                wide = {true}
              />
            </Link>
          </div>
        </div>

        <SubTitle text='Lecturers enrollment history'/>

        <div>
        <Table users={usersData} type='lecturer'/>
        </div>
      </div>
    </div>
  )
}

export default EnrollLecturers