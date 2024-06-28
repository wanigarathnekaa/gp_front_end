import React from 'react'

interface TaskListProps {
    tasks: string[];
}


const TaskList = ({tasks}:TaskListProps) => {
  return (
    <div className='bg-white shadow-md rounded p-4 mt-8 w-70'>
        <h2 className='text-lg font-semibold ml-10  mb-2'>Schedule Tasks </h2>
        <ul className='ml-10'>
           {tasks.map((task,index ) => (
            <li key={index}
            className='py-2'> 
            <p className='text-sm font-medium'>{task}</p>
            </li>

           ))}
            
        </ul>
    </div>
  )
}

export default TaskList;