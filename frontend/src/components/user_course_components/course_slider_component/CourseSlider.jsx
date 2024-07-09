import React from 'react'
import './CourseSlider.css'
import slideImg1 from './images/1.png'
import slideImg2 from './images/2.png'
import slideImg3 from './images/3.png'



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function CourseSlider() {
  return (
    <div className='course-slider'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        loop={Infinity}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='course-image-slide'>
            <img src={slideImg2}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='course-image-slide'>
            <img src={slideImg1}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='course-image-slide'>
            <img src={slideImg3}></img>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
