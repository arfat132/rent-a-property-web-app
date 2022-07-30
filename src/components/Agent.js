import React from 'react';
import { Link } from 'react-router-dom';


const Agent = ({ agent }) => {
    return (
        <div className="text-gray-600 body-font lg:mb-0 mb-8">
            <div className="container px-5 mx-auto">
                <div className="shadow-lg">
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 border-b-4 border-b-violet-700 w-full h-72 object-cover object-center" src={agent?.agent?.image} />
                        <div className="w-full p-4 bg-violet-50">
                            <h2 className="title-font font-medium text-lg text-gray-900 mb-3">{agent?.agent?.name}</h2>
                            <span className="inline-flex">
                                <Link to="" className="text-violet-700 border border-violet-700 px-2 py-2">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </Link>
                                <Link to="" className="ml-2 text-violet-700 border border-violet-700 px-2 py-2">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </Link>
                                <Link to="" className="ml-2 text-violet-700 border border-violet-700 px-2 py-2">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agent;