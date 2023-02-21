const Job = ({ job, handleFilters }) => {
  return (
    <div
      className={`bg-white relative rounded ${
        job.postedAt === '1d ago' ? 'border-l-4 border-desaturateddarkcyan' : ''
      } `}
    >
      <div className='pl-[2em] absolute md:flex md:justify-center md:align-middle content-center items-center  top-[-1.5rem] md:top-0 h-full'>
        <img
          className='w-12 h-12 md:w-20 md:h-20'
          src={job.logo}
          alt={job.company}
        />
      </div>
      <div className='pl-4 md:pl-[8em] pr-4 pb-4 pt-[2em] md:pt-6 md:pb-6  flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0'>
        <div className='flex flex-col space-y-[5px] justify-center content-center '>
          <div className='flex '>
            <p className='text-desaturateddarkcyan font-bold pr-5'>
              {job.company}
            </p>
            {job.postedAt === '1d ago' && (
              <button className='rounded-xl bg-desaturateddarkcyan text-xs font-bold pl-2 pr-2 text-white max-h-[25px]'>
                NEW!
              </button>
            )}
            {job.featured && (
              <button className='ml-2 rounded-xl bg-verydarkgrayishcyan text-xs font-bold pl-2 pr-2 text-white max-h-[25px]'>
                FEATURED
              </button>
            )}
          </div>
          <p className='text-verydarkgrayishcyan font-bold active:text-desaturateddarkcyan cursor-pointer'>
            {job.position}
          </p>
          <ul className='list-disc flex flex-row space-x-5 text-darkgrayishcyan font-medium'>
            <li className='list-none'>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
          <hr className='block md:hidden' />
        </div>
        <div className='flex flex-wrap justify-left items-center gap-4'>
          {job.languages.map((language, i) => (
            <button
              key={i}
              className='p-2 bg-lightgrayishcyan text-desaturateddarkcyan font-bold rounded active:text-white active:bg-desaturateddarkcyan'
              onClick={() => handleFilters(language)}
            >
              {language}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
