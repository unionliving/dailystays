import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import AboutAmenities from '@/components/PuneStays/AboutAmenities'
import LocalFavorites from '@/components/PuneStays/LocalFavorites'
import RoomTypes from '@/components/PuneStays/RoomTypes'
import React from 'react'

import img1 from "../../assets/koregaonpark/1.webp";
import img2 from "../../assets/koregaonpark/2.webp";
import img3 from "../../assets/koregaonpark/3.webp";
import img4 from "../../assets/koregaonpark/4.webp";
import img5 from "../../assets/koregaonpark/5.webp";
import img6 from "../../assets/koregaonpark/6.webp";
import img7 from "../../assets/koregaonpark/7.webp";
import img8 from "../../assets/koregaonpark/8.webp";
import img9 from "../../assets/koregaonpark/9.webp";



import KoregaonParkBannerOne from "../../assets/koregaonpark/banner1.webp"
import KoregaonParkBannerTwo from "../../assets/koregaonpark/banner2.webp"
import KoregaonParkBannerThree from "../../assets/koregaonpark/banner3.webp"


const KoregaonParkPage = () => {

  const rooms = [
    {
      title: 'Rooms with Balcony',
      // guests: 'Up to 2 Guests',
      bedroom: '1 Studio Room',
      bathroom: '1 Bathroom',
      balcony: '1 Balcony',
      images: [img1, img2, img3, img4, img5, img6, img7],
    },
    {
      title: 'Rooms without Balcony',
      // guests: 'Up to 2 Guests',
      bedroom: '1 Studio Room',
      bathroom: '1 Bathroom',
      images: [img7,img6,img5,img3,img2,img1,img8,img9],
    },
    
  ];
  const bannerImages = [
    KoregaonParkBannerOne, KoregaonParkBannerTwo, KoregaonParkBannerThree
  ]
  return (
    <div>
    <NavbarTwo />

    <HotelIntro link="https://live.ipms247.com/booking/book-rooms-houseofkp" title="Koregaon Park" bannerImages={bannerImages} location='Koregaon Park, Pune' desc="Koregaon Park is a leafy, upscale neighbourhood in the heart of Pune, celebrated for its tree-lined lanes, eclectic cafés, and vibrant dining and nightlife scene. Blending relaxed residential charm with a cosmopolitan vibe, it’s home to boutique hotels, wellness centres (including the Osho International Meditation Resort), and an array of creative workspaces and boutiques. With quiet green pockets tucked between lively streets, Koregaon Park is the perfect mix of calm and connectivity — an inviting corner of the city that’s ideal for young professionals, visitors, and those who enjoy good food, culture, and easy access to the city’s amenities." />
    <AboutAmenities />
    <RoomTypes link="https://live.ipms247.com/booking/book-rooms-houseofkp" rooms={rooms} />

    <FooterSection />
  
</div>
  )
}

export default KoregaonParkPage