"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoChevronDown, IoRemove, IoAdd } from "react-icons/io5";
import Calendar from "react-calendar";
import Image from "next/image";
import BannerOne from "../../assets/pcBanner1.webp";
import BannerTwo from "../../assets/pcBanner2.webp";
import BannerThree from "../../assets/pcBanner3.webp";
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
  {
    city: "Gurgaon - Haryana",
    // areas: ["Greenville – West End"]
    link:'/gurgaon-property'
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
        className="h-[550px] lg:h-[650px]"
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
               <h1 className="text-[0rem]">Fully Furnished Apartments for Short-Term Stay & Rentals</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Booking Form Overlay */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 top-[10%] lg:top-[80%] w-full max-w-[90%] lg:max-w-[80%] px-0">
        <div className="bg-white rounded-2xl shadow-2xl p-0">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
         
            {/* Destination */}
            <div className="space-y-2 flex lg:border-r-[1px] border-[#272727] flex-col items-center relative" ref={dropdownRef}>
              <label className="text-base pt-4 font-[HelveticaWorldRegular] text-black uppercase tracking-wide">DESTINATION</label>
              <div className="relative w-full flex justify-center">
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-[10px] cursor-pointer pl-[1.5rem] pr-[0.5rem] py-0 flex items-center justify-center w-full bg-transparent text-black text-base"
                >
                  <span className="text-[0.9rem]">{selectedDestination}</span>
                  <IoChevronDown className="ml-[0.5rem] w-5 h-5 text-gray-400" />
                </div>
                {showDropdown && (
                  <div className="absolute bg-white shadow-lg rounded-md mt-8 w-60 max-h-40 overflow-y-auto z-50">
                    {destinations.map((city, i) => (
                      <div key={i} className="flex items-center justify-center p-3">
                        <p
                          className="font-semibold  cursor-pointer hover:text-black text-gray-700"
                          onClick={() => handleDestinationSelect(city)}
                        >
                          {city.city}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Check In */}
            <div className="space-y-2 lg:border-r-[1px] border-[#272727] flex flex-col items-center relative" ref={checkInRef}>
              <label className="text-base pt-4 font-[HelveticaWorldRegular]  text-black uppercase tracking-wide">CHECK IN</label>
              <div onClick={() => setShowCheckIn(!showCheckIn)} className="cursor-pointer p-4 !pt-0">
                {checkInDate ? checkInDate.toDateString() : 'Select date'}
              </div>
              {showCheckIn && (
                <div className="absolute z-30 mt-2 bg-white rounded-lg shadow-lg">
                  <Calendar onChange={(date) => { setCheckInDate(date); setShowCheckIn(false); }} value={checkInDate} />
                </div>
              )}
            </div>

            {/* Check Out */}
            <div className="space-y-2 lg:border-r-[1px] border-[#272727] flex flex-col items-center relative" ref={checkOutRef}>
              <label className="text-base pt-4 font-[HelveticaWorldRegular]  text-black uppercase tracking-wide">CHECK OUT</label>
              <div onClick={() => setShowCheckOut(!showCheckOut)} className="cursor-pointer p-4 !pt-0">
                {checkOutDate ? checkOutDate.toDateString() : 'Select date'}
              </div>
              {showCheckOut && (
                <div className="absolute z-30 mt-2 bg-white rounded-lg shadow-lg">
                  <Calendar onChange={(date) => { setCheckOutDate(date); setShowCheckOut(false); }} value={checkOutDate} />
                </div>
              )}
            </div>

            {/* Guests */}
            <div className="space-y-2 lg:border-r-[1px] border-[#272727] flex flex-col items-center">
              <label className="text-base pt-4 font-[HelveticaWorldRegular]  text-black uppercase tracking-wide">GUESTS</label>
              <div className="flex items-center justify-between p-4 !pt-0">
                <button
                  onClick={decrementGuests}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  disabled={guests <= 1}
                >
                  <IoRemove className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-base font-medium text-gray-800 mx-4">{guests}</span>
                <button
                  onClick={incrementGuests}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <IoAdd className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1">
            <Link href={property.link ? property.link : '/'} >   <button className="w-full bg-emerald-800 hover:bg-emerald-900 bg-black text-white font-[GaretRegular] py-4 px-8 h-full lg:rounded-tr-xl lg:rounded-br-xl rounded-br-xl rounded-bl-xl lg:rounded-bl-none transition-colors duration-200 text-base tracking-wide">
                SEARCH
              </button> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;