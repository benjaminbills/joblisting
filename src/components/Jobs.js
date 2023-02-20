import Filter from './Filter';
import Job from './Job';
import AllJobs from '../allJobs';
import { useState } from 'react';

const Jobs = () => {
  const [filterItems, setFilterItems] = useState([]);
  const clearFilter = () => {
    setFilterItems([]);
  };
  const filteredJobs = AllJobs.filter((job) =>
    job.languages.some((lang) => filterItems.includes(lang))
  );
  const handleFilters = (language) => {
    if (filterItems.includes(language)) {
      let newFilter = filterItems.filter((item) => item !== language);
      setFilterItems(newFilter);
    } else {
      setFilterItems([...filterItems, language]);
    }
  };
  const print = () => {
    console.log(filterItems);
  };
  return (
    <div className='relative'>
      {filterItems.length > 0 && (
        <div className='mt-[-30px] flex ml-5 mr-5 bg-white min-h-[70px] rounded'>
          <Filter
            handleFilters={handleFilters}
            print={print}
            filterItems={filterItems}
            clearFilter={clearFilter}
          />
        </div>
      )}
      <div className='ml-5 mr-5 pt-[50px]  pb-[30px]'>
        {(filteredJobs.length > 0 ? filteredJobs : AllJobs).map((job, i) => (
          <div className={i === 0 ? 'pt-0' : 'pt-[3em]'} key={job.id}>
            <Job handleFilters={handleFilters} job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
