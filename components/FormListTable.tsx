"use client";

import { getStudentCourses } from "@/actions/course";
import { getStudentDetailsByRegNumber } from "@/actions/studentDetails";
import { useAuth } from "@/context/AuthProvider";
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
  link?: string; // Optional in case it's not provided
}

interface CourseRequest {
  regNumber: string;
  year: string;
  semester: string;
}

const FormListTable: React.FC = () => {
  const { decodedToken } = useAuth();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formsData, setFormsData] = useState<FormData[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<FormData | null>(null);

  useEffect(() => {
    if (!decodedToken?.sub) return;

    const fetchUser = async () => {
      try {
        const response = await getStudentDetailsByRegNumber(decodedToken.sub);
        setName(response.name);
        setYear(response.year);
        setSemester(response.semester);
      } catch (error) {
        console.error("Error fetching student details:", error);
        setError("Failed to fetch student details.");
      }
    };

    fetchUser();
  }, [decodedToken]);

  useEffect(() => {
    if (!decodedToken?.sub || !year || !semester) return;

    const fetchCourses = async () => {
      setLoading(true);
      try {
        const courseRequest: CourseRequest = {
          regNumber: decodedToken.sub,
          year,
          semester,
        };
        const response = await getStudentCourses(courseRequest);

        const formattedCourses = response.map((course: any) => ({
          moduleName: course.moduleName,
          moduleCode: course.moduleCode,
          lecturers: course.lecturers || [],
          formName: course.formName,
          distributedAt: course.distributedAt,
          status: course.status,
          dueDate: course.dueDate,
          isNew: course.isNew || false,
          link: `${window.location.origin}/dashboard/submit/${course.link}`|| "#",
        }));

        setFormsData(formattedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [decodedToken?.sub, year, semester]);

  const getStatusDetails = (status: string) => {
    switch (status) {
      case "Filled":
        return { icon: <AiFillCheckCircle className="text-green-500" />, color: "text-green-600" };
      case "Not Filled":
        return { icon: <AiFillExclamationCircle className="text-red-500" />, color: "text-red-600" };
      case "Due Today":
        return { icon: <AiOutlineClockCircle className="text-blue-500" />, color: "text-blue-600" };
      default:
        return { icon: null, color: "text-gray-600" };
    }
  };

  const isDueToday = (dueDate: string) => {
    const today = new Date();
    const dueDateObj = new Date(dueDate);
    return dueDateObj.toDateString() === today.toDateString();
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
    <div className="p-4 w-10/12 mt-12">
      <table className="w-full bg-white rounded-2xl shadow-md border-none text-gray-600">
        <thead>
          <tr>
            <th className="border-b border-gray-200 py-3 px-4">Row No</th>
            <th className="border-b border-gray-200 py-3 px-4">Module</th>
            <th className="border-b border-gray-200 py-3 px-4">Form Link</th>
            <th className="border-b border-gray-200 py-3 px-4">Distributed At</th>
            <th className="border-b border-gray-200 py-3 px-4">Status</th>
            <th className="border-b border-gray-200 py-3 px-4">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((form, index) => {
            const statusDetails = isDueToday(form.dueDate)
              ? getStatusDetails("Due Today")
              : getStatusDetails(form.status);

            return (
              <tr key={index} className="border border-gray-200">
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
                <td className={`py-3 px-4 flex items-center gap-2 ${statusDetails.color}`}>
                  {statusDetails.icon}
                  <span>{form.status}</span>
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

export default FormListTable;
