import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const Property = ({ house }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg w-full max-w-[500px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <div className=''>
      <img className='w-[500px] h-[300px]' src={house.image} alt='' />
     </div>
      <div className='p-5'>
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 py-1 inline-block'>
          {house.type}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 py-1 inline-block'>
          {house.country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{house.address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBed className='text-violet-700'/>
          </div>
          <div className='text-base'>{house.bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBath className='text-violet-700'/>
          </div>
          <div className='text-base'>{house.bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea className='text-violet-700'/>
          </div>
          <div className='text-base'>{house.surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>
        $ {house.price}
      </div>
     </div>
    </div>
  );
};

export default Property;