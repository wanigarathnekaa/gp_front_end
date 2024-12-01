import { Navbar, ExamSidebar, CloakCountCard, ExaminationTable } from '@/components/index'
import React from 'react'

const users = [
  {
    userId: "1",
    userName : "John Doe",
    regNo: '2021CS100',
    indexNo: '2100798',
    size: 'Medium',
    phone: '0724646186',
    issuedDate:'2024-05-01',
    returnedDate:'2024-08-01',
    status: 'Returned'
  },
  {
    userId: '2',
    userName : "Ann Fernando",
    regNo: '2021CS001',
    indexNo: '21345001',
    size: 'Large',
    phone: '0762341566',
    issuedDate:'2024-05-02',
    status: 'Issued'
  },

  {
    userId: '3',
    userName : "Alex Silva",
    regNo: '2021CS002',
    indexNo: '21385001',
    phone: '0765456789',
    size: 'Small',
    issuedDate:'2024-05-01',
    status: 'Issued'
  },

  {
    userId: '4',
    userName : 'James Perera',
    regNo: '2020CS006',
    indexNo: '20345001',
    phone: '0743217890',
    size: 'Medium',
    issuedDate:'2024-05-01',
    returnedDate:'2024-08-05',
    status: 'Returned'
  },
]

const ExamDashboard = () => {
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
              countSmall={100} 
              countMedium={200} 
              countLarge={300} 
              description='Total number of cloaks available'
              /> 

            <CloakCountCard
              title='Cloaks Issued' 
              countSmall={60} 
              countMedium={120} 
              countLarge={250} 
              description='Total cloaks issued'
            /> 

           <CloakCountCard
              title='Cloaks Returned'
              countSmall={40}
              countMedium={50}
              countLarge={150}
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