import React from 'react'
import Navbar from '@/components/Navbar';
import UserInfoForm from '@/components/UserInfoForm';
import DeleteButton from '@/components/DeleteButton';
import CancelButton from '@/components/CancelButton';
import SubmitButton from '@/components/SubmitButton';

const studentFields = [
  { label: 'Full Name', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
  { label: 'Registration no', placeholder: 'Placeholder', disabled: false },
  { label: 'Index no', placeholder: 'Placeholder', disabled: false },
  { label: 'Email', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
  { label: 'NIC', placeholder: 'Placeholder', disabled: false },
  { label: 'Mobile no', placeholder: 'Placeholder', disabled: false },
  { label: 'Year of studying', placeholder: 'Placeholder', disabled: false },
  { label: 'Type', placeholder: 'Placeholder', disabled: false },
];


function page() {
  return (
    <div className="flex min-h-full flex-col lg:px-8l bg-[#D6D6FF]">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className='bg-white p-8 rounded-xl shadow-xl'>
            <h1 className="font-bold text-2xl text-gray-600 mb-8">Enroll Student As An Individual</h1>
            <UserInfoForm mode='view' fields={studentFields} />
          

          </div>
        </div>
        
    </div>
  )
}

export default page