"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaWpforms,
  FaRegFileAlt,
  FaKey,
  FaChartLine,
  FaBook,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { usePrivileges } from "@/context/PrivilegeContext";

function Sidebar() {
  const router = useRouter();

  const { privileges } = usePrivileges();

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    router.push('/login');
};

  return (
    <div className="flex flex-col h-full bg-white w-72 px-5 shadow-xl fixed">
      <div className="flex justify-center items-center p-5 mt-5">
        <Image src="/Logo_feebify.png" alt="Logo" width={500} height={500} />
      </div>

      <nav className="flex-1">
        <ul className="space-y-3 bg-white mt-5 justify-center text-lg">
          <li>
            <Link
              href="/Qac"
              className="flex items-center w-full space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600"
            >
              <MdSpaceDashboard />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/Qac/users"
              className="flex items-center w-full space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600"
            >
              <FaUser />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link
              href="/Qac/courses"
              className="flex items-center w-full space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600"
            >
              <FaBook />
              <span>Courses</span>
            </Link>
          </li>
          {privileges.includes("formCreation") && (
            <li>
              <Link
                href="/Qac/forms"
                className="flex items-center space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                <FaWpforms />
                <span>Forms</span>
              </Link>
            </li>
          )}
          <li>
            <Link
              href="/Qac/templates"
              className="flex items-center space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600"
            >
              <FaRegFileAlt />
              <span>Templates</span>
            </Link>
          </li>
          <li>
            <Link
              href="/Qac/privileges"
              className="flex items-center space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600"
            >
              <FaKey />
              <span>Privileges</span>
            </Link>
          </li>
          {privileges.includes("viewFormAnalysis") && (
            <li>
              <Link
                href="/Qac/analysis"
                className="flex items-center space-x-4 px-5 py-3 rounded-md font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                <FaChartLine />
                <span>Analysis</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="flex pb-5 text-lg">
        <button onClick={handleLogout} className="flex w-full items-center space-x-4 gap-4 px-5 py-3 rounded-md font-medium text-gray-800 bg-gray-200 hover:bg-blue-50 hover:text-blue-600">
          <FiLogOut />
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
