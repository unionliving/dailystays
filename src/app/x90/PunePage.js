import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import AboutAmenities from '@/components/PuneStays/AboutAmenities'
import RoomTypes from '@/components/PuneStays/RoomTypes'
import React from 'react'

const img1 = "/images/x90/x90-1.jpg";
const img2 = "/images/x90/x90-2.jpg";
const img3 = "/images/x90/x90-3.jpg";
const img4 = "/images/x90/x90-4.jpg";
const img5 = "/images/x90/x90-5.jpg";
const img6 = "/images/x90/x90-6.jpg";
const img7 = "/images/x90/x90-7.jpg";

const bannerOne = "/images/x90/x90-8.jpg";
const bannerTwo = "/images/x90/x90-9.jpg";
const bannerThree = "/images/x90/x90-10.jpg";

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
        link="https://live.ipms247.com/booking/book-rooms-x90studioapartments"
        title="X90"
        bannerImages={bannerImages} 
        location='Baner, Pune' 
        desc="Discover the perfect fusion of comfort, style, and community at X90, our coliving space in the heart of Baner. Designed for students and working professionals, X90 offers modern amenities, thoughtfully curated spaces, and a vibrant social environment — all in one prime location. Whether you're looking for convenience, connection, or a lifestyle upgrade, X90 makes it effortlessly possible." 
      />
      <AboutAmenities />
      <RoomTypes link="https://live.ipms247.com/booking/book-rooms-x90studioapartments" rooms={rooms} />
      <FooterSection />
    </div>
  )
}

export default PunePage
