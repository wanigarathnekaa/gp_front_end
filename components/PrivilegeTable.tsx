"use client";

import { FaEdit } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

interface PrivilegeTableProps {
  privilegeId: string;
  privilegeName: string;
  assignedTo: string;
}

interface Props {
  users: PrivilegeTableProps[];
}

const PrivilegeTable = ({ users }: Props) => {
  const [selectedRowData, setSelectedRowData] = useState<PrivilegeTableProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (user: PrivilegeTableProps) => {
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
            <th className="border-b border-gray-200 py-3 px-4">Assigned To</th>
            <th className="border-b border-gray-200 py-3 px-4"></th>
          </tr>
        </thead>

        <tbody className="text-sm text-gray-500">
          {users.map((user, index) => (
            <tr key={index} className="text-center cursor-pointer">
              <td className="border-b border-gray-200 py-3 px-4">{user.privilegeId}</td>
              <td className="border-b border-gray-200 py-3 px-4">{user.privilegeName}</td>
              <td className="border-b border-gray-200 py-3 px-4">{user.assignedTo}</td>
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

      {/* Modal */}
      {isModalOpen && selectedRowData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h2 className="text-lg font-semibold mb-2">Update Privilege</h2>
            <h6 className="text-sm opacity-50">Privilege:</h6>
            <h1 className="text-lg font-semibold mb-2">{selectedRowData.privilegeName}</h1>
            <h6 className="text-sm opacity-50 mb-2">Assigned To:</h6>

            {/* List with checkboxes */}
            <ul className="mt-3 space-y-2">
              {["Students", "Admin", "Lecturers", "Director"].map((user, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <label htmlFor={`checkbox-${idx}`} className="text-sm text-gray-700">
                    {user}
                  </label>
                  <input
                    type="checkbox"
                    id={`checkbox-${idx}`}
                    defaultChecked
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                </li>
              ))}
            </ul>

            
            {/* Add your form or additional content here */}
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivilegeTable;
