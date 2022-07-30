import React, { useContext } from 'react';
import Agent from './Agent';
import { PropertyContext } from './PropertyContext';

const Agents = () => {
    const { houses } = useContext(PropertyContext);

    return (
        <section id='agent' className='mb-20'>
            <div className='container mx-auto lg:px-20 px-10'>
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="text-2xl title-font mb-4 text-gray-900 font-bold">OUR <span className='text-violet-700'>AGENTS</span></h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-5'>
                    {houses.slice(0, 5).map((agent) => {
                        return (
                            <Agent key={agent.id} agent={agent} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Agents;