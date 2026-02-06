import React from 'react'
import MissionImage from "../../assets/Mission.png"
import VisionImage from "../../assets/Vision.png"
import Image from 'next/image'

const MissionVision = () => {
  return (
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
  )
}

export default MissionVision