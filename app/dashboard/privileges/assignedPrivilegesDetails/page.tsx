import React from 'react';
import Navbar from '@/components/Navbar';
import AssignedPrivilegesDetailsForm from '@/components/AssignedPrivilegesDetailsForm';

function page() {
  return (
    <div className='w-full'>
      <Navbar />

    
      <div className="flex items-center justify-center min-h-screen px-4 bg-[#EEF2FF]">
          
          <AssignedPrivilegesDetailsForm
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