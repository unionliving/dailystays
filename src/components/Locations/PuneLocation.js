import React from "react";
import Image from "next/image";
import Link from "next/link";

import BanerCover from "../../assets/hamletcover.png";
import KoregaonParkCover from "../../assets/koregaonparkcover.png";
import BalewadiCover from "../../assets/Balewadi/banner1.webp";

const x90Cover = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/cover.webp";

import PuneCover from "../../assets/pune.webp";

const puneLocations = [
  {
    title: "Baner, Pune",
    image: BanerCover,
    mapUrl: "https://maps.app.goo.gl/EVqNDPsAuPdovtRd6",
    href: "/hamlet",
    roomTypes: ["Studio Rooms"],
  },
  {
    title: "Koregaon Park, Pune",
    image: KoregaonParkCover,
    mapUrl: "https://maps.app.goo.gl/MdMgWuHK4WkfNgDs6",
    href: "/koregaonpark",
    roomTypes: ["Studio Rooms"],
  },
  {
    title: "Balewadi, Pune",
    image: BalewadiCover,
    mapUrl: "https://maps.app.goo.gl/oeH5w6v8QWXDZKSc6",
    href: "/balewadi",
    roomTypes: ["Studio Rooms"],
  },
  {
    title: "X90, Baner Pune",
    image: x90Cover,
    mapUrl: "https://maps.google.com/maps?q=X90+Premium+Studios,+Pune",
    href: "/x90",
    roomTypes: ["Studio Rooms"],
  },
  {
    title: "Other, Pune",
    image: "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/other/other6.webp",
    mapUrl: "https://maps.google.com/maps?q=Pune",
    href: "/other-pune",
    roomTypes: ["Studio Rooms"],
  }
];

const PuneLocations = () => {
  return (
    <div className="w-full bg-[#fafafa] flex flex-col py-20 lg:py-28 px-6 lg:px-20">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
        <h2 className="text-4xl lg:text-5xl font-[HelveticaWorldRegular] text-gray-900 tracking-tight mb-4">
          Pune Residences
        </h2>
        <p className="text-gray-500 font-[GaretRegular] text-lg max-w-2xl">
          Experience our handcrafted selection of beautifully designed living spaces built for comfort, connection, and long-term stays in Pune.
        </p>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-7xl mx-auto w-full">
        {puneLocations.map((location, index) => {
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

export default PuneLocations;
