"use client"

import { useState } from "react"
import { FaBuilding, FaTshirt, FaLeaf, FaHome, FaHeart } from "react-icons/fa"
import { MdChevronRight } from "react-icons/md"

const categories = [
  {
    name: "Travel",
    icon: <FaBuilding className="w-5 h-5" />,
    deals: [
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
    ],
  },
  {
    name: "Women's Clothing",
    icon: <FaLeaf className="w-5 h-5" />,
    deals: [
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
    ],
  },
  {
    name: "Mens Clothing",
    icon: <FaTshirt className="w-5 h-5" />,
    deals: [
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
    ],
  },
  {
    name: "Home & Garden",
    icon: <FaHome className="w-5 h-5" />,
    deals: [
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
    ],
  },
  {
    name: "Health & Beauty",
    icon: <FaHeart className="w-5 h-5" />,
    deals: [
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/viator-logo.svg", offer: "Upto 50% Off Viator Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
      { logo: "/assets/Booking-logo.svg", offer: "Upto 50% Off Booking.com Coupons" },
    ],
  },
]

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <h2 className="text-[35px] font-bold mb-8" style={{ fontSize: "clamp(30px, 2vw, 35px)" }}>Categories</h2>

      {/* Mobile Categories - Horizontal Layout */}
      <div className="lg:hidden mb-8">
        <div className="flex justify-between overflow-x-auto pb-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center min-w-[80px] cursor-pointer ${
                selectedCategory.name === category.name ? "text-[#96C121]" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="w-12 h-12 rounded-full bg-white border-2 border-[#14303B] flex items-center justify-center mb-2">
                {category.icon}
              </div>
              <span className="text-xs text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Categories - Vertical Layout with line */}
        <div className="w-full lg:w-64 relative hidden lg:block">
          <div className="absolute left-[17px] top-[24px] bottom-12 w-[2px] bg-gray-200" />
          <div className="space-y-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 cursor-pointer ${
                  selectedCategory.name === category.name ? "text-[#96C121]" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-[#14303B] z-10 flex items-center justify-center relative">
                    {category.icon}
                  </div>
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            ))}
            <div className="pl-12">
              <button className="text-[#96C121] text-sm font-medium flex items-center gap-1 hover:text-[#7da01b] transition-colors">
                View More
                <MdChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Deals - 2 columns on desktop, 1 column on mobile */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {selectedCategory.deals.length > 0 ? (
            selectedCategory.deals.map((deal, index) => (
              <div key={index} className="flex items-start">
                {/* Left side - Logo with gray background */}
                <div className="flex items-center justify-center w-[120px] lg:w-[160px] h-[60px] bg-gray-100 rounded-l-lg shadow-sm relative z-10">
                  <img
                    src={deal.logo || "/placeholder.svg"}
                    alt={`${deal.offer} logo`}
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>
                {/* Right side - Offer Text with green border */}
                <div className="flex-1 flex items-center border border-l-0 border-[#96C121] rounded-r-lg -ml-2 pl-4 pr-3 py-4 mt-[4px]">
                  <p className="text-sm text-gray-700" style={{ fontSize: "clamp(12px, 1vw, 18px)" }}>{deal.offer}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No deals available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

