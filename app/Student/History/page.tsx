"use client";
import React, {useState} from 'react'
import {StudentNavbar, Courses, SearchBar} from '@/components/index'
import Link from 'next/link'

const courses = [
    { title: "SCS 2201 - Functional PRogramming",  link: "/Student/dashboard/Course1", image:"/courses/feedback.png" , submittedAt: "2024-07-01" },
    { title: "SCS 2202 - Database II", link: "/Student/dashboard/Course2", image:"/courses/feedback.png", submittedAt: "2023.09.02" },
    { title: "SCS 2203 - Rapid Application Development",  link: "/Student/dashboard/Course3", image:"/courses/feedback.png",submittedAt: "2024-07-01 " },
    { title: "SCS 2204 - Object Oriented Programming ",  link: "/Student/dashboard/Course3", image:"/courses/feedback.png",submittedAt: "2024-07-01" },
    { title: "SCS 1201 - Database I ", link: "/Student/dashboard/Course1", image:"/courses/feedback.png",submittedAt: "2024-07-01 " },
    { title: "SCS 1202 - Data Strutures and Algorithom", link: "/Student/dashboard/Course2", image:"/courses/feedback.png",submittedAt: "2024-07-01 " },
    { title: "SCS 2210- Group Project I", link: "/Student/dashboard/Course3", image:"/courses/feedback.png",submittedAt: "2024-07-01 " },
    
  ];

const FeedbackHistory = () => {
  const [searchValue, setSearchValue] = useState(courses);

  const handleSearch =(searchText:string) =>{
    const filteredCourses = courses.filter(course => 
      course.title.toLowerCase().includes(searchText.toLowerCase()) ||
      course.submittedAt.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchValue(filteredCourses);
  };

  return (
    <div className='w-full '>
        <StudentNavbar/>

        <div className='mt-12 flex flex-col items-center min-h-screen bg-[#D6D6FF]'>

            <div className='flex items-center mb-4 mt-14 ml-8'>
                <SearchBar onSearch={handleSearch}/>

            </div>

            <div className='mt-12 max-w-6xl w-full px-4 gap-8'>
                <Link href="">
                    <Courses courses={searchValue}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FeedbackHistory