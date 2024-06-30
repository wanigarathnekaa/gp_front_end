import React from 'react'
import { IconType } from 'react-icons';

interface TaskListProps {
    tasks: string[];
    icon:IconType
}


const TaskList = ({tasks, icon:Icon}:TaskListProps) => {
  return (
    <div className='bg-white shadow-md rounded p-4 mt-8 w-70'>
        <h2 className='text-lg font-semibold ml-10  mb-2'>Schedule Tasks </h2>
        <ul >
           {tasks.map((task,index ) => (
            <li key={index}
            className='flex items-center py-2'>
              <Icon className='text-sm ml-8 mr-4 '/> 
            <p className='text-sm font-medium '>{task}</p>
            </li>

           ))}
            
        </ul>
    </div>
  )
}

export default TaskList;