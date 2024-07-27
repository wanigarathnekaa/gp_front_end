import React from 'react';
import Input from '@mui/joy/Input';
import Image from 'next/image';
import { CancelButton, DeleteButton, SubmitButton } from '@/components';

interface UserInfoFormProps {
  mode: 'view' | 'edit';
  fields: Array<{ 
    label: string; 
    placeholder: string; 
    disabled: boolean; 
    colSpan?: number; 
  }>;
}

function UserInfoForm({ mode, fields }: UserInfoFormProps) {
  const isEditMode = mode === 'edit';

  return (
    <div className='flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl mx-auto'>
      <h1 className="font-bold text-2xl text-gray-600 mb-8">
        {isEditMode ? 'Update User Details' : 'User Details'}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        
        <div className='col-span-2'>
          <h3 className="font-bold text-gray-500">User ID</h3>
          <Input placeholder="Placeholder" className="mb-4 mt-1" disabled={!isEditMode} />
        </div>

        <div className='row-span-3 flex flex-col items-center'>
          <Image src="/profilePic.png" alt="profilePicture" className='rounded-full mb-4' width={100} height={100} />
          <h3 className="font-bold text-gray-500">{isEditMode ? 'Edit profile picture' : 'View profile picture'}</h3>
        </div>

        {fields.map((field, index) => (
          <div key={index} className={field.colSpan ? `col-span-${field.colSpan}` : ''}>
            <h3 className="font-bold text-gray-500">{field.label}</h3>
            <Input placeholder={field.placeholder} className="mb-4 mt-1" disabled={!isEditMode || field.disabled} />
          </div>
        ))}
      </div>
      <div className='flex gap-2 justify-end mt-8 w-full'>
        {isEditMode ? (
          <>
            <CancelButton />
            <DeleteButton />
            <SubmitButton text="Update" />
          </>
        ) : (
          <SubmitButton text="Print" />
        )}
      </div>
    </div>
  );
}

export default UserInfoForm;
