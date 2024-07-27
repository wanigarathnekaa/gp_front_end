import React from 'react'
import { Navbar, Sidebar } from '@/components';
import FormThumbnail from '@/components/FormThumbnail';
import { FaUsers, FaRegClock  } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";
import { HiUserAdd } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import Link from 'next/link';


function page() {
  return (
    <div className="flex min-h-full flex-col lg:px-8l bg-[#D6D6FF]">
        <Navbar />
        <Sidebar/>
        <div className="flex flex-col min-h-screen pl-50">
      {/* First Row */}
      <div className="flex flex-col flex-grow min-h-screen pl-80 pr-16 mt-28">
        
      <div className="flex flex-row items-center justify-start h-1/3 ">
      <FormThumbnail
          title="New form"
          date="Create a new forum here"
        />
      </div>

      {/* Second Row */}
      <div className="items-center justify-start py-8">
          <h1 className="text-2xl text-gray-800  font-semibold ml-2">
            Recent Forms
          </h1>
        </div>
      <div className="flex flex-row items-start justify-start flex-grow gap-10 overflow-x-auto">
        <FormThumbnail
          title="View registered users"
          date="30/2/2023"
        />

        <FormThumbnail
          title="View registered users"
          date="1/1/2023"
        />

        <FormThumbnail
          title="View registered users"
          date="1/1/2023"
        />

        
      </div>
      </div>
    </div>

        
        
    </div>
  )
}

export default page;