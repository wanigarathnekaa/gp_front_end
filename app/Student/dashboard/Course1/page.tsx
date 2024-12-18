import { CourseDetails, Navbar } from '@/components/index'
import React from 'react'


const Course1 = () => {
  return (
    <div className='w-full'>
        <Navbar/>

        <div className='mt-14 min-h-screen bg-[#EEF2FF] flex justify-center items-center p-4'>
            <div className='mt-10' >
                <CourseDetails courseName='SCS 3205 - Middleware Architecture' date='2024-07-01'/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Course1