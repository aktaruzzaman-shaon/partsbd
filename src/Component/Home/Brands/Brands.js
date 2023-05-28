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
        <div className='mx-10 m-5'>
            <Swiper
                navigation={true} modules={[Navigation,Mousewheel]}
                spaceBetween={50}
                slidesPerView={3}
                mousewheel={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    brandImageUrls.map((brandImageUrl) => <SwiperSlide><Brand brandImageUrl={brandImageUrl}></Brand></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Brands;