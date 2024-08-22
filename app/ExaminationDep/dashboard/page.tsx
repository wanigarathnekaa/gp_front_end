import React from 'react';
import { Navbar, ExamSidebar, CloakCountCard, ExaminationTable } from '@/components/index';

const sampleUsers = [
  { userId: '1', userName: 'Kavisha Wanigarathne', regNo: '1001', indexNo: '2001', phone: '1234567890',size: 'Small', status: 'Collected' },
  { userId: '2', userName: 'Sarani Hettiarachchi', regNo: '1002', indexNo: '2002', phone: '0987654321',size: 'Large', status: 'Not Collected' },
  { userId: '3', userName: 'Kamala Haris', regNo: '1003', indexNo: '2003', phone: '0987654331',size: 'Medium', status: 'Not Collected' },
  // Add more user data as needed
];

const Page: React.FC = () => {
  return (
    <div className='bg-[#EEF2FF] min-h-screen'>
      <Navbar />
      <ExamSidebar />

      <div className='pl-72 pt-24'>
        <h1 className='text-3xl font-bold mb-2'>Examination Department Dashboard</h1>
        <h4 className='text-xl text-gray-600 font-semibold'>Cloak Distribution</h4>
      </div>

      <div className='flex flex-row justify-center pl-64 mt-12 space-x-4 mr-12'>
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
          countSmall={50}
          countMedium={120}
          countLarge={30}
          description='Total number of cloaks in the system' 
          wide 
        />
        
        <CloakCountCard 
          title='Cloaks Returned' 
          countSmall={40}
          countMedium={35}
          countLarge={10}
          description='Total number of cloaks in the system' 
          wide 
        />
      </div>

      <div className='flex flex-row justify-between pl-72 pr-24 mt-8'>
        <h1 className='text-xl text-gray-600 font-bold'>Student Details</h1>

        <div className='mb-4 space-x-2'>
            

            <label htmlFor="booked" className="ml-2 text-sm font-medium text-gray-900">Collected </label>
            <input 
              id="collected" 
              type="checkbox" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
            />

            <label htmlFor="returned" className="ml-2 text-sm font-medium text-gray-900">Not Collected </label>
            <input 
              id="notCollected" 
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
