"use client"
import React from 'react';
import Image from "next/image";
import Slider1 from "../public/assets/slider.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-1/3 left-[15%] w-[500px] text-white text-6xl drop-shadow">
                            Sweet Surprise Inside Every Snail: A Meter of Fun!
                        </div>
                        <Image src={Slider1} alt="slider 1"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
