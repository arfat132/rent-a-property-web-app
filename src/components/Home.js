import React from 'react';
import Agents from './Agents';
import Contact from './Contact';
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
            <Contact></Contact>
        </div>
    );
};

export default Home;