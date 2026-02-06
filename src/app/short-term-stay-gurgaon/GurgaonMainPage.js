"use client"
import HomeBanner from "@/components/Home/HomeBanner"
import GurgaonBanner from "../../assets/gurgaon/gurgaon.webp" // Using Mumbai as placeholder
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import LocationBanner from '@/components/Locations/LocationBanner'
import GurgaonLocations from '@/components/Locations/GurgaonLocations'
import React from 'react'
import FooterSection from "@/components/Layout/FooterSection"
import BookingFloatingSearchBar from "@/components/Home/BookingFloatingSearchBar"

const GurgaonMainPage = () => {
  return (
    <div>
    <NavbarTwo />
    <div className="relative">
      <HomeBanner/>
      <BookingFloatingSearchBar />
    </div>
    <LocationBanner location="Gurgaon" sublocation={" - Haryana"} desc="Gurugram is where ambition meets lifestyle—a city defined by soaring skylines, global offices, and an ever-evolving urban energy. From world-class business hubs and sleek malls to vibrant cafés, nightlife, and green escapes, Gurugram offers a dynamic rhythm of work and play. Whether you’re building your career, exploring new opportunities, or settling into city life, Gurugram keeps you connected and moving forward. With seamless connectivity, modern infrastructure, and a fast-paced yet convenient lifestyle, the city makes everyday living feel smart, efficient, and exciting." image={GurgaonBanner} />
    <GurgaonLocations  />
    <FooterSection />
  
</div>
  )
}

export default GurgaonMainPage
