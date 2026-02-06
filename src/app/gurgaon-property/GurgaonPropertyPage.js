"use client"
import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import AboutAmenities from '@/components/PuneStays/AboutAmenities'
import RoomTypes from '@/components/PuneStays/RoomTypes'
import React from 'react'

import PlaceholderImage from "../../assets/mumbai.webp";
import image1 from "../../assets/gurgaon/gurgaon1.webp";
import image2 from "../../assets/gurgaon/gurgaon2.webp";
import image3 from "../../assets/gurgaon/gurgaon3.webp";
import image4 from "../../assets/gurgaon/gurgaon4.webp";
import image5 from "../../assets/gurgaon/gurgaon5.webp";

import banner1 from "../../assets/gurgaon/gurgaonbanner.webp";
import banner2 from "../../assets/gurgaon/gurgaonbanner2.webp";



 // Using placeholder for now

const GurgaonPropertyPage = () => {

  const rooms = [
    {
      title: 'Studio Rooms',
      bedroom: '1 Bedroom',
      balcony: '1 Balcony',
      bathroom: '1 Bathroom',
      images: [image1, image2, image3, image4, image5],
    },
    
  ];
  const bannerImages = [
    banner1,banner2,
  ]
  return (
    <div>
    <NavbarTwo />

    <HotelIntro link="https://live.ipms247.com/booking/book-rooms-novabydailystays" title="Gurgaon Property" bannerImages={bannerImages} location='Nova, Gurgaon' desc="Nova by Union Living is a thoughtfully curated coliving space located in the heart of DLF Cyber City, Phase 2, Gurugram—one of the city’s most dynamic business and lifestyle hubs. Designed for modern professionals who value comfort and connection, Nova offers fully furnished, move-in-ready rooms paired with high-speed Wi-Fi, inviting common areas, and vibrant community spaces. More than just a place to stay, Nova fosters a close-knit community through shared experiences, chill zones, and weekend events that bring residents together. With offices, cafés, and everyday essentials just steps away, Nova lets you balance work and life effortlessly—work hard, unwind freely, and feel at home in a space built for modern coliving." />
    <AboutAmenities />
    <RoomTypes link="https://live.ipms247.com/booking/book-rooms-novabydailystays" rooms={rooms} />

    <FooterSection />
  
</div>
  )
}

export default GurgaonPropertyPage
