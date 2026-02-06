"use client"

import { useState } from "react"
import { LuChevronDown } from "react-icons/lu"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set())

  const faqs = [
    {
      id: 1,
      question: "Do you offer stays for individuals or only for companies?",
      answer:
        "We offer accommodations for both individuals and companies booking on behalf of their teams. If you’re a company looking for bulk bookings or vendor partnerships, we offer special corporate rates and benefits.",
    },
    {
      id: 2,
      question: "What cities do you currently operate in?",
      answer:
        "We are currently active in Mumbai and Pune."
    },
    {
      id: 3,
      question: "How do companies register The Daily Stays as an official vendor?",
      answer:
        "Simply email us at 📩 thedailystays@gmail.com expressing your interest. Our team will guide you through the vendor onboarding process, including sharing our property portfolio, rate cards, billing details, and formal documentation.",
    },
    {
      id: 4,
      question: "Can you handle last-minute or urgent bookings?",
      answer:
        "Yes! Subject to availability, we accommodate urgent or last-minute bookings. Our dedicated account managers will ensure swift coordination and check-in support.",
    },
    {
      id: 5,
      question: "What is your minimum and maximum stay duration?",
      answer:
        "We typically offer stays ranging from a few nights to a few months. Whether it’s a short trip or an extended assignment, we offer flexible plans to suit your needs.",
    },
    {
      id: 6,
      question: "Can companies sign long-term agreements for recurring stays?",
      answer:
        "Absolutely. We work with several organizations on a retainer or long-term basis, offering consistent service, reserved inventory, and tailored packages for frequent travel needs.",
    },
    {
      id: 7,
      question: "Are your properties safe and secure?",
      answer:
        "Yes, safety is a top priority. All our properties are located in secure neighborhoods, equipped with basic safety infrastructure, and supported by professional on-ground staff.",
    },
    {
      id: 8,
      question: "Do you provide customer support during the stay?",
      answer:
        "Yes, we offer dedicated customer support before, during, and after the stay. Whether it's a last-minute request, maintenance issue, or general query, our team is always just a call or message away, ready to assist.",
    },
  ]

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="bg-white py-8 lg:py-16 px-6 md:py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className=" mb-4 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-[HelveticaWorldRegular] tracking-wider font-light text-gray-900">FAQs</h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full py-6  flex items-center justify-between text-left transition-colors duration-200  "
                aria-expanded={openItems.has(faq.id)}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="text-[.9rem] md:text-xl font-[HelveticaWorldRegular] tracking-wider text-gray-900 pr-8 leading-relaxed">{faq.question}</span>
                <LuChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                    openItems.has(faq.id) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(faq.id) ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-gray-600 font-[GaretRegular] text-[0.7rem] lg:text-[1rem] leading-relaxed pr-8">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
