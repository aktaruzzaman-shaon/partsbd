import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';

const Banner = () => {
    return (
        <Swiper
            modules={[Mousewheel]}
            slidesPerView={1}
            mousewheel={true}
            className='rounded-lg'
        >
            <SwiperSlide><img src={banner1}  alt="" /></SwiperSlide>
            <SwiperSlide><img src={banner2} alt=""  /></SwiperSlide>
        </Swiper>
    );
};

export default Banner;