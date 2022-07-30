import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='lg:px-20 px-10 mb-20'>
            <div className="mx-auto container flex justify-center items-center pt-12 sm:px-6 2xl:px-0">
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                    <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
                        <div>
                            <p className="text-3xl xl:text-4xl font-bold leading-9 text-gray-800">Why <span className='text-violet-700'>Choose</span> us?</p>
                        </div>
                        <div className="mt-4 lg:w-4/5 xl:w-4/5">
                            <p className="text-base leading-6 text-gray-600 mb-5 pr">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores accusamus doloremque delectus nam atque impedit labore beatae, fuga quo iste aliquid magnam assumenda a ipsam quam numquam inventore quos eius?</p>
                            <div className='lg:flex block gap-8 mb-8'>
                                <div className='list-none'>
                                    <li className='flex mb-2'><FiArrowRightCircle className='mt-1 mr-2 text-lg text-violet-700' />Offer a small discount from the sales price for a limited time.</li>
                                    <li className='flex mb-2'><FiArrowRightCircle className='mt-1 mr-2 text-lg text-violet-700' />Offer 100% of the buyer’s closing costs for a limited time.</li>
                                    <li className='flex mb-2'><FiArrowRightCircle className='mt-1 mr-2 text-lg text-violet-700' />Narrative description of features</li>
                                    <li className='flex mb-2'><FiArrowRightCircle className='mt-1 mr-2 text-lg text-violet-700' />Offer seller financing. This is always attractive, as banks require too many documents and questions.</li>
                                    <li className='flex'><FiArrowRightCircle className='mt-1 mr-2 text-lg text-violet-700' />Offer either a lease purchase or rent-to-own.</li>
                                </div>
                            </div>
                            <span class="inline-flex">
                                <Link to="" class="text-violet-700 border border-violet-700 px-2 py-2">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </Link>
                                <Link to="" class="ml-2 text-violet-700 border border-violet-700 px-2 py-2">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </Link>
                                <Link to="" class="ml-2 text-violet-700 border border-violet-700 px-2 py-2">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                        <div>
                            <img className="hidden lg:block w-[580px]" src="https://www.aurobindorealty.com/wp-content/uploads/2020/11/shutterstock_352926425-V1.jpg" alt="sofa" />
                            <img className="w-80 sm:w-auto lg:hidden" src="https://www.aurobindorealty.com/wp-content/uploads/2020/11/shutterstock_352926425-V1.jpg" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 lg:space-y-5 xl:space-y-8">
                            <div>
                                <img className="hidden lg:block w-90" src="https://themeearth.com/tf/html/rentalplace/img/room3.jpg" alt="" />
                                <img className="w-80 sm:w-auto lg:hidden" src="https://themeearth.com/tf/html/rentalplace/img/room3.jpg" alt="chairs" />
                            </div>
                            <div>
                                <img className="hidden lg:block w-90" src="https://themeearth.com/tf/html/rentalplace/img/room2.jpg" alt="" />
                                <img className="w-80 sm:w-auto lg:hidden" src="https://themeearth.com/tf/html/rentalplace/img/room2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;