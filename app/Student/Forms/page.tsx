import { StudentNavbar, Title } from '@/components/index';
import FormListTable from '@/components/FormListTable';
import React from 'react';

const forms = () => {
  return (
    <div className="w-full">
      <StudentNavbar />
      <div className="flex flex-col bg-blue-50 justify-start min-h-screen px-20 py-10">
        <div className="mt-12 flex flex-col items-center w-full">
          {/* Title aligned to the left */}
          <div className="w-full text-left ml-72 mt-5">
            <Title text="Student Forms" />
          </div>

          {/* Table centered */}
          <div className="w-full flex justify-center -mt-2">
            <FormListTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default forms;
