"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Card, Navigation, Calendar, TaskList } from   '@/components/index';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubTitle from '@/components/SubTitle';
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
        <div className='ml-64 flex flex-col min-h-screen bg-blue-50 px-20 py-10'> 
            <Title text='Enroll new students' />
            <div className="flex flex-row justify-between">
              <Breadcrumbs />

              <div className='mt-10'>
                <Navigation links={links} pathname={pathname}/>
              </div>
            </div>
            
            <div className="flex flex-row items-center">
              <div className="w-1/2 pr-4">
                <Link href="/dashboard/users/enroll-new/EnrollIndividual/student">
                  <Card
                    title="Individual Enrollment"
                    description="Enroll students individually"
                    icon={FaUser}
                    wide={true}
                  />
                </Link>
              </div>

              <div className="w-1/2 pr-2 pl-2">
                <Link href="/dashboard/users/enroll-new/BulkEnrollment">
                  <Card
                    title="Bulk Enrollment"
                    description="Enroll students as groups"
                    icon={FaUsers}
                    wide={true}
                  />
                </Link>
              </div>
          </div>

        <SubTitle text="Students enrollment history"/>

        <div>
          <Table users={usersData} type='student'/>
        </div>  
      </div>
      {/* <div className="w-1/4 p-4 bg-white shadow-md">
            <Calendar />
            <TaskList 
              tasks={['Task 1', 'Task 2', 'Task 3', 'Task 4']}
              icon = {FaRegClock} 
            />
          </div> */}
    </div>

  )
}

export default Students