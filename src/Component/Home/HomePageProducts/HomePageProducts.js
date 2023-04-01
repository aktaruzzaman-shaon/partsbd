import React, { useEffect, useState } from 'react';
import HomePageProduct from './HomePageProduct';

const HomePageProducts = () => {

    const [homePageProducts, sethomePageProducts] = useState([]);

    //loading sample data on home page
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(response => response.json())
            .then(products => sethomePageProducts(products));
    }, [])


    return (
        <div >
            <div><p>Products</p></div>
            <div className='mx-10 grid grid-cols-3 gap-3'>{
                homePageProducts.map(homePageProduct => <HomePageProduct
                    homePageProduct={homePageProduct}
                ></HomePageProduct>
                )
            }</div>
            <div className='my-3'><p>See all ...</p></div>
        </div>
    );
};

export default HomePageProducts;