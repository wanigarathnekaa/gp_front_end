import React from 'react'
import Image from 'next/image'

import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end px-10 py-10 items-center bg-transparent">
      <div className="flex items-center">
        
        <ul className="flex items-center space-x-5">

        <li className='cursor-pointer'>
            <FaRegBell className='text-grey-500 hover:text-blue-500' style={{ fontSize: '1.5rem' }}/>
          </li>
          
          <li className='cursor-pointer'>
            <MdOutlineSettings className='text-grey-500 hover:text-blue-500' style={{ fontSize: '1.5rem' }}/>
          </li>

          <li className='cursor-pointer'>
            <Image src="/profilePic.png" alt="profilePicture" className="h-10 w-10 rounded-full"  width={50} height={50}/>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar