import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-gray-400 body-font bg-slate-800 bottom-0">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="" alt="" />
            <Link to="/" className="font-bold text-2xl text-white">RENT A <span className='text-violet-700 ml-2'>PROPERTY</span></Link>
          </Link>
          <p className="mt-2 text-sm text-gray-400">If you are curious about available houses or land in the New York City, you pick the right place to start.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">About me</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">About</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Licensing</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Contact</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Follow me</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Facebook</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Github</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Twitter</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Legal</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Privacy Policy</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Resources</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Phone: +14232551111</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Email: core.realtor32@gmail.com</Link>
              </li>
              <li>
                <Link to="" className="text-gray-400 hover:text-violet-700">Address: New York City, USA</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-slate-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Rent A Property —
            <Link to="" href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">@rent-a-property</Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link to="" className="text-violet-700">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link to="" className="ml-3 text-violet-700">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link to="" className="ml-3 text-violet-700">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link to="" className="ml-3 text-violet-700">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;