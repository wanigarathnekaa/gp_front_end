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
      staffId:'234567',
      email: 'user1@example.com',
      phone: '1234567890',
      nic: '1234567890V',
      
    },
    {
      userId: '2',
      userName : "John Doe",
      staffId:'235567',
      email: 'user1@example.com',
      phone: '1234567890',
      nic: '1234667890V',
      
      
    },

    {
        userId: '3',
        userName : "Jack Hendersen",
        staffId:'284567',
        email: 'user1@example.com',
        phone: '1234567890',
        nic: '8134567890V',
        
        
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
            <Link href='/dashboard/users/enroll-new/EnrollIndividual'>
            <Card 
              title="Individual Enrollment"
              description="Enroll staff member"
              icon={FaUser}
              wide = {true}
            />
            </Link>
  
           
          </div>
  
          <div className='ml-8 mt-10'>
            <h4 className='text-xl font-semibold'>Enrollment history</h4>
          </div>

          <div className='mt-8'>
            <Table users={usersData} type='other'/>

          </div>
          
        </div>
      </div>
    )
  }
  
  export default Students