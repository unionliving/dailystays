import React from 'react'
import WhyusBanner from "../../assets/whyMain.png"
import Image from 'next/image'

const Whyus = () => {
  return (
    <div  className="mx-4 my-8 lg:mx-16 lg:my-16">
        <div className='grid items-center grid-cols-1 gap-4 lg:gap-12 lg:grid-cols-2 grid-flow-row' >
        <div>
                <Image src={WhyusBanner} />
            </div>
            <div>
            <h3 className='text-[1.5rem] font-[HelveticaWorldRegular] tracking-wider mb-1 lg:text-[2.5rem]'>Why Choose <span className='text-[#75665f] italic uppercase'>The Daily Stays? </span> </h3>
            <div className='h-[5px] mb-4 w-[150px] bg-[#f47133]'></div>
            <p className='text-[0.8rem] font-[NeueRegular] lg:text-[1.1rem]'>
            At The Daily Stays, we know what it’s like to live out of a suitcase, jump from meeting to meeting, and just want to come back to a place that’s calm, clean, and comforting. A place that doesn’t feel cold or temporary — but warm, simple, and thoughtfully put together.
    <br/>  
That’s why we’ve built our stays the way we have:
Fully furnished, easy to move in, with home-cooked meals, high-speed WiFi, laundry that just gets done, and peaceful corners you’ll want to sink into.
<br/>  
At The Daily Stays, we don’t just offer places to sleep.
We craft little sanctuaries for the go-getters, the dreamers, the late-night thinkers — for everyone who needs comfort without compromise.
<br/>  
Stay soft, stay grounded, stay somewhere that cares.
            </p>
            </div>
            
        </div>

    </div>
  )
}

export default Whyus