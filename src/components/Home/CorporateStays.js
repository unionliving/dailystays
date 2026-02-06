import React from 'react'
import WhyusBanner from "../../assets/whyBanner.png"
import Image from 'next/image'

const CorporateStays = () => {
  return (
    <div  className="mx-4 my-2 lg:mx-16 lg:my-12">
    <div className='grid items-center grid-cols-1 gap-4 lg:gap-12 lg:grid-cols-2 grid-flow-row' >
        <div>
        <h3 className='text-[20px] font-[HelveticaWorldRegular] tracking-wider mb-1 lg:text-[2.5rem]'>Corporate Stays, <span className='uppercase'>Made Effortless </span> </h3>
        <div className='h-[5px] mb-4 w-[90px] lg:w-[150px] bg-[#f47133]'></div>
        <p className='text-[0.8rem] font-[NeueRegular] lg:text-[1.1rem]'>
        We know that every business trip carries more than just work — it carries early mornings, long flights, new cities, and missed routines. At The Daily Stays, we create spaces that don’t just house you — they hold space for you. Fully furnished apartments, thoughtful comforts, fresh linens, warm meals, laundry when you need it, and the little details that make you feel settled, even when you’re far from home.
      <br /><br />  <strong className='font-[HelveticaWorldRegular] tracking-wider italic text-[1rem] text-[#75665f] lg:text-[1.5rem] uppercase '>
'More than a stay. A space to belong.'</strong>
        </p>
        </div>
        <div>
            <Image src={WhyusBanner} />
        </div>
    </div>

</div>
  )
}

export default CorporateStays