"use client";
import React, {useEffect} from 'react'
import { CancelButtonNew, SubmitButton } from '@/components/index';
import { useState } from 'react';

interface AddCloakFormProps {

    onSubmit: (e: React.FormEvent<HTMLFormElement>, data: { name: string; medium: number; small: number; large: number }) => void;
    closeModal: () => void;
    mode: 'add' | 'update';
    initialCounts?: { small: number; medium: number; large: number };
}

const AddCloakForm = ({
    onSubmit, 
    closeModal, 
    mode,
    initialCounts
}:AddCloakFormProps) => {

    const [smallCount, setSmallCount] = useState<number>(0);
    const [mediumCount, setMediumCount] = useState<number>(0);
    const [largeCount, setLargeCount] = useState<number>(0);

    useEffect(() => {
    if (mode === 'update' && initialCounts) {
      setSmallCount(initialCounts.small);
      setMediumCount(initialCounts.medium);
      setLargeCount(initialCounts.large);
    }
    }, [mode, initialCounts]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const{name, value} = e.target;
        if(name === 'small') setSmallCount(parseInt(value) );
        if(name === 'medium') setMediumCount(parseInt(value) );
        if(name === 'large') setLargeCount(parseInt(value) );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(e, {name: "cloakCounts", small: smallCount, medium: mediumCount, large: largeCount});
    };

    return(
        <div className='p-8 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto relative'>
            <button className="absolute top-2 right-2 text-red-500 font-bold  hover:text-gray-800" onClick={closeModal}>
                X
            </button>

            <h1 className='text-2xl text-gray-500 font-bold mb-6 text-center'>
                {mode === 'add' ? 'Add New Cloak' : 'Update Cloak Count'}
            </h1>

            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="small">
                        Small Cloaks
                    </label>
                    <input
                        type="number"
                        id='small'
                        name='small'
                        value={smallCount}
                        onChange={handleChange}
                        className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        min="0"
                    />
                </div>

                <div className='mb-5'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="medium">
                        Medium Cloaks
                    </label>
                    <input
                        type="number"
                        id='medium'
                        name='medium'
                        value={mediumCount}
                        onChange={handleChange}
                        className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        min="0"
                    />
                </div>

                <div className='mb-5'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="large">
                        Large Cloaks
                    </label>
                    <input
                        type="number"
                        id='large'
                        name='large'
                        value={largeCount}
                        onChange={handleChange}
                        className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        min="0"
                    />
                </div>

                <div className=' mt-14 flex justify-end space-x-4'>
                    <CancelButtonNew onClick={closeModal}/>
                    <SubmitButton text= {mode === "add" ? "Add" : "Update"} />
                </div>
            </form>

        </div>
    )
}

export default AddCloakForm