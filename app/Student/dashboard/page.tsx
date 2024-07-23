import { Navbar, Calendar, TaskList, Courses } from "@/components"
import { FaRegClock } from 'react-icons/fa';

const StudentDashboard = () => {
  return (
    <div className="w-full">
        <Navbar />

        <div className="mt-14  flex flex-row min-h-screen">
            <div className="w-3/4 px-20  bg-[#D6D6FF]">
                <div className="text-3xl font-bold mb-4">
                    <h1 className="mt-10 mb-10 ml-3 ">
                        Hi, M.L Lakshani
                    </h1>

                </div>
                <Courses/>

            </div>

            <div className="w-1/4 p-4 bg-[#EEF2FF]">
                <Calendar />
                <TaskList 
                    tasks={['Task 1', 'Task 2', 'Task 3', 'Task 4']}
                    icon = {FaRegClock} 
                />
          </div>

        </div>
    </div>
  )
}

export default StudentDashboard