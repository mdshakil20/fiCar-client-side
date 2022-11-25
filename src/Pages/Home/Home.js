import React from 'react';
import Contact from '../Contact';
import Banner from './Banner';
import Categories from './Categories';
import Search from './Search';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Search></Search>
            <Categories></Categories>
            <Contact></Contact>

        </div>
    );
};

export default Home;