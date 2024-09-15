"use client";

import React, { useState } from 'react';
import { Sidebar, Navbar, Title } from '@/components/index';
import AssignedPrivilegesTable from '@/components/AssignedPrivilegesTable';
import Breadcrumbs from '@/components/Breadcrumbs';
import {SearchBar} from '@/components/index';

const usersData = [
  {
    userId: "0041",
    userName: "Dr.Ajantha Athukorala",
    mobileNo: ['0715447556'], 
    privileges: ["Form creation", "view analytics"], 
    assignedDate: '2024-07-01',
    assignedBy: 'QAC'
  },

  {
    userId: "0061",
    userName: "Mr. Roshan Abeyweera",
    mobileNo: ['0715447556'], 
    privileges: ["Form creation", "view analytics"], 
    assignedDate: '2024-07-01',
    assignedBy: 'QAC'
  },

  {
    userId: "1556",
    userName: "Union member",
    mobileNo: ['0715447556'], 
    privileges: ["Form creation", "view analytics"], 
    assignedDate: '2024-07-01',
    assignedBy: 'QAC'
  },

  {
    userId: "1",
    userName: "Post graduate head",
    mobileNo: ['0715447556'], 
    privileges: ["Form creation", "view analytics"], 
    assignedDate: '2024-07-01',
    assignedBy: 'QAC'
  },
  
];

const AssignedPrivileges = () => {
  const [users, setUsers] = useState(usersData);

  const handleSearch =(searchText : string) => {
    const filteredUsers = usersData.filter(user =>
    user.userId.toLowerCase().includes(searchText.toLowerCase()) ||
    user.userName.toLowerCase().includes(searchText.toLowerCase()) 
    );

    setUsers(filteredUsers);
};

  return (
    <div className="w-full">
      <Navbar />
      <Sidebar />

      <div className=' mt-12 ml-64 flex flex-col min-h-screen bg-[#EEF2FF] px-20 py-20'>
        <Title text="Assigned privileges" />
        <Breadcrumbs />
        <SearchBar onSearch={handleSearch}/>
        <AssignedPrivilegesTable users={users} />
      </div>
    </div>
  );
};

export default AssignedPrivileges;
