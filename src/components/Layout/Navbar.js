'use client'
import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../assets/newdailylogo.png"
import  Link  from "next/link";
import Image from "next/image";
export default function NavbarTwo() {
  const [openNav, setOpenNav] = React.useState(false);
  const [topNav, setTopNav] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
    
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col font-[HelveticaWorldRegular] tracking-wider text-[#ffffff] tracking-[0px]  lg:mb-0 lg:mt-0 lg:justify-end lg:flex-row lg:items-center lg:gap-6">
       <Typography as="li" className="p-1 font-[HelveticaWorldRegular] tracking-wider text-[18px] hover:text-gray-300 transition-colors">
         <Link href="/" className="flex items-center">Home</Link>
       </Typography>
       <Typography as="li" className="p-1 font-[HelveticaWorldRegular] tracking-wider text-[18px] hover:text-gray-300 transition-colors">
         <Link href="/short-term-stay-mumbai" className="flex items-center">Mumbai</Link>
       </Typography>
       <Typography as="li" className="p-1 font-[HelveticaWorldRegular] tracking-wider text-[18px] hover:text-gray-300 transition-colors">
         <Link href="/short-term-stay-pune" className="flex items-center">Pune</Link>
       </Typography>
       <Typography as="li" className="p-1 font-[HelveticaWorldRegular] tracking-wider text-[18px] hover:text-gray-300 transition-colors">
         <Link href="/about" className="flex items-center">About</Link>
       </Typography>
       <Typography as="li" className="p-1 font-[HelveticaWorldRegular] tracking-wider text-[18px] hover:text-gray-300 transition-colors">
         <Link href="/contact" className="flex items-center">Contact</Link>
       </Typography>
    </ul>
  );
 
  return (
    <>
     <div className=" sticky top-0 left-0 w-full z-[999]">
        
        {/* <div
          className={`transition-all duration-300 ease-in-out ${
            hideTopbar ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <Topbar />
        </div> */}
  
    <Navbar className={` z-[999] ${topNav ? "top-0" : ""} opacity-100 bg-opacity-100 w-[100vw !important] max-w-full bg-[#343434]  border-none shadow-none  rounded-none  py-2 px-4 lg:px-8 lg:py-2`}>
      <div className="grid-cols-2  grid lg:grid-cols-5 justify-between items-center text-blue-gray-900">
        <div className="col-span-1 flex items-center justify-start gap-12 lg:col-span-3">
       <Link className="" href="/">
        <Image className="lg:py-2 lg:w-[280px]" src={Logo} alt="" />
       
       </Link>
       </div>
        <div className="hidden lg:block  col-span-2 ">{navList}</div>
     
        <IconButton
              variant="text"
              className="ml-auto h-6 w-6  col-span-1 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
         
        </div>
      </Collapse>
    </Navbar>
    </div>
    </>
  );
}