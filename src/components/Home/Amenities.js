'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

import mainimg from '../../assets/previlages.png';
import img1 from '../../assets/privilages/fully-furnished.png';
import img2 from '../../assets/privilages/parking.png';
import img3 from '../../assets/privilages/house.png';
import img4 from '../../assets/privilages/wifi.png';
import img5 from '../../assets/privilages/food.png';
import img6 from '../../assets/privilages/laundry.png';

const experienceData = [
  { title: 'Fully Furnished', img: img1 },
  { title: 'Secure Parking', img: img2 },
  { title: 'Housekeeping', img: img3 },
  { title: 'High-Speed WiFi', img: img4 },
  { title: 'Gourmet Meals', img: img5 },
  { title: 'Laundry Services', img: img6 },
];

export default function AltrExperiences() {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[400px]">
      
      {/* Left Section - Dark Blue */}
      <div className="w-full lg:w-[40%] bg-[#253243] text-white py-16 px-8 lg:px-16 flex flex-col lg:flex-row justify-center items-center lg:justify-between relative overflow-hidden">
        <h2 className="text-3xl lg:text-[2.5rem] font-[HelveticaWorldRegular] tracking-wide mb-8 lg:mb-0 z-10">
          Privileges
        </h2>
        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
          <Image
            src={mainimg}
            alt="Chair and Umbrella"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Section - White Swiper */}
      <div className="w-full lg:w-[60%] bg-white py-12 flex items-center border-t lg:border-t-0 lg:border-l border-gray-200">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full h-full"
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {experienceData.map((item, idx) => (
            <SwiperSlide key={idx} className="border-r border-gray-200 last:border-r-0">
              <div className="h-full flex flex-col justify-center items-center text-center px-4 group cursor-pointer py-4">
                <div className="h-32 mb-6 flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    width={180} 
                    height={180} 
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
                <h3 className="text-xs lg:text-sm font-[GaretRegular] uppercase tracking-widest text-[#253243] group-hover:text-black transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}