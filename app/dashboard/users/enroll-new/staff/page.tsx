"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Card, Navigation } from '@/components/index';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubTitle from '@/components/SubTitle';
import { FaUser, FaUsers} from 'react-icons/fa'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const usersData = [
  {
    userId: "1",
    userName : "Alice Johnson",
    nic:'1234567890',
    staffId:'3101947',
    email: 'alice@example.com',
    phone: '9876543210',
  },
  {
    userId: '2',
    userName : "Bob Smith",
    staffId:'3102947',
    nic:'0987654321',
    email: 'bob@example.com',
    phone: '8765432109',
  },
  {
      userId: '3',
      userName : "Catherine Lee",
      staffId:'3103947',
      nic:'1122334455',
      email: 'catherine@example.com',
      phone: '7654321098',
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
  
        <div className=' mt-12 ml-64 flex flex-col min-h-screen bg-[#EEF2FF] px-20 py-20'> 
          <Title text='Enroll new staff members' />
          <div className="flex flex-row justify-between">
            <Breadcrumbs />
  
            <>
              <Navigation links={links} pathname={pathname}/>
            </>
          </div>
  
          <div className="flex flex-row items-center">
            <div className="w-1/2 pr-4">
              <Link href='/dashboard/users/enroll-new/EnrollIndividual/other'>
                <Card 
                  title="Individual Enrollment"
                  description="Enroll staff member"
                  icon={FaUser}
                  wide = {true}
                />
              </Link>
            </div>
            </div>
  
          <SubTitle text="Staff members enrollment history"/>

          <div>
            <Table users={usersData} type='other'/>
          </div>
          
        </div>
      </div>
    )
  }
  
  export default Students