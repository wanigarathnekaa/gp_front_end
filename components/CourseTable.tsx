"use client";

import { FaEdit } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

interface CourseTableProps {
  privilegeId: string;
  privilegeName: string;
//   assignedTo: string;
}

interface Props {
  users: CourseTableProps[];
}

const CourseTable = ({ users }: Props) => {
  const [selectedRowData, setSelectedRowData] = useState<CourseTableProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (user: CourseTableProps) => {
    setSelectedRowData(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRowData(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex ml-3 mt-10 justify-center flex-col">
      <table className="w-full max-w-full bg-white rounded-2xl shadow-md border-none">
        <thead className="text-base text-gray-700">
          <tr>
            <th className="border-b border-gray-200 py-3 px-4">Privilege ID</th>
            <th className="border-b border-gray-200 py-3 px-4">Privilege Name</th>
            
          </tr>
        </thead>

        <tbody className="text-sm text-gray-500">
          {users.map((user, index) => (
            <tr key={index} className="text-center cursor-pointer">
              <td className="border-b border-gray-200 py-3 px-4">{user.privilegeId}</td>
              <td className="border-b border-gray-200 py-3 px-4">{user.privilegeName}</td>
              {/* <td className="border-b border-gray-200 py-3 px-4">{user.assignedTo}</td> */}
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="flex justify-center items-center gap-3">
                  <Link href="">
                    <CiViewList className="cursor-pointer text-[#706ee4]" />
                  </Link>
                  <FaEdit
                    className="cursor-pointer text-green-400 opacity-60"
                    onClick={() => openModal(user)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
};

export default CourseTable;
