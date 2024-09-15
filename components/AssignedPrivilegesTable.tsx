"use client"; 

import { FaEdit } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

interface AssignedPrivilegesTableProps {
  userId: string;
  userName: string;
  mobileNo: string[];
  privileges: string[];
  assignedDate: string;
  assignedBy: string;
}

interface Props {
  users: AssignedPrivilegesTableProps[];
}

const AssignedPrivilegesTable = ({ users }: Props) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  return (
    <div className="flex ml-3 mt-10 justify-center">
      <table className="w-full max-w-full bg-white rounded-2xl shadow-md border-none">
        <thead className="text-base text-gray-700">
          <tr>
            <th className="border-b border-gray-200 py-3 px-4">User ID</th>
            <th className="border-b border-gray-200 py-3 px-4">User Name</th>
            <th className="border-b border-gray-200 py-3 px-4">Mobile No</th>
            <th className="border-b border-gray-200 py-3 px-4">Privileges</th>
            <th className="border-b border-gray-200 py-3 px-4">Assigned Date</th>
            <th className="border-b border-gray-200 py-3 px-4">Assigned By</th>
            <th className="border-b border-gray-200 py-3 px-4"></th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-500">
          {users.map((user, index) => {
            const isLastRow = index === users.length - 1;
            return (
              <tr
                key={index}
                className={`text-center cursor-pointer ${
                  selectedRow === index ? "bg-blue-100" : ""
                } ${isLastRow ? "rounded-b-2xl" : ""}`}
                onClick={() => handleRowClick(index)}
              >
                <td className="border-b border-gray-200 py-3 px-4">{user.userId}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.userName}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.mobileNo.join(', ')}</td> 
                <td className="border-b border-gray-200 py-3 px-4">{user.privileges.join(', ')}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.assignedDate}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.assignedBy}</td>
                <td className={`py-2 px-4 ${isLastRow ? "rounded-br-2xl rounded-bl-2xl" : "border-b border-gray-200"}`}>
                  <div className="flex justify-center items-center gap-3">
                    <Link href="/dashboard/privileges/assignedPrivilegesDetails">
                      <CiViewList className="cursor-pointer text-[#706ee4]" />
                    </Link>
                    <Link href="/dashboard/privileges/updateAssignedPrivilegesDetails">
                      <FaEdit className="cursor-pointer text-green-400 opacity-60" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedPrivilegesTable;
