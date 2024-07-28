"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'

const StudentNavbar = () => {
    const pathname = usePathname();

    const linkClasses = (path: string) => {
        return pathname === path
        ? 'text-lg font-bold text-blue-500'
        : 'text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors'
    }
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-20 py-2.5 items-center bg-white shadow-lg ">
            <div className='flex items-center'>
                <Image src="/Logo.png" alt="Logo" className="h-8"  width={105} height={40}/>
            </div>

            <div className=' flex items-center space-x-7 ml-auto'>
                <div className='flex space-x-7'>
                    <Link href="/Student/dashboard" 
                        className={linkClasses('/Student/dashboard')}>
                            Courses

                    </Link>

                    <Link href="/Student/History" 
                        className={linkClasses('/Student/History')}>
                            History

                    </Link>

                </div>
            </div>

            <div className="flex items-center ml-40">
            
                <ul className="flex items-center space-x-7">
                
                    <li>
                        <Image src="/settingsIcon.svg" alt="settingsIcon" className="h-8" width={25} height={25}  />
                    </li>

                <li>
                    <Image src="/bell.svg" alt="bellIcon" className="h-8"   width={25} height={25} />

                </li>
                <li>
                    <Image src="/profilePic.png" alt="profilePicture" className="h-8"  width={35} height={35}/>
                </li>
                </ul>
        </div>
        </nav>
    )
}

export default StudentNavbar