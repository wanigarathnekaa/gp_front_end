import React from 'react'
import Image from 'next/image'

import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-16 py-3 items-center bg-[#312e81] border-b-2">
      <Image src="/Logo.png" alt="Logo" className="h-8 ml-4"  width={138} height={88}/>
      <div className="flex items-center">
        
        <ul className="flex items-center space-x-5">
          
          <li className='cursor-pointer'>
            <IoSettingsOutline className='text-white' style={{ fontSize: '1.25rem' }}/>
          </li>

          <li className='cursor-pointer'>
            <FaRegBell className='text-white' style={{ fontSize: '1.25rem' }}/>
          </li>
          <li className='cursor-pointer'>
            <Image src="/profilePic.png" alt="profilePicture" className="h-8 w-8 rounded-full border-2 border-white"  width={35} height={35}/>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar