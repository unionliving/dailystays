'use client';

import { useState, useRef } from 'react';
import { FiMinus, FiPlus, FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Calendar from "react-calendar";

export default function HotelIntro({ title, location, locationLink, mapLink, desc, bannerImages, link }) {
  const [guests, setGuests] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const incrementGuests = () => setGuests(guests + 1);
  const decrementGuests = () => setGuests(guests > 1 ? guests - 1 : 1);

  return (
    <div className="relative w-full bg-white pb-16 pt-10 lg:pt-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Title Section (Top) */}
        <div className="mb-8 lg:mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[HelveticaWorldRegular] text-gray-900 tracking-tight leading-tight">
            {title} <span className="text-gray-400 font-light block md:inline md:ml-4">{location}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <a 
              href={mapLink || `https://maps.google.com/?q=${encodeURIComponent(location + " Union Living")}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors group"
            >
              <FiMapPin size={16} className="group-hover:animate-bounce" />
              <span className="font-[GaretRegular] text-sm uppercase tracking-widest border-b border-transparent group-hover:border-black transition-colors">
                View on Map
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">
          
          {/* Left: Image Carousel (55%) */}
          <div className="w-full lg:w-[55%] relative group rounded-2xl overflow-hidden shadow-sm">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3]">
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
                className="h-full w-full"
              >
                {bannerImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={img}
                      alt={`${title} Banner ${idx + 1}`}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation */}
              <div className="absolute bottom-6 right-6 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button ref={prevRef} className="bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white text-black transition-all shadow-md">
                  <FiChevronLeft size={20} />
                </button>
                <button ref={nextRef} className="bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white text-black transition-all shadow-md">
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Description & Booking Widget (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col space-y-12 lg:sticky lg:top-24 z-30">
            
            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-sm md:text-base font-[GaretRegular] leading-relaxed text-justify">
                {desc}
              </p>
            </div>

            {/* Booking Widget */}
            <div className="w-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl border border-gray-100 p-6 md:p-8">
              
              <div className="mb-6">
                <h3 className="text-xl font-[HelveticaWorldRegular] text-gray-900 mb-1">Reserve your stay</h3>
              </div>

              <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
                {/* Dates */}
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 border-b border-gray-200">
                  
                  {/* Check In */}
                  <div className="w-full md:w-1/2 p-4 relative" ref={checkInRef}>
                    <label className="block text-[0.65rem] tracking-widest font-bold text-gray-900 mb-1 uppercase">Check In</label>
                    <div 
                      onClick={() => setShowCheckIn(!showCheckIn)} 
                      className="cursor-pointer text-sm text-gray-600 font-[GaretRegular]"
                    >
                        {checkInDate ? checkInDate.toLocaleDateString() : 'Add date'}
                    </div>
                    {showCheckIn && (
                        <div className="absolute z-50 top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                          <Calendar 
                            onChange={(date) => { 
                              if (checkOutDate && date >= checkOutDate) {
                                alert('Check-in date must be before check-out date');
                                return;
                              }
                              setCheckInDate(date); 
                              setShowCheckIn(false); 
                            }} 
                            value={checkInDate}
                            minDate={new Date()}
                            className="border-0 font-[GaretRegular]"
                          />
                        </div>
                    )}
                  </div>

                  {/* Check Out */}
                  <div className="w-full md:w-1/2 p-4 relative" ref={checkOutRef}>
                    <label className="block text-[0.65rem] tracking-widest font-bold text-gray-900 mb-1 uppercase">Check Out</label>
                    <div 
                      onClick={() => setShowCheckOut(!showCheckOut)} 
                      className="cursor-pointer text-sm text-gray-600 font-[GaretRegular]"
                    >
                       {checkOutDate ? checkOutDate.toLocaleDateString() : 'Add date'}
                    </div>
                    {showCheckOut && (
                        <div className="absolute z-50 top-full right-0 md:left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                          <Calendar 
                            onChange={(date) => { 
                              if (checkInDate && date <= checkInDate) {
                                alert('Check-out date must be after check-in date');
                                return;
                              }
                              setCheckOutDate(date); 
                              setShowCheckOut(false); 
                            }} 
                            value={checkOutDate}
                            minDate={checkInDate ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000) : new Date()}
                            className="border-0 font-[GaretRegular]"
                          />
                        </div>
                    )}
                  </div>
                </div>

                {/* Guests */}
                <div className="p-4 flex items-center justify-between bg-gray-50/50">
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] tracking-widest font-bold text-gray-900 mb-1 uppercase">Guests</span>
                    <span className="text-sm text-gray-600 font-[GaretRegular]">Guests</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button onClick={decrementGuests} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                      <FiMinus size={14} className="text-gray-600" />
                    </button>
                    <span className="text-base font-medium w-4 text-center">{guests}</span>
                    <button onClick={incrementGuests} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                      <FiPlus size={14} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              <a href={link} className="block w-full">
                <button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl text-sm tracking-widest uppercase font-medium transition-colors shadow-md hover:shadow-xl">
                  Check Availability
                </button>
              </a>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
