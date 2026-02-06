import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <Link href="/property/zest-coliving-chembur" >
    <div className='w-full text-center font-[HelveticaWorldRegular] tracking-wider bg-[#75665f] text-white py-2' >
        Welcome to The Daily Stays
    </div>
    </Link>
  )
}

export default Topbar