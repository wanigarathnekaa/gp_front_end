"use client";
import React, { useState } from "react";
import { StudentRanking, Navbar, Sidebar, Title, SearchBar } from "@/components/index";

const students = [
  { name: 'John Doe', indexNo: 2100798, points: 100 },
  { name: 'Jane Doe', indexNo: 2100799, points: 90 },
  { name: 'John Smith', indexNo: 2100800, points: 80 },
  { name: 'Jane Smith', indexNo: 2100801, points: 70 },
  { name: 'John Doe', indexNo: 2100798, points: 60 },
  { name: 'Jane Doe', indexNo: 2100799, points: 50 },
  { name: 'John Smith', indexNo: 2100800, points: 40 },
  { name: 'Jane Smith', indexNo: 2100801, points: 30 },
  { name: 'John Doe', indexNo: 2100798, points: 20 },
  { name: 'Jane Doe', indexNo: 2100799, points: 10 },
  { name: 'Jane Doe', indexNo: 2100799, points: 5 },
  { name: 'Jane Doe', indexNo: 2100799, points: 5 },
  { name: 'Jane Doe', indexNo: 2100799, points: 5 },
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
