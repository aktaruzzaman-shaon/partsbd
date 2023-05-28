import React from 'react';
import Banner from './Banner/Banner';
import HomePageProducts from './HomePageProducts/HomePageProducts';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import Brands from './Brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageProducts></HomePageProducts>
            <Brands></Brands>
            <BusinessInfo></BusinessInfo>

        </div>
    );
};

export default Home;