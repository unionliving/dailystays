'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';


export default function RoomTypes( { rooms,link } ) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 lg:py-12">
      <h2 className="text-3xl font-[HelveticaWorldRegular] tracking-wider mb-6">Room Types</h2>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.map((room, idx) => {
                const prevRef = useRef(null);
                const nextRef = useRef(null);
      
                return (
                  <div
                    key={idx}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row"
                  >
                    {/* Image Slider */}
                    <div className="relative w-full md:w-1/2 lg:h-[300px] h-[250px]">
                      <Swiper
                        modules={[Navigation,Autoplay]}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        navigation={{
                          prevEl: prevRef.current,
                          nextEl: nextRef.current,
                        }}
                        loop
                        speed={800}
                        onInit={(swiper) => {
                          swiper.params.navigation.prevEl = prevRef.current;
                          swiper.params.navigation.nextEl = nextRef.current;
                          swiper.navigation.init();
                          swiper.navigation.update();
                        }}
                      >
                        {room.images.map((src, index) => (
                          <SwiperSlide key={index}>
                            <Image
                              src={src}
                              alt={room.title}
                              width={400}
                              height={400}
                              className="object-cover w-full h-[250px] lg:h-full"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
      
                      {/* Custom Navigation */}
                      <div className="absolute bottom-0 inset-0 flex items-end mb-0 gap-[0.5px] z-10">
                        <button
                          ref={prevRef}
                          className="bg-black/60 text-white p-2  hover:bg-black"
                        >
                          <IoChevronBack size={30} />
                        </button>
                        <button
                          ref={nextRef}
                          className="bg-black/60 text-white p-2  hover:bg-black"
                        >
                          <IoChevronForward size={30} />
                        </button>
                      </div>
                    </div>
      
                    {/* Details */}
                    <div className="p-6 flex flex-col justify-center md:w-[50%]">
                      <h4 className="text-2xl font-[HelveticaWorldRegular] tracking-wider mb-4">{room.title}</h4>
                      {/* <p className="mb-1 font-[GaretRegular]">{room.guests}</p> */}
                      <p className="mb-1 font-[GaretRegular]">{room.bedroom}</p>
                      <p className="mb-1 font-[GaretRegular]">{room.bathroom}</p>
                      <p className="mb-4 font-[GaretRegular] ">{room.balcony}</p>
                      <a href={link} className="bg-black text-white py-2 px-2 text-center font-[GaretRegular] rounded-lg hover:bg-gray-800 text-sm tracking-wider uppercase">
                        Check Availability
                      </a>
                    </div>
                  </div>
                );
              })}
      </div>
    </div>
  );
}
