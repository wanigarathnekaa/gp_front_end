"use client";
import React from 'react'
import { useState } from 'react';
import { CloakBarChart, ExamSidebar, Navbar,Title, Card, AddCloakForm} from '@/components/index'
import { IoMdAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { addOrUpdateCloak, getCloakCount } from '@/actions/Cloak';

const Cloak = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'update'>('add');
  const [initialCounts, setInitialCounts] = useState<{ small: number; medium: number; large: number } | null>(null);

  const handleOpenForm =async(mode: "add" | "update") =>{
    setFormMode(mode);

    if (mode === "update") {
      try {
        const data = await getCloakCount();
        setInitialCounts({
          small: data.smallCount,
          medium: data.mediumCount,
          large: data.largeCount,
        });
      } catch (error) {
        console.error("Failed to fetch cloak counts:", error);
      }
    }
    setIsFormOpen(true);
  }

  const handleCloseForm = () =>{
    setIsFormOpen(false);
    setInitialCounts(null);
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, data: {name: string; medium: number; small: number; large: number }) => {
    // console.log(counts);
    e.preventDefault();
    try{
      const existingCloak = await getCloakCount();

      if(formMode === "update" && !existingCloak){
        console.log("No existing cloak counts to update");
        return;
      } else if(formMode === "update" && existingCloak){
        const result = await addOrUpdateCloak({
          name: "cloakCounts",
          smallCount: formMode === "update"  && initialCounts ? data.small  : data.small,
          mediumCount: formMode === "update"  && initialCounts ? data.medium  : data.medium,
          largeCount: formMode === "update" && initialCounts ? data.large  : data.large, 
        });

        console.log("Cloak added:", result);
      } else if(formMode === "add"){
        const result = await addOrUpdateCloak({
          name: "cloakCounts",
          smallCount: existingCloak  ?   existingCloak.smallCount + data.small : data.small,
          mediumCount: existingCloak  ?  existingCloak.mediumCount + data.medium : data.medium,
          largeCount: existingCloak  ? existingCloak.largeCount + data.large : data.large,
        });
        console.log("Cloak added:", result);
      }

      

      // const result = await addOrUpdateCloak(data);
      
      setIsFormOpen(false);
      
      }catch(error){
      console.log("Failed to add cloak counts", error);
    }
    
  };

  return (
    <div className='w-full'>
      <Navbar/>
      <ExamSidebar/>

      <div className='ml-72 md:ml-64 lg:ml-72 bg-blue-50 flex flex-col min-h-screen'>
          <div className='ml-3 mt-8'>
            <Title text='Cloak Distribution'/>
          </div>

          <div className="flex items-center  mt-4 ml-3 p-6 gap-6 ">
          

            <Card
              title= "Add New Cloak"  
              description='Add new cloak to the system'
              icon={IoMdAddCircle }
              onclick={() => handleOpenForm('add')}
            />

            <Card
              title= "Update Cloak"  
              description='Update existing cloak in the system'
              icon={MdOutlineSecurityUpdate }
              onclick={() => handleOpenForm('update')}
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
                      mode={formMode}
                      initialCounts={initialCounts || { small: 0, medium: 0, large: 0 }}
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