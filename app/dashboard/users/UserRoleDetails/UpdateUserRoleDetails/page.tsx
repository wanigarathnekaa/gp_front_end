import React from 'react';
import Navbar from '@/components/Navbar';
import RoleDetailsForm from '@/components/RoleDetailsForm';

function page() {
  return (
    <div className='w-full '>
      <Navbar />

    
      <div className="flex items-center justify-center min-h-screen px-4 bg-[#D6D6FF]">
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