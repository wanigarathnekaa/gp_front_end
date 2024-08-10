import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ExamSidebar() {
    return (
        <div className="flex flex-col h-[95vh] bg-[#312e81] w-72 p-3 fixed top-12">
          <div className="flex items-center space-x-6 pt-10 mb-5 top-20 justify-center">
            <Image
              className="h-12 w-12 rounded-full" 
              src="/profilePic.png" 
              alt="Profile Picture" 
              width={48} 
              height={48} 
            />
            <div>
              <h4 className="font-semibold text-lg text-white">L.A Lakshani</h4>
              <h6 className="text-[#d6e5ff] hover:underline cursor-pointer">Edit Profile</h6>
            </div>
          </div>
          <nav className="flex-1">
            <ul className="space-y-5 bg-[#312e81] mt-5 justify-center px-3">

            <li>
    
              <Link  href=""
              
                className="flex items-center justify-center space-x-3 text-gray-600 p-2 rounded-md font-medium bg-white hover:bg-[#EEF2FF] hover:text-[#706ee4] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    Dashboard
                

              </Link>
              
            </li>

              <li>
    
                <Link  href=""
                
                   className="flex items-center justify-center space-x-3 text-gray-600 p-2 rounded-md font-medium bg-white hover:bg-[#EEF2FF] hover:text-[#706ee4] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                      Students
                  
    
                </Link>
                
              </li>
              <li>
                <Link  href=""
                  className="flex items-center justify-center space-x-3 text-gray-600 p-2 rounded-md font-medium bg-white hover:bg-[#EEF2FF] hover:text-[#706ee4] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                    Cloaks
                  
                </Link>
              </li>

  
              
            </ul>
          </nav>
          <div className="flex justify-center pb-5 px-3">
            <button className="block w-full items-center justify-center space-x-3 text-gray-600 p-2 rounded-md font-medium bg-white hover:bg-[#EEF2FF] hover:text-[#706ee4] cursor-pointer transform transition-transform duration-300 hover:scale-105">Log Out</button>
          </div>
        </div>
      )
}

export default ExamSidebar