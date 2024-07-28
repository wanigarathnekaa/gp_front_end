import React from 'react'
import { Navbar, UserInfoForm } from '@/components/index'

const lecturerFields = [
    { label: 'Full Name', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'Lecturer ID', placeholder: 'Placeholder', disabled: false },
    { label: 'Email', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'NIC', placeholder: 'Placeholder', disabled: false },
    { label: 'Mobile no', placeholder: 'Placeholder', disabled: false },
    
];
  

const LecturerUpdate = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <div className=" min-h-screen mt-12 flex  flex-col items-center justify-center bg-[#D6D6FF]">
    
            <div className="flex items-center justify-center h-screen">
            
                <UserInfoForm mode = "edit" fields={lecturerFields} />
            </div>
    
        </div>
    </div>
  )
}

export default LecturerUpdate