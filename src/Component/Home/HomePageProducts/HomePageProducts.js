import React, { useEffect, useState } from 'react';
import HomePageProduct from './HomePageProduct';
import Product from '../../Products/Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper';

import 'swiper/css/bundle';
import { useNavigate } from 'react-router-dom';

const HomePageProducts = () => {


    const [homePageProducts, sethomePageProducts] = useState([]);
    const navigate = useNavigate();


    //loading products by the value of size and page
    useEffect(() => {
        fetch(`http://localhost:5000/homePageProducts`)
            .then(response => response.json())
            .then(data => sethomePageProducts(data));
    }, [])


    //handle see all button
    const handleSeeAllProducts = () => {
        navigate('/products')
    }


    return (
        <div className=' bg-slate-100'>
            <p className='ms-5 float-left'>Products</p>
            <div className='container mx-auto '>

                <Swiper
                    modules={[Navigation, Mousewheel]}
                    navigation={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    mousewheel={true}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {homePageProducts.map((singleProduct) => <SwiperSlide><Product singleProduct={singleProduct}></Product></SwiperSlide>)}
                </Swiper>
            </div>

            <div className='my-3'><button className='btn' onClick={handleSeeAllProducts}>See all ...</button></div>

        </div>
    );
};

export default HomePageProducts;