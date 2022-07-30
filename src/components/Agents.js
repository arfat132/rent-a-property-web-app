import React, { useContext } from 'react';
import Agent from './Agent';
import { PropertyContext } from './PropertyContext';

const Agents = () => {
    const { houses } = useContext(PropertyContext);
console.log(houses)

    return (
        <section id='#agent' className='mb-20'>
            <div className='container mx-auto px-20'>
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl title-font mb-4 text-gray-900 font-bold">OUR <span className='text-violet-700'>AGENTS</span></h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-5'>
                    {houses.slice(0,5).map((agent) => {
                        return (
                            <Agent agent={agent} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Agents;