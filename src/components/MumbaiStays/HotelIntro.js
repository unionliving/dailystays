'use client';

import { useState, useEffect, useRef } from 'react';
import { FiMinus, FiPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Calendar from "react-calendar";
import banner1 from '../../assets/stays1.png';
import banner2 from '../../assets/stays3.png';
import banner3 from '../../assets/stays4.png';


export default function HotelIntro({ title, location, locationLink, desc, bannerImages, link }) {
  const [guests, setGuests] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const images = [banner1, banner2, banner3];

  const incrementGuests = () => setGuests(guests + 1);
  const decrementGuests = () => setGuests(guests > 1 ? guests - 1 : 1);

  return (
    <div className="relative">

      {/* Banner Slider */}
      <div className="relative h-[300px] md:h-[650px] overflow-hidden z-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full"
        >
          {bannerImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt="Banner"
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons at Bottom Left */}
        <div className="absolute bottom-4 left-4 flex space-x-2 z-20">
          <button ref={prevRef} className="bg-black bg-opacity-60 p-2 rounded hover:bg-opacity-80">
            <FiChevronLeft className="text-white" size={20} />
          </button>
          <button ref={nextRef} className="bg-black bg-opacity-60 p-2 rounded hover:bg-opacity-80">
            <FiChevronRight className="text-white" size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 relative z-10">

  {/* Left Content */}
  <div className="space-y-4">
    <h1 className="text-3xl md:text-5xl font-[HelveticaWorldRegular] tracking-wider">{location}</h1>
    {/* <p className="text-lg text-gray-700">{location}</p> */}
    {locationLink ? (
      <a
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline font-[HelveticaWorldRegular] tracking-wider text-black"
      >
        VIEW ON MAP
      </a>
    ) : (
      <button className="text-sm underline font-[HelveticaWorldRegular] tracking-wider text-black">
        VIEW ON MAP
      </button>
    )}

    {/* <h2 className="font-semibold mt-6 text-xl">Varsity</h2> */}
    <p className="text-gray-700 lg:text-[1rem] text-[0.7rem] text-justify mt-2 font-[GaretRegular] leading-relaxed">{desc}</p>
  </div>

  {/* Right Booking Box */}
  <div className="relative md:top-[-170px] z-10 flex justify-center md:justify-end">
    <div className="w-full max-w-[400px]   bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
      <div className="divide-y divide-gray-200">
      
                 <div className="p-8">
           <label className="block text-xs font-semibold mb-1">CHECK IN</label>
           <div className="space-y-2 flex flex-col items-start relative" ref={checkInRef}>
              
                              <div onClick={() => setShowCheckIn(!showCheckIn)} className="cursor-pointer !pt-0">
                  {checkInDate ? checkInDate.toDateString() : 'Select date'}
                </div>
                                {showCheckIn && (
                   <div className="fixed z-50 mt-2 bg-white rounded-lg shadow-lg border border-gray-200" style={{
                     top: checkInRef.current ? checkInRef.current.getBoundingClientRect().bottom + 10 : 'auto',
                     left: checkInRef.current ? checkInRef.current.getBoundingClientRect().left : 'auto'
                   }}>
                     <Calendar 
                       onChange={(date) => { 
                         // Validate that check-in date is not after check-out date
                         if (checkOutDate && date >= checkOutDate) {
                           alert('Check-in date must be before check-out date');
                           return;
                         }
                         setCheckInDate(date); 
                         setShowCheckIn(false); 
                       }} 
                       value={checkInDate}
                       minDate={new Date()}
                     />
                   </div>
                 )}
               
             </div>

        </div>

                 <div className="p-8">
           <label className="block text-xs font-semibold mb-1">CHECK OUT</label>
           <div className="space-y-2 flex flex-col items-start relative" ref={checkOutRef}>
              
                            <div onClick={() => setShowCheckOut(!showCheckOut)} className="cursor-pointer !pt-0">
                 {checkOutDate ? checkOutDate.toDateString() : 'Select date'}
               </div>
                              {showCheckOut && (
                  <div className="fixed z-50 mt-2 bg-white rounded-lg shadow-lg border border-gray-200" style={{
                    top: checkOutRef.current ? checkOutRef.current.getBoundingClientRect().bottom + 10 : 'auto',
                    left: checkOutRef.current ? checkOutRef.current.getBoundingClientRect().left : 'auto'
                  }}>
                    <Calendar 
                      onChange={(date) => { 
                        // Validate that check-out date is not before check-in date
                        if (checkInDate && date <= checkInDate) {
                          alert('Check-out date must be after check-in date');
                          return;
                        }
                        setCheckOutDate(date); 
                        setShowCheckOut(false); 
                      }} 
                      value={checkOutDate}
                      minDate={checkInDate ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000) : new Date()}
                    />
                  </div>
                )}
              
            </div>
        </div>

        <div className="p-8 flex items-center justify-between">
          <span className="text-xs font-semibold">GUESTS</span>
          <div className="flex items-center space-x-4">
            <button onClick={decrementGuests} className="p-2   rounded">
              <FiMinus size={16} />
            </button>
            <span className="text-base">{guests}</span>
            <button onClick={incrementGuests} className="p-2  rounded">
              <FiPlus size={16} />
            </button>
          </div>
        </div>
      </div>

     <a href={link} > <button className="w-full bg-black hover:bg-gray-800 rounded-b-xl text-white py-6 text-sm tracking-wider uppercase">
        SEARCH
      </button> </a>
    </div>
  </div>

</div>

  

    </div>
  );
}
