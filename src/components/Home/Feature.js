import { FaLocationDot } from "react-icons/fa6";


export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21l4-4 4 4" />
        </svg>
      ),
      title: "Home-like Comfort",
      description:
        "Thoughtfully designed and fully furnished, each apartment offers cozy living spaces, private kitchens, and a sense of warmth that makes short or long stays feel just right.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Easy Booking",
      description:
        "Reserve your stay in minutes through our seamless online system, no calls, no paperwork, just a smooth, mobile-first experience from start to finish.",
    },
    {
      icon: <FaLocationDot className="w-10 h-10 text-gray-600" />,
      title: "Prime Locations",
      description:
        "Stay where the action is, near cafés, coworking spots, and cultural hubs. Our apartments are nestled in handpicked neighborhoods with easy access to everything you need.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Everyday Essentials",
      description:
        "Enjoy the convenience of high-speed Wi-Fi, fresh linens, kitchen basics, and more, all set up so you can focus on what matters.",
    },
  ]

  return (
    <section className="bg-gray-50 lg:py-[30px] px-6 py-[60px] pb-8 md:py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center lg:text-left">
              {/* Icon */}
              <div className="mb-6 flex justify-center lg:justify-start">{feature.icon}</div>

              {/* Title */}
              <h3 className="mb-4 text-[1.3rem] font-[HelveticaWorldRegular] tracking-tighter text-gray-900 md:text-2xl">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 font-[GaretRegular] text-[0.8rem] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}