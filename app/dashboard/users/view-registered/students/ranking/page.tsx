"use client";
import React, { useState } from "react";
import { StudentRanking, Navbar, Sidebar, Title, SearchBar } from "@/components/index";

const students = [
  { name: 'Alice Johnson', indexNo: 2100802, points: 105 },
  { name: 'Bob Brown', indexNo: 2100803, points: 95 },
  { name: 'Charlie Davis', indexNo: 2100804, points: 85 },
  { name: 'Dana Evans', indexNo: 2100805, points: 75 },
  { name: 'Evan Foster', indexNo: 2100806, points: 65 },
  { name: 'Fiona Green', indexNo: 2100807, points: 55 },
  { name: 'George Harris', indexNo: 2100808, points: 45 },
  { name: 'Hannah Irwin', indexNo: 2100809, points: 40 },
  { name: 'Ian Jackson', indexNo: 2100810, points: 40 },
  { name: 'Jill King', indexNo: 2100811, points: 35 },
  { name: 'Karl Lewis', indexNo: 2100812, points: 10 },
  { name: 'Liam Martin', indexNo: 2100813, points: 5 },
  { name: 'Mona Nelson', indexNo: 2100814, points: 5 },
];


const Ranking = () => {
  const [users, setUsers] = useState(students);

  const handleSearch = (searchTerm: string) => {
    const filteredUsers = students.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.indexNo.toString().includes(searchTerm.toLowerCase()) ||
      user.points.toString().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  return (
    <div className="w-full">
      <Navbar />
      <Sidebar />
      <div className='mt-14 ml-64 flex flex-col min-h-screen bg-[#EEF2FF] p-4'>
        <Title text='Student Ranking' />
        <div className="flex items-center mb-4 mt-8 justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="mt-9  flex flex-col justify-center items-center">
          <StudentRanking students={users} />
        </div>
      </div>
    </div>
  );
};

export default Ranking;
