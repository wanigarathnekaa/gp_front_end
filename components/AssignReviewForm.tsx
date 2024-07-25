import React from 'react'
import { Button, SubmitButton } from '@/components'

interface AssignReviewFormProps {
    
    reviewer: string;
    reviewee: string;
    formUrl: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


const AssignReviewForm = ({
    reviewer,
    reviewee,
    formUrl,
    onInputChange,
    onUrlChange,
    onSubmit
}:AssignReviewFormProps) => {

    return (
        <div className='p-8 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto '>
            <h1 className='text-2xl text-gray-500 font-bold mb-6 text-center'>Assign new peer reviewer</h1>

            <form onSubmit={onSubmit} action={formUrl}>
                

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
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="formUrl">
                        Form URL
                    </label>
                    <input
                        type="text"
                        id='formUrl'
                        name='formUrl'
                        value={formUrl}
                        onChange={onUrlChange}
                        className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder="Enter form URL"
                    />
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