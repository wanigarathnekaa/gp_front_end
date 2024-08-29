import React from 'react';
import { Button } from '@/components/index'
import ButtonText from './ButtonTextBlue';

interface NewRoleCreationFormProps {
    userRoleId: string;
    userRoleName: string;
    status: string; // New variable to select the status
    createdDate: string;
    createdBy: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


const NewRoleCreationForm = ({
    userRoleId,
    userRoleName,
    status,
    createdDate,
    createdBy,
    onInputChange,
    onSubmit
}: NewRoleCreationFormProps) => {
    return (
        <div className='p-8 bg-white rounded-2xl shadow-md w-full max-w-full mx-auto '>
          <form onSubmit={onSubmit}>
            <div className='mt-3 mb-4 justify-center items-center'>
                <h2 className='text-gray-700 text-xl font-bold'>Create new user role</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
            <div className="mb-3">
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="userRoleId">User role ID</label>
                <input 
                    type="text"
                    id="userRoleId"
                    name="userRoleId"
                    value={userRoleId}
                    onChange={onInputChange}
                    className=" appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4e46e5b5] focus:shadow-outline"
                />
            </div>

            <div className='mb-3'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="userRoleName">
                    User role name
                </label>
                <input
                    type="text"
                    id='userRoleName'
                    name='userRoleName'
                    value={userRoleName}
                    onChange={onInputChange}
                    className='appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4e46e5b5] focus:shadow-outline'
                />
            </div>

            <div className='mb-3'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="status">
                    Status
                </label>

                <select
                    id='status'
                    name='status'
                    value={status}
                    onChange={onInputChange}
                    className='appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4e46e5b5] focus:shadow-outline'
                >
                    <option value="Active">Active</option>
                    <option value="Disabled">Disabled</option>
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
                    className='appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4e46e5b5] focus:shadow-outline'
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
                    className='appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4e46e5b5] focus:shadow-outline'
                />
            </div>
            </div>

            <div className=' mt-10 flex justify-end space-x-4'>
                <Button />
                <ButtonText text="Add" />
            </div>
            
            </form>  
        </div>
    )
}

export default NewRoleCreationForm;