"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaRegBell } from "react-icons/fa";

const StudentNavbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);

    const linkClasses = (path: string) => {
        return pathname === path
            ? 'text-lg font-medium text-blue-600'
            : 'text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors';
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        router.push('/login');
    };

    useEffect(() => {
        // Retrieve the user's name from localStorage (or from context)
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (user && user.name) {
            setUserName(user.name);
        }
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-20 py-2.5 items-center bg-white shadow-lg">
            <div className='flex items-center'>
                <Image src="/Logo_feebify.png" alt="Logo" className="h-8" width={120} height={55} />
            </div>

            <div className='flex items-center space-x-7 ml-auto'>
                <div className='flex space-x-7'>
                    <Link href="/Student/Forms" className={linkClasses('/Student/Forms')}>
                        Forms
                    </Link>
                    <Link href="/Student/Courses" className={linkClasses('/Student/Courses')}>
                        Courses
                    </Link>
                    <Link href="/Student/Ranking" className={linkClasses('/Student/Ranking')}>
                        Ranking
                    </Link>
                </div>
            </div>

            <div className="flex items-center ml-40">
                <ul className="flex items-center space-x-7">
                    <li>
                        <FaRegBell
                            className="text-grey-500 hover:text-blue-600"
                            style={{ fontSize: '1.5rem' }}
                        />
                    </li>

                    {/* User Greeting */}
                    <li className="flex items-center space-x-6">
                        <span className="text-gray-700 font-medium">
                            Hi {userName || "User"}!
                        </span>
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
                                <button
                                    onClick={handleLogout}
                                    className="font-semibold w-full text-left px-4 py-2 text-red-700 hover:bg-gray-100"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default StudentNavbar;
