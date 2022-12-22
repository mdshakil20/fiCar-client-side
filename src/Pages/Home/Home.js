import React from 'react';
import Contact from '../Contact';
import useTitle from '../UseTitle/UseTitle';
import Ad from './Ad';
import Banner from './Banner';
import Categories from './Categories';
import Search from './Search';


const Home = () => {
    useTitle('Home');
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