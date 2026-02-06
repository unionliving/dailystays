"use client"
import HomeBanner from "@/components/Home/HomeBanner"
import MumbaiBanner from "../../assets/mumbai.webp"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import LocationBanner from '@/components/Locations/LocationBanner'
import MumbaiLocations from '@/components/Locations/MumbaiLocations'
import React from 'react'
import FooterSection from "@/components/Layout/FooterSection"
import BookingFloatingSearchBar from "@/components/Home/BookingFloatingSearchBar"

const MumbaiMainPage = () => {
  return (
    <div>
    <NavbarTwo />
    <HomeBanner/>
    <BookingFloatingSearchBar />
    <LocationBanner location="Mumbai" sublocation={" - Maharashtra"} desc="Mumbai, India’s city of dreams, blends fast-paced ambition with timeless charm. From iconic seafronts and buzzing 
street food to luxury malls and historic landmarks, every corner of the city tells a story. Whether you're chasing 
sunrises at the beach, exploring colorful markets, or diving into its electric nightlife, Mumbai never slows down. 
With its rich culture, unbeatable connectivity, and experiences that span every hour of the day, Mumbai isn’t just
 a destination—it’s a feeling you carry with you." image={MumbaiBanner} />
    <MumbaiLocations  />
    <FooterSection />
  
</div>
  )
}

export default MumbaiMainPage