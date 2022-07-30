import React from 'react';
import Hero from './Hero';
import PropertyList from './PropertyList';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Search></Search>
            <PropertyList></PropertyList>
        </div>
    );
};

export default Home;