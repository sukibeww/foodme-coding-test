import React from 'react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.scss";

const Carousel = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="swiper">
        <SwiperSlide className="swiper-card">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
