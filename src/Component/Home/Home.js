import React from 'react';
import Banner from './Banner/Banner';
import HomePageProducts from './HomePageProducts/HomePageProducts';
import BusinessInfo from './BusinessInfo/BusinessInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageProducts></HomePageProducts>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Home;