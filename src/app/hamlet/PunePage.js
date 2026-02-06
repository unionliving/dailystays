import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import AboutAmenities from '@/components/PuneStays/AboutAmenities'
import LocalFavorites from '@/components/PuneStays/LocalFavorites'
import RoomTypes from '@/components/PuneStays/RoomTypes'
import React from 'react'

import img1 from "../../assets/baner/1.webp";
import img2 from "../../assets/baner/2.webp";
import img3 from "../../assets/baner/3.webp";
import img4 from "../../assets/baner/4.webp";
import img5 from "../../assets/baner/5.webp";
import img6 from "../../assets/baner/6.webp";
import img7 from "../../assets/baner/7.webp";



import VarsityBannerOne from "../../assets/hamletbanner/1.webp"
import VarsityBannerTwo from "../../assets/hamletbanner/2.webp"
import VarsityBannerThree from "../../assets/hamletbanner/3.webp"


const PunePage = () => {

  const rooms = [
    {
      title: 'Studio Rooms',
      // guests: 'Up to 2 Guests',
      bedroom: '1 Bedroom',
      balcony: '1 Balcony',
      bathroom: '1 Bathroom',
      images: [img1, img2, img3, img4, img5, img6, img7],
    },
    
  ];
  const bannerImages = [
    VarsityBannerOne, VarsityBannerTwo, VarsityBannerThree
  ]
  return (
    <div>
    <NavbarTwo />

    <HotelIntro link="https://live.ipms247.com/booking/book-rooms-hamletbyunionliving" title="Hamlet" bannerImages={bannerImages} location='Baner, Pune' desc="Hamlet by Union Living is a thoughtfully designed living space nestled in the heart of Baner—one of Pune’s most vibrant and well-connected neighborhoods. Blending modern comfort with a calm, residential charm, Hamlet offers fully furnished, move-in-ready homes ideal for young professionals, creatives, and entrepreneurs. With flexible stay options, curated interiors, and warm communal spaces, Hamlet is more than just a place to stay—it’s a space to slow down, connect, and feel at home in the rhythm of the city. Perfectly positioned near cafés, workspaces, and green pockets, Hamlet is your quiet corner in the midst of it all" />
    <AboutAmenities />
    <RoomTypes link="https://live.ipms247.com/booking/book-rooms-hamletbyunionliving" rooms={rooms} />

    <FooterSection />
  
</div>
  )
}

export default PunePage