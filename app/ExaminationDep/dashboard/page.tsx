import React from 'react';
import { Navbar, ExamSidebar, CloakCountCard, ExaminationTable } from '@/components/index';

const sampleUsers = [
  { userId: '1', userName: 'John Doe', regNo: '1001', indexNo: '2001', phone: '1234567890',size: 'small', status: 'Active' },
  { userId: '2', userName: 'Jane Smith', regNo: '1002', indexNo: '2002', phone: '0987654321',size: 'large', status: 'Inactive' },
  { userId: '3', userName: 'Kamala Haris', regNo: '1003', indexNo: '2003', phone: '0987654331',size: 'medium', status: 'Inactive' },
  // Add more user data as needed
];

const Page: React.FC = () => {
  return (
    <div className='bg-[#D6D6FF] min-h-screen'>
      <Navbar />
      <ExamSidebar />

      <div className='pl-96 pt-24'>
        <h1 className='text-3xl font-bold'>Examination Department Dashboard</h1>
      </div>

      <div className='flex flex-row justify-center pl-64 mt-16 space-x-4'>
        <CloakCountCard 
          title='Total Cloaks' 
          countSmall={100}
          countMedium={200}
          countLarge={300}
          description='Total number of cloaks in the system' 
          wide 
        />
        
        <CloakCountCard 
          title='Cloaks Issued' 
          countSmall={150}
          countMedium={250}
          countLarge={350}
          description='Total number of cloaks in the system' 
          wide 
        />
        
        <CloakCountCard 
          title='Cloaks Returned' 
          countSmall={130}
          countMedium={230}
          countLarge={330}
          description='Total number of cloaks in the system' 
          wide 
        />
      </div>

      <div className='flex flex-row justify-between pl-72 pr-24 mt-8'>
        <h2 className='font-bold'>Student details</h2>

        <div>
            

            <label htmlFor="booked" className="ml-2 text-sm font-medium text-gray-900">Booked </label>
            <input 
              id="booked" 
              type="checkbox" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
            />

            <label htmlFor="returned" className="ml-2 text-sm font-medium text-gray-900">Taken </label>
            <input 
              id="taken" 
              type="checkbox" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
            />

            <label htmlFor="returned" className="ml-2 text-sm font-medium text-gray-900">Returned </label>
            <input 
              id="returned" 
              type="checkbox" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
            />
        </div>
        
        

      </div>
      
      <div className='pl-72'>
        <ExaminationTable users={sampleUsers} />
      </div>
    </div>
  );
}

export default Page;
