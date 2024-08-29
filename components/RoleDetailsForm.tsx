import React from 'react';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import CancelButton from '@/components/CancelButton';
import DeleteButton from '@/components/DeleteButton';
import SubmitButton from '@/components/SubmitButton';

interface RoleDetailsFormProps {
  title: string;
  showCancelButton?: boolean;
  showDeleteButton?: boolean;
  showSubmitButton?: boolean;
  submitButtonText?: string;
}

const RoleDetailsForm: React.FC<RoleDetailsFormProps> = ({
  title,
  showCancelButton = true,
  showDeleteButton = true,
  showSubmitButton = true,
  submitButtonText = 'Submit', 
}) => {
  return (
    <div className='w-full flex items-center justify-center'>
      <form action="" className="bg-white space-x-4 p-6 rounded-xl shadow-lg w-full max-w-xl space-y-2">
        <h1 className="font-bold text-2xl text-gray-600 mb-8">{title}</h1>

        <h3 className="font-bold text-gray-500">User Role ID</h3>
        <Input placeholder="Type in here…" className="mb-4 mt-1" />
        <h3 className="font-bold text-gray-500">User Role Name</h3>
        <Input placeholder="Type in here…" className="mb-4 mt-1" />
        <h3 className="font-bold text-gray-500">Status</h3>
        <Select placeholder="Choose one…" className="mb-4 mt-1">
          <Option value="Pending Active">Pending Active</Option>
          <Option value="Disabled">Disabled</Option>
        </Select>
        <h3 className="font-bold text-gray-500">Created Date</h3>
        <Input placeholder="Type in here…" className="mb-4 mt-1" />
        <h3 className="font-bold text-gray-500">Created By</h3>
        <Input placeholder="Type in here…" className="mb-4 mt-1" />

        <div className="flex gap-2 justify-end mt-8">
          {showCancelButton && <CancelButton />}
          {showDeleteButton && <DeleteButton />}
          {showSubmitButton && <SubmitButton text={submitButtonText} />}
        </div>
      </form>
    </div>
  );
};

export default RoleDetailsForm;
