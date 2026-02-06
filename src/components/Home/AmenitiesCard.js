import Image from 'next/image'
import React from 'react'

const AmenitiesCard = ({image,title,description}) => {
  return (
    <div className='bg-white border-b-[3px] h-[350px] lg:h-[420px] mx-4 border-[#f47133]'>
        <Image className='rounded-t-lg' src={image} alt={title}  />
        <div className='px-4 py-3'>
        <h3 className='text-[1.2rem]  lg:text-[1.5rem] mb-2 font-[HelveticaWorldRegular] tracking-wider'>{title}</h3>
        <p className='text-[0.8rem] lg:text-[0.9rem] font-[NeueRegular]'>{description}</p>
        </div>
    </div>
  )
}

export default AmenitiesCard