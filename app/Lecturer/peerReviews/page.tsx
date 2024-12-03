import React from 'react'

import LecturerSidebar from "@/components/LecturerSidebar";
import { Navbar, Title } from "@/components/index";
import TaskManager from "@/components/TaskManager";
import Breadcrumbs from "@/components/Breadcrumbs";
import PeerReviewsList from '@/components/PeerReviewsList';

const peerReviews = () => {
  return (
    <div className="w-full">
      <LecturerSidebar />
      <Navbar />
      <div className="ml-64 flex flex-row min-h-screen">
        <div className="w-3/4 px-20 py-10 bg-blue-50">
        <Title text="My Forms" />
        <Breadcrumbs/>
        <div className="flex">
           <PeerReviewsList /> 
        </div>
    </div>
      <TaskManager />
    </div>
    </div>
  )
}

export default peerReviews