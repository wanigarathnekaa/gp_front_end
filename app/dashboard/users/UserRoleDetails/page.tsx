import React from 'react';
import Navbar from '@/components/Navbar';
import RoleDetailsForm from '@/components/RoleDetailsForm';

function page() {
  return (
    <div className='w-full '>
      <Navbar />

    
      <div className="flex items-center justify-center min-h-screen px-4 bg-[#EEF2FF]">
          
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