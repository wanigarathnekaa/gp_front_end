import React from 'react';
import { Sidebar, Navbar, Card, Title } from '@/components/index';
import Breadcrumbs from '@/components/Breadcrumbs';
import DetailsCard from '@/components/DetailsCard';
import { FaUsers, FaRegClock  } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";
import { HiUserAdd } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import Link from 'next/link';


const Privileges = () => {
  return (
    <div className="w-full ">
        <Navbar />
        
        <Sidebar />
        
        <div className=' mt-12 ml-64 flex flex-col min-h-screen bg-[#EEF2FF] px-20 py-20'>
            <Title text='Privileges'/>
            <Breadcrumbs />
            
            
            <div className="flex ">
                <div className="w-1/2 pr-4">
                <Link href="/dashboard/privileges/assign-privileges">
                    
                        <Card 
                            title="Assign privileges" 
                            description='Assign user privileges to any user'
                            icon={FaUsers}
                            wide={true}
                        />

                    
                </Link>

                <Link href="/dashboard/privileges/assigned-privileges">
                    
                        <Card 
                            title="View privileges" 
                            description='View existing user privileges and roles'
                            icon={IoMdAddCircle}
                            wide={true}
                        />

                    
                </Link>
                </div>

                <div className="w-1/2 pl-2 pr-2 ml-3">
                    <div className="w-full bg-white shadow-md rounded-2xl p-5">
                        <h2 className='text-gray-600 font-semibold text-2xl py-3 ml-2 mb-5'>Existing privileges</h2>

                        <DetailsCard
                            privilege_id='PQAC001'
                            title='Form creation'
                            description='The user will be able to create new forms and share using the system.'
                            wide={true}
                        />

                        <DetailsCard
                            privilege_id='PQAC002'
                            title='View analytics'
                            description='The user will be able to create new forms and share using the system.'
                            wide={true}
                        />

                        <DetailsCard
                            privilege_id='PQAC003'
                            title='Form creation'
                            description='The user will be able to create new forms and share using the system.'
                            wide={true}
                        />

                    </div>
                
                </div>

            </div>
        </div>
        </div>
        
        
  )
}

export default Privileges