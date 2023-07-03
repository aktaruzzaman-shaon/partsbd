import React, { useState } from 'react';
import Brand from './Brand';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper';

import 'swiper/css/bundle';

const Brands = () => {

    const [brandImageUrls, setBrandImageUrls] = useState([]);

    fetch('http://localhost:5000/partsBrand')
        .then(res => res.json())
        .then(data => setBrandImageUrls(data))

    return (
        <div className='container mx-auto pb-20'>
            <p>Brands</p>
            <Swiper
                modules={[Navigation]}
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
                {
                    brandImageUrls.map((brandImageUrl) => <SwiperSlide><Brand brandImageUrl={brandImageUrl}></Brand></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Brands;