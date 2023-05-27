import React, { useState } from 'react';
import Brand from './Brand';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

const Brands = () => {

    // Import Swiper styles
    const [brandImageUrls, setBrandImageUrls] = useState([]);

    fetch('http://localhost:5000/partsBrand')
        .then(res => res.json())
        .then(data => setBrandImageUrls(data))

    return (
        <div className='mx-10 grid grid-cols-4 gap-3 m-5'>
            <p>THis </p>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><p>Slide 1</p></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
            {/* {
                brandImageUrls.map(brandImageUrl => <Brand brandImageUrl={brandImageUrl}></Brand>)
            } */}


        </div>
    );
};

export default Brands;