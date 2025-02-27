"use client"

import { useState } from "react"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

const stores = [
  { name: "1800contacts", logo: "/assets/addida-logo.svg", bgColor: "bg-[#0000CC]" },
  { name: "1800contacts", logo: "/assets/addida-logo.svg", bgColor: "bg-[#0000CC]" },
  { name: "ASOS", logo: "/assets/addida-logo.svg", bgColor: "bg-[#2D2D2D]" },
  { name: "JCPenney", logo: "/assets/addida-logo.svg", bgColor: "bg-[#E31837]" },
  { name: "Adidas", logo: "/assets/addida-logo.svg", bgColor: "bg-black" },
  { name: "ON", logo: "/assets/addida-logo.svg", bgColor: "bg-black" },
  { name: "ON", logo: "/assets/addida-logo.svg", bgColor: "bg-black" },
  { name: "Butter London", logo: "/assets/butter-addida-logo.svg", bgColor: "bg-gray-200" },
  { name: "OOFOS", logo: "/assets/addida-logo.svg", bgColor: "bg-black" },
  { name: "Skechers", logo: "/assets/addida-logo.svg", bgColor: "bg-[#003057]" },
  { name: "Viator", logo: "/assets/addida-logo.svg", bgColor: "bg-[#00877A]" },
  { name: "Viator", logo: "/assets/addida-logo.svg", bgColor: "bg-[#00877A]" },
  { name: "Priceline", logo: "/assets/addida-logo.svg", bgColor: "bg-[#0064D2]" },
  { name: "Qatar Airways", logo: "/assets/addida-logo.svg", bgColor: "bg-gray-200" },
  { name: "AVIS", logo: "/assets/addida-logo.svg", bgColor: "bg-[#E31837]" },
]

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 12
  const totalPages = Math.ceil(stores.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleStores = stores.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-8 w-full">
        {/* Centered Text */}
        <h2 className="text-2xl font-bold flex-1 text-center">Stores on Offers</h2>

        {/* Right-aligned buttons */}
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            className="w-10 h-10 rounded-full bg-[#96C121] text-white flex items-center justify-center hover:bg-[#86AD1E] transition-colors"
            aria-label="Previous page"
          >
            <MdChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPage}
            className="w-10 h-10 rounded-full bg-[#96C121] text-white flex items-center justify-center hover:bg-[#86AD1E] transition-colors"
            aria-label="Next page"
          >
            <MdChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>



      {/* Stores Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {visibleStores.map((store, index) => (
          <div
            key={index}
            className={`${store.bgColor} aspect-square rounded-lg flex items-center justify-center p-6 transition-transform hover:scale-105`}
          >
            <img
              src={store.logo || "/placeholder.svg"}
              alt={`${store.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Alphabet Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-[#96C121] transition-colors"
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="space-y-4 text-gray-600 text-sm">
        <p>
          Here at liveoffcoupon, we strive to help you save on everything, from food and fashion to toys and travel.
          This starts with sourcing the best coupon codes, promotions and bargain shopping tips for you to use at your
          favorite retailers.
        </p>
        <p>
          From well-established big box stores, like Walmart and Target, to online shopping marketplaces, like Etsy and
          eBay, to digital services, like Spotify and Netflix, to eateries, like Starbucks and Pizza Hut, to travel
          institutions, like Hilton and Booking.com, you'll find almost every brand, retailer, restaurant and digital
          service under the sun featured here on liveoffcoupon.com
        </p>
      </div>
    </div>
  )
}

