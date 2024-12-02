import { StudentNavbar, Title } from '@/components/index';
import FormListTable from '@/components/FormListTable';
import React from 'react';

const forms = () => {
  return (
    <div className="w-full">
      <StudentNavbar />
      <div className="flex flex-col bg-blue-50 justify-start items-center min-h-screen px-20 py-10">
        {/* <div className="mt-12">
            <Title text="Student Forms" />
            </div> */}

            <FormListTable />
      </div>
    </div>
  );
};

export default forms;
