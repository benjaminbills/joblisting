import Jobs from '../components/Jobs';

const JobPage = () => {
  return (
    <div className='bg-lightgrayishcyanbg h-full'>
      <div className='bg-[url("/public/images/bg-header-mobile.svg")] md:bg-[url("/public/images/bg-header-desktop.svg")] h-[156px] bg-cover bg-no-repeat bg-desaturateddarkcyan'></div>
      <div className=''>
        <Jobs />
      </div>
    </div>
  );
};

export default JobPage;
