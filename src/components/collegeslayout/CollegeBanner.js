import React from 'react'
import "./college.css"
const CollegeBanner = ({collegeBannerBox,title,description}) => {
  return (
    <div  className={`${collegeBannerBox} flex items-center justify-start mx-4 my-3 lg:mx-12 lg:my-6 rounded-lg`} >
        <div className='flex items-start px-6 py-4 justify-end  flex-col'>

       
       
        <h1 className='text-[#ffffff] font-[NeueBold] text-[2.5rem] lg:text-[3.5rem]'>{title}</h1>
        <p className='text-[#e3e3e3] w-[100%] lg:w-[60%]  font-[NeueRegular] text-[.8rem] lg:text-[1.2rem]'>{description}</p>
        </div>
    </div>
  )
}

export default CollegeBanner