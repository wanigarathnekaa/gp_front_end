"use client";
import React, { useState, useEffect } from "react";
import { StudentRanking, Navbar, Sidebar, Title, SearchBar, StudentNavbar } from "@/components/index";
import Breadcrumbs from "@/components/Breadcrumbs";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");

  // Current user to
  // const currentUser = { name: 'Mona Nelson', indexNo: 2100814, points: 5 }; 
  // const currentUser =  { name: 'Alice Johnson', indexNo: 2100802, points: 105 }; 
  // const currentUser = { name: 'Dana Evans', indexNo: 2100805, points: 75 }; 


  const handleSearch = (searchTerm: string) => {
    const filteredUsers = students.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.indexNo.toString().includes(searchTerm.toLowerCase()) ||
      user.points.toString().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const getRankMessage = (user: any) => {
    const rank = users.findIndex((u) => u.indexNo === user.indexNo) + 1;
    if (rank === 1) {
      return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-yellow-400 text-3xl">Congratulations, you're the winner!</h1>
            <p className="font-medium mt-5 text-gray-600 text-lg">Please collect your gift couture from the QAC.</p>
        </div>
      );
    } else if (rank <= 10) {
      return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-green-400 text-3xl">You're in the top 10 list!</h1>
            <p className="font-medium mt-5 text-gray-600 text-lg">Your rank is {rank}. Few more to win the prize.</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-blue-500 text-3xl">Fill out your forms and win the prize.</h1>
            <p className="font-medium mt-5 text-gray-600 text-lg">Your current rank is {rank}.</p>
        </div>
      );
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full">
      <StudentNavbar />

      <div className='mt-12 flex flex-col min-h-screen px-20 bg-blue-50 py-10 justify-center'>
        <div className="flex items-center mb-4 mt-10 justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mt-9 flex flex-col justify-center items-center">
          <div className="mb-6 p-5 bg-white shadow-md rounded-lg w-full max-w-6xl">
            <h2 className="text-xl font-semibold text-center">
              {getRankMessage(currentUsers)}
            </h2>
          </div>

          <StudentRanking students={currentUsers} />

          <div className="flex justify-center mt-6">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg mr-2"
            >
              Prev
            </button>
            <button
              onClick={() => currentPage < Math.ceil(users.length / usersPerPage) && paginate(currentPage + 1)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            >
              Next
            </button>
          </div>
          <div className="text-center mt-4">
            <span>{`Page ${currentPage} of ${Math.ceil(users.length / usersPerPage)}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
