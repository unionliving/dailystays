"use client"
import React from 'react'
import LocationBanner from '@/components/Locations/LocationBanner'
import PuneLocations from '@/components/Locations/PuneLocation'
import PuneBanner from "../../assets/pune.webp"
import NavbarTwo from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import HomeBanner from '@/components/Home/HomeBanner'
import FooterSection from '@/components/Layout/FooterSection'
import BookingFloatingSearchBar from '@/components/Home/BookingFloatingSearchBar'

const PuneMainPage = () => {
  return (
    <div>
    <NavbarTwo />
    <HomeBanner/>
    <BookingFloatingSearchBar />
    <LocationBanner location="Pune" sublocation={" - Maharashtra"} desc="Pune is where heritage meets innovation, a city that balances old-world charm with a modern heartbeat. From 
historic forts and serene hill views to buzzing cafés, nightlife, and thriving tech parks, Pune offers something for 
everyone. Whether you're here for work, study, or a peaceful getaway, the city wraps you in comfort and culture
. With cool weather, easy commutes, and a laid-back vibe, Pune makes every stay feel effortlessly fulfilling." image={PuneBanner} />
    <PuneLocations />
    <FooterSection/>
   
</div>
  )
}

export default PuneMainPage