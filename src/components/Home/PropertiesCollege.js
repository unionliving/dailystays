import React, { Suspense } from 'react'
import PropertiesCardNew from '../Properties/PropertiesCardNew'
import { propertyListData, activeProduct, collegeProperties } from '../../app/data/PropertyList'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PropertyLoadingCard from '../Properties/PropertyLoadingCard';
import Link from 'next/link';
import Image from 'next/image';

const PropertiesCollege = () => {
  return (
    <div className='lg:mx-6 mx-4 py-6 lg:pt-12 lg:pb-12  '>
    <h3 className='font-[NeueBold] text-[1.4rem] lg:text-[2.8rem]' >Find a Stay Near Your College</h3>
         <Swiper
     spaceBetween={30}
     className="mt-6"
     draggable={true}
     breakpoints={{
       350: {
     width: 450,
     slidesPerView: 1,
   },
       450: {
     width: 450,
     slidesPerView: 1,
   },
   576: {
     width: 576,
     slidesPerView: 1.6,
   },
   780: {
     width: 780,
     slidesPerView: 2,
   },
    1200: {
     width: 1200,
     slidesPerView: 2.5,
   },
  
    1440:{
     width:1440,
     slidesPerView:3
   }
 }}
     autoplay={{
       delay: 2000,
       disableOnInteraction:true,
     }}
     loop={true}
     modules={[Autoplay]}
     onSlideChange={() => console.log("slide change")}
     onSwiper={(swiper) => console.log(swiper)}
   >

{collegeProperties && collegeProperties?.map((property,key)=>(
<SwiperSlide>
<Suspense fallback={<PropertyLoadingCard />} >
<Link href={property.link}>
   <Image className='rounded-lg' src={property.image} />
   <h4 className='mt-3 font-[NeueMedium] text-[1.3rem] lg:text-[2rem]'>{property.name}</h4>
   </Link>
   </Suspense>
   </SwiperSlide>
))}
   </Swiper>
</div>
  )
}

export default PropertiesCollege