"use client"
import React from 'react'
import Logo from "../../assets/mainLogo.png"
import { IoMdArrowRoundUp } from 'react-icons/io'
import { PiLinkedinLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import Link from "next/link"
import Image from 'next/image';
const Footer = () => {
  return (
    
    <div className='md:px-12 mx-4 lg:mx-12 my-3 rounded-lg px-4 py-12 shadow-lg bg-[#ebe3d654]' >
         <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand and Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Brand */}
            <div>
              {/* <h2 className="text-2xl md:text-3xl font-light tracking-wider text-white">THE DAILY STAYS</h2> */}
              <Image src={Logo}alt="Logo" className="w-full h-[40px] object-cover" />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2 tracking-wide">TEXT</h3>
                <p className="text-white">1-646-646-7374</p>
              </div> */}

              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2 tracking-wide">CALL</h3>
                <a href="tel:7021654226" className="text-white">7021654226</a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2 tracking-wide">EMAIL</h3>
                <p className="text-white">thedailystays@unionliving.in</p>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-6 tracking-wide">EXPERIENCE</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://unionliving.in/community" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Groups and Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Long Term Stay
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-6 tracking-wide">EXPLORE</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Our Story
                </a>
              </li>
              
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-6 tracking-wide">PARTNERS</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  The Daily Stays for Business
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Real Estate Partnerships
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-300 text-sm">© The daily stays, Inc. 2025 All Rights Reserved.</p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Accessibility Policy
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dailybyunion/"
                target='_blank'
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <LuInstagram className="w-5 h-5" />
              </a>
             
            </div>
          </div>
        </div>
      </div>
    <div className='md:grid grid-col-7 grid-flow-col' >
        <div className='col-span-1' >
            <Image className='w-[130px]' src={Logo} />
            <p className='font-[NeueRegular] text-[1rem] text-[#272727]' >Live Easy, Live United</p>
            <Link href='/form'> <button className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] mt-3 md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now  </button></Link>
        </div>
        <div className='col-span-5 flex lg:items-start justify-around pb-4 lg:flex-row flex-col gap-6    mt-3 md:mt-4' >
                <div>
                    <h3 className='font-[HelveticaWorldRegular] tracking-wider text-[1.5rem] text-[#272727]'>Sitemap</h3>
                    <div>
                        <Link href="/"><p> Home</p></Link>
                        <Link href="/properties"><p>City</p></Link>
                        <Link href="/community"><p> About</p></Link>
                        <Link href="/ourstory"><p> Contact</p></Link>
                     
                    </div>
                </div>
                <div>
                    <h3 className='font-[HelveticaWorldRegular] tracking-wider text-[1.5rem] text-[#272727]'>Important Links</h3>
                    <div>
                        <Link href="/onboardingpolicy"><p> Rules and Regulations</p></Link>
                        <Link href="/termsandcondition"><p> Terms and Condition</p></Link>
                        <Link href="/privacy-policy"><p> Privacy Policy</p></Link>
                    </div>
                </div>
        </div>
        <div className='col-span-1 mt-3 md:mt-6' >
            <p className='font-[NeueRegular]'>
         <strong className='font-[HelveticaWorldRegular] tracking-wider' >  Customer Service </strong> 
         <br />
       <a className='' href='mailto:csteam.unionliving@gmail.com' > thedailytays@gmail.com</a>
        <br /> 
       
            </p>
           <h3 className='font-[NeueRegular] py-2'>+91 7021654226</h3>
           
        </div>
    </div>
    <div className='md:grid grid-cols-7 mt-6  grid-flow-col'>
        <div className='col-span-1' ></div>
        <div className='col-span-5 flex items-center justify-center' >
            <h3 className='font-[NeueRegular]' >2025 Daily Stays by Union Living. All right reserved</h3>
        </div>
        <div className='col-span-1 flex items-center md:ml-[-25px] justify-center md:justify-start gap-3' >
           <a target='_blank' rel='noreferrer' href='https://www.instagram.com/union_living/?hl=en'> <PiInstagramLogo className='text-[25px]' /></a>
            
            <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@unioncoliving'>  <PiYoutubeLogo className='text-[25px]' /> </a>
        </div>
    </div>
</div>
  )
}

export default Footer