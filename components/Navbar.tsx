import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between px-20 py-2.5 items-center bg-white">
      <img src="logo.png" alt="Logo" className="h-8" style={{ width: '120px', height: '40px' }}/>
      <div className="flex items-center">
        
        <ul className="flex items-center space-x-7">
          
            <li>
                <img src="settingsIcon.svg" alt="settingsIcon" className="h-8" style={{ width: '25px', height: '25px' }} />
            </li>

          <li>
            <img src="bell.svg" alt="bellIcon" className="h-8" style={{ width: '25px', height: '25px' }}/>

          </li>
          <li>
            <img src="profilePic.png" alt="profilePicture" className="h-8" style={{ width: '35px', height: '35px' }}/>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar