"use client";
import { FaEdit } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

interface Role {
  id: string;
  roleName: string;
  roleDescription: string;
  selectedPrivileges: string[];
}

interface RoleTableProps {
  users: Role[];
}

const RoleTable = ({ users }: RoleTableProps) => {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleRowClick = (id: string) => {
    setSelectedRow((prev) => (prev === id ? null : id));
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page on rows per page change
  };

  const handlePageChange = (direction: "next" | "prev") => {
    setCurrentPage((prev) =>
      direction === "next" ? prev + 1 : prev - 1
    );
  };

  const totalRows = users.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentPageData = users.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex ml-3 mt-10 flex-col">
      <table className="w-full bg-white rounded-2xl shadow-md border-none">
        <thead className="text-base text-gray-700 bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left hidden">User Role ID</th>
            <th className="py-3 px-4 text-left">User Role Name</th>
            <th className="py-3 px-4 text-left">Role Description</th>
            <th className="py-3 px-4 text-left">Selected Privileges</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentPageData.map((user) => (
            <tr
              key={user.id}
              className={`text-sm cursor-pointer ${
                selectedRow === user.id ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
              onClick={() => handleRowClick(user.id)}
            >
              <td className="py-3 px-4 hidden">{user.id}</td>
              <td className="py-3 px-4">{user.roleName}</td>
              <td className="py-3 px-4">{user.roleDescription}</td>
              <td className="py-3 px-4">{user.selectedPrivileges.join(", ")}</td>
              <td className="py-3 px-4">
                <div className="flex justify-center items-center gap-3">
                  <Link href={`/dashboard/users/UserRoleDetails/${user.id}`}>
                    <CiViewList className="cursor-pointer text-blue-500" />
                  </Link>
                  <Link
                    href={`/dashboard/users/UserRoleDetails/UpdateUserRoleDetails/${user.id}`}
                  >
                    <FaEdit className="cursor-pointer text-green-400 opacity-60" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
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
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
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
