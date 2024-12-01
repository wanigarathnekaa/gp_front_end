"use client";
import { AllCourses } from "@/actions/course"; // Function to fetch data from backend
import { StudentNavbar, Calendar, TaskList, Courses } from "@/components/index";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { FaRegClock } from 'react-icons/fa';
import { useEffect, useState } from "react";

const StudentDashboard = () => {
    const { decodedToken } = useAuth();
    const [courses, setCourses] = useState([]);

    console.log("Decoded Token:", decodedToken);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await AllCourses(); 
                console.log("Courses:", response);
                const formattedCourses = response.map((course: any) => ({
                    title: `${course.courseCode} - ${course.courseName}`, 
                    description: course.description || "No description available", 
                    link: `/Student/dashboard/${course.id}`, 
                    image: course.image || "/courses/feedback.png", 
                }));
                setCourses(formattedCourses);
                console.log("Formatted Courses:", formattedCourses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="w-full">
            <StudentNavbar />

            <div className="mt-12 flex flex-row min-h-screen">
                <div className="w-3/4 px-20 bg-[#EEF2FF]">
                    <div className="text-3xl font-bold mb-4">
                        <h1 className="text-3xl mt-10 mb-10 ml-3 ">
                            Hi, {decodedToken?.sub || "Student"}!
                        </h1>
                    </div>

                    {/* Render Courses Component */}
                    <Courses courses={courses} />
                </div>

                <div className="w-1/4 p-4 bg-[#EEF2FF]">
                    <Calendar />
                    <TaskList 
                        tasks={['Task 1', 'Task 2', 'Task 3', 'Task 4']}
                        icon={FaRegClock} 
                    />
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
