"use client";
import { AssignReviewForm, Navbar } from '@/components'
import React, { useState} from 'react'

const AssignNew = () => {

    const [formData, setFormData] = useState({
        reviewer: '',
        reviewee: '',
        formUrl: ''
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

            <div className='mt-12 flex items-center justify-center  min-h-screen bg-[#D6D6FF]'>
                
                    <AssignReviewForm
                        reviewer={formData.reviewer}
                        reviewee={formData.reviewee}
                        formUrl={formData.formUrl}
                        onInputChange={handleInputChange}
                        onUrlChange={handleUrlChange}
                        onSubmit={handleSubmit}
                    />
               
                
            </div>
        </div>
    )
}

export default AssignNew