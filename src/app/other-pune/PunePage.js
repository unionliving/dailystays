import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import AboutAmenities from '@/components/PuneStays/AboutAmenities'
import RoomTypes from '@/components/PuneStays/RoomTypes'
import React from 'react'

const img1 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/other/other1.webp";
const img2 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/other/other2.webp";
const img3 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/other/other3.webp";
const img4 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/other/other4.webp";
const img5 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/other/other5.webp";
const img6 = "https://pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev/Property/other/other6.webp";


const PunePage = () => {
  const rooms = [
    {
      title: 'Studio Rooms',
      bedroom: '1 Bedroom',
      balcony: '1 Balcony',
      bathroom: '1 Bathroom',
      images: [img1, img2, img3, img4, img5, img6],
    },
  ];

  const bannerImages = [img1, img2, img3, img4, img5];

  return (
    <div>
      <NavbarTwo />
      <HotelIntro 
        link="https://maps.app.goo.gl/rMQeg3RU1adYQkdi6" 
        title="Other Serviced Residences" 
        bannerImages={bannerImages} 
        location='Balewadi, Pune' 
        desc="Discover the perfect fusion of comfort, style, and community at Other Serviced Residences, our coliving space in the heart of Balewadi. Designed for students and working professionals, Other offers modern amenities, thoughtfully curated spaces, and a vibrant social environment — all in one prime location. Whether you're looking for convenience, connection, or a lifestyle upgrade, Other makes it effortlessly possible." 
      />
      <AboutAmenities />
      <RoomTypes link="https://live.ipms247.com/booking/book-rooms-otherbyunionliving" rooms={rooms} />
      <FooterSection />
    </div>
  )
}

export default PunePage
