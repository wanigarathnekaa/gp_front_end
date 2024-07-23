import { Sidebar, Navbar, Card, Calendar, TaskList, Title} from '@/components';
import { CiViewList } from "react-icons/ci";
import { HiUserAdd } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import Link from 'next/link';

const CreateUsers = () => {
  return (
    <div className='full'>
        <Navbar/>
        <Sidebar/>

        <div className="mt-14 ml-64 flex flex-row min-h-screen">
            <div className="w-3/4 px-20 py-20  bg-[#D6D6FF]">
                <div className="text-3xl font-bold  mb-4">
                    <h1 className='mb-10 ml-3 mt-5 '>
                        User roles
                    </h1>
                </div>

                <div className="flex flex-col mt-10">

                    <Link href='/dashboard/users/create-new/view-user/staff'>
                        <Card
                            title ="View user roles"
                            description='View existing user roles'
                            icon={CiViewList}
                        />
                    </Link>

                    <Card
                        title ="Create new"
                        description='Create new user roles'
                        icon={HiUserAdd}
                    />

                </div>
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

export default CreateUsers