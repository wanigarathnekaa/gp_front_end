"use client";  // Marks the component as a Client Component

import { FaEdit } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

interface RoleTableProps {
  roleId: string;
  roleName: string;
  status: string;
  createdDate: string;
  createdBy: string;
}

interface Props {
  users: RoleTableProps[];
}

const RoleTable = ({ users }: Props) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  return (
    <div className="flex ml-3 mt-10 justify-center">
      <table className="w-full max-w-full bg-white rounded-2xl">
        <thead className="text-base text-gray-700">
          <tr>
            <th className="border-b border-gray-200 py-3 px-4">User Role ID</th>
            <th className="border-b border-gray-200 py-3 px-4">User Role Name</th>
            <th className="border-b border-gray-200 py-3 px-4">Status</th>
            <th className="border-b border-gray-200 py-3 px-4">Created Date</th>
            <th className="border-b border-gray-200 py-3 px-4">Created By</th>
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
                <td className="border-b border-gray-200 py-3 px-4">{user.roleId}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.roleName}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.status}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.createdDate}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.createdBy}</td>
                <td className={`py-2 px-4 ${isLastRow ? "rounded-br-2xl rounded-bl-2xl" : "border-b border-gray-200"}`}>
                  <div className="flex justify-center items-center gap-3">
                    <Link href="/dashboard/users/UserRoleDetails">
                      <CiViewList className="cursor-pointer text-[#706ee4]" />
                    </Link>
                    <Link href="/dashboard/users/UserRoleDetails/UpdateUserRoleDetails">
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

export default RoleTable;
