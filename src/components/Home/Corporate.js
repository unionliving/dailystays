"use client"

import Image from "next/image"
import img from "../../assets/corparate5.png"
import img2 from "../../assets/corparate4.png"
import img3 from "../../assets/corporate.jpeg"

const Corporate = () => {
  return (
    <section className=" bg-white">
      <div className="  lg:py-0 pr-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2   items-center">
          {/* Left Content Section */}
          <div className="space-y-6 px-4 order-2 lg:order-1 py-6 lg:py-0 lg:px-12">
            <div>
              <h2 className="text-[20px] font-[LexandSemibold] tracking-tighter lg:text-[2.5rem]  text-gray-900 leading-tight mb-4">
              Shortstay Solution for Professionals <span>on the move.</span>
              </h2>
             

              {/* Purple accent line */}
          
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-[GaretRegular] text-justify lg:text-[16px] lg:mr-12 text-gray-700 leading-relaxed"> 	
Our spaces are designed for modern individuals who seek ease, elegance, and quiet efficiency in every journey. Thoughtfully furnished and warmly lit, every apartment blends the familiarity of home with the gentle rhythm of a well-run stay. High-speed Wi-Fi, ergonomic workspaces, smart access, and elevated essentials are all in place—designed to support both focus and flow.
<br /> <br /> From equipped kitchens and on-demand housekeeping to curated local recommendations, we take care of the details that make a space feel lived in, not just stayed in. It’s comfort that doesn’t ask for attention, and functionality that quietly works in the background. Whether for a few nights or a few months, we offer a softer way to live, work, and move. For bookings, questions, or corporate partnerships, feel free to reach out at <span className="text-[#156d51] font-[LexandMedium]">thedailystays@unionliving.in</span> .

              </p>

              
            </div>
          </div>

          {/* Right Images Section */}
          <div className="w-full lg:h-[700px] order-1 lg:order-2 h-[400px] relative">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={img3}
                alt="Luxury hotel bedroom with elegant curtains and comfortable bed"
                fill
                className="  w-full h-full"
              />
            </div>
</div>

        </div>
      </div>
    </section>
  )
}

export default Corporate