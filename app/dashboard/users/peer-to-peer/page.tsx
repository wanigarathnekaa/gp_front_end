"use client";
import React, { useState } from 'react'
import { Sidebar, Navbar, Title, Table, Card, Navigation, ReviewTable, AssignReviewForm } from   '@/components/index';
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        reviewer:'',
        reviewee:'',
        formType:''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        setIsModalOpen(false);
    };

    const openModal =() => setIsModalOpen(true);
    const closeModal =()=> setIsModalOpen(false);

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

                    
                        <Card 
                            title='Assign New Peer Review'
                            description='Assign a new peer review'
                            icon={FaUser}
                            onclick={openModal}

                        />
                    

                </div>

                <div className='mt-10'>
                    <h4 className='text-xl font-semibold ml-8 '>Review history</h4>

                    <div className='mt-4'>
                        <ReviewTable users={review} />

                    </div>
                </div>

            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className=" relaive  w-1/2">
                        <AssignReviewForm
                            reviewer={formData.reviewer}
                            reviewee={formData.reviewee}
                            formType={formData.formType}
                            onInputChange={handleInputChange}
                            onUrlChange={handleUrlChange}
                            onSubmit={handleSubmit}
                            closeModal={closeModal}
                        />
                    </div>
                </div>
            )}


        </div>
    )
}

export default PeerReviews;