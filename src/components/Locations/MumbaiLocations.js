import React from 'react';
import Image from 'next/image';
import Mahalaxmi from "../../assets/stays7.png";
import Southside from "../../assets/mahalaxmicover.png"
import Link from 'next/link';

const MumbaiLocations = () => {
  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-10">

      {/* First Location Block */}
      <h2 className="text-xl lg:text-3xl font-[HelveticaWorldRegular] mb-2">Our Locations in Mumbai</h2>
              
      <div className="flex flex-col lg:flex-row">
     
        {/* Left Side - Property Card */}
        <div className="lg:w-1/2 w-full flex flex-col justify-Start">
        
      

          <div className="w-full">
            <div className="flex flex-col md:flex-row items-stretch bg-gray-200 rounded-lg shadow-lg hover:border hover:border-black transition">

              {/* Image Column */}
              <div className="md:w-1/2 w-full h-[300px] lg:h-[400px]">
                <Image
                  src={Southside} // Replace with your image
                  alt="Stay"
                  className="w-full h-full object-cover rounded-t-lg  lg:rounded-t-none lg:rounded-tl-lg lg:rounded-bl-lg"
                />
              </div>

              {/* Text Column */}
              <div className="md:w-1/2 w-full flex flex-col justify-between p-3 lg:p-6">
                <div className="space-y-3">
                  <h3 className="mb-2 text-[16px] lg:text-[28px] font-[HelveticaWorldRegular]">Mahalaxmi, Mumbai</h3>
                  
                  {/* <span className="mb-4 text-[20px] text-gray-700">Mahalaxmi, Mumbai</span> */}

                  {/* View Map link (opens Google Maps in new tab) */}
                  <div>
                    <a
                      href="https://maps.app.goo.gl/oJP2DATTACjCPEGM6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 underline text-sm  font-[GaretRegular] hover:text-gray-800 transition-colors"
                    >
                      View Map
                    </a>
                  </div>

                  {/* Bullet points for BHK types */}
                  <ul className=" list-inside text-[12px] lg:text-[16px] font-[GaretRegular] text-black space-y-1 mt-3">
                    <li>One Bedroom</li>
                    <li>Two Bedroom</li>
                    <li>Three Bedroom</li>
                  </ul>
                </div>



                <Link
                  href="/southside"
                
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15091.720798709732!2d72.8258839!3d18.9786898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfc462de8a1f%3A0x2a4ee6362fbea170!2sSouthside%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1714534828670!5m2!1sen!2sin" 
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

      {/* Second Location Block - DUPLICATE */}
      
      <div className="flex flex-col mt-10 lg:mt-0 lg:flex-row">
      <h1 className='text-[0rem]'>Best Short Term Rental Apartments & Hotels for Stay in Mumbai
      </h1>
        {/* Left Side - Property Card */}
        <div className="lg:w-1/2 w-full flex flex-col justify-Start">      

          <div className="w-full">
            <div className="flex flex-col md:flex-row items-stretch bg-gray-200 rounded-lg shadow-lg hover:border hover:border-black transition">

              {/* Image Column */}
              <div className="md:w-1/2 w-full h-[300px] lg:h-[400px]">
                <Image
                  src={Mahalaxmi} // Replace with your image
                  alt="Stay"
                  className="w-full h-full object-cover rounded-t-lg  lg:rounded-t-none lg:rounded-tl-lg lg:rounded-bl-lg"
                />
              </div>

              {/* Text Column */}
              <div className="md:w-1/2 w-full flex flex-col justify-between p-3 lg:p-6">
                <div className="space-y-3">
                  <h3 className="mb-2 text-[16px] lg:text-[28px] font-[HelveticaWorldRegular]">Santracruz, Mumbai</h3>
                  
                  {/* <span className="mb-4 text-[20px] text-gray-700">Santracruz, Mumbai</span> */}

                  {/* View Map link (opens Google Maps in new tab) */}
                  <div>
                    <a
                      href="https://maps.app.goo.gl/SHQ2iDMbyhxk5T1p8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 underline text-sm  font-[GaretRegular] hover:text-gray-800 transition-colors"
                    >
                      View Map
                    </a>
                  </div>

                  {/* Bullet points for BHK types */}
                  <ul className=" list-inside text-[12px] lg:text-[16px] font-[GaretRegular] text-black space-y-1 mt-3">
                    <li>Three Bedroom</li>
                    
                  </ul>
                </div>

                <Link
                  href="/varsity"
                 
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.696760186362!2d72.8341302!3d19.0890381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fb0323a235%3A0x577a653a62504566!2sVarsity%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1709842768484!5m2!1sen!2sin"
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

export default MumbaiLocations;
