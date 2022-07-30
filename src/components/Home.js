import React from 'react';
import About from './About';
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
            <About></About>
            <Agents></Agents>
            <Contact></Contact>
        </div>
    );
};

export default Home;