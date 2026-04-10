import FooterSection from "@/components/Layout/FooterSection";
import NavbarTwo from "@/components/Layout/Navbar";
import HotelIntro from "@/components/MumbaiStays/HotelIntro";
import AboutAmenities from "@/components/PuneStays/AboutAmenities";
import RoomTypes from "@/components/PuneStays/RoomTypes";
import React from "react";

import img1 from "../../assets/Balewadi/1.webp";
import img2 from "../../assets/Balewadi/2.webp";
import img3 from "../../assets/Balewadi/3.webp";
import img4 from "../../assets/Balewadi/4.webp";
import img5 from "../../assets/Balewadi/5.webp";
import img6 from "../../assets/Balewadi/6.webp";
import img7 from "../../assets/Balewadi/7.webp";
import img8 from "../../assets/Balewadi/8.webp";
import img9 from "../../assets/Balewadi/9.webp";
import img10 from "../../assets/Balewadi/10.webp";
import img11 from "../../assets/Balewadi/11.webp";

import banner1 from "../../assets/Balewadi/banner1.webp";
import banner2 from "../../assets/Balewadi/banner2.webp";
import banner3 from "../../assets/Balewadi/banner3.webp";
import banner4 from "../../assets/Balewadi/banner4.webp";
import banner5 from "../../assets/Balewadi/banner5.webp";

const BalewadiPage = () => {
  const bookingLink =
    "https://live.ipms247.com/booking/book-rooms-hamletbyunionliving";

  const rooms = [
    {
      title: "Studio Rooms",
      bedroom: "1 Bedroom",
      balcony: "1 Balcony",
      bathroom: "1 Bathroom",
      images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11],
    },
  ];

  const bannerImages = [banner1, banner2, banner3, banner4, banner5];

  return (
    <div>
      <NavbarTwo />

      <HotelIntro
        link={bookingLink}
        title="Balewadi"
        bannerImages={bannerImages}
        location="Balewadi, Pune"
        desc="Balewadi is one of Pune's fast-growing neighbourhoods, known for its strong road connectivity, proximity to business hubs, and easy access to dining, retail, and everyday essentials. This stay by Union Living brings the same short-term stay experience as our Pune properties, with fully furnished rooms, a comfortable residential setting, and the flexibility needed for work trips, city visits, and longer short stays."
      />
      <AboutAmenities />
      <RoomTypes link={bookingLink} rooms={rooms} />

      <FooterSection />
    </div>
  );
};

export default BalewadiPage;
