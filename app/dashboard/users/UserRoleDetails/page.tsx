import React from 'react';
import Navbar from '@/components/Navbar';
import RoleDetailsForm from '@/components/RoleDetailsForm';

function page() {
  return (
    <div className="flex items-center justify-center min-h-full lg:px-8l bg-[#D6D6FF]">
        <Navbar />
        <div className='w-[30%]'>
        <RoleDetailsForm 
          title="User role details" 
          showCancelButton={true} 
          showDeleteButton={true} 
          showSubmitButton={false} 
          
        />
        </div>
        
    </div>
  )
}

export default page