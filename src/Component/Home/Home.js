import React from 'react';
import Banner from './Banner/Banner';
import Navbar from '../Shared/Navbar/Navbar';
import HomePageProducts from './HomePageProducts/HomePageProducts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HomePageProducts></HomePageProducts>
        </div>
    );
};

export default Home;