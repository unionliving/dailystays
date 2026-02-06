import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import AboutAmenities from '@/components/MumbaiStays/AboutAmenities'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import LocalFavorites from '@/components/MumbaiStays/LocalFavorites'
import RoomTypes from '@/components/MumbaiStays/RoomTypes'
import React from 'react'

import img11 from "../../assets/santacruz/1.webp";
import img12 from "../../assets/santacruz/2.webp";
import img13 from "../../assets/santacruz/3.webp";
import img14 from "../../assets/santacruz/4.webp";
import img15 from "../../assets/santacruz/5.webp";
import img16 from "../../assets/santacruz/6.webp";
import img17 from "../../assets/santacruz/7.webp";
import img18 from "../../assets/santacruz/8.webp";
import img19 from "../../assets/santacruz/9.webp";

import VarsityBannerOne from "../../assets/varsitybanner/1.webp"
import VarsityBannerTwo from "../../assets/varsitybanner/2.webp"
import VarsityBannerThree from "../../assets/varsitybanner/3.webp"
import AboutAmenitiesTwo from '@/components/MumbaiStays/AboutAmenitiesTwo'

const MumbaiPages = () => {
  const rooms = [
        {
          title: '3 BKH Apartments',
          guests: 'Upto 6 Guests',
          bedroom: '3 Bedroom ',
          bathroom: '2 Bathroom',
          images: [img11, img12, img13, img14, img15, img16, img17, img18, img19],
        },
       
        
      ];
      const bannerImages=[VarsityBannerOne, VarsityBannerTwo, VarsityBannerThree]
  return (
    <div>
    <NavbarTwo />
    
    <HotelIntro link="https://live.ipms247.com/booking/book-rooms-varsitybyunionliving" title="Varsity" bannerImages={bannerImages} location='Santacruz, Mumbai' desc="Varsity by Union Living is a modern residential concept crafted for students and young professionals who value flexibility, design, and a sense of belonging. Offering fully furnished, move-in-ready spaces with flexible stay options, Varsity blends the comforts of private living with the energy of a vibrant community. Thoughtfully designed rooms, curated common areas, and seamless services create an elevated living experience—whether you’re staying for a semester, a few months, or longer. At Varsity, you’re not just renting a space—you’re joining a lifestyle" />
    <AboutAmenitiesTwo />
    <RoomTypes link="https://live.ipms247.com/booking/book-rooms-varsitybyunionliving"  rooms={rooms}/>
   
    <FooterSection />
  
</div>
  )
}

export default MumbaiPages