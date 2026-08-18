"use client"

import Image from "next/image"
import img from "../../assets/corparate5.png"
import img2 from "../../assets/corparate4.png"
import img3 from "../../assets/corporate.jpeg"

const Corporate = () => {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Content Section */}
          <div className="order-2 lg:order-1 px-8 py-16 lg:px-24 lg:py-32 xl:px-32 flex flex-col justify-center">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-400 mb-6 block">Corporate & Extended Stays</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[HelveticaWorldRegular] tracking-tight text-gray-900 leading-tight mb-10">
              Shortstay Solution for Professionals on the move.
            </h2>
             
            <div className="space-y-6">
              <p className="text-sm lg:text-base font-[GaretRegular] text-gray-600 leading-relaxed text-justify"> 	
                Our spaces are designed for modern individuals who seek ease, elegance, and quiet efficiency in every journey. Thoughtfully furnished and warmly lit, every apartment blends the familiarity of home with the gentle rhythm of a well-run stay. High-speed Wi-Fi, ergonomic workspaces, smart access, and elevated essentials are all in place—designed to support both focus and flow.
              </p>
              <p className="text-sm lg:text-base font-[GaretRegular] text-gray-600 leading-relaxed text-justify">
                From equipped kitchens and on-demand housekeeping to curated local recommendations, we take care of the details that make a space feel lived in, not just stayed in. It’s comfort that doesn’t ask for attention, and functionality that quietly works in the background. Whether for a few nights or a few months, we offer a softer way to live, work, and move. 
              </p>
              <p className="text-sm lg:text-base font-[GaretRegular] text-gray-600 leading-relaxed pt-4 border-t border-gray-100">
                For bookings, questions, or corporate partnerships, feel free to reach out at <a href="mailto:thedailystays@unionliving.in" className="text-black font-medium border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors">thedailystays@unionliving.in</a>.
              </p>
            </div>
          </div>

          {/* Right Images Section */}
          <div className="w-full h-[50vh] lg:h-[800px] order-1 lg:order-2 relative bg-gray-50">
            <Image
              src={img3}
              alt="Luxury hotel bedroom with elegant curtains and comfortable bed"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Corporate