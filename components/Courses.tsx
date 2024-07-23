import React from 'react';

const courses = [
    { name: 'Course 1', gradient: 'bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300' },
    { name: 'Course 2', gradient: 'bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300' },
    { name: 'Course 3', gradient: 'bg-gradient-to-r from-lime-100 via-lime-200 to-lime-300' },
    { name: 'Course 4', gradient: 'bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300' },
    { name: 'Course 5', gradient: 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300' },
    { name: 'Course 6', gradient: 'bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300' },
    { name: 'Course 7', gradient: 'bg-gradient-to-r from-green-100 via-green-200 to-green-300' },
    { name: 'Course 8', gradient: 'bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300' },
    { name: 'Course 9', gradient: 'bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300' },
    { name: 'Course 10', gradient: 'bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300' },
  ];
  
  
  
  

const Courses = () => {
  return (
    <div className="p-10 bg-[#F1F5F9] min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
            <div key={course.name} className='bg-white rounded-lg shadow-md overflow-hidden'>
                <div className={`h-48 ${course.gradient}`}></div>

                <div className='p-4'>
                    <h3 className='text-lg font-semibold'>{course.name}</h3>
                </div>
            </div>
        ))}
      </div>
    </div>
  );

};

export default Courses;
