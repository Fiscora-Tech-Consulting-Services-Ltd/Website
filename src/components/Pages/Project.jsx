import React, { memo } from 'react'
import HomePlanet from '../../assets/images/homeplanet.png';
import Moon from '../../assets/images/moon.svg'
import Earth from '../../assets/images/earth.png'
import Icon from '../../assets/images/Icon.svg'
import { Element } from 'react-scroll'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay, EffectFade, Virtual } from 'swiper'
import "swiper/css/bundle";
import Carousel from '../Project/Carousel';
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react';

SwiperCore.use([Autoplay, Navigation]);
const Project = memo(() => {

  return (

    <Element name='Projects' className='relative w-full h-[125vh] sm:h-screen '>
      
      <div className="max-w-[1260px] flex items-center justify-center mx-auto absolute sm:overflow-hidden w-full top-28 sm:top-16 md:top-20 left-1/2 -translate-x-1/2 " >
        <Carousel />
      </div>
    </Element >
  )
}
);
export default Project