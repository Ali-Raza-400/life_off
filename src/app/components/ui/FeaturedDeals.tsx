import { FiTag } from "react-icons/fi"

const deals = [
  {
    logo: "/assets/trending-deal-logo.svg",
    name: "1800 CONTACTS",
    offer: "25% Off For New Customers + Free Shipping",
    couponCode: "WELCOME25",
  },
  {
    logo: "/assets/trending-deal-logo.svg",
    name: "ASOS",
    offer: "50% Cashback For Purchase Sitewide",
    couponCode: "ASOS50",
  },
  {
    logo: "/assets/trending-deal-logo.svg",
    name: "JCPENNEY",
    offer: "Extra 15% Off Almost Everything With Code For StoreSiteWide",
    couponCode: "SAVE15",
  },
  {
    logo: "/assets/trending-deal-logo.svg",
    name: "ADIDAS",
    offer: "Limited Time! 30% Off Full Price & Sale Style",
    couponCode: "ADIDAS30",
  },
  {
    logo: "/assets/trending-deal-logo.svg",
    name: "ON",
    offer: "25% Off For New Customers + Free Shipping",
    couponCode: "NEWON25",
  },
  {
    logo: "/assets/trending-deal-logo.svg",
    name: "BUTTER LONDON",
    offer: "25% Off Sitewide",
    couponCode: "BUTTER25",
  },
  {
    logo: "/assets/trending-deal-logo.svg",
    name: "OOFOS",
    offer: "Women's OOmg Low Shoes As Low As $125.95",
    couponCode: "OOFOS125",
  },
  {
    logo: "/assets/skechers-logo.svg",
    name: "SKECHERS",
    offer: "Extra 15% Off Almost Everything With Code For StoreSiteWide",
    couponCode: "SKECHERS15",
  },
]

export default function FeaturedDeals() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-[#7FA842] py-4 mb-8 px-2 md:px-0">
        <h1 className="text-center text-white text-[35px] font-semibold" style={{ fontSize: "clamp(20px, 1vw, 35px)" }}>Fastest Growing Coupons & Deals Company</h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-[35px] font-bold mb-6" style={{ fontSize: "clamp(20px, 1vw, 35px)" }}>Trending Deals</h2>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Logo Container */}
              <div className="relative aspect-square bg-black flex items-center justify-center">
                {/* Discount Label */}
                <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <FiTag className="w-3 h-3" />
                  <span>DISCOUNT</span>
                </div>


                {/* Logo */}
                <img
                  src="/assets/addida-logo.svg" // Replace with actual Adidas logo path
                  alt="Adidas logo"
                  className="w-3/4 h-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Brand Name */}
                <h3 className="text-sm font-medium text-gray-600 mb-2">{deal.name}</h3>

                {/* Offer */}
                <p className="text-sm text-gray-800 mb-4 min-h-[40px]">{deal.offer}</p>

                {/* Button */}
                <button className="w-full w-[1/3] bg-[#96C121] text-white py-2 rounded hover:bg-[#86AD1E] transition-colors text-sm font-medium">
                  Get Coupon Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

