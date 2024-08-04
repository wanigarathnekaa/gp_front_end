"use client";
import { AssignReviewForm, Navbar } from '@/components/index'
import React, { useState} from 'react'

const AssignNew = () => {

    const [formData, setFormData] = useState({
        reviewer: '',
        reviewee: '',
        formType: ''
    });
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
      };

    return (
        <div className='w-full'>
            <Navbar/>

            <div className='mt-12 flex items-center justify-center  min-h-screen bg-[#EEF2FF]'>
                
                    <AssignReviewForm
                        reviewer={formData.reviewer}
                        reviewee={formData.reviewee}
                        formType={formData.formType}
                        onInputChange={handleInputChange}
                        onUrlChange={handleUrlChange}
                        onSubmit={handleSubmit}
                    />
               
                
            </div>
        </div>
    )
}

export default AssignNew