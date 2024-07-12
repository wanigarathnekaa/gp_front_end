import React from 'react'
import Navbar from '@/components/Navbar';
import UserInfoForm from '@/components/UserInfoForm';
import DeleteButton from '@/components/DeleteButton';
import CancelButton from '@/components/CancelButton';
import SubmitButton from '@/components/SubmitButton';


function page() {
  return (
    <div className="flex min-h-full flex-col lg:px-8l bg-[#D6D6FF]">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className='bg-white p-8 rounded-xl shadow-xl'>
            <h1 className="font-bold text-2xl text-gray-600 mb-8">Update User Details</h1>
            <UserInfoForm />
          <div className='flex gap-2 justify-end mt-8'>
            <CancelButton />
            <DeleteButton />
            <SubmitButton text="Update"/>
          </div>
            

          </div>
        </div>
        
    </div>
  )
}

export default page