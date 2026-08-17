'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function RoomTypes({ rooms, link }) {
  return (
    <div className="w-full bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        
        {/* Header */}
        <div className="mb-16 lg:mb-24 flex flex-col items-center text-center">
          <span className="text-xs tracking-widest uppercase font-semibold text-gray-400 mb-4 block">Accommodation</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-[HelveticaWorldRegular] tracking-tight text-gray-900 mb-6">
            The Residences
          </h2>
          <div className="w-12 h-px bg-black"></div>
        </div>

        {/* Premium 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {rooms.map((room, idx) => {
            const prevRef = useRef(null);
            const nextRef = useRef(null);

            return (
              <div
                key={idx}
                className="group flex flex-col"
              >
                {/* Image Slider */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 mb-6 rounded-2xl shadow-sm">
                  <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    loop
                    speed={1500}
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                    className="h-full w-full rounded-2xl"
                  >
                    {room.images.map((src, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={src}
                          alt={room.title}
                          fill
                          className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Minimalist Navigation */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button
                      ref={prevRef}
                      className="bg-white/90 backdrop-blur p-2.5 rounded-full hover:bg-white text-black shadow-md transition-all"
                    >
                      <FiChevronLeft size={16} />
                    </button>
                    <button
                      ref={nextRef}
                      className="bg-white/90 backdrop-blur p-2.5 rounded-full hover:bg-white text-black shadow-md transition-all"
                    >
                      <FiChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col px-2">
                  <h3 className="text-2xl font-[HelveticaWorldRegular] text-gray-900 tracking-tight mb-6">
                    {room.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8 text-gray-500 font-[GaretRegular] text-xs">
                    {room.bedroom && (
                      <div className="flex flex-col border-l border-gray-200 pl-3">
                        <span className="text-[0.6rem] uppercase tracking-widest text-gray-400 mb-0.5">Bedrooms</span>
                        <span className="text-gray-900">{room.bedroom}</span>
                      </div>
                    )}
                    {room.balcony && (
                      <div className="flex flex-col border-l border-gray-200 pl-3">
                        <span className="text-[0.6rem] uppercase tracking-widest text-gray-400 mb-0.5">Balcony</span>
                        <span className="text-gray-900">{room.balcony}</span>
                      </div>
                    )}
                    {room.bathroom && (
                      <div className="flex flex-col border-l border-gray-200 pl-3">
                        <span className="text-[0.6rem] uppercase tracking-widest text-gray-400 mb-0.5">Bathrooms</span>
                        <span className="text-gray-900">{room.bathroom}</span>
                      </div>
                    )}
                  </div>

                  <a 
                    href={link} 
                    className="inline-flex items-center gap-3 text-black group/btn w-max"
                  >
                    <span className="text-xs tracking-widest uppercase font-semibold border-b border-black pb-0.5 group-hover/btn:border-gray-400 transition-colors">
                      Discover & Reserve
                    </span>
                    <FiArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
