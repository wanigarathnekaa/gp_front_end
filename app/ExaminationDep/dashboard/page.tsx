import React from 'react';
import { Navbar,ExamSidebar,CloakCountCard } from '@/components/index';



function page() {
  return (
    <div className='bg-[#D6D6FF]'>
        <Navbar />
        <ExamSidebar />

        <h1 className='text-3xl font-bold pl-96 pt-24'>Examination Department Dashboard</h1>

        <div className='flex flex-row justify-center pl-64 mt-16'>

          <CloakCountCard 
            title='Total Cloaks' 
            countSmall={100}
            countMedium={200}
            countLarge={300}
            description='Total number of cloaks in the system' 
            wide />

          <CloakCountCard 
            title='Cloaks Issued' 
            countSmall={150}
            countMedium={250}
            countLarge={350}
            description='Total number of cloaks in the system' 
            wide />

          <CloakCountCard 
            title='Cloaks Returned' 
            countSmall={130}
            countMedium={230}
            countLarge={330}
            description='Total number of cloaks in the system' 
            wide />
        </div>
        
        
        
    </div>
  )
}

export default page