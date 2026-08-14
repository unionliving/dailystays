"use client"
import Amenities from '@/components/Home/Amenities'
import Corporate from '@/components/Home/Corporate'
import FAQSection from '@/components/Home/FaqSection'
import FeaturesSection from '@/components/Home/Feature'
import HomeBanner from '@/components/Home/HomeBanner'
import Stays from '@/components/Home/Stays'
import TestimonialsSection from '@/components/Home/Testimonial'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import React from 'react'


const Home = () => {
  return (
    <div>
        <NavbarTwo />
        <div className=''>
        <HomeBanner />
        <FeaturesSection  /> 
        {/* <About /> */}
        <Stays />
        {/* <CorporateStays /> */}
        <Amenities />
        <Corporate/>
        <TestimonialsSection />
        <FAQSection />
        {/* <Whyus /> */}
        {/* <ContactUs /> */}
        {/* <Partner /> */}
      
        <FooterSection />
      
        {/* <Footer /> */}
        </div>
    </div>
  )
}

export default Home