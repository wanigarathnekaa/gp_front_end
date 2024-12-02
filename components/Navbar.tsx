"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import Notification from './notification'; // Correct file import

function Navbar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  const toggleNotification = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setIsNotificationOpen(false);
    }
  };

  useEffect(() => {
    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end px-10 py-10 items-center bg-transparent">
      <div className="flex items-center relative">
        <ul className="flex items-center space-x-5">
          <li className="cursor-pointer relative">
            <FaRegBell
              onClick={toggleNotification}
              className="text-grey-500 hover:text-blue-500"
              style={{ fontSize: '1.5rem' }}
            />
            {isNotificationOpen && (
              <div
                ref={notificationRef}
                className="absolute top-8 right-0"
              >
                <Notification isOpen={isNotificationOpen} />
              </div>
            )}
          </li>
          <li className="cursor-pointer">
            <MdOutlineSettings
              className="text-grey-500 hover:text-blue-500"
              style={{ fontSize: '1.5rem' }}
            />
          </li>
          <li className="cursor-pointer">
            <Image
              src="/profilePic.png"
              alt="profilePicture"
              className="h-10 w-10 rounded-full"
              width={50}
              height={50}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
