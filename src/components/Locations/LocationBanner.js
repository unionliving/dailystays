import React from 'react'
import './LocationBanner.css'  // Parallax CSS

const LocationBanner = ({ image, location, sublocation, desc }) => {
  return (
    <div className="relative bg-black h-auto py-12 lg:py-24 parallax-bg">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#66694A] opacity-100"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 lg:px-20 text-white py-6">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
          
          {/* Left Side */}
          <div>
            
            <h3 className="text-[1.3rem] lg:w-full  lg:text-[2.1rem] font-[GaretRegular] tracking-wider mb-2">

        {location}{sublocation}
            </h3>
            <div className="h-[2px] lg:mb-6  "></div>

           
          </div>

          {/* Right Side */}
          <div>
            <h3 className="font-[GaretRegular] tracking-wider text-[0.8rem] lg:text-[1.3rem] lg:mr-[120px] text-justify leading-relaxed">
           {desc}
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LocationBanner

