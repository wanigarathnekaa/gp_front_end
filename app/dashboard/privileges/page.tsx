import React from 'react';
import { Sidebar, Navbar, Card, Calendar, TaskList } from '@/components/index';
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
        
        <div className="mt-12 ml-64 flex flex-row min-h-screen">
        <div className="w-3/4 px-20 py-20  bg-[#EEF2FF]">
            <div className="text-4xl font-bold  mb-4">
            <h1 className='mb-10 ml-3 text-black '>
                User Privileges
                
            </h1>
            </div>
            <div className="flex flex-col ">
                <Link href="">
                    
                        <Card 
                            title="Assign privileges" 
                            description='Assign user privileges to any user'
                            icon={FaUsers}
                            
                        />

                    
                </Link>

                <Link href="">
                    
                        <Card 
                            title="View privileges" 
                            description='View existing user privileges and roles'
                            icon={IoMdAddCircle}
                            
                        />

                    
                </Link>

            </div>
        </div>

        <div className="w-1/4 p-4 bg-[#EEF2FF]">
            <Calendar />
            <TaskList 
            tasks={['Task 1', 'Task 2', 'Task 3', 'Task 4']}
            icon = {FaRegClock} 
            />
        </div>
        
        </div>
    </div>
  )
}

export default Privileges