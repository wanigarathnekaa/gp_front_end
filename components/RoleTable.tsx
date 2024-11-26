"use client";

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
  const [rowsPerPage, setRowsPerPage] = useState(5); 
  const [currentPage, setCurrentPage] = useState(1); 

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); 
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = users.slice(startIndex, endIndex);

  return (
    <div className="flex ml-3 mt-10 justify-center flex-col">
      <table className="w-full max-w-full bg-white rounded-2xl shadow-md border-none">
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
          {currentPageData.map((user, index) => {
            const isLastRow = index === currentPageData.length - 1;
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

      <div className="ml-2 mt-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <label htmlFor="rows-per-page" className="text-sm">Rows per page:</label>
          <select
            id="rows-per-page"
            className="p-2 border rounded bg-white"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm">
            Page {currentPage} of {Math.ceil(users.length / rowsPerPage)}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(users.length / rowsPerPage)}
            className="px-3 py-1 bg-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleTable;
