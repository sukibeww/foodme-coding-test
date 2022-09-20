import React from 'react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.scss";
import CarouselCard from './CarouselCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '@mui/material';

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
    <SwiperSlide className="swiper-card" key={data.id}>
      <CarouselCard isAvailable={data.isAvailable} message={data.message}/>
    </SwiperSlide>
  )
}

const renderDesktopCarousel = () => {
  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {carouselData.map(data => renderSlide(data))}
      </Swiper>
  );
}

const renderMobileCarousel = () => {
  return(
    <Swiper slidesPerView={1} pagination={true} modules={[Pagination]} className="swiper">
      {carouselData.map(data => renderSlide(data))}
    </Swiper>
  )
}

const Carousel = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  console.log(isMobile);
  return (
    <Box sx={{marginTop: '1vh'}}>
      {isMobile ? renderMobileCarousel() : renderDesktopCarousel()}
    </Box>
  )
  
};

export default Carousel;
