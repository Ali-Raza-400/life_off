"use client"

import { BsLightning } from "react-icons/bs"

const deals = [
  {
    logo: "/assets/addidas-card-logo.svg",
    name: "1-800 Contacts",
    offer: "25% Off For New Customers + Free Shipping",
    discount: "25% OFF",
    bgColor: "bg-[#0000CC]",
    buttonType: "show",
    buttonText: "Show Coupon Code",
  },
  {
    logo: "/assets/addidas-card-logo.svg",
    name: "ASOS",
    offer: "10% Cashback For Purchases Sitewide",
    discount: "10% OFF",
    bgColor: "bg-[#2D2D2D]",
    buttonType: "cashback",
    buttonText: "Cashback",
  },
  {
    logo: "/assets/addidas-card-logo.svg",
    name: "JCPENNY",
    offer: "Extra 15% Off Almost Everything With Code For RetailMeNot Customers!",
    discount: "15% OFF",
    bgColor: "bg-[#E31837]",
    buttonType: "show",
    buttonText: "Show Coupon Code",
  },
  {
    logo: "/assets/addidas-card-logo.svg",
    name: "ADIDAS",
    offer: "Limited Time! 30% Off Full Price & Sale Style",
    discount: "30% OFF",
    bgColor: "bg-black",
    buttonType: "show",
    buttonText: "Show Coupon Code",
  },
  {
    logo: "/assets/addidas-card-logo.svg",
    name: "ON",
    offer: "25% Off For New Customers + Free Shipping",
    discount: "40% OFF",
    bgColor: "bg-black",
    buttonType: "show",
    buttonText: "Show Coupon Code",
  },
  {
    logo: "/assets/addidas-card-logo.svg",
    name: "BUTTER LONDON",
    offer: "20% Off Sitewide",
    discount: "10% OFF",
    bgColor: "bg-white",
    buttonType: "show",
    buttonText: "Show Coupon Code",
  },
  {
    logo: "/assets/addidas-card-logo.svg",
    name: "OOFOS",
    offer: "Women's OOmg Low Shoes As Low As $129.95",
    discount: "15% OFF",
    bgColor: "bg-white",
    buttonType: "show",
    buttonText: "Show Coupon Code",
  },
  {
    logo: "/assets/addidas-card-logo.svg",
    name: "SKECHERS",
    offer: "Extra 15% Off Almost Everything With Code For RetailMeNot Customers!",
    discount: "30% OFF",
    bgColor: "bg-white",
    buttonType: "show",
    buttonText: "Show Coupon Code",
  },
]

export default function TrendingDeals() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <div className="relative mb-8">
        <h2 className="text-2xl font-bold">Trending Deals</h2>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Logo Container */}
            <div className={`relative ${deal.bgColor} aspect-square flex items-center justify-center p-8`}>
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <BsLightning className="w-3 h-3" />
                <span>{deal.discount}</span>
              </div>

              {/* Logo */}
              <img
                src={deal.logo || "/placeholder.svg"}
                alt={`${deal.name} logo`}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Brand Name */}
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{deal.name}</h3>

              {/* Offer */}
              <p className="text-sm text-gray-600 mb-4 min-h-[40px]">{deal.offer}</p>

              {/* Button */}
              <button
                className={`w-full py-2 rounded text-sm font-medium transition-colors
                  ${deal.buttonType === "cashback"
                      ? "bg-[#14303B] text-white hover:bg-[#0f2530]"
                      : "bg-[#96C121] text-white hover:bg-[#86AD1E]"}`
                }
              >
                {deal.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


