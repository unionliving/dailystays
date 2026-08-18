"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 0,
      quote: "Stayed at Varsity for a month during a work trip and it felt like home from day one.",
      name: "Niraj",
      location: "Pune",
      bgColor: "bg-[#ffeebf]",
      textColor: "text-black",
      borderRadius: "rounded-tl-[60px]",
    },
    {
      id: 1,
      quote: "I needed a clean, quiet, and well-connected space and that’s exactly what I got. Fast Wi-Fi, comfy workspace, and a cozy bed after long workdays. Plus, the neighbourhood had great cafés.",
      name: "Ritu",
      location: "Baner",
      bgColor: "bg-[#fadcb9]",
      textColor: "text-black",
      borderRadius: "rounded-tr-[60px]",
    },
    {
      id: 2,
      quote: "I booked an apartment while house-hunting in Pune. Would highly recommend to anyone.",
      name: "Priya",
      location: "Santacruz",
      bgColor: "bg-[#0f4865]",
      textColor: "text-white",
      borderRadius: "rounded-bl-[60px]",
    },
    {
      id: 3,
      quote: "I needed a place for my parents to stay near my college, and The Daily Stays was the best decision. They felt safe, the staff was polite, and everything was well-maintained. It’s a great option for families too.",
      name: "Akash",
      location: "Mahalaxmi",
      bgColor: "bg-[#156d51]",
      textColor: "text-white",
      borderRadius: "rounded-br-[60px]",
    },
    {
      id: 4,
      quote: "A perfect place for short-term stays near the city. We stayed here during my convocation week.",
      name: "Ananya",
      location: "Mumbai",
      bgColor: "bg-[#eaece2]",
      textColor: "text-black",
      borderRadius: "rounded-br-[60px]",
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-32 px-6 md:px-12 lg:px-16 border-b border-gray-100">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 lg:mb-24 flex flex-col items-center text-center">
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-400 mb-6 block">Guest Experiences</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-[HelveticaWorldRegular] tracking-tight text-gray-900 mb-6">
            Every stay has a story
          </h2>
          <div className="w-12 h-px bg-black"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative group">
          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom hidden md:flex absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-6 lg:-translate-x-12 w-12 h-12 items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            className="swiper-button-next-custom hidden md:flex absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-6 lg:translate-x-12 w-12 h-12 items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Swiper Container */}
          <div className="relative overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              speed={800}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
              className="!pb-16"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className={`${testimonial.bgColor} ${testimonial.borderRadius} p-8 lg:p-10 h-full min-h-[300px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300`}
                  >
                    <blockquote className={`text-sm lg:text-base leading-relaxed font-[GaretRegular] ${testimonial.textColor} mb-8`}>
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className={`font-[HelveticaWorldRegular] tracking-tight ${testimonial.textColor} text-lg mb-1`}>
                        {testimonial.name}
                      </div>
                      <div className={`font-[GaretRegular] tracking-widest uppercase text-[0.65rem] ${testimonial.textColor} opacity-80`}>
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Pagination Dots */}
          <div className="swiper-pagination-custom flex justify-center space-x-3 absolute bottom-0 left-0 right-0 z-10"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #d1d5db;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: #000;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  )
}