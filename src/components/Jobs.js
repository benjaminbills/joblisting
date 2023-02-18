import Filter from './Filter';
import Job from './Job';

const Jobs = () => {
  return (
    <div className='relative'>
      <div className='mt-[-30px] flex ml-5 mr-5 bg-white min-h-[70px] rounded'>
        <Filter />
      </div>
      <div className='ml-5 mr-5 pt-[50px]'>
        <Job />
      </div>
    </div>
  );
};

export default Jobs;
