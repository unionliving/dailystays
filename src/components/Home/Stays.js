import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import mumbai from "../../assets/home-mumbai.png";
import pune from "../../assets/home-pune.png";

import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';

const Stays = () => {
  const slides = [
    { id: 1, image: mumbai, title: "Mumbai", subtitle: "Maharashtra", link:'/short-term-stay-mumbai' },
    { id: 2, image: pune, title: "Pune", subtitle: "Maharashtra", link:'/short-term-stay-pune' },
  ];

  return (
    <div id="stays-section" className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        
        {/* Header */}
        <div className="mb-16 lg:mb-24 flex flex-col items-center text-center">
          <span className="text-xs tracking-widest uppercase font-semibold text-gray-400 mb-4 block">Destinations</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-[HelveticaWorldRegular] tracking-tight text-gray-900 mb-6">
            Find Your Daily Stays
          </h2>
          <div className="w-12 h-px bg-black"></div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={40}
            navigation={{
              nextEl: '.custom-next-stays',
              prevEl: '.custom-prev-stays',
            }}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Link href={slide.link}>
                  <div className="group cursor-pointer flex flex-col">
                    <div className="relative overflow-hidden w-full aspect-[4/5] lg:aspect-[4/3] rounded-2xl mb-8">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                    </div>

                    <div className="flex flex-col px-2">
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-400 mb-2">{slide.subtitle}</span>
                      <h3 className="text-3xl font-[HelveticaWorldRegular] text-gray-900 tracking-tight mb-6">
                        {slide.title}
                      </h3>
                      <div className="inline-flex items-center gap-3 text-black group/btn w-max">
                        <span className="text-xs tracking-widest uppercase font-semibold border-b border-black pb-0.5 group-hover/btn:border-gray-400 transition-colors">
                          Explore Properties
                        </span>
                        <FiArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Elegant Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 lg:left-8 lg:right-8 flex justify-between z-10 pointer-events-none hidden md:flex">
            <button className="custom-prev-stays pointer-events-auto bg-white/90 backdrop-blur p-4 rounded-full hover:bg-white text-black shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all transform hover:-translate-x-1">
              <FiChevronLeft size={20} />
            </button>
            <button className="custom-next-stays pointer-events-auto bg-white/90 backdrop-blur p-4 rounded-full hover:bg-white text-black shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all transform hover:translate-x-1">
              <FiChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stays;
