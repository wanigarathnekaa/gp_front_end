"use client";
import React from 'react'
import { useState } from 'react';
import { CloakBarChart, ExamSidebar, Navbar,Title, Card, AddCloakForm} from '@/components/index'
import { IoMdAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { addCloak } from '@/actions/Cloak';

const Cloak = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddCloakClick =() =>{
    setIsFormOpen(true);
  }

  const handleCloseForm = () =>{
    setIsFormOpen(false);
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, counts: { medium: number; small: number; large: number }) => {
    // console.log(counts);
    e.preventDefault();
    try{
      const result = await addCloak({
        smallCount: counts.small,
        mediumCount: counts.medium,
        largeCount: counts.large,

      });
      console.log("Cloak added:", result);
      setIsFormOpen(false);
    }
    catch(error){
      console.log("Failed to add cloak counts", error);
    }
    
  };

  return (
    <div className='w-full'>
      <Navbar/>
      <ExamSidebar/>

      <div className='mt-12 ml-72 md:ml-64 lg:ml-72 bg-[#EEF2FF] flex flex-col min-h-screen'>
          <div className='ml-3 mt-8'>
            <Title text='Cloak Distribution'/>
          </div>

          <div className="flex items-center  mt-4 ml-3 p-6 gap-6 ">
          

            <Card
              title= "Add New Cloak"  
              description='Add new cloak to the system'
              icon={IoMdAddCircle }
              onclick={handleAddCloakClick}
            />

            <Card
              title= "Update Cloak"  
              description='Update existing cloak in the system'
              icon={MdOutlineSecurityUpdate }
            />

            <Card
              title= "Remove Cloak"  
              description='Delete existing cloak in the system'
              icon={IoIosRemoveCircle }
            />

          </div>

          
            {isFormOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                  <div className=" relaive  w-1/2">
                    <AddCloakForm
                      onSubmit={handleSubmit}
                      closeModal={handleCloseForm}
                    />
                  </div>
              </div>
            )}

            <div className='ml-3 p-6'>
              <h2 className='text-2xl font-semibold text-gray-600 px-4'>Cloak Distribution Chart</h2>

              <div className='mt-4 ml-3 p-6'>
                <CloakBarChart />
              </div>

            </div>
        </div>
    </div>
  )
  }


export default Cloak