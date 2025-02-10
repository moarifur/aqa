"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import {hero_items} from "@/lib/data";

const Hero = () => {
    return (
        <div className="relative h-screen w-full mb-32">
            {/* Swiper */}
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                autoplay={{delay: 6000, disableOnInteraction: false}}
                effect="fade"
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                className="h-full w-full"
            >
                {hero_items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-screen w-screen relative overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>
                            <img
                                src={item.imgURL}
                                alt={item.title}
                                className="object-cover object-top h-full w-full"
                            />
                            <div
                                className="absolute top-52 left-0 h-full w-full flex flex-col justify-center items-center text-white px-4">
                                <h1 className="text-yellow-100 text-4xl md:text-7xl font-raleway font-bold leading-tight mb-0 text-center p-5">
                                    {item.title}
                                </h1>
                                <p className="text-lg md:text-4xl text-cyan-100 font-sans font-medium leading-loose mb-2">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default Hero;
