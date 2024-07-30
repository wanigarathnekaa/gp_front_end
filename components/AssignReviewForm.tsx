import React from 'react'
import { Button, SubmitButton } from '@/components/index'

interface AssignReviewFormProps {
    
    reviewer: string;
    reviewee: string;
    formType: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    closeModal: () => void;
}


const AssignReviewForm = ({
    reviewer,
    reviewee,
    formType,
    onInputChange,
    onUrlChange,
    onSubmit,
    closeModal

}:AssignReviewFormProps) => {

    return (
        <div className='p-8 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto relative'>
            <button className="absolute top-2 right-2 text-red-500 font-bold  hover:text-gray-800" onClick={closeModal}>
                X
            </button>

            <h1 className='text-2xl text-gray-500 font-bold mb-6 text-center'>Assign new peer reviewer</h1>

            <form onSubmit={onSubmit} action={formType}>
                

                <div className='mb-5'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="reviewer">
                        Reviewer
                    </label>
                    <input
                        type="text"
                        id='reviewer'
                        name='reviewer'
                        value={reviewer}
                        onChange={onInputChange}
                        className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>

                <div className='mb-5'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="reviewee">
                        Reviewee
                    </label>

                    <input
                        type="text"
                        id='reviewee'
                        name='reviewee'
                        value={reviewee}
                        onChange={onInputChange}
                        className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>

                <div className='mb-5'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="formType">
                        Form Type
                    </label>
                    <select
                        
                        id='formType'
                        name='formType'
                        value={formType}
                        onChange={onInputChange}
                        className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
                    >

                        <option value='' className='py-2 px-3 bg-white text-gray-700 hover:bg-gray-200'>Select a form</option>
                        <option value='peer-to-peer-form-1' className='py-2 px-3 bg-white text-gray-700 hover:bg-gray-200'>Peer-to-peer form 1</option>
                        <option value='peer-to-peer-form-2' className='py-2 px-3 bg-white text-gray-700 hover:bg-gray-200'>Peer-to-peer form 2</option>
                        <option value='peer-to-peer-form-3' className='py-2 px-3 bg-white text-gray-700 hover:bg-gray-200'>Peer-to-peer form 3</option>
                    </select>
                </div>

               
                <div className=' mt-14 flex justify-end space-x-4'>
                    <Button/>
                    <SubmitButton text="Assign" />
                </div>
            </form>
        </div>
    )
}

export default AssignReviewForm