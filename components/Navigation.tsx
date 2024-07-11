"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();
    return (
        <div className='flex justify-between items-center'>

            <div className='flex gap-4 ml-auto mr-20 mt-5'>

                <Link href="/dashboard/users/view-registered/lecturers"
                    
                    className={`text-black hover:text-blue-500 hover:underline ${

                        pathname === '/dashboard/users/view-registered/lecturers'
                        ? 'font-bold  text-blue-500'
                            : ''
                    }`}>
                        Lecturers
                    
                </Link>

                <Link href="/dashboard/users/view-registered/students"
                    className={`text-black hover:text-blue-500 hover:underline ${
                        pathname === "/dashboard/users/view-registered/students"
                        ? 'font-bold  text-blue-500'
                        :''
                    }`}>
                        Students
                </Link>

                <Link href="/dashboard/users/view-registered/other"
                    className={`text-black hover:text-blue-500 hover:underline ${
                        pathname === "/dashboard/users/view-registered/other"
                        ? 'font-bold  text-blue-500'
                        :''
                        
                    }`}>
                        Other
                </Link>
            </div>
        </div>

  )
}

export default Navigation