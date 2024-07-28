"use client";
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

interface Course {
  title: string;
  link: string;
  image: string; 
  submittedAt?:string
}

interface CoursesProps {
  courses: Course[];
}

const Courses = ({ courses }: CoursesProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} link={course.link} image={course.image} submittedAt={course.submittedAt} />
      ))}
    </div>
  );
};

export default Courses;
