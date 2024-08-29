"use client";
import React, { useState } from 'react'
import { Navbar, ExamSidebar, Title, Navigation,  SearchBar, ExaminationTable } from '@/components/index'
import { usePathname } from 'next/navigation';


const links=[
    {
        href: '/ExaminationDep/Students/details',
        label: 'home'
    
      },
    
      
      {
        href: '/ExaminationDep/Students/history',
        label: 'History'
      },
];

const usersData = [
    {
      userId: "1",
      userName : "John Doe",
      regNo: '2021CS100',
      indexNo: '2100798',
      size: 'Medium',
      phone: '0724646186',
      issuedDate:'2023-05-01',
      returnedDate:'2023-08-01',
      status: 'Returned'
    },
    {
      userId: '2',
      userName : "Ann Fernando",
      regNo: '2021CS001',
      indexNo: '21345001',
      size: 'Large',
      phone: '0762341566',
      issuedDate:'2023-05-02',
      returnedDate:'2023-10-02',
      status: 'Returned'
    },
  
    {
      userId: '3',
      userName : "Alex Silva",
      regNo: '2021CS002',
      indexNo: '21385001',
      phone: '0765456789',
      size: 'Small',
      issuedDate:'2024-05-08',
      returnedDate:'2023-10-02',
      status: 'Returned'
    },
  
    {
      userId: '4',
      userName : 'James Perera',
      regNo: '2020CS006',
      indexNo: '20345001',
      phone: '0743217890',
      size: 'Medium',
      issuedDate:'2022-05-01',
      returnedDate:'2022-08-05',
      status: 'Returned'
    },
  ];

const History = () => {
    const pathname = usePathname();
    // console.log("pathname",pathname);

    const [users, setUsers] = useState(usersData);

    const handleSearch =(searchText : string) => {
        const filteredUsers = usersData.filter(user =>
            user.userId.toLowerCase().includes(searchText.toLowerCase()) ||
            user.userName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.regNo.toLowerCase().includes(searchText.toLowerCase()) ||
            user.indexNo.toLowerCase().includes(searchText.toLowerCase()) ||
            user.size.toLowerCase().includes(searchText.toLowerCase()) ||
            user.status.toLowerCase().includes(searchText.toLowerCase())||
            user.issuedDate.toLowerCase().includes(searchText.toLowerCase()) ||
            user.returnedDate.toLowerCase().includes(searchText.toLowerCase())
            
        );
    
        setUsers(filteredUsers);
    };

    return (
        <div className='w-full'>
            <Navbar/>
            <ExamSidebar/>

            <div className='mt-12 ml-72 md:ml-64 lg:ml-72 bg-[#EEF2FF] flex flex-col min-h-screen'>
                <div className='ml-3 mt-8'>
                    <Title text='Student History'/>
                </div>
                
                <Navigation links={links} pathname={pathname}/>

                <div className="flex items-center mb-4 mt-4 ml-3 p-6 ">
                    <div className="flex space-x-4">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                </div>

                <div className='ml-3 px-6 mt-2'>
                    <ExaminationTable users={users}/>
                </div>
            </div>
        </div>
    
    )
}

export default History