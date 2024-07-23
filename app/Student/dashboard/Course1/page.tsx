import { CourseDetails, Navbar } from '@/components'
import React from 'react'

const Course1 = () => {
  return (
    <div className='w-full'>
        <Navbar/>

        <div className='mt-14 min-h-screen bg-[#D6D6FF] flex justify-center items-center p-4'>
            <div >
                <CourseDetails courseName='SCS 3205 - Middleware Architecture' date='2024-07-01'/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Course1