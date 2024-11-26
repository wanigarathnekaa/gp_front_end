import React from 'react';
import Navbar from '@/components/Navbar'; 
import UserInfoForm from '@/components/UserInfoForm';

interface EnrollStudentProps {
  fields: { label: string; placeholder: string; disabled: boolean; colSpan?: number }[];
}

const EnrollStudent: React.FC<EnrollStudentProps> = ({ fields }) => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="min-h-screen mt-12 flex flex-col items-center justify-center bg-[#EEF2FF]">
        <div className="flex items-center justify-center h-screen">
          <UserInfoForm mode="enroll" fields={fields} />
        </div>
      </div>
    </div>
  );
};

export default EnrollStudent;
