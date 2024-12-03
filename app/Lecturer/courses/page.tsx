"use client";
import React from "react";
import Link from "next/link";

import LecturerSidebar from "@/components/LecturerSidebar";
import { Navbar, Title } from "@/components/index";
import LecturerCard from "@/components/LecturerCard";
import TaskManager from "@/components/TaskManager";
import Breadcrumbs from "@/components/Breadcrumbs";

const courses = () => {
  return (
    <div className="w-full">
      <LecturerSidebar />
      <Navbar />
      <div className="ml-64 flex flex-row min-h-screen">
        <div className="w-3/4 px-20 py-10 bg-blue-50">
          <Title text="My Courses" />
          <Breadcrumbs/>
          <div className="flex flex-col mt-8">
            <LecturerCard
              ModuleTitle="Middleware Architecture"
              ModuleCode="SCS3203/IS3208"
              ModuleDescription="Semester 1"
            />
            <LecturerCard
              ModuleTitle="Middleware Architecture"
              ModuleCode="SCS3203/IS3208"
              ModuleDescription="Semester 1"
            />
            <LecturerCard
              ModuleTitle="Middleware Architecture"
              ModuleCode="SCS3203/IS3208"
              ModuleDescription="Semester 1"
            />
          </div>
        </div>
        <TaskManager />
      </div>
    </div>
  );
};

export default courses;
