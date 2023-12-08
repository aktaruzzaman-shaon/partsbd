import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className='rounded-lg md:h-[450px]'
                style={{
                    "--swiper-pagination-color": "#FFBA08",
                    "--swiper-pagination-bullet-size": "14px",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-inactive-color": "#999999"
                }}
            >
                <SwiperSlide ><img src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide ><img src={banner2} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;