"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCog, FaBell } from "react-icons/fa";

const StudentNavbar = () => {
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const linkClasses = (path: string) => {
        return pathname === path
            ? 'text-lg font-bold text-blue-500'
            : 'text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors';
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-20 py-2.5 items-center bg-white shadow-lg">
            <div className='flex items-center'>
                <Image src="/Logo.png" alt="Logo" className="h-8" width={105} height={40} />
            </div>

            <div className='flex items-center space-x-7 ml-auto'>
                <div className='flex space-x-7'>
                    <Link href="/Student/dashboard" className={linkClasses('/Student/dashboard')}>
                        Courses
                    </Link>

                    <Link href="/Student/History" className={linkClasses('/Student/History')}>
                        History
                    </Link>
                </div>
            </div>

            <div className="flex items-center ml-40">
                <ul className="flex items-center space-x-7">
                    <li>
                        <Link href="/Student/Setting" className={linkClasses('/Student/Setting')}>
                            <FaCog className="h-6 w-6 hover:text-blue-800" />
                        </Link>
                    </li>

                    <li>
                        <FaBell className="h-6 w-6" />
                    </li>

                    <li className="relative">
                        <Image
                            src="/profilePic.png"
                            alt="profilePicture"
                            className="h-8 cursor-pointer"
                            width={35}
                            height={35}
                            onClick={toggleDropdown}
                        />
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                                <Link href="/Student/Profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    View Profile
                                </Link>
                                <Link href="/Student/ChangePassword" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Change Password
                                </Link>
                                <Link href="/Student/Logout" className="font-semibold block px-4 py-2 text-red-700 hover:bg-gray-100">
                                    Log Out
                                </Link>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default StudentNavbar;
