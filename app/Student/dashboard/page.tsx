import { StudentNavbar, Calendar, TaskList, Courses } from "@/components/index";
import Link from "next/link";
import { FaRegClock } from 'react-icons/fa';

const courses = [
    { title: "SCS 3203 - Middleware Architecture", description: "Description for Course 1", link: "", image:"/courses/feedback.png" },
    { title: "SCS 3204 - Management", description: "Description for Course 2", link: "", image:"/courses/feedback.png" },
    { title: "SCS 3207 - Software Quality Assurance", description: "Description for Course 3", link: "", image:"/courses/feedback.png" },
    { title: "SCS 3208 - Software Project Management", description: "Description for Course 3", link: "", image:"/courses/feedback.png" },
    { title: "SCS 3209 - Human Computer Interaction ", description: "Description for Course 1", link: "", image:"/courses/feedback.png" },
    { title: "SCS 3210 - System and Network Administration", description: "Description for Course 2", link: "", image:"/courses/feedback.png" },
    { title: "SCS 3214 - Group Project II", description: "Description for Course 3", link: "", image:"/courses/feedback.png" },
    
  ];

const StudentDashboard = () => {
    return (
        <div className="w-full">
            <StudentNavbar />

            <div className="mt-12  flex flex-row min-h-screen">
                <div className="w-3/4 px-20  bg-[#D6D6FF]">
                    <div className="text-3xl font-bold mb-4">
                        <h1 className="text-3xl mt-10 mb-10 ml-3 ">
                            Hi, M.L Lakshani
                        </h1>

                    </div>

                    <Link href="">
                        <Courses courses={courses}/>
                    </Link>

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