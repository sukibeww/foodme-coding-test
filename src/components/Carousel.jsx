import React from 'react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.scss";
import CarouselCard from './CarouselCard';

const Carousel = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="swiper">
        <SwiperSlide className="swiper-card">
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <CarouselCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
