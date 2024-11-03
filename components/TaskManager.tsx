import React from 'react';
import Calendar from './Calendar';
import TaskList from './TaskList';
import { FaUser } from 'react-icons/fa';

const TaskManager = () => {
  return (
    <div className='flex flex-col mt-14 justify-start items-center w-1/4 p-10 shadow-lg'>
      <Calendar />
      <TaskList tasks={["hai", "kohomada"]} icon={FaUser} />
    </div>
  );
}

export default TaskManager;
