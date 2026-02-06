
import LeadSquaredTracker from "@/components/Layout/LeadSquareTracker";
import Logo from "../assets/mainLogo.png"
import Hotjar from "@hotjar/browser";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import Home from "./Home/Home";
export const metadata = {
  title: " Explore the Best Furnished Apartments for Short Term Rent | Comfortable Short Stay Rentals & Fully Furnished Flats",
  description: "Find fully furnished short-term rentals in Mumbai & Pune. Ideal for work trips or vacations. Flexible stays, top locations & complete comfort. Book your short stay apartment now!",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: ' Explore the Best Furnished Apartments for Short Term Rent | Comfortable Short Stay Rentals & Fully Furnished Flats',
    description: 'Find fully furnished short-term rentals in Mumbai & Pune. Ideal for work trips or vacations. Flexible stays, top locations & complete comfort. Book your short stay apartment now!',
    url: 'https://daily.unionliving.in',
    siteName: 'Daily By Union',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Daily By Union',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://daily.unionliving.in/',
  },
 
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0',
    shortcut: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0',
    apple: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0',
    },
  },
}
export default function Main() {


     
  
  return (
    <main className="">
       
     
    <Home />
   
    </main>
  );
}
