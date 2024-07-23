import React from 'react'
import { FaStar } from 'react-icons/fa'

interface Student {
    name: string;
    indexNo: number;
    points: number;
}

interface StudentRankingProps {
    students: Student[];
}

const StudentRanking = ({ students } :StudentRankingProps ) => {
    const sortedStudents = students.sort((a,b) => b.points - a.points);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-2xl ">
      
      <ul className='space-y-2'>
        {sortedStudents.map((student, index) => (
          <li
            key={student.indexNo}
            className={`p-2  border rounded-lg ${
              index < 10 ? 'bg-gray-200' : 'bg-gray-50'
            }`}
          >
            <div className="grid grid-cols-12 gap-2 items-center">
              <span className='col-span-1 font-bold text-lg '>
                {index + 1}
                
              </span>
              
                <span className='col-span-4'>{student.name}</span>
                <span className='col-span-3' >{student.indexNo}</span>
                <span className='col-span-4 flex justify-between items-center'>
                  {student.points} points
                  {index <10 && <FaStar className=' text-yellow-500'/> }
                </span>

             
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentRanking