"use client";
import React from "react";
import { Navbar, Calendar, TaskList, Title } from "@/components/index";
import LecturerSidebar from "@/components/LecturerSidebar";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa";
import LecturerCard from "@/components/LecturerCard";

function LecturerDashboard() {
  return (
    <div className="w-full">
      <Navbar />

      <LecturerSidebar />

      <div className="ml-64 flex flex-row min-h-screen">
        {/* Main Content */}
        <div className="w-3/4 px-20 py-10 bg-blue-50">
          {/* Welcome Section */}
          {/* <div className="text-4xl font-bold mb-4">
            <h1 className="mb-10 ml-3 text-gray-800">Hi there!</h1>
            <h2 className="font-normal mt-2 text-3xl ml-3">
              Welcome to your dashboard
            </h2>
          </div> */}

          <Title text="Lecturer Dashboard"/>

          {/* My Courses Section */}
          <div className="text-2xl font-bold text-gray-800">
            <h3 className="mt-10 mb-3 ml-3">My Courses</h3>
          </div>

          <div className="flex flex-col">
            <Link href="/courses/middleware-architecture">
              <LecturerCard
                ModuleTitle="Middleware Architecture"
                ModuleCode="SCS3203/IS3208"
                ModuleDescription="Semester 1"
              />
            </Link>

            <Link href="/courses/software-project-management">
              <LecturerCard
                ModuleTitle="Software Project Management"
                ModuleCode="SCS3210"
                ModuleDescription="Semester 1"
              />
            </Link>

            <Link href="/courses/compiler-theory">
              <LecturerCard
                ModuleTitle="Compiler Theory"
                ModuleCode="SCS3214/IS3211"
                ModuleDescription="Semester 1"
              />
            </Link>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="w-1/4 p-4 bg-[#EEF2FF]">
          <Calendar />
          <TaskList
            tasks={["Task 1", "Task 2", "Task 3", "Task 4"]}
            icon={FaRegClock}
          />
        </div>
      </div>
    </div>
  );
}

export default LecturerDashboard;
