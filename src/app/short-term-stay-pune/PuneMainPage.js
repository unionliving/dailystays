"use client"
import React from 'react'
import LocationBanner from '@/components/Locations/LocationBanner'
import PuneLocations from '@/components/Locations/PuneLocation'
import PuneBanner from "../../assets/pune.webp"
import NavbarTwo from '@/components/Layout/Navbar'
import FooterSection from '@/components/Layout/FooterSection'

const PuneMainPage = () => {
  return (
    <div>
    <NavbarTwo />
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