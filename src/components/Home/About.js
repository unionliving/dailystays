"use client"
import Image from "next/image"
// import Aboutimg from "../../assets/aboutimg.webp"
import Aboutimg1 from "../../assets/dailyabout.webp"

export default function About() {
  return (
    <section className="w-full bg-[#f2ece4] px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[830px] space-y-12">
        
        {/* Title & Subheading outside grid */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="w-16 h-px bg-gray-400 mx-auto lg:mx-0"></div>
          <h1 className="text-4xl md:text-5xl lg:text-[40px] font-[HelveticaWorldRegular] tracking-wider leading-tight text-gray-900">
            Where style and sustainability are a package deal.
          </h1>
        </div>

        {/* Grid Layout for Paragraph and Image */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center !mt-4">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-gray-700 text-[1rem] leading-relaxed">
            <p>
              We're a new breed of hotel. Designed for those who refuse to compromise on style or the planet. Impact
              is our every thought, not an afterthought.
            </p>

            <p>
              At The Usual we unite delicious, locally sourced food with an incredible design hotel experience. We
              connect communities and inspire more conscious travel. A place where locals and travellers meet.
            </p>

            <p>We're here to change the industry, one outstanding hotel at a time. Once tried, forever your usual.</p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={Aboutimg1}
                alt="Modern hotel lobby with orange furniture and large windows"
                width={500}
                height={600}
                className="w-full h-auto rounded-b-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
