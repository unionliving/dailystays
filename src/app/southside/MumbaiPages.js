import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import AboutAmenities from '@/components/MumbaiStays/AboutAmenities'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import RoomTypes from '@/components/MumbaiStays/RoomTypes'
import React from 'react'

import dt1 from "../../assets/downtown-airbnb/1.webp";
import dt2 from "../../assets/downtown-airbnb/2.webp";
import dt3 from "../../assets/downtown-airbnb/3.webp";
import dt4 from "../../assets/downtown-airbnb/4.webp";
import dt5 from "../../assets/downtown-airbnb/5.webp";
import dt6 from "../../assets/downtown-airbnb/6.webp";
import dt7 from "../../assets/downtown-airbnb/7.webp";

import dt2b_1 from "../../assets/downtown-2bhk/1.webp";
import dt2b_2 from "../../assets/downtown-2bhk/2.webp";
import dt2b_3 from "../../assets/downtown-2bhk/3.webp";
import dt2b_4 from "../../assets/downtown-2bhk/4.webp";
import dt2b_5 from "../../assets/downtown-2bhk/5.webp";
import dt2b_6 from "../../assets/downtown-2bhk/6.webp";

import dt3b_1 from "../../assets/downtown-3bhk/1.webp";
import dt3b_2 from "../../assets/downtown-3bhk/2.webp";
import dt3b_3 from "../../assets/downtown-3bhk/3.webp";

import img11 from "../../assets/mahalaxmi1/1.webp";
import img12 from "../../assets/mahalaxmi1/2.webp";
import img13 from "../../assets/mahalaxmi1/3.webp";
import img14 from "../../assets/mahalaxmi1/4.webp";
import img15 from "../../assets/mahalaxmi1/5.webp";
import img16 from "../../assets/mahalaxmi1/6.webp";



import img61 from "../../assets/mahalaxmi6/1.webp";
import img62 from "../../assets/mahalaxmi6/2.webp";
import img63 from "../../assets/mahalaxmi6/3.webp";
import img64 from "../../assets/mahalaxmi6/4.webp";
import img65 from "../../assets/mahalaxmi6/5.webp";
import img66 from "../../assets/mahalaxmi6/6.webp";
import img67 from "../../assets/mahalaxmi6/7.webp";
import img68 from "../../assets/mahalaxmi6/8.webp";
import img69 from "../../assets/mahalaxmi6/9.webp";
import img610 from "../../assets/mahalaxmi6/10.webp";
import img611 from "../../assets/mahalaxmi6/11.webp";
import img612 from "../../assets/mahalaxmi6/12.webp";
import img613 from "../../assets/mahalaxmi6/13.webp";



const MumbaiPages = () => {
  const rooms = [
      {
        title: '601, 1 BHK',
        guests: 'Upto 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [ img11, img12, img13, img14, img15, img16],
      },
      {
        title: '602, 1 BHK',
        guests: 'Upto 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '2 Bathroom',
        images: [dt1, dt2, dt3, dt4, dt5, dt6, dt7],
      },
      
      {
        title: '1201, 2 & 1/2 BHK',
        guests: 'Upto 5 Guests',
        bedroom: '2 Bedroom ',
        spare: 'Single Bedroom',
        bathroom: '2 Bathroom',
        images: [dt2b_1, dt2b_2, dt2b_3, dt2b_4, dt2b_5, dt2b_6],
      },
      
      {
        title: '1202, 1 BHK',
        guests: 'Upto 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [dt1, dt2, dt3, dt4, dt5, dt6, dt7],
      },
      {
        title: '1402, 3 BHK',
        guests: 'Upto 6 Guests',
        bedroom: '3 Bedroom ',
        bathroom: '2 Bathroom',
        images: [dt3b_1, dt3b_2, dt3b_3],
      },
      {
        title: '1501, 2 BHK + Bunk Beds',
        guests: 'Upto 6 Guests',
        bedroom: '2 Bedroom + Bunk Beds',
        kid: '1 Kids Room',
        bathroom: '3 Bathroom',
        images: [img61, img62, img63, img64, img65, img66, img67, img68, img69, img610, img611, img612, img613],
      },
      
      
    ];
    const bannerImages = [
      dt1, dt2, dt3, dt4, dt5, dt6, dt7
    ]
  return (
    <div>
    <NavbarTwo />
    
    <HotelIntro   title="Downtown" location='Mahalaxmi, Mumbai'  bannerImages={bannerImages} desc="Downtown by Union Living is an elevated living experience designed for modern professionals who seek both style and substance in the heart of the city. Offering fully furnished, thoughtfully designed residences with flexible leasing options, Downtown combines the ease of serviced living with the warmth of a well-curated home. From minimalist interiors and functional layouts to curated communal spaces and seamless support, every detail is crafted for comfort, connection, and quiet sophistication. Whether for a season or something more permanent, Downtown offers a place to live on your terms—without compromise" />
    <AboutAmenities />
    <RoomTypes link="https://live.ipms247.com/booking/book-rooms-southsidebyunionliving" rooms={rooms} />
   
    <FooterSection />
  
</div>
  )
}

export default MumbaiPages