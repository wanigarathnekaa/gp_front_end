import React from 'react'
import Navbar from '@/components/Navbar';
import UserInfoForm from '@/components/UserInfoForm';

const studentFields = [
    { label: 'Full Name', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'Registration no', placeholder: 'Placeholder', disabled: false },
    { label: 'Index no', placeholder: 'Placeholder', disabled: false },
    { label: 'Email', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'NIC', placeholder: 'Placeholder', disabled: false },
    { label: 'Mobile no', placeholder: 'Placeholder', disabled: false },
    { label: 'Year of studying', placeholder: 'Placeholder', disabled: false },
    { label: 'Role', placeholder: 'Placeholder', disabled: false },
];

const EnrollStudent = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <div className=" min-h-screen flex  flex-col items-center justify-center bg-blue-50">
            
            <div className="flex items-center justify-center h-screen">
            
                <UserInfoForm mode = "enroll" fields={studentFields} />
            </div>
            
        </div>
    </div>
  )
}

export default EnrollStudent