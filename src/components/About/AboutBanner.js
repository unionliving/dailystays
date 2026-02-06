import Image from 'next/image'
import React from 'react'
import BannerImage from "../../assets/aboutBanner.webp"

const AboutBanner = () => {
  return (
    <div>
        <Image src={BannerImage} />
    </div>
  )
}

export default AboutBanner