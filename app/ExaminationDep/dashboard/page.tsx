"use client";
import { useEffect, useState } from 'react';
import { Navbar, ExamSidebar, CloakCountCard, ExaminationTable } from '@/components/index'
import React from 'react'
import { getAllStudents } from '@/actions/graduateStudents'
import { getCloakCount } from '@/actions/Cloak';

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



const ExamDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [cloakCount, setCloakCount] = useState({
    totalSmall:0,
    totalMedium:0,
    totalLarge:0,

  });

  const [cloakIssued, setCloakIssued] = useState({
    totalSmall:0,
    totalMedium:0,
    totalLarge:0,
  });

  const [cloakReturned, setCloakReturned] = useState({
    totalSmall:0,
    totalMedium:0,
    totalLarge:0,
  });

  useEffect(() =>{
    const fetchStudents = async() =>{
      try{
        const data = await getAllStudents();
        console.log("Fetched data:", data);

        setUsers(data);

        const issued ={
          totalSmall: data.filter((user : User) => user.size==="Small" && user.status === "Issued").length,
          totalMedium: data.filter((user : User) => user.size==="Medium" && user.status === "Issued").length,
          totalLarge: data.filter((user : User) => user.size==="Large" && user.status === "Issued").length,
        }

        const returned ={
          totalSmall: data.filter((user : User) => user.size==="Small" && user.status === "Returned").length,
          totalMedium: data.filter((user : User) => user.size==="Medium" && user.status === "Returned").length,
          totalLarge: data.filter((user : User) => user.size==="Large" && user.status === "Returned").length,
        }

        console.log("Issued:", issued);
        console.log("Returned:", returned);

        setCloakIssued(issued);
        setCloakReturned(returned);
        setLoading(false);

      } catch (error){
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    const fetchCloakCount = async() =>{
      try{
        const counts = await getCloakCount();
        console.log("Fetched cloak count:", counts);

        setCloakCount({
          totalSmall: counts.smallCount,
          totalMedium: counts.mediumCount,
          totalLarge: counts.largeCount,
        });
        setLoading(false);
      } catch (error){
        console.error("Error fetching cloak count:", error);
        setLoading(false);
      }
    };

    fetchCloakCount();
    fetchStudents();
    

  }, []);
  return (

    <div className='w-full'>
      <Navbar/>
      <ExamSidebar/>

      <div className='ml-72 md:ml-64 lg:ml-72 bg-blue-50 flex flex-col min-h-screen'>
        <div className='mt-10 p-6'>
          <h1 className='ml-3 text-black text-5xl md:text-4xl font-bold '>Hi there!</h1>
          <h2 className='font-normal ml-3 mt-5 text-4xl md:text-3xl '>Welcome to your dashboard</h2>
        </div>

        <div className=' mt-8 '>
          <h2 className='text-2xl font-semibold text-gray-600 ml-3  px-6'>Cloak Distribution</h2>

          <div className='p-4 mt-3 ml-3  grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>

            <CloakCountCard 
              title='Total Cloaks' 
              countSmall={cloakCount.totalSmall} 
              countMedium={cloakCount.totalMedium} 
              countLarge={cloakCount.totalLarge} 
              description='Total number of cloaks available'
              /> 

            <CloakCountCard
              title='Cloaks Issued' 
              countSmall={cloakIssued.totalSmall} 
              countMedium={cloakIssued.totalMedium} 
              countLarge={cloakIssued.totalLarge} 
              description='Total cloaks issued'
            /> 

           <CloakCountCard
              title='Cloaks Returned'
              countSmall={cloakReturned.totalSmall}
              countMedium={cloakReturned.totalMedium}
              countLarge={cloakReturned.totalLarge}
              description='Total number of cloaks returned'
           />

          </div>

          

        </div>

        <div className='mt-8'>
          <h2 className='text-2xl font-semibold text-gray-600 ml-3  px-6'>Student Details</h2>

          <div className='ml-3 px-6 mt-8'>
            <ExaminationTable users={users}/>

          </div>
          
        </div>

      </div>

    </div>
  )
}

export default ExamDashboard