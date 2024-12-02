"use client";
import React from 'react'
import { Sidebar, Navbar,CloakCountCard, StudentCounterCard, ExaminationTable, Card, Title } from '@/components/index';
import { MdOutlinePreview } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { GrView } from "react-icons/gr";
import QacBarChart from '@/components/QacBarChart';
import SubTitle from '@/components/SubTitle';



const Dashboard = () => {
    return (
        <div className='w-full'>
      <Navbar/>
      <Sidebar />

      <div className='ml-72 md:ml-64 lg:ml-72 bg-blue-50 flex flex-col min-h-screen'>
        <div className='mt-10 p-6'>
          <Title text="Hi there"/>
          <SubTitle text="Welcome to your dashboard"/>
        </div>

        <div className=' mt-2 '>

              {/* Cloak Card 
          <h2 className='text-2xl font-semibold text-gray-600 ml-3  px-6'>Cloak Distribution</h2>

          <div className='p-4 mt-3 ml-3  grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>

            <CloakCountCard 
              title='Total Cloaks' 
              countSmall={100} 
              countMedium={200} 
              countLarge={300} 
              description='Total number of cloaks available'
              /> 

            <CloakCountCard
              title='Cloaks Issued' 
              countSmall={60} 
              countMedium={120} 
              countLarge={250} 
              description='Total cloaks issued'
            /> 

           <CloakCountCard
              title='Cloaks Returned'
              countSmall={40}
              countMedium={50}
              countLarge={150}
              description='Total number of cloaks returned'
           />

          </div>
       Cloak Card */}

        {/* Student Card*/}
          {/* <h2 className='text-2xl font-semibold text-gray-600 ml-3  px-6'>Qac Card</h2>
          <div className='p-4 mt-3 ml-3  grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>


          <StudentCounterCard title='Ongoing Peer Reviews ' count={5} wide/>
            <StudentCounterCard title='Open Forms' count={10} wide/>
            <StudentCounterCard title='Schedule Forms' count={5} wide/>

        </div> */}
          {/*Student over*/}


            {/*card */}
            {/* <h2 className='text-2xl font-semibold text-gray-600 ml-3  px-6'>QAC </h2> */}
            <div className="flex items-center ml-3 p-6 gap-6 ">
          

            <Card
              title= "Ongoing Peer Reviews"  
              description='View Ongoing Peer Reviews'
              icon={MdOutlinePreview }
              //onclick={}
            />

            <Card
              title= "Open Forms"  
              description='View Open Forms'
              icon={SiGoogleforms }
            />

            <Card
              title= "Schedule Forms"  
              description='View Scheduled Forms'
              icon={GrView }
            />

          </div>

          {/*card over */}


        </div>

       


        {/*graph */}

        <div className='ml-3 p-6'>
              <h2 className='text-2xl font-semibold text-gray-600 px-4'>QAC Distribution Chart</h2>

              <div className='mt-4 ml-3 p-6'>
                <QacBarChart />
              </div>

         </div>


        {/*graph over */}

    </div>
    </div>
    )
}
export default Dashboard
