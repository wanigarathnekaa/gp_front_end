import React from 'react'
import Navbar from '@/components/Navbar';
import UserInfoForm from '@/components/UserInfoForm';

function page() {
  return (
    <div className="flex min-h-full flex-col lg:px-8l bg-[#D6D6FF]">
        <Navbar />
        <UserInfoForm />
    </div>
  )
}

export default page