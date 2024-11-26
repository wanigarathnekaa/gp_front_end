import React from 'react'
import Navbar from '@/components/Navbar';
import UserInfoForm from '@/components/UserInfoForm';

const lecturerFields = [
    { label: 'Full Name', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'Lecturer ID', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'Email', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'NIC', placeholder: 'Placeholder', disabled: false, colSpan: 2 },
    { label: 'Mobile no', placeholder: 'Placeholder', disabled: false, colSpan: 1 },
    
];
  

const EnrollLecturer = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <div className=" min-h-screen flex  flex-col items-center justify-center bg-blue-50">
            
            <div className="flex items-center justify-center h-screen">
            
                <UserInfoForm mode = "enroll"  fields={lecturerFields}/>
            </div>
            
        </div>
    </div>
  )
}

export default EnrollLecturer