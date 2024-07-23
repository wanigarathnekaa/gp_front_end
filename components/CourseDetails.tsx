"use client";
import React from 'react'
import { useState } from 'react'; 
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { MdAnnouncement } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";

interface CourseDetailsProps {
    courseName: string;
    date: string;
}
const CourseDetails = ({courseName, date}:CourseDetailsProps) => {

    const [isFormDone, setIsFormDone] = useState(false);
    const [showAnnouncement, setShowAnnouncement] = useState(true);
    const [showFeedback, setShowFeedback] = useState(true);

    const toggleFormDone = () => setIsFormDone(!isFormDone);
    const toggleAnnouncements = () => setShowAnnouncement(!showAnnouncement);
    const toggleFeedback = () => setShowFeedback(!showFeedback);
    return (
        <div className='p-8 mt-10 bg-[#F1F5F9] min-h-screen rounded-lg shadow-lg w-full max-w-2xl'>
            <div className='mt-8 items-center justify-center text-center'>
                <h1 className='text-3xl font-bold text-gray-800'>
                    {courseName}
                </h1>
            </div>

            <div className='mt-10'>
                <div className='flex items-center p-4   cursor-pointer hover:bg-gray-100 ' onClick={toggleAnnouncements}>
                    <h1 className='text-xl font-semibold flex-grow'>General</h1>
                    {showAnnouncement ? (
                        <AiOutlineUp className='text-gray-600 h-4 w-4'/>
                    ):(
                        <AiOutlineDown className='text-gray-600 h-4 w-4'/>
                    )}
                </div>


                {showAnnouncement &&(
                    <div className='mt-4  flex items-center p-4 bg-white rounded-lg shadow-md w-full cursor-pointer hover:text-blue-500  transition-transform hover:scale-100'>
                        <MdAnnouncement className='text-red-500 h-6 w-6 mr-4'/>
                        <span >Announcements</span>
                    </div>

                )}
                
            </div>
            
            <div className='mt-14'>
                <div className='flex items-center p-4   cursor-pointer hover:bg-gray-100 ' onClick={toggleFeedback}>
                    <h1 className='text-xl font-semibold text-gray-800  flex-grow'>{date}</h1>
                    {showFeedback ? (
                        <AiOutlineUp className='text-gray-600 h-4 w-4'/>
                    ):(
                        <AiOutlineDown className='text-gray-600 h-4 w-4'/>
                    )}
                </div>

                {showFeedback &&(
                    <div className='mt-8 flex items-center p-4 bg-white rounded-lg shadow-md w-full cursor-pointer hover:text-blue-500 transition-transform hover:scale-100' onClick={toggleFormDone}>
                        <SiGoogleforms className='text-blue-500 h-6 w-6 mr-4'/>

                        <label htmlFor ="feedbackCheckbox" className={`flex-grow ${isFormDone ? 'line-through text-gray-400' : ''}`} >
                            Student feedback collection form
                        </label>

                        <input
                            type="checkbox"
                            id='feedbackCheckbox'
                            checked={isFormDone}
                            onChange={toggleFormDone}
                            className='h-6 w-6 text-blue-600 border-gray-300 rounded-md focus:ring-blue-500'
                        />
                    </div>
                )}

                
            </div>
            
        </div>
    )
}

export default CourseDetails