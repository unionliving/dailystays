import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import RoomTypes from '@/components/MumbaiStays/RoomTypes'
import React from 'react'

const img11 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-2.webp";
const img12 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-3.webp";
const img13 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-4.webp";
const img14 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-5.webp";
const img16 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-6.webp";
const img17 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-7.webp";
const img18 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-8.webp";
const img19 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-9.webp";

import VarsityBannerOne from "../../assets/varsitybanner/1.webp";
import VarsityBannerTwo from "../../assets/varsitybanner/2.webp";
import VarsityBannerThree from "../../assets/varsitybanner/3.webp";
import AboutAmenities from '@/components/MumbaiStays/AboutAmenities';

const MumbaiPages = () => {
  const rooms = [
        {
          title: '2 BHK Apartments',
          guests: 'Upto 6 Guests',
          bedroom: '2 Bedroom ',
          bathroom: '2 Bathroom',
          images: ["https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-4.webp","https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-6.webp","https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-5.webp",],
        },
       {
          title: '1 BHK Apartments',
          guests: 'Upto 2 Guests',
          bedroom: '1 Bedroom ',
          bathroom: '1 Bathroom',
          images: ["https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-2.webp","https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-3.webp","https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/bkc/bkc-7.webp"],
        },
        
      ];
      const bannerImages=[img11, img12, img13]
  return (
    <div>
    <NavbarTwo />
    
    <HotelIntro link="https://live.ipms247.com/booking/book-rooms-varsitybyunionliving" title="Union @BKC" bannerImages={bannerImages} location='BKC, Mumbai' desc="Union @BKC by Union Living is a modern residential concept crafted for students and young professionals who value flexibility, design, and a sense of belonging. Offering fully furnished, move-in-ready spaces with flexible stay options, Union @BKC blends the comforts of private living with the energy of a vibrant community. Thoughtfully designed rooms, curated common areas, and seamless services create an elevated living experience—whether you’re staying for a semester, a few months, or longer. At Union @BKC, you’re not just renting a space—you’re joining a lifestyle" />
    <AboutAmenities 
      privileges={[
        "Contactless Check-In",
        "24/7 Customer Support",
        "Professionally Cleaned",
        "Free WiFi",
        "24-Hour Security",
        "Fresh Towels"
      ]}
      neighbourhood={[
        "Airport Proximity",
        "Premium Colleges",
        "Café Culture",
        "Metro Access",
        "Boutique Retail",
        "Juhu Beach"
      ]}
    />
    <RoomTypes link="https://live.ipms247.com/booking/book-rooms-varsitybyunionliving"  rooms={rooms}/>
   
    <FooterSection />
  
</div>
  )
}

export default MumbaiPages