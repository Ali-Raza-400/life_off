import { FiScissors } from "react-icons/fi"

const coupons = [
  {
    logo: "/assets/amazon-logo.svg",
    name: "Amazon",
    cashback: "Upto 40% Cashback",
    percentage: "0% Percentage",
  },
  {
    logo: "/assets/eBay-logo.svg",
    name: "eBay",
    cashback: "Upto 40% Cashback",
    percentage: "0% Percentage",
  },
  {
    logo: "/assets/alibaba-logo.svg",
    name: "Alibaba Group",
    cashback: "Upto 20% Cashback",
    percentage: "0% Percentage",
  },
  {
    logo: "/assets/walmart-logo.svg",
    name: "Walmart",
    cashback: "Upto 40% Cashback",
    percentage: "0% Percentage",
  },
  {
    logo: "/assets/flipcart-logo.svg",
    name: "Flipkart",
    cashback: "Upto 40% Cashback",
    percentage: "0% Percentage",
  },
  {
    logo: "/assets/aliExpress-logo.svg",
    name: "AliExpress",
    cashback: "Upto 30% Cashback",
    percentage: "0% Percentage",
  },
  {
    logo: "/assets/hostinger-logo.svg",
    name: "Hostinger",
    cashback: "Upto 20% Cashback",
    percentage: "0% Percentage",
  },
  {
    logo: "/assets/Etsy-Logo.svg",
    name: "Etsy",
    cashback: "Upto 40% Cashback",
    percentage: "0% Percentage",
  },
]

export default function CouponTabs() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 pt-12">
      <h2 className="text-2xl font-bold mb-10 md:text-start text-center  " style={{ fontSize: "clamp(20px, 2vw, 51.2px)" }}>Todays Offers and Coupons</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coupons.map((coupon, index) => (
          <div
            key={index}
            className="relative border border-dashed mx-6 sm:mx-0  border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
          >
            {/* Scissors Icon */}
            <div className="absolute -top-2 -left-2 bg-white">
              <FiScissors className="w-4 h-4 text-gray-400" />
            </div>

            {/* Logo */}
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src={coupon.logo || "/placeholder.svg"}
                alt={`${coupon.name} logo`}
                className="max-h-full max-w-[140px] object-contain"
              />
            </div>

            {/* Offer Details */}
            <div className="text-center">
              <p className="text-sm font-medium text-gray-800">{coupon.cashback}</p>
              <p className="text-xs text-gray-500">{coupon.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

