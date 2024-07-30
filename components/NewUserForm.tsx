import React from 'react'
import { Button, SubmitButton } from '@/components/index'

interface NewUserFormProps {
    userRoleId: string;
    userRoleName: string;
    status:string[];
    createdDate : string;
    createdBy: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const NewUserForm = ({
    userRoleId,
    userRoleName,
    status,
    createdDate,
    createdBy,
    onInputChange,
    onSubmit
}:NewUserFormProps) => {
  return (

    <div className='p-8 bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto '>
        <h1 className='text-2xl text-gray-500 font-bold mb-6 text-center'>Create new user role</h1>

        <form onSubmit={onSubmit}>
            <div className='mb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="userRoleId">
                    User role ID
                </label>
                <input
                    type="text"
                    id='userRoleId'
                    name='userRoleId'
                    value={userRoleId}
                    onChange={onInputChange}
                    className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="userRoleName">
                    User role name
                </label>
                <input
                    type="text"
                    id='userRoleName'
                    name='userRoleName'
                    value={userRoleName}
                    onChange={onInputChange}
                    className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="status">
                    Status
                </label>

                <select
                    
                    id='status'
                    name='status'
                    value={status[0]}
                    onChange={onInputChange}
                    className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                >
                {status.map((option, index) =>
                    <option key={index} value={option}>
                        {option}
                    </option>
                )}
                </select>
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="createdDate">
                    Created date
                </label>
                <input
                    type="text"
                    id='createdDate'
                    name='createdDate'
                    value={createdDate}
                    onChange={onInputChange}
                    className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="createdBy">
                    Created by
                </label>
                <input
                    type="text"
                    id='createdBy'
                    name='createdBy'
                    value={createdBy}
                    onChange={onInputChange}
                    className='shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>

            <div className=' mt-14 flex justify-end space-x-4'>
                <Button/>
                <SubmitButton text="Submit" />
            </div>
        </form>
    </div>
  )
}

export default NewUserForm