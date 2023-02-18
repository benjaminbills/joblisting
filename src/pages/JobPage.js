import Filter from '../components/Filter';
import Jobs from '../components/Jobs';

const JobPage = () => {
  return (
    <div className='bg-lightgrayishcyanbg h-screen'>
      <div className='bg-[url("/public/images/bg-header-mobile.svg")] h-[156px] bg-cover bg-no-repeat bg-desaturateddarkcyan'></div>
      <div className=''>
        <Jobs />
      </div>
    </div>
  );
};

export default JobPage;
