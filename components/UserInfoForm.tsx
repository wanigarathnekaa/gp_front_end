import React from 'react'
import Input from '@mui/joy/Input';
import { useState } from 'react';
import Image from 'next/image'


function UserInfoForm() {
  return (
    <div className='flex items-start justify-center bg-white space-x-4'>
      <div>

        <div className='flex flex-col items-center justify-center mb-4 mt-3'>
          <Image src="/profilePic.png" alt="profilePicture" className='mb-2' width={100} height={100}/>
          <h3 className="font-bold text-gray-500">View profile picture</h3>
        </div>

        <h3 className="font-bold text-gray-500">User ID</h3>
        <Input placeholder="Type in here…" className="mb-4 mt-1"/>
        <h3 className="font-bold text-gray-500">Full Name</h3>
        <Input placeholder="Type in here…" className="mb-4 mt-1"/>
        
      </div>

      <div>
        
        <h3 className="font-bold text-gray-500">Registration Number</h3>
        <Input placeholder="Type " className="mb-4 mt-1"/>
        <h3 className="font-bold text-gray-500">Index number</h3>
        <Input placeholder="Type " className="mb-4 mt-1"/>
        <h3 className="font-bold text-gray-500">Email</h3>
        <Input placeholder="Type " className="mb-4 mt-1"/>
        <h3 className="font-bold text-gray-500">Mobile number</h3>
        <Input placeholder="Type " className="mb-4 mt-1"/>
      </div>

      <div>
        <h3 className="font-bold text-gray-500">Fixed contact number</h3>
        <Input placeholder="here…" className="mb-4 mt-1"/>
        <h3 className="font-bold text-gray-500">Address line 1</h3>
        <Input placeholder="here…" className="mb-4 mt-1"/>
        <h3 className="font-bold text-gray-500">Address line 2</h3>
        <Input placeholder="here…" className="mb-4 mt-1"/>
        <h3 className="font-bold text-gray-500">Address line 3</h3>
        <Input placeholder="here…" className="mb-4 mt-1"/>
        
      </div>
        
    </div>
  )
}

export default UserInfoForm