import React from 'react';
import { IconType } from 'react-icons';

interface TaskListProps {
    tasks: string[];
    icon: IconType;
}

const TaskList = ({ tasks, icon: Icon }: TaskListProps) => {
  return (
    <div className='flex flex-col items-center w-full border-t border-gray-300 p-4'>
      <div className="w-full flex justify-center">
        <h2 className='text-lg font-semibold py-3 text-gray-900'>Tasks List</h2>
      </div>  
      <ul className="w-full px-8">
        {tasks.map((task, index) => (
          <li key={index} className='flex items-center py-3'>
            <Icon className='text-sm mr-4' /> 
            <p className='text-sm font-medium text-gray-700'>{task}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
