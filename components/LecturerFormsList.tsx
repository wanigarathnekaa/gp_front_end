"use client";

import React, { useEffect, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";

interface Lecturer {
  name: string;
  email: string;
}

interface FormData {
  moduleName: string;
  moduleCode: string;
  lecturers: Lecturer[];
  formName: string;
  distributedAt: string;
  status: string;
  dueDate: string;
  isNew: boolean;
  formFillPercentage: number; // New field for form fill percentage
  link?: string; // Optional in case it's not provided
}

const LecturerFormsList: React.FC = () => {
  const [formsData, setFormsData] = useState<FormData[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<FormData | null>(null);

  useEffect(() => {
    const hardcodedData: FormData[] = [
      {
        moduleName: "Mathematics",
        moduleCode: "MATH101",
        lecturers: [{ name: "Dr. John Doe", email: "john.doe@example.com" }],
        formName: "Midterm Feedback",
        distributedAt: "2024-12-01",
        status: "Filled",
        dueDate: "2024-12-10",
        isNew: false,
        formFillPercentage: 85,
        link: "/dashboard/submit/math101",
      },
      {
        moduleName: "Physics",
        moduleCode: "PHYS101",
        lecturers: [{ name: "Dr. Jane Smith", email: "jane.smith@example.com" }],
        formName: "Lab Feedback",
        distributedAt: "2024-12-02",
        status: "Not Filled",
        dueDate: "2024-12-15",
        isNew: true,
        formFillPercentage: 40,
        link: "/dashboard/submit/phys101",
      },
      {
        moduleName: "Chemistry",
        moduleCode: "CHEM101",
        lecturers: [{ name: "Dr. Alice Brown", email: "alice.brown@example.com" }],
        formName: "Course Survey",
        distributedAt: "2024-12-03",
        status: "Due Today",
        dueDate: "2024-12-03",
        isNew: true,
        formFillPercentage: 60,
        link: "/dashboard/submit/chem101",
      },
    ];

    setFormsData(hardcodedData);
  }, []);

  const getFillDescription = (percentage: number) => {
    if (percentage >= 80) {
      return { text: "High", icon: <AiFillCheckCircle className="text-green-500" /> };
    } else if (percentage >= 50) {
      return { text: "Moderate", icon: <AiOutlineClockCircle className="text-blue-500" /> };
    } else {
      return { text: "Low", icon: <AiFillExclamationCircle className="text-red-500" /> };
    }
  };

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  const handleModuleClick = (module: FormData) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = formsData.slice(startIndex, endIndex);

  return (
    <div className="px-4 w-full">
      <table className="w-full bg-white rounded-2xl shadow-md border-none text-gray-600">
        <thead>
          <tr>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Row No</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Module</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Form Link</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Distributed At</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Form Fills</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((form, index) => {
            const fillDescription = getFillDescription(form.formFillPercentage);

            return (
              <tr key={index} className="border border-gray-200 text-center">
                <td className="py-3 px-4">{startIndex + index + 1}</td>
                <td className="py-3 px-4">
                  <button
                    className="underline hover:text-blue-600"
                    onClick={() => handleModuleClick(form)}
                  >
                    {form.moduleName}
                  </button>
                </td>
                <td className="py-3 px-4">
                  <a
                    href={form.link || "#"}
                    className={`${
                      form.isNew
                        ? "font-bold text-blue-600 cursor-pointer underline"
                        : "text-gray-500 cursor-pointer underline"
                    }`}
                  >
                    {form.formName}
                  </a>
                </td>
                <td className="py-3 px-4">{form.distributedAt}</td>
                <td className="py-3 px-4 flex justify-center items-center gap-2">
                  {fillDescription.icon}
                  <span>{fillDescription.text}</span>
                  <span className="ml-2 text-gray-500">({form.formFillPercentage}%)</span>
                </td>
                <td className="py-3 px-4">{form.dueDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
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
            Page {currentPage} of {Math.ceil(formsData.length / rowsPerPage)}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(formsData.length / rowsPerPage)}
            className="px-3 py-1 bg-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

       {/* Popup Modal */}
       {isModalOpen && selectedModule && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/12 gap-4">
            <h2 className="text-xl font-bold mb-4">{selectedModule.moduleName}</h2>
            <p className="mb-2">Module Code: {selectedModule.moduleCode}</p>
            <p className="mb-2">Lecturers:</p>
            <ul className="list-disc pl-5">
              {selectedModule.lecturers.map((lecturer, idx) => (
                <li key={idx}>
                  {lecturer.name} ({lecturer.email})
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LecturerFormsList;
