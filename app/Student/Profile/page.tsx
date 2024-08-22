import React from 'react';
import Image from 'next/image';
import { FaRankingStar } from "react-icons/fa6";
import { Navbar } from '@/components/index';

const Profile = () => {
    const user = {
        regNo : '2021/CS/108',
        indexNo: '21001081',
        name: 'Naveesha Lakshan',
        email: 'lakshan@gmail.com',
        avatar: '/profilePic.png',
    };

    return (
        <div className="w-full">
            <Navbar />

            <div className="mt-14 bg-[#D6D6FF] flex justify-center items-center p-4">
                <div className='p-8 min-h-full bg-[#F1F5F9]  rounded-lg shadow-lg w-full max-w-4xl'>
                    <div className="flex justify-center p-4 bg-[#EEF2FF]">
                        <Image
                            src={user.avatar}
                            alt="Profile Picture"
                            className="rounded-full"
                            width={100}
                            height={100}
                        />
                    </div>
                    <form action="" className="flex flex-col space-y-5">
                        <div className="flex gap-4">
                            <label className="form-label" htmlFor="indexNo">Index no.</label>
                            <input className="form-input" type="text" id="indexNo" value={user.indexNo} readOnly />
                            <label className="form-label" htmlFor="regNo">Reg. no.</label>
                            <input className="form-input" type="text" id="regNo" value={user.regNo} readOnly />
                        </div>
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className="form-input" type="text" id="name" value={user.name} readOnly />
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-input" type="email" id="email" value={user.email} readOnly />
                        <label className="form-label" htmlFor="nic">NIC</label>
                        <input className="form-input" type="text" id="nic" value="200001234567" readOnly />
                    </form>
                    <div className="flex gap-4">
                        <p className="text-16 font-extrabold text-black mt-8">Rank</p>
                        <p className="text-5xl font-extrabold text-yellow-600 mt-8">10</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Profile;
