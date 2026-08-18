"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoChevronDown, IoRemove, IoAdd } from "react-icons/io5";
import Calendar from "react-calendar";
import Image from "next/image";
import BannerOne from "../../assets/pcBanner1.webp";
import "swiper/css";
import "react-calendar/dist/Calendar.css";
import Link from "next/link";

const destinations = [
  {
    city: "Santacruz - Mumbai",
    // areas: ["Dallas – Downtown"]
    link:'/varsity'
  },
  {
    city: "Mahalaxmi - Mumbai",
    // areas: ["Denver – Downtown", "Union Station"]
    link:'/southside'
  },
  {
    city: "Hamlet - Baner",
    // areas: ["Greenville – West End"]
    link:'/hamlet'
  },
  {
    city: "Koregaon Park - Pune",
    // areas: ["Greenville – West End"]
    link:'/hamlet'
  },
];

const HomeBanner = () => {
  const [guests, setGuests] = useState(1);
  const [selectedDestination, setSelectedDestination] = useState("Where to next");
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [property, setProperty] = useState({})
  const dropdownRef = useRef(null);
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
      if (checkInRef.current && !checkInRef.current.contains(e.target)) {
        setShowCheckIn(false);
      }
      if (checkOutRef.current && !checkOutRef.current.contains(e.target)) {
        setShowCheckOut(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const incrementGuests = () => setGuests((prev) => prev + 1);
  const decrementGuests = () => setGuests((prev) => Math.max(1, prev - 1));
  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination.city);
    setProperty(destination)
    console.log(destination)
    setShowDropdown(false);
  };

  return (
    <div className="relative lg:pt-0">
      <Swiper
        spaceBetween={0}
        className="h-screen w-full"
        draggable={true}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {[BannerOne].map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                className="w-full h-full object-cover"
                src={banner}
                alt={`Banner ${index + 1}`}
                width={1200}
                height={600}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/50 backdrop-blur-sm">
                <div className="transform -translate-y-8 lg:-translate-y-12 w-full max-w-4xl">
                  <p className="text-white text-xs md:text-sm font-[GaretRegular] tracking-[0.4em] uppercase mb-6 drop-shadow-sm">
                    The Daily Stays
                  </p>
                  <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] text-white font-[HelveticaWorldRegular] tracking-tight mb-8 drop-shadow-md">
                    Elevate your stay.
                  </h1>
                  <div className="w-24 h-[1px] bg-white/70 mx-auto mb-8"></div>
                  <p className="text-white/95 text-sm md:text-base lg:text-lg font-[GaretRegular] tracking-wide max-w-2xl mx-auto leading-relaxed drop-shadow-sm mb-10">
                    Fully furnished premium apartments for short-term stays, corporate housing, and flexible modern living.
                  </p>
                  <button 
                    onClick={() => {
                      const section = document.getElementById('stays-section');
                      if (section) section.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-black px-8 py-4 rounded-full font-[GaretRegular] tracking-[0.2em] uppercase text-xs hover:bg-gray-100 hover:shadow-xl transition-all duration-300 inline-block"
                  >
                    Explore Residences
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Booking Form Below Banner */}
      <div className="w-full bg-white relative z-20 px-6 lg:px-12 pt-8 pb-12 lg:pb-16 -mt-8">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:h-24">
         
            {/* Destination */}
            <div className="flex-1 px-6 py-4 lg:py-0 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer" ref={dropdownRef} onClick={() => setShowDropdown(!showDropdown)}>
              <label className="text-[0.65rem] font-[HelveticaWorldRegular] text-gray-500 uppercase tracking-[0.15em] mb-1 cursor-pointer">Destination</label>
              <div className="flex items-center justify-between">
                <span className="text-sm lg:text-base font-[GaretRegular] text-gray-900 truncate font-medium">{selectedDestination}</span>
                <IoChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 w-full lg:w-[120%] bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden z-50">
                  {destinations.map((city, i) => (
                    <div
                      key={i}
                      className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-b-0"
                      onClick={(e) => { e.stopPropagation(); handleDestinationSelect(city); }}
                    >
                      <span className="text-sm font-[GaretRegular] text-gray-800">{city.city}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Check In */}
            <div className="flex-1 px-6 py-4 lg:py-0 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer" ref={checkInRef} onClick={() => setShowCheckIn(!showCheckIn)}>
              <label className="text-[0.65rem] font-[HelveticaWorldRegular] text-gray-500 uppercase tracking-[0.15em] mb-1 cursor-pointer">Check In</label>
              <div className="text-sm lg:text-base font-[GaretRegular] text-gray-900 truncate font-medium">
                {checkInDate ? checkInDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Add Date'}
              </div>
              {showCheckIn && (
                <div className="absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 mt-2 bg-white shadow-xl rounded-xl border border-gray-100 p-4 z-50" onClick={(e) => e.stopPropagation()}>
                  <Calendar onChange={(date) => { setCheckInDate(date); setShowCheckIn(false); }} value={checkInDate} className="border-0 font-[GaretRegular]" />
                </div>
              )}
            </div>

            {/* Check Out */}
            <div className="flex-1 px-6 py-4 lg:py-0 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer" ref={checkOutRef} onClick={() => setShowCheckOut(!showCheckOut)}>
              <label className="text-[0.65rem] font-[HelveticaWorldRegular] text-gray-500 uppercase tracking-[0.15em] mb-1 cursor-pointer">Check Out</label>
              <div className="text-sm lg:text-base font-[GaretRegular] text-gray-900 truncate font-medium">
                {checkOutDate ? checkOutDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Add Date'}
              </div>
              {showCheckOut && (
                <div className="absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 mt-2 bg-white shadow-xl rounded-xl border border-gray-100 p-4 z-50" onClick={(e) => e.stopPropagation()}>
                  <Calendar onChange={(date) => { setCheckOutDate(date); setShowCheckOut(false); }} value={checkOutDate} className="border-0 font-[GaretRegular]" />
                </div>
              )}
            </div>

            {/* Guests */}
            <div className="flex-1 px-6 py-4 lg:py-0 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
              <label className="text-[0.65rem] font-[HelveticaWorldRegular] text-gray-500 uppercase tracking-[0.15em] mb-1">Guests</label>
              <div className="flex items-center justify-between">
                <button
                  onClick={decrementGuests}
                  className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 hover:bg-gray-100 transition-colors"
                  disabled={guests <= 1}
                >
                  <IoRemove className="w-3.5 h-3.5 text-gray-600" />
                </button>
                <span className="text-sm lg:text-base font-[GaretRegular] text-gray-900 font-medium">{guests}</span>
                <button
                  onClick={incrementGuests}
                  className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 hover:bg-gray-100 transition-colors"
                >
                  <IoAdd className="w-3.5 h-3.5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:w-[15%]">
              <Link href={property.link ? property.link : '/'} className="block w-full h-full">   
                <button className="w-full h-full bg-black text-white hover:bg-gray-800 font-[GaretRegular] py-5 lg:py-0 transition-colors duration-300 text-[0.75rem] uppercase tracking-[0.2em] flex items-center justify-center font-medium">
                  Search
                </button> 
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;