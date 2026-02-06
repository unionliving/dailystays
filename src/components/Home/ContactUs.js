import Image from 'next/image'
import React from 'react'
import ContactImage from "../../assets/carouselImage2.png"
import Link from 'next/link'

const ContactUs = () => {
  return (
    <div className="w-full px-4 py-8 lg:px-16 lg:py-12 bg-[#ebebeb]">
        <div className='grid grid-cols-1 gap-[15px] items-center lg:gap-[50px] lg:grid-cols-2 grid-flow-row' >
            <div>
                <Image className='rounded-[20px]' src={ContactImage} />
            </div>
       <div className='flex lg:px-8 items-start justify-start flex-col w-full h-full'>
        <h3 className='text-center text-[1.4rem] lg:text-[2.5rem] text-[#75665f] font-[HelveticaWorldRegular] tracking-wider'>Contact Us</h3>
        
        <div className='h-[5px] mb-4 w-[60px] lg:w-[100px] bg-[#f47133]'></div>
        <div className='flex items-center flex-wrap w-full gap-3 mt-3 '>
            <div className='flex items-start w-full lg:w-[47%]  flex-col'>
                <label className='font-[HelveticaWorldRegular] tracking-wider text-[1.1rem]'>Full Name</label>
                <input className='px-3 py-3 font-[NeueRegular] rounded-lg  w-full border-[1px] border-[#c6c6c6]' placeholder='Name' />
            </div>
            <div className='flex items-startw-full w-full lg:w-[47%] flex-col'>
                <label className='font-[HelveticaWorldRegular] tracking-wider text-[1.1rem]'>Mobile Number</label>
                <input className='px-3 py-3 font-[NeueRegular] rounded-lg w-full border-[1px] border-[#c6c6c6]' placeholder='Phone Number' />
            </div>
        </div>
        <div className='flex items-center flex-wrap w-full gap-3 mt-3 '>
            <div className='flex items-start w-full lg:w-[47%]  flex-col'>
                <label className='font-[HelveticaWorldRegular] tracking-wider text-[1.1rem]'>Check In</label>
                <input type='date' className='px-3 font-[NeueRegular] py-3 rounded-lg w-full border-[1px] border-[#c6c6c6]' placeholder='Check In Date' />
            </div>
            <div className='flex items-start w-full lg:w-[47%] flex-col'>
                <label className='font-[HelveticaWorldRegular] tracking-wider text-[1.1rem]'>Check Out</label>
                <input type='date' className='px-3 font-[NeueRegular] py-3 rounded-lg w-full border-[1px] border-[#c6c6c6]' placeholder='Check Out Date' />
            </div>
            <div className='flex items-center flex-wrap w-full gap-3 mt-0 '>
            <div className='flex items-start w-full lg:w-[47%] flex-col'>
                <label className='font-[HelveticaWorldRegular] tracking-wider text-[1.1rem]'>Location</label>
                <select className='px-3 py-3 font-[NeueRegular] rounded-lg w-full border-[1px] border-[#c6c6c6]' placeholder='Select an Location' >
                <option value="">Select an Location</option>
                    <option value="mahalaxmi">Mahalaxmi</option>
                    <option value="juhu">Juhu</option>
                    <option value="chembur">Chembur</option>
                    <option value="baner">Baner</option>
                     </select>
            </div>
            <div className='flex items-start w-full lg:w-[47%] flex-col'>
                <label className='font-[HelveticaWorldRegular] tracking-wider text-[1.1rem]'>No of Rooms</label>
                <select className='px-3 py-3 rounded-lg font-[NeueRegular] w-full border-[1px] border-[#c6c6c6]' placeholder='Rooms' >
                <option value="">Select Room(s)</option>
                    <option value="mahalaxmi">01</option>
                    <option value="juhu">02</option>
                    <option value="chembur">03</option>
                    <option value="baner">04</option>
                    <option value="baner">05</option>
                     </select>
                
            </div>
        </div>
        </div>
        <Link className='w-full' href='/form'> <button className="uppercase mt-6  flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#f47133]" >Contact Us </button></Link>
       </div>
       </div>
    </div>
  )
}

export default ContactUs