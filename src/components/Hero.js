import React from 'react';
import Search from './Search';

const Hero = () => {
    return (
        <div>
            <div className="carousel w-full pt-12">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/W0TdnW9/b3.png" className="w-full" />
                    <div className='absolute px-20 lg:px-56 mt-10 md:mt-36 lg:mt-56 text-white'>
                        <h1 className='text-lg lg:text-5xl font-bold text-violet-700'>WELCOME TO OUR HOUSE RENT</h1>
                        <p className='py-3 lg:py-6 text-xs lg:text-[16px] lg:leading-7 text-gray-700'>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet, nisl imperdiet nec ad morbi.</p>
                        <button className='bg-violet-700 px-4 py-1 lg:py-2'>Contact us</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-violet-700">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-violet-700">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sP4djLz/b2.png" className="w-full" />
                    <div className='absolute px-20 lg:px-56 mt-10 md:mt-36 lg:mt-56 text-white'>
                        <h1 className='text-lg lg:text-5xl font-bold text-violet-700'>WELCOME TO OUR HOUSE RENT</h1>
                        <p className='py-3 lg:py-6 text-xs lg:text-[16px] lg:leading-7 text-gray-700'>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet, nisl imperdiet nec ad morbi.</p>
                        <button className='bg-violet-700 px-4 py-1 lg:py-2'>Contact us</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-violet-700">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-violet-700">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Vgj0dyP/b1.png" className="w-full" />
                    <div className='absolute px-20 lg:px-56 mt-10 md:mt-36 lg:mt-56 text-white'>
                        <h1 className='text-lg lg:text-5xl font-bold text-violet-700'>WELCOME TO OUR HOUSE RENT</h1>
                        <p className='py-3 lg:py-6 text-xs lg:text-[16px] lg:leading-7 text-gray-700'>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet, nisl imperdiet nec ad morbi.</p>
                        <button className='bg-violet-700 px-4 py-1 lg:py-2'>Contact us</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-violet-700">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-violet-700">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ZcFrr5q/b.png" className="w-full" />
                    <div className='absolute px-20 lg:px-56 mt-10 md:mt-36 lg:mt-56 text-white'>
                        <h1 className='text-lg lg:text-5xl font-bold text-violet-700'>WELCOME TO OUR HOUSE RENT</h1>
                        <p className='py-3 lg:py-6 text-xs lg:text-[16px] lg:leading-7 text-gray-700'>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet, nisl imperdiet nec ad morbi.</p>
                        <button className='bg-violet-700 px-4 py-1 lg:py-2'>Contact us</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-violet-700">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-violet-700">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;