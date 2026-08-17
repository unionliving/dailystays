import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Southside from "../../assets/mahalaxmicover.png"

const bkc = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-1.webp"

const mumbaiLocations = [
  {
    title: "Mahalaxmi, Mumbai",
    image: Southside,
    mapUrl: "https://maps.app.goo.gl/oJP2DATTACjCPEGM6",
    href: "/southside",
    roomTypes: ["One Bedroom", "Two Bedroom", "Three Bedroom"]
  },
  {
    title: "BKC, Mumbai",
    image: bkc,
    mapUrl: "https://maps.app.goo.gl/49YcAJuPdB8p66618",
    href: "/union-bkc",
    roomTypes: ["One Bedroom", "Two Bedroom"]
  }
];

const MumbaiLocations = () => {
  return (
    <div className="w-full bg-[#fafafa] flex flex-col py-20 lg:py-28 px-6 lg:px-20">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
        <h2 className="text-4xl lg:text-5xl font-[HelveticaWorldRegular] text-gray-900 tracking-tight mb-4">
          Mumbai Residences
        </h2>
        <p className="text-gray-500 font-[GaretRegular] text-lg max-w-2xl">
          Discover our curated selection of premium short-term rentals and boutique hotel stays across Mumbai's most vibrant neighborhoods.
        </p>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-7xl mx-auto w-full">
        {mumbaiLocations.map((location, index) => {
          const titleParts = location.title.split(',');
          const mainTitle = titleParts[0];
          const subTitle = titleParts[1] ? titleParts[1].trim() : '';

          return (
            <div key={index} className="group flex flex-col">
              
              {/* Image Card */}
              <Link href={location.href} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 block shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={location.image}
                  alt={location.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </Link>

              {/* Text Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl lg:text-3xl font-[HelveticaWorldRegular] text-gray-900">
                    {mainTitle}
                  </h3>
                  <a 
                    href={location.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase font-medium text-gray-400 hover:text-black border-b border-transparent hover:border-black transition-colors pt-1"
                  >
                    Map
                  </a>
                </div>
                
                <p className="text-gray-500 font-[GaretRegular] text-sm mb-6">
                  {subTitle} • {location.roomTypes.join(' • ')}
                </p>

                <div className="mt-auto">
                  <Link 
                    href={location.href} 
                    className="inline-block px-8 py-3 bg-black text-white text-sm tracking-widest uppercase font-[GaretRegular] rounded-full hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-md"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MumbaiLocations;
