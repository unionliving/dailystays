import React from 'react';
import Image from 'next/image';
import img1 from '../../assets/stays1.png'; // Replace with your image

const LocalFavorites = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 lg:px-0 px-4 font-[HelveticaWorldRegular] tracking-wider ">
      <h2 className="text-3xl lg:text-4xl font-medium mb-10">Local Favorites</h2>

      <div className="flex flex-col lg:flex-row items-start lg:pt-12 lg:gap-10 gap-5">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl lg:text-3xl lg:mb-12 mb-4">South Street Seaport</h3>
          <p className="uppercase text-sm font-semibold lg:mb-12 mb-4 tracking-widest">Directions</p>
          <p className="text-lg leading-relaxed text-gray-800">
            Filled with culinary, cultural and entertainment experiences, the Seaport is one of our go-to’s when it comes to exploring the city. From the museum to the rooftop at Pier 17, there are endless opportunities to live like a local.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 pb-8 lg:py-0 ">
          <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
            <Image
              src={img1}
              alt="South Street Seaport"
              className="object-cover w-full h-full"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-start lg:pt-12 lg:gap-10 gap-5">
        
        {/* Left Image */}
        <div className="lg:w-1/2 pb-8 lg:py-0">
          <div className="overflow-hidden rounded-tr-[80px] rounded-bl-[80px]">
            <Image
              src={img1}
              alt="South Street Seaport"
              className="object-cover w-full h-full"
              placeholder="blur"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl lg:text-3xl lg:mb-12 mb-4">South Street Seaport</h3>
          <p className="uppercase text-sm font-semibold lg:mb-12 mb-4 tracking-widest">Directions</p>
          <p className="text-lg leading-relaxed text-gray-800">
            Filled with culinary, cultural and entertainment experiences, the Seaport is one of our go-to’s when it comes to exploring the city. From the museum to the rooftop at Pier 17, there are endless opportunities to live like a local.
          </p>
        </div>

        
      </div>


      <div className="flex flex-col lg:flex-row items-start lg:pt-12 lg:gap-10 gap-5">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl lg:text-3xl lg:mb-12 mb-4">South Street Seaport</h3>
          <p className="uppercase text-sm font-semibold lg:mb-12 mb-4 tracking-widest">Directions</p>
          <p className="text-lg leading-relaxed text-gray-800">
            Filled with culinary, cultural and entertainment experiences, the Seaport is one of our go-to’s when it comes to exploring the city. From the museum to the rooftop at Pier 17, there are endless opportunities to live like a local.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
            <Image
              src={img1}
              alt="South Street Seaport"
              className="object-cover w-full h-full"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalFavorites;
