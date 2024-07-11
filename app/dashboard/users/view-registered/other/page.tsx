import React from 'react'
import { Sidebar, Navbar, Title, Table, Navigation } from '@/components';


const usersData = [
    {
      userId: "1",
      userName : "John Doe",
      regNo: '2021CS100',
      email: 'user1@example.com',
      phone: '1234567890',
      role: "Director"
      
    },
    {
      userId: '2',
      userName : "John Doe",
      regNo: '2021CS001',
      email: 'user1@example.com',
      phone: '1234567890',
      role:"Post Graduate Head"
      
    },

    {
        userId: '3',
        userName : "Jack Hendersen",
        regNo: '2021CS001',
        email: 'user1@example.com',
        phone: '1234567890',
        role:"Undergraduate Head"
        
      },
];


const OtherData = () => {
  return (
    <div className='w-full'> 
    <Navbar/>
    <Sidebar/>

    <div className=' mt-14 ml-64 flex flex-col min-h-screen bg-[#D6D6FF] p-4'>
        <Title text='Registered Users'/>

        <Navigation/>

        <Table users ={usersData} type='other'/>

    </div>
</div>
)
  
}

export default OtherData