import React from "react";
import Image from "next/image";
import Link from "next/link";

import BanerCover from "../../assets/hamletcover.png";
import KoregaonParkCover from "../../assets/koregaonparkcover.png";
import BalewadiCover from "../../assets/Balewadi/banner1.webp";

const puneLocations = [
  {
    title: "Baner, Pune",
    image: BanerCover,
    mapUrl: "https://maps.app.goo.gl/EVqNDPsAuPdovtRd6",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.867506521172!2d73.7784034!3d18.5529787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff4afa8145f%3A0x6d7da05eef0c7ce1!2sUnion%20Hamlet!5e0!3m2!1sen!2sin!4v1712824758554!5m2!1sen!2sin",
    href: "/hamlet",
    roomTypes: ["Studio Rooms"],
  },
  {
    title: "Koregaon Park, Pune",
    image: KoregaonParkCover,
    mapUrl: "https://maps.app.goo.gl/MdMgWuHK4WkfNgDs6",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.728803976266!2d73.8843532755847!3d18.541153482556375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1a0a4c28549%3A0xd38d149be229b6ac!2sHouse%20of%20KP%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1763980351011!5m2!1sen!2sin",
    href: "/koregaonpark",
    roomTypes: ["Studio Rooms"],
  },
  {
    title: "Balewadi, Pune",
    image: BalewadiCover,
    mapUrl: "https://maps.app.goo.gl/oeH5w6v8QWXDZKSc6",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Balewadi,+Pune&z=15&output=embed",
    href: "/balewadi",
    roomTypes: ["Studio Rooms"],
  },
];

const PuneLocations = () => {
  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-10">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
        Our Locations in Pune
      </h2>
      <h1 className="text-[0rem]">
        Book the Best Hotels & Short Term Rentals in Pune
      </h1>

      {puneLocations.map((location) => (
        <div key={location.title} className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full flex flex-col justify-start">
            <div className="w-full">
              <div className="flex flex-col md:flex-row items-stretch bg-gray-200 rounded-lg shadow-lg hover:border hover:border-black transition">
                <div className="md:w-1/2 w-full h-[300px] lg:h-[400px]">
                  <Image
                    src={location.image}
                    alt={location.title}
                    className="w-full h-full object-cover rounded-t-lg lg:rounded-t-none lg:rounded-tl-lg lg:rounded-bl-lg"
                  />
                </div>

                <div className="md:w-1/2 w-full flex flex-col justify-between p-3 lg:p-6">
                  <div className="space-y-3">
                    <h3 className="mb-2 text-[16px] lg:text-[28px] font-[HelveticaWorldRegular]">
                      {location.title}
                    </h3>

                    <div>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 underline text-sm font-[GaretRegular] hover:text-gray-800 transition-colors"
                      >
                        View Map
                      </a>
                    </div>

                    <ul className="list-inside text-[12px] lg:text-[16px] font-[GaretRegular] text-black space-y-1 mt-3">
                      {location.roomTypes.map((roomType) => (
                        <li key={roomType}>{roomType}</li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={location.href}
                    className="bg-black text-white text-sm px-8 py-3 rounded-lg hover:bg-gray-800 transition w-max mt-4"
                  >
                    DISCOVER MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-4 lg:mt-0 lg:pl-10 h-[400px] lg:h-[700px]">
            <div className="w-full h-full">
              <iframe
                src={location.mapEmbedUrl}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title={`${location.title} map`}
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PuneLocations;
