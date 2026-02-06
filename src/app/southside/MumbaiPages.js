import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import AboutAmenities from '@/components/MumbaiStays/AboutAmenities'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import LocalFavorites from '@/components/MumbaiStays/LocalFavorites'
import RoomTypes from '@/components/MumbaiStays/RoomTypes'
import React from 'react'


import img11 from "../../assets/mahalaxmi1/1.webp";
import img12 from "../../assets/mahalaxmi1/2.webp";
import img13 from "../../assets/mahalaxmi1/3.webp";
import img14 from "../../assets/mahalaxmi1/4.webp";
import img15 from "../../assets/mahalaxmi1/5.webp";
import img16 from "../../assets/mahalaxmi1/6.webp";

import img21 from "../../assets/mahalaxmi2/1.webp";
import img22 from "../../assets/mahalaxmi2/2.webp";
import img23 from "../../assets/mahalaxmi2/3.webp";
import img24 from "../../assets/mahalaxmi2/4.webp";
import img25 from "../../assets/mahalaxmi2/5.webp";
import img26 from "../../assets/mahalaxmi2/6.webp";
import img27 from "../../assets/mahalaxmi2/7.webp";

import img31 from "../../assets/mahalaxmi3/1.webp";
import img32 from "../../assets/mahalaxmi3/2.webp";
import img33 from "../../assets/mahalaxmi3/3.webp";
import img34 from "../../assets/mahalaxmi3/4.webp";
import img35 from "../../assets/mahalaxmi3/5.webp";
import img36 from "../../assets/mahalaxmi3/6.webp";
import img37 from "../../assets/mahalaxmi3/7.webp";
import img38 from "../../assets/mahalaxmi3/8.webp";

import img41 from "../../assets/mahalaxmi4/1.webp";
import img42 from "../../assets/mahalaxmi4/2.webp";
import img43 from "../../assets/mahalaxmi4/3.webp";
import img44 from "../../assets/mahalaxmi4/4.webp";
import img45 from "../../assets/mahalaxmi4/5.webp";
import img46 from "../../assets/mahalaxmi4/6.webp";
import img47 from "../../assets/mahalaxmi4/7.webp";

import img51 from "../../assets/mahalaxmi5/1.webp";
import img52 from "../../assets/mahalaxmi5/2.webp";
import img53 from "../../assets/mahalaxmi5/3.webp";
import img54 from "../../assets/mahalaxmi5/4.webp";
import img55 from "../../assets/mahalaxmi5/5.webp";
import img56 from "../../assets/mahalaxmi5/6.webp";
import img57 from "../../assets/mahalaxmi5/7.webp";
import img58 from "../../assets/mahalaxmi5/8.webp";
import img59 from "../../assets/mahalaxmi5/9.webp";

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


import VarsityBannerOne from "../../assets/southsidebanner/1.webp"
import VarsityBannerTwo from "../../assets/southsidebanner/2.webp"
import VarsityBannerThree from "../../assets/southsidebanner/3.webp"

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
        images: [img21, img22, img23, img24, img25, img26, img27],
      },
      
      {
        title: '1201, 2 & 1/2 BHK',
        guests: 'Upto 5 Guests',
        bedroom: '2 Bedroom ',
        spare: 'Single Bedroom',
        bathroom: '2 Bathroom',
        images: [img31, img32, img33, img34, img35, img36, img37, img38],
      },
      
      {
        title: '1202, 1 BHK',
        guests: 'Upto 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [img41, img42, img43, img44, img45, img46, img47],
      },
      {
        title: '1402, 3 BHK',
        guests: 'Upto 6 Guests',
        bedroom: '3 Bedroom ',
        bathroom: '2 Bathroom',
        images: [img51, img52, img53, img54, img55, img56, img57, img58, img59],
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
      VarsityBannerOne, VarsityBannerTwo, VarsityBannerThree
    ]
  return (
    <div>
    <NavbarTwo />
    
    <HotelIntro   title="Southside" location='Mahalaxmi, Mumbai'  bannerImages={bannerImages} desc="Southside by Union Living is an elevated living experience designed for modern professionals who seek both style and substance in the heart of the city. Offering fully furnished, thoughtfully designed residences with flexible leasing options, Southside combines the ease of serviced living with the warmth of a well-curated home. From minimalist interiors and functional layouts to curated communal spaces and seamless support, every detail is crafted for comfort, connection, and quiet sophistication. Whether for a season or something more permanent, Southside offers a place to live on your terms—without compromise" />
    <AboutAmenities />
    <RoomTypes link="https://live.ipms247.com/booking/book-rooms-southsidebyunionliving" rooms={rooms} />
   
    <FooterSection />
  
</div>
  )
}

export default MumbaiPages