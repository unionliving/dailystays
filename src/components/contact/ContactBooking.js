'use client';
import { useEffect, useState } from 'react';
import { IoChevronDown, IoAdd, IoRemove } from 'react-icons/io5';

export default function ContactBooking() {
  const [guests, setGuests] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const incrementGuests = () => setGuests((prev) => prev + 1);
  const decrementGuests = () => setGuests((prev) => Math.max(1, prev - 1));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.1; // 70vh

      setIsVisible(scrollY > triggerPoint);
      setIsSticky(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
    className={`hidden md:block z-[998] w-full transition-all duration-300 ease-in-out ${
        isSticky
        ? 'fixed top-[92px] left-1/2 -translate-x-1/2'
        : 'absolute top-[90%] left-1/2 -translate-x-1/2'
    }`}
    >
      <div className="w-[100%] bg-white shadow-2xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
          {/* Destination */}
          <div className="flex flex-col items-center py-4 px-6">
            <label className="text-sm text-gray-700 font-[HelveticaWorldRegular] tracking-wider uppercase mb-2">
              Destination
            </label>
            <div className="relative w-full">
              <select className="w-full text-center appearance-none bg-transparent text-base font-medium text-gray-800 cursor-pointer pr-6">
                <option>Where to next</option>
                <option>Varsity, Santracruz</option>
                <option>Southside, Mahalaxmi</option>
                <option>Hamlet, Baner</option>
              </select>
              <IoChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Check In */}
          <div className="flex flex-col items-center py-4 px-6">
            <label className="text-sm text-gray-700 font-[HelveticaWorldRegular] tracking-wider uppercase mb-2">
              Check In
            </label>
            <input
              type="date"
              className="bg-transparent text-center w-full text-base font-medium text-gray-800 cursor-pointer"
            />
          </div>

          {/* Check Out */}
          <div className="flex flex-col items-center py-4 px-6">
            <label className="text-sm text-gray-700 font-[HelveticaWorldRegular] tracking-wider uppercase mb-2">
              Check Out
            </label>
            <input
              type="date"
              className="bg-transparent text-center w-full text-base font-medium text-gray-800 cursor-pointer"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col items-center py-4 px-6">
            <label className="text-sm text-gray-700 font-[HelveticaWorldRegular] tracking-wider uppercase mb-2">
              Guests
            </label>
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
            <button className="w-full h-full bg-black text-white text-lg font-semibold  uppercase hover:bg-gray-900 transition-all ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
