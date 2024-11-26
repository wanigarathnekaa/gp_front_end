import React from 'react'
import Navbar from '@/components/Navbar';
import UserInfoForm from '@/components/UserInfoForm';

const staffFields = [
    { label: 'Full Name', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'Staff ID', placeholder: 'Placeholder', disabled: false },
    { label: 'Email', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'NIC', placeholder: 'Placeholder', disabled: false },
    { label: 'Mobile no', placeholder: 'Placeholder', disabled: false },
    
];

const EnrollStaff = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <div className=" min-h-screen flex  flex-col items-center justify-center bg-blue-50">
            
            <div className="flex items-center justify-center h-screen">
            
                <UserInfoForm mode = "view" fields={staffFields} />
            </div>
            
        </div>
    </div>
  )
}

export default EnrollStaff