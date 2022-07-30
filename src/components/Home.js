import React from 'react';
import Agents from './Agents';
import Hero from './Hero';
import PropertyList from './PropertyList';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Search></Search>
            <PropertyList></PropertyList>
            <Agents></Agents>
        </div>
    );
};

export default Home;