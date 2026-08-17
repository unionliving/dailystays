'use client';

import React from 'react';
import { FiCheck } from 'react-icons/fi';

export default function AboutAmenities() {
  const privileges = [
    "Contactless Check-In",
    "24/7 Customer Support",
    "Professionally Cleaned",
    "Free High-Speed WiFi",
    "24-Hour Security",
    "Fresh Premium Towels"
  ];

  const neighbourhood = [
    "IT Access",
    "Coworking Zones",
    "Expressway Link",
    "Premium Gyms",
    "Nature Trails",
    "Retail Convenience"
  ];

  return (
    <div className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 space-y-16 lg:space-y-24">

        {/* Privileges Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="w-full lg:w-1/3">
            <h3 className="text-3xl lg:text-4xl font-[HelveticaWorldRegular] text-gray-900 tracking-tight">
              Privileges
            </h3>
            <div className="h-px w-12 bg-black mt-6"></div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {privileges.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                  <FiCheck className="text-gray-400 flex-shrink-0" size={18} />
                  <span className="text-gray-700 font-[GaretRegular] tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Neighbourhood Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="w-full lg:w-1/3">
            <h3 className="text-3xl lg:text-4xl font-[HelveticaWorldRegular] text-gray-900 tracking-tight">
              Neighbourhood
            </h3>
            <div className="h-px w-12 bg-black mt-6"></div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {neighbourhood.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                  <FiCheck className="text-gray-400 flex-shrink-0" size={18} />
                  <span className="text-gray-700 font-[GaretRegular] tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
