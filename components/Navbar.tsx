import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-20 py-2.5 items-center bg-white  ">
      <Image src="/Logo.png" alt="Logo" className="h-8"  width={105} height={40}/>
      <div className="flex items-center">
        
        <ul className="flex items-center space-x-7">
          
            <li>
                <Image src="/settingsIcon.svg" alt="settingsIcon" className="h-8" width={25} height={25}  />
            </li>

          <li>
            <Image src="/bell.svg" alt="bellIcon" className="h-8"   width={25} height={25} />

          </li>
          <li>
            <Image src="/profilePic.png" alt="profilePicture" className="h-8"  width={35} height={35}/>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar