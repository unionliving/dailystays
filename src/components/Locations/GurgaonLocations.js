import React from 'react';
import Image from 'next/image';
import PlaceholderImage from "../../assets/gurgaon/gurgaon.webp"; // Using Mumbai as placeholder
import Link from 'next/link';

const GurgaonLocations = () => {
  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-10">

      {/* First Location Block */}
      <h2 className="text-xl lg:text-3xl font-[HelveticaWorldRegular] mb-2">Our Locations in Gurgaon</h2>
              
      <div className="flex flex-col lg:flex-row">
     
        {/* Left Side - Property Card */}
        <div className="lg:w-1/2 w-full flex flex-col justify-Start">
        
      

          <div className="w-full">
            <div className="flex flex-col md:flex-row items-stretch bg-gray-200 rounded-lg shadow-lg hover:border hover:border-black transition">

              {/* Image Column */}
              <div className="md:w-1/2 w-full h-[300px] lg:h-[400px]">
                <Image
                  src={PlaceholderImage} // Replace with your image
                  alt="Stay"
                  className="w-full h-full object-cover rounded-t-lg  lg:rounded-t-none lg:rounded-tl-lg lg:rounded-bl-lg"
                />
              </div>

              {/* Text Column */}
              <div className="md:w-1/2 w-full flex flex-col justify-between p-3 lg:p-6">
                <div className="space-y-3">
                  <h3 className="mb-2 text-[16px] lg:text-[28px] font-[HelveticaWorldRegular]">Gurgaon, Haryana</h3>
                  
                  {/* <span className="mb-4 text-[20px] text-gray-700">Gurgaon, Haryana</span> */}

                  {/* View Map link (opens Google Maps in new tab) */}
                  <div>
                    <a
                      href="https://maps.app.goo.gl/o6ypDapkusvCU8XJ7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 underline text-sm  font-[GaretRegular] hover:text-gray-800 transition-colors"
                    >
                      View Map
                    </a>
                  </div>

                  {/* Bullet points for BHK types */}
                  <ul className=" list-inside text-[12px] lg:text-[16px] font-[GaretRegular] text-black space-y-1 mt-3">
                    <li>Luxury Apartments</li>
                    <li>Studio Rooms</li>
                  </ul>
                </div>



                <Link
                  href="/gurgaon-property"
                
                  className="bg-black text-white text-[8px] lg:text-sm px-8 py-3  font-[GaretRegular] rounded-lg hover:bg-gray-800 transition w-max mt-4"
                >
                  DISCOVER MORE
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Right Side - Google Map */}
        <div className="lg:w-1/2 w-full mt-4 lg:mt-0 lg:pl-10 h-[400px] lg:h-[700px]">
          <div className="w-full h-full">
            <iframe
              src="https://maps.google.com/maps?q=Nova+by+Union+Living+Gurgaon&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

    </div>

    
  );
};

export default GurgaonLocations;
