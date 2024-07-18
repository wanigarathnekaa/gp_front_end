import {BulkEnrollCard, Navbar} from '@/components';

const EnrollPage = () => {
  return (

    <div className='w-full'>
      <Navbar/>
      
      <div className="mt-14  min-h-screen bg-[#D6D6FF] p-4 flex items-center justify-center ">
        <BulkEnrollCard />
      </div>

    </div>
  );
};

export default EnrollPage;
