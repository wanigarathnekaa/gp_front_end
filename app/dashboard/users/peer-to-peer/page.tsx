"use client";
import React from 'react'
import { Sidebar, Navbar, Title, Table, Card, Navigation, ReviewTable } from   '@/components/index';
import { FaUser, FaUsers} from 'react-icons/fa'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links =[
    {
        href: '/dashboard/users/peer-to-peer',
        label : 'Lecturers'
    }

];

const review = [
    { id: 1, reviewer: 'John Doe', reviewee: 'Jane Smith', reviewDate: '2024-07-20' },
    { id: 2, reviewer: 'Alice Brown', reviewee: 'Bob Johnson', reviewDate: '2024-07-21' },
    { id: 3, reviewer: 'Alice Brown', reviewee: 'Bob Johnson', reviewDate: '2024-07-21' },
    { id: 4, reviewer: 'Alice Brown', reviewee: 'Bob Johnson', reviewDate: '2024-07-21' },
    
];

const PeerReviews = () => {
    const pathname = usePathname();
    return (
        <div className='w-full'>
            <Navbar />
            <Sidebar />

            <div className=' mt-12 ml-64  min-h-screen bg-[#D6D6FF] p-4'>
                <Title text='Peer-to-peer review' />

                <>
                    <Navigation links={links} pathname={pathname} />
                </>

                <div className='flex flex-row gap-10 mt-8 ml-5 '>

                    <Link href='/dashboard/users/peer-to-peer/Assign-new'>
                        <Card 
                            title='Assign New Peer Review'
                            description='Assign a new peer review'
                            icon={FaUser}
                        />
                    </Link>

                </div>

                <div className='mt-10'>
                    <h4 className='text-xl font-semibold ml-8 '>Review history</h4>

                    <div className='mt-4'>
                        <ReviewTable users={review} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PeerReviews;