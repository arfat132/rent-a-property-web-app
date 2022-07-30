import React, { useContext } from 'react';
import { PropertyContext } from './PropertyContext';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';
import Property from './Property';

const PropertyList = () => {
  const { houses, loading } = useContext(PropertyContext);

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl my-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 my-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto px-20'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {houses.map((house) => {
            return (
              <Property house={house} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;