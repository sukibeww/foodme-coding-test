import React from 'react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.scss";
import CarouselCard from './CarouselCard';

const carouselData = [
  {
      id: 1,
      isAvailable: true,
      message: "Filter menus by your dietary requirements",
  },
  {
      id: 2,
      isAvailable: true,
      message: "Search across all Australian delivery  & booking providers",
  },
  {
      id: 3,
      isAvailable: false,
      message: "Manage your restaurant bucket list  & share with friends",
  },
]

const renderSlide = (data) => {
  return(
    <SwiperSlide className="swiper-card">
      <CarouselCard isAvailable={data.isAvailable} message={data.message}/>
    </SwiperSlide>
  )
}

const Carousel = () => {
  return (
      <Swiper pagination={true} modules={[Pagination]} className="swiper">
        {carouselData.map(data => renderSlide(data))}
      </Swiper>
  );
};

export default Carousel;
