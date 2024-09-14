import React from 'react'
import { IconType } from 'react-icons';

interface TaskListProps {
    tasks: string[];
    icon:IconType
}


const TaskList = ({tasks, icon:Icon}:TaskListProps) => {
  return (
    <div className='bg-[#EEF2FF] border border-blue-100 rounded-xl p-4 mt-3 w-70'>
      <div className="justify-center items-center">
        <h2 className='text-lg font-semibold py-3 text-gray-900 ml-8'> Tasks List </h2>
      </div>  
        <ul >
           {tasks.map((task,index ) => (
            <li key={index}
            className='flex items-center py-3'>
              <Icon className='text-sm ml-8 mr-4 '/> 
            <p className='text-sm font-medium text-gray-700 '>{task}</p>
            </li>

           ))}
            
        </ul>
    </div>
  )
}

export default TaskList;