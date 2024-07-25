import React from 'react'
import Navbar from '@/components/Navbar';
import UserInfoForm from '@/components/UserInfoForm';



function page() {
  return (
    <div className='w-full'>
        <Navbar />
    <div className=" min-h-screen mt-12 flex  flex-col items-center justify-center bg-[#D6D6FF]">
        
        <div className="flex items-center justify-center h-screen">
          
            <UserInfoForm mode = "edit" />
        </div>
        
    </div>
    </div>
  )
}

export default page