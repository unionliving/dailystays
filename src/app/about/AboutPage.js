import AboutBanner from '@/components/About/AboutBanner'
import AboutInfo from '@/components/About/AboutInfo'
import AboutUnion from '@/components/About/AboutUnion'
import MissionVision from '@/components/About/Mission-Vision'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <NavbarTwo />
     
        <AboutInfo />
        <MissionVision />
        <AboutUnion />
        <FooterSection />
    </div>
  )
}

export default AboutPage