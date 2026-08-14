import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import MissionImage from "../../assets/Mission.png"
import VisionImage from "../../assets/Vision.png"
import Image from 'next/image'
import UnionImage from "../../assets/favicon.png"
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <NavbarTwo />
     
         <div className='lg:px-[4rem] bg-[#f5f1eb] text-[#66694A]  grid grid-cols-1 items-center gap-12 grid-flow-row  lg:grid-cols-1  lg:py-24 py-4 px-4' >
        <div className='grid lg:grid-cols-2 items-start lg:gap-24 grid-cols-1  '>
          <div className=''>
            <h1 className='lg:text-[2.5rem] uppercase col-span-1 lg:text-center text-[1.5rem] mb-2 font-[HelveticaWorldRegular] tracking-wider'>About Us</h1>
            </div>
          
            <p className='text-[0.7rem] lg:w-[80%] col-span-1 text-justify font-[GaretRegular] lg:text-[1.1rem]'>
            In a world where mobility is the norm and lifestyles are ever-evolving, Daily Stay offers a smarter, more flexible way to live. We provide fully furnished, ready-to-move-in apartments for both short and long-term stays, blending the comfort of home with the reliability of hospitality.
           


            </p>
        </div>
       
    </div>


    <div className='grid grid-cols-1 lg:grid-cols-2 border-b-[1px]  border-black  items-start grid-flow-row' >
            <div className=' lg:px-12 lg:py-16 px-8 py-6 text-[#66694A] border-b-[1px] lg:border-r-[1px] lg:border-b-[0px] flex-col lg:flex-row  flex items-start justify-center gap-12 border-black '>
              <Image src={MissionImage} />
              <div>
                <h3 className='lg:text-[2.5rem] font-[HelveticaWorldRegular] tracking-wider'>Mission</h3>
                <p className='font-[GaretRegular]'>To offer fully serviced, thoughtfully designed homes that blend the ease of a hotel with the comfort of home, creating calm, intuitive spaces for modern travelers and residents alike.</p>
                </div>
            </div>
            <div className=' lg:px-12 lg:py-16 px-8 py-6 text-[#66694A]  flex-col lg:flex-row   flex items-start justify-center gap-12 '>
            <Image src={VisionImage} />
              <div>
            <h3 className='lg:text-[2.5rem] font-[HelveticaWorldRegular] tracking-wider'>Vision        </h3>
            <p className='font-[GaretRegular]'>To make flexible, beautifully simple living accessible across cities and seasons, allowing people to feel at home wherever life takes them, for as long as they need.</p>
            </div>
            </div>
        </div>
       
      <div className='grid lg:px-12 lg:py-8 px-8 py-6 grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-2 lg:items-center justify-between grid-flow-row'>
              <div className='lg:pl-[120px]'>
                  <h4 className='text-[1.5rem]  font-[HelveticaWorldRegular] tracking-wider uppercase text-[#66694A] lg:text-[2.5rem]'>About Union Living</h4>
                  <p className='text-[0.8rem] font-[GaretRegular] text-justify text-[#66694A] lg:text-[1rem]'> At Union Living, we are transforming the way millennials rent, live, and grow. Our mission is to provide hassle-free, community-based living with premium amenities that cater to modern lifestyles. We believe in offering spaces that go beyond traditional renting, providing a seamless, tech-driven experience that enhances the way our residents live, connect, and thrive.</p>
              </div>
              <div className='flex lg:items-center lg:justify-center'>
                  <Image className='w-[50%]' src={UnionImage} />
              </div>
          </div>
      
        <FooterSection />
    </div>
  )
}

export default AboutPage