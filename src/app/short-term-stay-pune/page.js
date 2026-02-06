import React from 'react'
import PuneMainPage from './PuneMainPage'

export const metadata = {
  title: "Best Short Term Rentals & Hotels in Pune | Book Your Stay Now – Daily Stays by Union Living",
  description: "Find the best stay in Pune with fully serviced short term rentals and hotel-style amenities. Quick Pune hotel booking, top locations & comfort for every kind of traveler.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Best Short Term Rentals & Hotels in Pune | Book Your Stay Now – Daily Stays by Union Living",
    description: "Find the best stay in Pune with fully serviced short term rentals and hotel-style amenities. Quick Pune hotel booking, top locations & comfort for every kind of traveler.",
    url: 'https://daily.unionliving.in/short-term-stay-pune/',
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
    canonical: 'https://daily.unionliving.in/short-term-stay-pune/',
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
        <PuneMainPage />
    </div>
  )
}

export default page