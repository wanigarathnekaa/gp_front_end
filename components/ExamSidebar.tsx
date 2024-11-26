"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { MdDashboard } from "react-icons/md"
import { PiStudentFill } from "react-icons/pi";
import { GiCloak } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";

function ExamSidebar() {
  const pathname = usePathname();
  const isActive =(path:string) =>pathname === path;

  const isStudentActive = () => 
    pathname === '/ExaminationDep/Students/details' || pathname === '/ExaminationDep/Students/history';


    return (
        <div className="flex flex-col h-full bg-white w-72 p-5 shadow-xl fixed ">
          <div className="flex justify-center items-center p-5">
            <Image src="/Logo_feebify.png" alt="Logo" width={500} height={500} />
          </div>
          <nav className="flex-1">
            <ul className="space-y-3 bg-white mt-5 justify-center text-xl">

            <li>
    
              <Link  href="/ExaminationDep/dashboard"
              
                className={`flex items-center w-full space-x-4 px-5 py-3 rounded-md font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600  cursor-pointer transform transition-transform duration-300 hover:scale-110 ${
                  isActive("/ExaminationDep/dashboard") ? 'text-[#706ee4] font-extrabold' : 'text-gray-600 hover:text-[#706ee4]'}
                `}>
                  <MdDashboard />
                  <span>Dashboard</span>
                

              </Link>
              
            </li>

              <li>
    
                <Link  href="/ExaminationDep/Students/details"
                
                className={`flex items-center w-full space-x-4 px-5 py-3 rounded-md font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600  cursor-pointer transform transition-transform duration-300 hover:scale-110 ${
                  isStudentActive() ? 'text-[#706ee4] font-extrabold' : 'text-gray-600 hover:text-[#706ee4]'
                }`}>
                  <PiStudentFill />
                  <span> Students</span>   
                  
    
                </Link>
                
              </li>
              <li>
                <Link  href="/ExaminationDep/Cloak"
                  className={`flex items-center w-full space-x-4 px-5 py-3 rounded-md font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600  cursor-pointer transform transition-transform duration-300 hover:scale-110 ${
                    isActive("/ExaminationDep/Cloak") ? 'text-[#706ee4] font-extrabold' : 'text-gray-600 hover:text-[#706ee4]'}
                  `}>
                  <GiCloak/>
                  <span>Cloaks</span>
                  
                </Link>
              </li>

  
              
            </ul>
          </nav>
          <div className="flex pb-5 text-lg">
            <button className="flex w-full items-center space-x-4 gap-4 px-5 py-3 rounded-md font-medium text-gray-800 bg-gray-200 hover:bg-blue-50 hover:text-blue-600">
              <FiLogOut />
              Log Out
            </button>
          </div>
        </div>
      )
}

export default ExamSidebar