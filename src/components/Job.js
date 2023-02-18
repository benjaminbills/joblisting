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
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  };
  return (
    <div className='bg-white'>
      <div className='p-4'>
        <div>
          <p>{joblist.company}</p>
          <button>NEW!</button>
          <button>FEATURED</button>
        </div>
        <p>{joblist.position}</p>
        <div className='flex flex-row space-x-2'>
          <p>{joblist.postedAt}</p>
          <p>{joblist.contract}</p>
          <p>{joblist.location}</p>
        </div>
        <hr></hr>
        <div>
          <button>Frontend</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
