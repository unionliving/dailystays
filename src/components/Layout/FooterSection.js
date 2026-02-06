import { LuInstagram, LuLinkedin, LuFacebook, LuTwitter } from "react-icons/lu"
import Logo from "../../assets/thedailystayswhite.png"
import Image from "next/image"
import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className="bg-[#343434] grid grid-cols-1 lg:grid-cols-3 justify-between lg:gap-0 gap-6 text-white py-16 px-6 md:py-8 md:px-12 lg:px-16 mx-auto">
      <div className="col-span-2">
        <div className="flex items-center  justify-center lg:justify-start gap-8">
          <Link href="/about" > <p className="lg:text-[1.2rem] text-[0.8rem] uppercase font-[GaretRegular]">About</p></Link>
          <Link href="/contact" > <p className="lg:text-[1.2rem] text-[0.8rem] uppercase  font-[GaretRegular]">Contact</p></Link>
          <Link href="/short-term-stay-mumbai" > <p className="lg:text-[1.2rem] text-[0.8rem] uppercase font-[GaretRegular]">Mumbai</p></Link>
          <Link href="/short-term-stay-pune" > <p className="lg:text-[1.2rem] text-[0.8rem] uppercase font-[GaretRegular]">Pune</p></Link>
          <Link href="/blogs" > <p className="lg:text-[1.2rem] text-[0.8rem] uppercase font-[GaretRegular]">Blogs</p></Link>
        </div>
        <div className="mt-6">
        <p className="text-gray-300 font-[GaretRegular] lg:text-left text-center text-[.7rem] lg:text-base">© The daily stays, Inc. 2025 All Rights Reserved.</p>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end flex-col">
      <div className="flex space-x-4 justify-center lg:justify-end">
              <a
                href="https://www.instagram.com/dailybyunion/"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <LuInstagram className="w-5 h-5" />
              </a>
              
            </div>
        <div className="">
          <p className="text-[0.6rem] lg:text-[1rem] mt-6 flex justify-center lg:justify-end  gap-3 ">
        <a href="tel:7021654226" className="text-white pr-3 font-[GaretRegular] border-r-[1px] border-white">7021654226 </a> 
        <p className="text-white font-[GaretRegular] text-[0.6rem] lg:text-[1rem]">thedailystays@unionliving.in</p>
        </p>
        </div>
      </div>
    </footer>
  )
}


