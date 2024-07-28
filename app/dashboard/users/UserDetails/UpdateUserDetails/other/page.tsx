import React from 'react'
import { Navbar, UserInfoForm } from '@/components';

const staffFields = [
    { label: 'Full Name', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'Staff ID', placeholder: 'Placeholder', disabled: false },
    { label: 'Email', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'NIC', placeholder: 'Placeholder', disabled: false },
    { label: 'Mobile no', placeholder: 'Placeholder', disabled: false },
    
];

const StaffUpdate = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <div className=" min-h-screen mt-12 flex  flex-col items-center justify-center bg-[#D6D6FF]">
    
            <div className="flex items-center justify-center h-screen">
            
                <UserInfoForm mode = "edit" fields={staffFields} />
            </div>
    
        </div>
    </div>
  )
}

export default StaffUpdate