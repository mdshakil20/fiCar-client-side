import React from 'react';
import Contact from '../Contact';
import Ad from './Ad';
import Banner from './Banner';
import Categories from './Categories';
import Search from './Search';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Search></Search>
            <Categories></Categories>
            <Ad></Ad>
            <Contact></Contact>

        </div>
    );
};

export default Home;