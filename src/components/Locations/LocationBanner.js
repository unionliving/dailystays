import React from 'react'
import Image from 'next/image'

const LocationBanner = ({ image, location, sublocation, desc }) => {
  return (
    <div className="relative w-full min-h-[40vh] lg:min-h-[500px] flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      {image && (
        <Image 
          src={image} 
          alt={`${location} banner`}
          fill
          className="object-cover object-center opacity-70"
          priority
        />
      )}

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 lg:px-20 py-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side: Title */}
          <div className="flex flex-col border-l-4 border-white pl-6">
            <h1 className="text-3xl lg:text-5xl font-[HelveticaWorldRegular] tracking-wide">
              {location} 
              <span className="text-gray-300 font-[GaretRegular] text-2xl lg:text-4xl">{sublocation}</span>
            </h1>
          </div>

          {/* Right Side: Description */}
          <div className="lg:pl-8">
            <p className="max-w-xl text-sm lg:text-base text-gray-200 leading-relaxed font-[GaretRegular] text-left">
              {desc}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LocationBanner

