import React from 'react'

import ContactUs from '@/components/Home/ContactUs'
import ContactPage from './Contact'
import HomeBanner from '@/components/Home/HomeBanner'
import BookingFloatingSearchBar from '@/components/Home/BookingFloatingSearchBar'
import FAQSection from '@/components/Home/FaqSection'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import ContactBooking from '@/components/contact/ContactBooking'

export const metadata = {
  title: "Get in Touch | Book Short-Term Rentals in Mumbai & Pune – Daily Stays by Union Living",
  description: "Contact Daily by Union Living for fully furnished short-term rentals in Mumbai & Pune. Book your stay today!",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Get in Touch | Book Short-Term Rentals in Mumbai & Pune – Daily Stays by Union Living",
  description: "Contact Daily by Union Living for fully furnished short-term rentals in Mumbai & Pune. Book your stay today!",
    url: 'https://daily.unionliving.in/contact/',
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
    canonical: 'https://daily.unionliving.in/contact/',
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

const page = () => {
  return (
    <div>
        <NavbarTwo />
                <div className=''>
                {/* <HomeBanner /> */}
                <ContactBooking />
                {/* <BookingFloatingSearchBar /> */}
                <ContactPage />
                {/* <FAQSection /> */}
                {/* <Whyus /> */}
                {/* <ContactUs /> */}
                {/* <Partner /> */}
                <FooterSection />
                {/* <Footer /> */}
                </div>
        {/* <ContactUs /> */}
    </div>
  )
}

export default page