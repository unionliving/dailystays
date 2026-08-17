import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import AboutAmenities from '@/components/PuneStays/AboutAmenities'
import RoomTypes from '@/components/PuneStays/RoomTypes'
import React from 'react'

const img1 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-1.webp";
const img2 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-2.webp";
const img3 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-3.webp";
const img4 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-4.webp";
const img5 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-5.webp";
const img6 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-6.webp";
const img7 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-7.webp";

const bannerOne = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-8.webp";
const bannerTwo = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-9.webp";
const bannerThree = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/x90/x90-10.webp";

const PunePage = () => {
  const rooms = [
    {
      title: 'Studio Rooms',
      bedroom: '1 Bedroom',
      balcony: '1 Balcony',
      bathroom: '1 Bathroom',
      images: [img1, img2, img3, img4, img5, img6, img7],
    },
  ];

  const bannerImages = [bannerOne, bannerTwo, bannerThree];

  return (
    <div>
      <NavbarTwo />
      <HotelIntro 
        link="" 
        title="X90" 
        bannerImages={bannerImages} 
        location='Baner, Pune' 
        desc="Discover the perfect fusion of comfort, style, and community at X90, our coliving space in the heart of Baner. Designed for students and working professionals, X90 offers modern amenities, thoughtfully curated spaces, and a vibrant social environment — all in one prime location. Whether you're looking for convenience, connection, or a lifestyle upgrade, X90 makes it effortlessly possible." 
      />
      <AboutAmenities />
      <RoomTypes link="https://live.ipms247.com/booking/book-rooms-x90byunionliving" rooms={rooms} />
      <FooterSection />
    </div>
  )
}

export default PunePage
