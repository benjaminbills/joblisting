const Job = () => {
  const joblist = {
    id: 1,
    company: 'Photosnap',
    logo: './images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  };
  return (
    <div className='bg-white relative rounded border-l-4 border-desaturateddarkcyan '>
      <div className='pl-4'>
        <img
          className='w-12 h-12 absolute top-[-1.5rem] '
          src={joblist.logo}
          alt={joblist.company}
        />
      </div>
      <div className='pl-4 pr-4 pb-4 pt-[2em]  flex flex-col space-y-4'>
        <div className='flex'>
          <p className='text-desaturateddarkcyan font-bold pr-5'>
            {joblist.company}
          </p>
          <button className='rounded-xl bg-desaturateddarkcyan text-xs font-bold pl-2 pr-2 text-white'>
            NEW!
          </button>
          <button className='ml-2 rounded-xl bg-verydarkgrayishcyan text-xs font-bold pl-2 pr-2 text-white'>
            FEATURED
          </button>
        </div>
        <p className='text-verydarkgrayishcyan font-bold'>{joblist.position}</p>
        <div className='flex flex-row space-x-2 text-darkgrayishcyan font-medium'>
          <p>{joblist.postedAt}</p>
          <p>{joblist.contract}</p>
          <p>{joblist.location}</p>
        </div>
        <hr></hr>
        <div className=' flex flex-wrap '>
          <button className='m-2 px-4 py-2 bg-lightgrayishcyan text-desaturateddarkcyan font-bold rounded'>
            Frontend
          </button>
          <button className='m-2 px-4 py-2 bg-lightgrayishcyan text-desaturateddarkcyan font-bold rounded'>
            Frontend
          </button>
          <button className='m-2 px-4 py-2 bg-lightgrayishcyan text-desaturateddarkcyan font-bold rounded'>
            Frontend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
