"use client";

import { FaEye, FaEdit } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

interface TableProps {
  userId: string;
  userName: string;
  staffId?: string;
  lecturerId?: string;
  regNo?: string;
  indexNo?: number;
  email: string;
  nic: string;
  year?: string;
  type?: string;
}

interface Props {
  users: TableProps[];
  type: "lecturer" | "student" | "other";
}

const Table = ({ users, type }: Props) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5); // Default number of rows per page
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page number

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  // Calculate the range of users to show based on the current page and rows per page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Function to handle rows per page change
  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when rows per page changes
  };

  return (
    <div className="flex mt-5 ml-3 justify-center flex-col">
      <table className="w-full max-w-full bg-white rounded-2xl border-none shadow-md">
        <thead className="text-base text-gray-700">
          <tr>
            <th className="border-b border-gray-200 py-3 px-4">User Id</th>
            <th className="border-b border-gray-200 py-3 px-3">User Name</th>

            {type === "other" && (
              <>
                <th className="border-b border-gray-200 py-3 px-3">Staff Id</th>
              </>
            )}

            {type === "lecturer" && (
              <>
                <th className="border-b border-gray-200 py-3 px-3">Lecturer Id</th>
              </>
            )}

            {type === "student" && (
              <>
                <th className="border-b border-gray-200 py-3 px-3">Reg. No</th>
                <th className="border-b border-gray-200 py-3 px-3">Index No</th>
              </>
            )}

            <th className="border-b border-gray-200 py-3 px-3">Email</th>

            <th className="border-b border-gray-200 py-3 px-3">NIC</th>

            {type === "student" && (
              <>
                <th className="border-b border-gray-200 py-3 px-3">Year studying</th>
                <th className="border-b border-gray-200 py-3 px-3">Role</th>
              </>
            )}

            <th className="border-b border-gray-200 py-3 px-3"></th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-500">
          {paginatedUsers.map((user, index) => {
            const isLastRow = index === paginatedUsers.length - 1;
            return (
              <tr
                key={index}
                className={`text-center cursor-pointer ${
                  selectedRow === index ? "bg-blue-100" : ""
                } ${isLastRow ? "rounded-b-2xl" : ""}`}
                onClick={() => handleRowClick(index)}
              >
                <td className="border-b border-gray-200 py-3 px-4">{user.userId}</td>
                <td className="border-b border-gray-200 py-3 px-3">{user.userName}</td>

                {type === "other" && (
                  <>
                    <td className="border-b border-gray-200 py-3 px-3">{user.staffId}</td>
                  </>
                )}

                {type === "lecturer" && (
                  <>
                    <td className="border-b border-gray-200 py-3 px-3">{user.lecturerId}</td>
                  </>
                )}

                {type === "student" && (
                  <>
                    <td className="border-b border-gray-200 py-3 px-3">{user.regNo}</td>
                    <td className="border-b border-gray-200 py-3 px-3">{user.indexNo}</td>
                  </>
                )}

                <td className="border-b border-gray-200 py-3 px-3">{user.email}</td>

                <td className="border-b border-gray-200 py-3 px-3">{user.nic}</td>

                {type === "student" && (
                  <>
                    <td className="border-b border-gray-200 py-2 px-3">{user.year}</td>
                    <td className="border-b border-gray-200 py-2 px-3">{user.type}</td>
                  </>
                )}

                <td className="border-b border-gray-200 py-3 px-4">
                  <div className="flex justify-center items-center gap-2">
                    <Link href={`/dashboard/users/UserDetails/${type}`}>
                      <CiViewList className="cursor-pointer text-[#706ee4]" />
                    </Link>

                    <Link href={`/dashboard/users/UserDetails/UpdateUserDetails/${type}`}>
                      <FaEdit className="cursor-pointer text-green-400 opacity-60" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Row Counter and Pagination Controls */}
      <div className=" ml-2 mt-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <label htmlFor="rows-per-page" className=" text-sm">Rows per page:</label>
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

export default Table;
