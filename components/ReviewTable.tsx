"use client";
import React, { useState } from "react";
import { CiViewList } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

interface ReviewTableProps {
  id: number;
  reviewer: string;
  reviewee: string;
  reviewDate: string;
}

interface Props {
  users: ReviewTableProps[];
}

const ReviewTable = ({ users }: Props) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex mt-5 justify-center flex-col">
      <table className="w-full max-w-full bg-white rounded-2xl border-none shadow-md">
        <thead className="text-base text-gray-700">
          <tr>
            <th className="border-b border-gray-200 py-3 px-4">Id</th>
            <th className="border-b border-gray-200 py-3 px-4">Reviewer</th>
            <th className="border-b border-gray-200 py-3 px-4">Reviewee</th>
            <th className="border-b border-gray-200 py-3 px-4">Review Date</th>
            <th className="border-b border-gray-200 py-3 px-4"></th>
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
                <td className="border-b border-gray-200 py-3 px-4">{user.id}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.reviewer}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.reviewee}</td>
                <td className="border-b border-gray-200 py-3 px-4">{user.reviewDate}</td>
                <td className="border-b border-gray-200 py-3 px-4">
                  <div className="flex justify-center items-center gap-2">
                    <Link href="/dashboard/users/UserDetails">
                      <CiViewList className="cursor-pointer text-[#706ee4]" />
                    </Link>
                    <Link href="/dashboard/users/UserDetails/UpdateUserDetails">
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
          <label htmlFor="rows-per-page" className="text-sm">
            Rows per page:
          </label>
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

export default ReviewTable;
