import Image from 'next/image'
import React from 'react'
import UnionImage from "../../assets/favicon.png"

const AboutUnion = () => {
  return (
    <div className='grid lg:px-12 lg:py-8 px-8 py-6 grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-2 lg:items-center justify-between grid-flow-row'>
        <div className='lg:pl-[120px]'>
            <h4 className='text-[1.5rem]  font-[HelveticaWorldRegular] tracking-wider uppercase text-[#66694A] lg:text-[2.5rem]'>About Union Living</h4>
            <p className='text-[0.8rem] font-[GaretRegular] text-justify text-[#66694A] lg:text-[1rem]'> At Union Living, we are transforming the way millennials rent, live, and grow. Our mission is to provide hassle-free, community-based living with premium amenities that cater to modern lifestyles. We believe in offering spaces that go beyond traditional renting, providing a seamless, tech-driven experience that enhances the way our residents live, connect, and thrive.</p>
        </div>
        <div className='flex lg:items-center lg:justify-center'>
            <Image className='w-[50%]' src={UnionImage} />
        </div>
    </div>
  )
}

export default AboutUnion