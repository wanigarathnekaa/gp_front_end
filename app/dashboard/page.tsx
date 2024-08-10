import React from 'react';
import { Sidebar, Navbar, Card, Calendar, TaskList, Title } from '@/components/index';
import SubTitle from '@/components/SubTitle';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FaUsers, FaRegClock  } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";
import { HiUserAdd } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import Link from 'next/link';

const Dashboard = () => {
  return (
    
      <div className="w-full ">
        <Navbar />  
        <Sidebar />
        
        <div className="mt-12 ml-64 flex flex-row min-h-screen">
          <div className="w-3/4 px-20 py-20 bg-[#EEF2FF]">
          <Title text='Hi there!'/>
          <SubTitle text='Welcome to your dashboard'/>
          <Breadcrumbs/>

          
            
            <div className="flex flex-col ">
                <Link href="/dashboard/users/view-registered/lecturers">
                    
                        <Card 
                            title="View registered users" 
                            description='Assign user privileges to any user'
                            icon={FaUsers}
                            
                        />

                    
                </Link>

                <Link href="/dashboard/users/enroll-new/students">
                    
                        <Card 
                            title="Enroll new users" 
                            description='View existing user privileges and roles'
                            icon={IoMdAddCircle}
                            
                        />

                    
                </Link>

                <Link href="/dashboard/users/create-new">
                    
                        <Card 
                            title="Create new user role" 
                            description='View existing user privileges and roles'
                            icon={HiUserAdd}
                            
                        />

                    
                </Link>

                <Link href="/dashboard/users/peer-to-peer">
                    
                        <Card 
                            title="Peer-to-peer review" 
                            description='Assign peer-to-peer reviewers'
                            icon={AiFillMessage}
                            
                        />

                   
                </Link>

                <Link href="/dashboard/users/view-registered/students/ranking">
                    
                        <Card 
                            title="Student ranking" 
                            description='View students ranking'
                            icon={FaRankingStar}
                            
                        />

                   
                </Link>
                
            </div>
          </div>
          <div className="w-1/4 p-4 bg-white shadow-md">
            <Calendar />
            <TaskList 
              tasks={['Task 1', 'Task 2', 'Task 3', 'Task 4']}
              icon = {FaRegClock} 
            />
          </div>
          
        </div>
      </div>
    
  );
};

export default Dashboard;
