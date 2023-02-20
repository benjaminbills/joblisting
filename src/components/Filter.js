const Filter = ({ print, handleFilters, filterItems, clearFilter }) => {
  return (
    <div className='p-4 flex flex-row justify-between  font-bold text-sm'>
      <div className='text-desaturateddarkcyan flex flex-wrap justify-left items-center gap-4 w-[260px]'>
        {filterItems.map((item, i) => (
          <button
            key={i}
            onClick={() => handleFilters(item)}
            className='bg-lightgrayishcyan rounded inline-flex content-center justify-center items-center h-[30px] pl-3 pt-3 pb-3'
          >
            {item}
            <span className='bg-desaturateddarkcyan h-[30px] flex items-center content-center justify-center p-2 ml-2 rounded-r'>
              <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
                <path
                  fill='#FFF'
                  fillRule='evenodd'
                  d='M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z'
                />
              </svg>
            </span>
          </button>
        ))}
      </div>
      {/* <div className='ml-auto pl-auto'> */}
      <button className='text-darkgrayishcyan ml-auto' onClick={clearFilter}>
        Clear
      </button>

      {/* </div> */}
    </div>
  );
};

export default Filter;
