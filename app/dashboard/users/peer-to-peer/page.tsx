"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Card, Navigation } from   '@/components';
import { FaUser, FaUsers} from 'react-icons/fa'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links =[
    {
        href: '/dashboard/users/peer-to-peer',
        label : 'Lecturers'
    }

]

const PeerReviews = () => {
    const pathname = usePathname();
    return (
        <div className='w-full'>
            <Navbar />
            <Sidebar />

            <div className=' mt-14 ml-64  min-h-screen bg-[#D6D6FF] p-4'>
                <Title text='Peer-to-peer reviews' />

                <>
                    <Navigation links={links} pathname={pathname} />
                </>

                <div className='flex flex-row gap-10 mt-8 ml-10 '>

                    

                </div>

                <div className='ml-14 mt-10'>
                    <h4 className='text-xl font-semibold'>Enrollment history</h4>
                </div>

            </div>
        </div>
    )
}

export default PeerReviews;