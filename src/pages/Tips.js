import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";

const Tips = () => {
  SwiperCore.use([Navigation]);
  return(
    <>
      <StyledSwiper>
        <StyledSwiperSlide>Slide 1</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 2</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 3</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 4</StyledSwiperSlide>
      </StyledSwiper>
    </>
  )
}

export default Tips;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: pink;
  width: 375px;
  height: 100px;
`

const StyledSwiper = styled(Swiper)`
  display: flex;
`