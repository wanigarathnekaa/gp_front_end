"use client";
import { AllCourses, getFilledCourses, getNotFilledCourses } from "@/actions/course";
import { StudentNavbar, Calendar, TaskList, Courses } from "@/components/index";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getStudentDetailsByRegNumber } from "@/actions/studentDetails";

interface CourseRequest {
  regNumber: string;
  year: string;
  semester: string;
}

const StudentDashboard = () => {
  const { decodedToken } = useAuth();
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log("Decoded Token:", decodedToken);

  useEffect(() => {
    if (!decodedToken?.sub) return;

    const fetchUser = async () => {
      try {
        const response = await getStudentDetailsByRegNumber(decodedToken?.sub);
        setName(response.name);
        setYear(response.year);
        setSemester(response.semester);
        console.log("Student Details:", response);
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
        console.log("Course Request:", courseRequest);

        const response = await getNotFilledCourses(courseRequest);
        console.log("Courses:", response);

        const formattedCourses = response.map((course: any) => ({
          title: `${course.courseCode} - ${course.courseName}`,
          description: course.description || "No description available",
          link: `${window.location.origin}/dashboard/submit/${course.formUrl}`,
          image: course.image || "/courses/feedback.png",
        }));

        setCourses(formattedCourses);
        console.log("Formatted Courses:", formattedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [decodedToken?.sub, year, semester]);

  return (
    <div className="w-full">
      <StudentNavbar />

      <div className="mt-12 flex flex-row min-h-screen px-20 bg-blue-50 py-10 justify-center">
        <div className="w-full max-w-6xl">
          <div className="text-3xl font-bold mb-4">
            <h1 className="text-3xl mt-10 mb-10 ml-3">
              Hi {name || "Student"}!
            </h1>
          </div>

          {loading ? (
            <p>Loading courses...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <Courses courses={courses} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
