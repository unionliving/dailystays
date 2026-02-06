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
  {
    title: 'Fully Furnished',
    description: 'Thoughtfully designed, move-in ready apartments equipped with modern furniture.',
    img: img1,
  },
  {
    title: 'Parking',
    description: 'Dedicated and secure parking spaces to ensure easy access.',
    img: img2,
  },
  {
    title: 'Professional Housekeeping',
    description: 'Scheduled housekeeping services to maintain a clean.',
    img: img3,
  },
  {
    title: 'High-Speed WiFi',
    description: 'Reliable, high-speed internet connectivity to support seamless remote work.',
    img: img4,
  },
  {
    title: 'Breakfast and Dinner',
    description: 'Nutritious and freshly prepared meals served daily.',
    img: img5,
  },
  {
    title: 'Laundry Services',
    description: 'Convenient and efficient laundry services.',
    img: img6,
  },
];

export default function AltrExperiences() {
  return (
    <div className="w-full bg-[#253243] text-white">
  <div className="grid lg:grid-cols-2 grid-cols-1 flex-col lg:flex-row w-full ">
    {/* Left Section - Text */}
    <div className='col-span-1 py-4 lg:py-12 lg:px-8 flex items-center justify-center lg:justify-between'>
    <div className=" p-10  pr-0 flex flex-col justify-center items-start">
      <h2 className="lg:text-4xl text-[1.4rem] font-[HelveticaWorldRegular] tracking-wide mb-2">
        Privileges
      </h2>
      {/* <p className="text-md text-[#d8c6b3] mt-4">
        STAYING IN FEELS JUST AS ALIVE <br /> AS HEADING OUT.
      </p> */}
    </div>

    {/* Right Section - Image */}
    <div className=" flex justify-center items-center">
      <Image
        src={mainimg} // ensure this is your umbrella-chair image
        alt="Chair and Umbrella"
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
    </div>
  

  {/* Right Section - Swiper Grid */}
  <div className=" h-full bg-[#fff] text-[#253243]  border-[#63654B]">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      loop
      className="h-full"
      breakpoints={{
        0: { slidesPerView: 1.5 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 2.5 },
      }}
    >
      {experienceData.map((item, idx) => (
        <SwiperSlide key={idx} className="h-[100%] py-4 border-r-[1px] border-[#63654B]">
          <div className=" h-[100%] flex flex-col justify-center items-center text-center  px-2 pb-2 ">
            <div>
            <Image src={item.img} alt={item.title} width={250} height={150} className="mb-2" />
            <h2 className="lg:text-[16px] text-[12px] font-[HelveticaWorldRegular] mb-4">{item.title}</h2>
            </div>
            {/* <p className="text-[14px] mx-4 mb-4">{item.description}</p> */}
            {/* <div>
            <button className="bg-[#63654B] text-white px-3 mt-8  py-2 text-[13px] font-[GaretRegular] hover:bg-[#4f503d] transition">
              Learn More
            </button>
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </div>

    </div>
  );
}