import React from 'react'

const AboutAmenitiesTwo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">

      

    {/* Standard Amenities */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4 bg-gray-50 py-8 px-4 md:px-8 rounded-md">
      <h3 className="text-xl md:text-2xl font-[HelveticaWorldRegular] tracking-wider lg:mb-6 mb-2">Privileges</h3>
      <div className="  text-gray-700">
        <ul className="space-y-2 font-[GaretRegular]">
          <li>Contactless Check-In</li>
          <li>24/7 Customer Support</li>
          <li>Professionally Cleaned</li>
        </ul>
        
      </div>
      <div className="  text-gray-700">
        <ul className="space-y-2 font-[GaretRegular] ">
          <li>Free WiFi</li>
          <li>24-Hour Security</li>
          <li>Fresh Towels</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4 bg-green-50 py-8 px-4 md:px-8 rounded-md">
      <h3 className="text-xl md:text-2xl font-[HelveticaWorldRegular] tracking-wider lg:mb-6 mb-2">Neighbourhood</h3>
      <div className="  text-gray-700">
        <ul className="space-y-2 font-[GaretRegular]">
          <li>Airport Proximity</li>
          <li>Premium Colleges</li>
          <li>Café Culture</li>
        </ul>
        
      </div>
      <div className="  text-gray-700">
        <ul className="space-y-2 font-[GaretRegular] ">
          <li>Metro Access</li>
          <li>Boutique Retail</li>
          <li>Juhu Beach</li>
        </ul>
      </div>
    </div>

    {/* Special Amenities */}
    
    
  </div>
  )
}

export default AboutAmenitiesTwo