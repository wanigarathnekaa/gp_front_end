'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaUser, FaWpforms, FaRegFileAlt, FaKey, FaChartLine, FaBook, FaComments } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";

function Sidebar() {
 const router = useRouter();

 return (
   <div className="flex flex-col h-full bg-white w-72 px-5 shadow-xl fixed">
     <div className="flex justify-center items-center p-5 mt-5">
       <Image src="/Logo_feebify.png" alt="Logo" width={500} height={500} />
     </div>

     <nav className="flex-1">
       <ul className="space-y-3 bg-white mt-5 justify-center text-lg">
         <li>
           <Link href="/Qac" className="flex items-center w-full space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600">
             <MdSpaceDashboard />
             <span>Dashboard</span>
           </Link>
         </li>
         <li>
           <Link href="/Qac/courses" className="flex items-center w-full space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600">
             <FaBook />
             <span>Courses</span>
           </Link>
         </li>
         <li>
           <Link href="/Qac/forms" className="flex items-center space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600">
             <FaWpforms />
             <span>Forms</span>
           </Link>
         </li>
         <li>
           <Link href="/Qac/peer-reviews" className="flex items-center space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600">
             <FaComments />
             <span>Peer Reviews</span>
           </Link>
         </li>
         <li>
           <Link href="/Qac/analysis" className="flex items-center space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600">
             <FaChartLine />
             <span>Analysis</span>
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
 );
}

export default Sidebar;
