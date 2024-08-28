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
          <h6 className="text-[#d6e5ff] hover:underline cursor-pointer" onClick={toggleModal}>
            Edit Profile
          </h6>
        </div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-3 bg-[#312e81] mt-5 justify-center px-3">
          <li>
            <Link href="/dashboard" className="flex items-center justify-center space-x-3 text-gray-600 p-2 rounded-md font-medium bg-white hover:bg-[#EEF2FF] hover:text-[#706ee4] cursor-pointer transform transition-transform duration-300 hover:scale-105">
              Users
            </Link>
          </li>
          <li>
            <Link href="/dashboard/forms" className="flex items-center justify-center space-x-3 text-gray-600 p-2 rounded-md font-medium bg-white hover:bg-[#EEF2FF] hover:text-[#706ee4] cursor-pointer transform transition-transform duration-300 hover:scale-105">
              Forms
            </Link>
          </li>
          <li>
            <Link href="/dashboard/privileges" className="flex items-center justify-center space-x-3 text-gray-600 p-2 rounded-md font-medium bg-white hover:bg-[#EEF2FF] hover:text-[#706ee4] cursor-pointer transform transition-transform duration-300 hover:scale-105">
              Privileges
            </Link>
          </li>
          <li>
            <a className="flex items-center justify-center space-x-3 text-gray-600 p-2 rounded-md font-medium bg-white hover:bg-[#EEF2FF] hover:text-[#706ee4] cursor-pointer transform transition-transform duration-300 hover:scale-105">
              Analysis
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center pb-5 px-3">
        <button className="block w-full items-center justify-center space-x-3 text-gray-600 p-2 rounded-md font-medium bg-white hover:bg-[#EEF2FF] hover:text-[#706ee4] cursor-pointer transform transition-transform duration-300 hover:scale-105">
          Log Out
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default Sidebar;
