import React, { useContext } from 'react';
import { PropertyContext } from './PropertyContext';
import { RiSearch2Line } from 'react-icons/ri';
import Location from './Location';
import PropertyType from './PropertyType';
import PriceRange from './PriceRange';
import Surface from './Surface';

const Search = () => {
  const { handleClick } = useContext(PropertyContext);
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-12 lg:shadow-1 bg-white rounded-lg shadow-lg'>
      <Location></Location>
      <Surface></Surface>
      <PropertyType></PropertyType>
      <PriceRange></PriceRange>
      <button
        onClick={() => {
          handleClick();
        }}
        className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-12 rounded-lg flex justify-center items-center text-white text-lg'
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;