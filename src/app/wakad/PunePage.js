import FooterSection from "@/components/Layout/FooterSection";
import NavbarTwo from "@/components/Layout/Navbar";
import HotelIntro from "@/components/MumbaiStays/HotelIntro";
import AboutAmenities from "@/components/PuneStays/AboutAmenities";
import RoomTypes from "@/components/PuneStays/RoomTypes";
import React from "react";

import img1 from "../../assets/Wakad/1.webp";
import img2 from "../../assets/Wakad/2.webp";
import img3 from "../../assets/Wakad/3.webp";
import img4 from "../../assets/Wakad/4.webp";
import img5 from "../../assets/Wakad/5.webp";
import img6 from "../../assets/Wakad/6.webp";
import img7 from "../../assets/Wakad/7.webp";
import img8 from "../../assets/Wakad/8.webp";
import img9 from "../../assets/Wakad/9.webp";
import img10 from "../../assets/Wakad/10.webp";
import img11 from "../../assets/Wakad/11.webp";
import img12 from "../../assets/Wakad/12.webp";
import img13 from "../../assets/Wakad/13.webp";
import img14 from "../../assets/Wakad/14.webp";
import img15 from "../../assets/Wakad/15.webp";
import img16 from "../../assets/Wakad/16.webp";
import img17 from "../../assets/Wakad/17.webp";
import img18 from "../../assets/Wakad/18.webp";
import img19 from "../../assets/Wakad/19.webp";
import img20 from "../../assets/Wakad/20.webp";
import img21 from "../../assets/Wakad/21.webp";

const WakadPage = () => {
  const bookingLink = "https://live.ipms247.com/booking/book-rooms-dailystayswakad";

  const rooms = [
    {
      title: "Studio Rooms",
      bedroom: "1 Bedroom",
      balcony: "1 Balcony",
      bathroom: "1 Bathroom",
      images: [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
        img12, img13, img14, img15, img16, img17, img18, img19, img20, img21,
      ],
    },
  ];

  const bannerImages = [img1, img9, img13, img17];

  return (
    <div>
      <NavbarTwo />

      <HotelIntro
        link={bookingLink}
        title="Daily Stays @ Wakad"
        bannerImages={bannerImages}
        location="Wakad, Pune"
        desc="Wakad is one of Pune's most sought-after neighbourhoods, known for its proximity to the Hinjawadi IT hub, seamless connectivity via the Mumbai-Pune Expressway, and a thriving mix of cafes, malls, and everyday conveniences. This stay by Union Living brings the same short-term stay experience as our other Pune properties, with fully furnished rooms, a comfortable residential setting, and the flexibility needed for work trips, city visits, and longer short stays."
      />
      <AboutAmenities />
      <RoomTypes link={bookingLink} rooms={rooms} />

      <FooterSection />
    </div>
  );
};

export default WakadPage;
