"use client"
import About from '@/components/Home/About'
import Amenities from '@/components/Home/Amenities'
import FloatingSearchBar from '@/components/Home/BookingFloatingSearchBar'
import BookingFloatingSearchBar from '@/components/Home/BookingFloatingSearchBar'
import ContactUs from '@/components/Home/ContactUs'
import Corporate from '@/components/Home/Corporate'
import CorporateStays from '@/components/Home/CorporateStays'
import FAQSection from '@/components/Home/FaqSection'
import FeaturesSection from '@/components/Home/Feature'
import HomeBanner from '@/components/Home/HomeBanner'
import Partner from '@/components/Home/Partner'
import Stays from '@/components/Home/Stays'
import TestimonialsSection from '@/components/Home/Testimonial'
import Whyus from '@/components/Home/Whyus'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import React from 'react'


const Home = () => {
  return (
    <div>
        <NavbarTwo />
        <div className=''>
        <HomeBanner />
        <BookingFloatingSearchBar />
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