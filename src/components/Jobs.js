import Filter from './Filter';
import Job from './Job';
import AllJobs from '../allJobs';

const Jobs = () => {
  return (
    <div className='relative'>
      <div className='mt-[-30px] flex ml-5 mr-5 bg-white min-h-[70px] rounded'>
        <Filter />
      </div>
      <div className='ml-5 mr-5 pt-[50px]  pb-[30px]'>
        {AllJobs.map((job, i) => (
          <div className={i === 0 ? 'pt-0' : 'pt-[3em]'} key={job.id}>
            <Job job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
