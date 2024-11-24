
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactDOM from 'react-dom';
import { CancelButton, DeleteButton, SubmitButton } from '@/components/index';
import UserInfoForm from '@/components/UserInfoForm';


function Modal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md space-y-4">
        <h2 className="font-bold text-2xl text-gray-700 mb-8">Edit Profile</h2>
        <form className="space-y-4">
          <div className="flex items-start space-x-6">
            <div className="flex-1">
              <label htmlFor="name" className="font-bold text-gray-500">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
              <label htmlFor="email" className="font-bold text-gray-500 mt-4 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                <img
                  src="/profilePic.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <button
                type="button"
                className="mt-2 text-blue-500 hover:underline"
                onClick={() => {/* handle change profile picture */}}
              >
                Change Profile Picture
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="address" className="font-bold text-gray-500">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your address"
              rows={2}
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 bg-gray-200 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white bg-[#312e81ef] hover:bg-[#4e46e5b5] hover:text-white font-bold py-1.5 px-4 rounded-full cursor-pointer"
            >
              Update
            </button>
          </div>
        </form>

      </div>
    </div>,
    document.body
  );
}

function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

     <div className="flex pb-5 text-lg">
       <button className="flex w-full items-center space-x-4 gap-4 px-5 py-3 rounded-md font-medium text-gray-800 bg-gray-200 hover:bg-blue-50 hover:text-blue-600">
       <FiLogOut />
         Log Out now
       </button>
     </div>
   </div>
 );
}


      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default Sidebar;

