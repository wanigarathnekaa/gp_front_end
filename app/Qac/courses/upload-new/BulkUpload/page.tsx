import BulkUploadCard from '@/components/coursesBulkUpload';
import {Navbar} from '@/components/index';

const EnrollPage = () => {
  return (

    <div className='w-full'>
      <Navbar/>
      
      <div className="min-h-screen bg-blue-50 p-4 flex items-center justify-center ">
        <BulkUploadCard />
      </div>

    </div>
  );
};

export default EnrollPage;
