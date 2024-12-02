"use client";
import React, { useState, useEffect } from 'react'
import { Navbar, ExamSidebar, Title, Navigation,  SearchBar, ExaminationTable } from '@/components/index'
import { usePathname } from 'next/navigation';
import { getAllStudents } from '@/actions/studentDetails';

interface User {
  userId: string;
  userName: string;
  regNo: string;
  indexNo: string;
  phone: string;
  size: string;
  issuedDate: string;
  returnedDate?: string;
  status: string;
}

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

const History = () => {
    const pathname = usePathname();
    // console.log("pathname",pathname);

    const [users, setUsers] = useState<User[]>([]);
    const [historyUsers, setHistoryUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true); //Tracks whether data is being fetched.
    

    useEffect(() => {
      const fetchStudents = async() =>{
          try{
              const data = await getAllStudents();
              console.log("Fetched data:", data); 

              const now = new Date();
              const oneYearAgo = new Date();
              oneYearAgo.setFullYear(now.getFullYear() -1);


              const historyYearUsers = data.filter((user:User) => {
                  const issuedDate = new Date(user.issuedDate);
                  return issuedDate < oneYearAgo;

              });


              setUsers(data);
              setHistoryUsers(historyYearUsers);
              setLoading(false);

          } catch (error){
              console.error("Error fetching data:", error);
              setLoading(false);
          }
      };

      fetchStudents();

  }, []);

  const handleSearch =(searchText : string) => {
      const filteredUsers = historyUsers.filter(user =>

          user.userId.toLowerCase().includes(searchText.toLowerCase()) ||
          user.userName.toLowerCase().includes(searchText.toLowerCase()) ||
          user.regNo.toLowerCase().includes(searchText.toLowerCase()) ||
          user.indexNo.toLowerCase().includes(searchText.toLowerCase()) ||
          user.size.toLowerCase().includes(searchText.toLowerCase()) ||
          user.status.toLowerCase().includes(searchText.toLowerCase())||
          user.issuedDate.toLowerCase().includes(searchText.toLowerCase())
      );
  
      setHistoryUsers(filteredUsers);
  };


    return (
        <div className='w-full'>
            <Navbar/>
            <ExamSidebar/>

            <div className='ml-72 md:ml-64 lg:ml-72 bg-blue-50 flex flex-col min-h-screen'>
                <div className='ml-5 mt-20'>
                    <Title text='Student History'/>
                </div>
                
                <Navigation links={links} pathname={pathname}/>

                <div className="flex items-center mb-4 mt-4 ml-3 p-6 ">
                    <div className="flex space-x-4">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                </div>

                <div className='ml-3 px-6 mt-2'>
                    <ExaminationTable users={historyUsers}/>
                </div>
            </div>
        </div>
    
    )
}

export default History