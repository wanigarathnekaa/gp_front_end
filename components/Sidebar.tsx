import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Sidebar() {
  return (
    <div className="flex flex-col h-[95vh] bg-gray-50 w-64 p-3 shadow-lg fixed top-12">
      <div className="flex items-center space-x-4 p-2 mb-5 top-16 ml-4">
        <Image
          className="h-12 w-12 rounded-full" 
          src="/profilePic.png" 
          alt="Profile Picture" 
          width={48} 
          height={48} 
        />
        <div>
          <h4 className="font-semibold text-lg text-gray-700">L.A Lakshani</h4>
          <h6 className="text-[#6366F1]">Edit Profile</h6>
        </div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-3 bg-[#F1F5F9] mt-8 ml-4 mr-4">
          <li>

            <Link  href="/dashboard"
            
               className="flex items-center justify-center space-x-3 text-gray-700 p-2 rounded-md font-medium bg-[#e2e4e7] hover:bg-[#EEF2FF] hover:text-[#6366F1]">
                  Users
              

            </Link>
            
          </li>
          <li>
            
              <a className="flex items-center justify-center space-x-3 text-gray-700 p-2 rounded-md font-medium bg-[#e2e4e7] hover:bg-[#EEF2FF] hover:text-[#6366F1]">
                Forms
              </a>
            
          </li>
          <li>
            <Link href="/dashboard/privileges"
              className="flex items-center justify-center space-x-3 text-gray-700 p-2 rounded-md font-medium bg-[#e2e4e7] hover:bg-[#EEF2FF] hover:text-[#6366F1]">
                Privileges

            </Link>
              
            
          </li>
          <li>
            
              <a className="flex items-center justify-center space-x-3 text-gray-700 p-2 rounded-md font-medium bg-[#e2e4e7] hover:bg-[#EEF2FF] hover:text-[#6366F1]">
                Analysis
              </a>
            
          </li>
        </ul>
      </nav>
      <div className="flex justify-center mb-3 ml-4 mr-4">
        <button className="block w-full bg-[#4F46E5] text-white p-2 rounded-md hover:bg-[#3b31f8]">Log Out</button>
      </div>
    </div>
  )
}

export default Sidebar