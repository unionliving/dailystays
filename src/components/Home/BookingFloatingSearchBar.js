'use client';
import { useRef, useEffect, useState } from "react";
import { IoChevronDown, IoAdd, IoRemove } from 'react-icons/io5';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Link from "next/link";

const destinations = [
  {
    city: "Varsity - Santacruz",
    // areas: ["Dallas – Downtown"]
    link:'/varsity'
  },
  {
    city: "Southside - Mahalaxmi",
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
    link:'/koregaonpark'
  },
  {
    city: "Gurgaon - Haryana",
    // areas: ["Greenville – West End"]
    link:'/gurgaon-property'
  },
];

export default function BookingFloatingSearchBar() {
  const [guests, setGuests] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);


  const [selectedDestination, setSelectedDestination] = useState("Where to next");
  const [showDropdown, setShowDropdown] = useState(false);
  const [property, setProperty] = useState({})
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);

  const incrementGuests = () => setGuests((prev) => prev + 1);
  const decrementGuests = () => setGuests((prev) => Math.max(1, prev - 1));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.7;
      setIsVisible(scrollY > triggerPoint);
      setIsSticky(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (checkInRef.current && !checkInRef.current.contains(event.target)) {
        setShowCheckIn(false);
      }
      if (checkOutRef.current && !checkOutRef.current.contains(event.target)) {
        setShowCheckOut(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleDestinationSelect = (area) => {
    setSelectedDestination(area.city);
    setProperty(city)
    setShowDropdown(false);
  };


  if (!isVisible) return null;

  return (
    <div
      className={`hidden md:block z-[9999] w-full transition-all duration-300 ease-in-out ${
        isSticky
          ? 'fixed top-[92px] left-1/2 -translate-x-1/2'
          : 'absolute top-[85%] left-1/2 -translate-x-1/2'
      }`}
    >
      <div className="w-full bg-white shadow-2xl border border-gray-200 overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
          {/* Destination */}
          <div className="flex flex-col items-center py-4 px-6 relative">
            <label className="text-sm text-gray-700 font-[HelveticaWorldRegular] tracking-wider uppercase mb-2">Destination</label>
            <div
              className="relative w-full text-center cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="text-base font-medium text-gray-800 pr-4">
                {selectedDestination}
              </div>
              <IoChevronDown className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              {showDropdown && (
                <div className="absolute z-30 bg-white shadow-lg rounded-md mt-2 w-60 max-h-64 overflow-y-auto left-1/2 transform -translate-x-1/2">
                  {destinations.map((city, i) => (
                    <div onClick={() => handleDestinationSelect(city)}key={i} className="p-3">
                      <p className="font-semibold">{city.city}</p>
                      
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Check In */}
          <div className="flex flex-col items-center py-4 px-6 relative">
            <label className="text-sm text-gray-700 font-[HelveticaWorldRegular] tracking-wider uppercase mb-2">Check In</label>
            <div
              onClick={() => setShowCheckIn(!showCheckIn)}
              className="text-base font-medium text-gray-800 text-center cursor-pointer"
            >
              {checkInDate ? checkInDate.toDateString() : 'Select date'}
            </div>
            {showCheckIn && (
              <div ref={checkInRef} className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg">
                <Calendar
                  onChange={(date) => {
                    setCheckInDate(date);
                    setShowCheckIn(false);
                  }}
                  value={checkInDate}
                />
              </div>
            )}

          </div>

          {/* Check Out */}
          <div className="flex flex-col items-center py-4 px-6 relative">
            <label className="text-sm text-gray-700 font-[HelveticaWorldRegular] tracking-wider uppercase mb-2">Check Out</label>
            <div
              onClick={() => setShowCheckOut(!showCheckOut)}
              className="text-base font-medium text-gray-800 text-center cursor-pointer"
            >
              {checkOutDate ? checkOutDate.toDateString() : 'Select date'}
            </div>
            {showCheckOut && (
              <div ref={checkOutRef} className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg">
                <Calendar
                  onChange={(date) => {
                    setCheckOutDate(date);
                    setShowCheckOut(false);
                  }}
                  value={checkOutDate}
                />
              </div>
            )}

          </div>

          {/* Guests */}
          <div className="flex flex-col items-center py-4 px-6">
            <label className="text-sm text-gray-700 font-[HelveticaWorldRegular] tracking-wider uppercase mb-2">Guests</label>
            <div className="flex items-center gap-4">
              <button
                onClick={decrementGuests}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <IoRemove />
              </button>
              <span className="text-base font-medium text-gray-800">{guests}</span>
              <button
                onClick={incrementGuests}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <IoAdd />
              </button>
            </div>
          </div>

          {/* Search Button */}
       <div className="md:col-span-1 bg-black">
       <Link  href={property.link ? property.link : '/'}>   <button className="w-full h-full bg-black text-white text-lg font-semibold uppercase hover:bg-gray-900 transition-all">
              Search
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
