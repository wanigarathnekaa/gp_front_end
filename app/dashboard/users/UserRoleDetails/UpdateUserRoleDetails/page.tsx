import React from 'react';
import Navbar from '@/components/Navbar';
import RoleDetailsForm from '@/components/RoleDetailsForm';

function page() {
  return (
    <div className="flex items-center justify-center min-h-full lg:px-8l bg-[#D6D6FF]">
        <Navbar />
        <div className='w-[30%]'>
        <RoleDetailsForm 
          title="Update user role details" 
          showCancelButton={true} 
          showDeleteButton={false} 
          showSubmitButton={true} 
          submitButtonText='Update'
          
        />
        </div>
        
    </div>
  )
}

export default page