import React from 'react';
import Input from '@mui/joy/Input';
import Checkbox from '@mui/joy/Checkbox';
import CancelButton from '@/components/CancelButton';
import DeleteButton from '@/components/DeleteButton';
import SubmitButton from '@/components/SubmitButton';

interface AssignedPrivilegesDetailsFormProps {
  title: string;
  showCancelButton?: boolean;
  showDeleteButton?: boolean;
  showSubmitButton?: boolean;
  submitButtonText?: string;
}

const AssignedPrivilegesDetailsForm: React.FC<AssignedPrivilegesDetailsFormProps> = ({
  title,
  showCancelButton = true,
  showDeleteButton = true,
  showSubmitButton = true,
  submitButtonText = 'Submit', 
}) => {
  return (
    <div className='w-full flex items-center justify-center'>
      <form action="" className="bg-white space-x-4 p-6 rounded-xl shadow-lg w-full max-w-xl space-y-2">
        <h1 className="font-bold text-2xl text-gray-600 py-5 ml-4">{title}</h1>

        <h3 className="font-bold text-gray-500">User ID</h3>
        <Input placeholder="User ID" className="mb-5 mt-1" />
        <h3 className="font-bold text-gray-500">User Name</h3>
        <Input placeholder="User name" className="mb-5 mt-1" />
        <h3 className="font-bold text-gray-500">Mobile No</h3>
        <Input placeholder="Mobile No" className="mb-5 mt-1" />
        <h3 className="font-bold text-gray-500">Privileges</h3>
        
        <div className="mb-4 mt-1 text-gray-600">
          <Checkbox label="Form creation"/> <br />
          <Checkbox label="Write" /><br />
          <Checkbox label="Execute" /><br />
        </div>
        
        <h3 className="font-bold text-gray-500">Assigned Date</h3>
        <Input placeholder="00/00/0000" className="mb-5 mt-1" />
        <h3 className="font-bold text-gray-500">Assigned By</h3>
        <Input placeholder="Assigned By" className="mb-5 mt-1" />

        <div className="flex gap-2 justify-end pt-8 pb-4">
          {showCancelButton && <CancelButton />}
          {showDeleteButton && <DeleteButton />}
          {showSubmitButton && <SubmitButton text={submitButtonText} />}
        </div>
      </form>
    </div>
  );
};

export default AssignedPrivilegesDetailsForm;
