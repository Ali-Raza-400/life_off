import {
  MdTravelExplore,
  MdOutlineWoman,
  MdOutlineMan2,
  MdOutlineHome,
  MdOutlineHealthAndSafety,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md"
import { BiSearch } from "react-icons/bi"

const categories = [
  { icon: MdTravelExplore, name: "Travel" },
  { icon: MdOutlineWoman, name: "Women's Clothing" },
  { icon: MdOutlineMan2, name: "Mens Clothing" },
  { icon: MdOutlineHome, name: "Home & Garden" },
  { icon: MdOutlineHealthAndSafety, name: "Health & Beauty" },
]

const stores = [
  { name: "1800contacts", logo: "/placeholder.svg?height=100&width=100", bg: "bg-blue-800" },
  { name: "ASOS", logo: "/placeholder.svg?height=100&width=100", bg: "bg-gray-900" },
  { name: "JCPenney", logo: "/placeholder.svg?height=100&width=100", bg: "bg-red-600" },
  { name: "Adidas", logo: "/placeholder.svg?height=100&width=100", bg: "bg-black" },
  { name: "ON", logo: "/placeholder.svg?height=100&width=100", bg: "bg-black" },
  { name: "Butter London", logo: "/placeholder.svg?height=100&width=100", bg: "bg-gray-200" },
  { name: "OOFOS", logo: "/placeholder.svg?height=100&width=100", bg: "bg-black" },
  { name: "Skechers", logo: "/placeholder.svg?height=100&width=100", bg: "bg-blue-900" },
  { name: "Viator", logo: "/placeholder.svg?height=100&width=100", bg: "bg-teal-700" },
  { name: "Priceline", logo: "/placeholder.svg?height=100&width=100", bg: "bg-blue-500" },
  { name: "Qatar Airways", logo: "/placeholder.svg?height=100&width=100", bg: "bg-gray-200" },
  { name: "Avis", logo: "/placeholder.svg?height=100&width=100", bg: "bg-red-600" },
]

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function Page() {
  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Categories Section */}
        <div className="w-full sm:w-64 flex-shrink-0">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          {/* <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search Store Here"
              className="w-full max-w-[280px] pl-4 pr-12 py-2 bg-[#F5F5F5] border-none focus:outline-none focus:ring-0"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-[#96C121] text-white">
              <BiSearch className="h-5 w-5" />
            </button>
          </div> */}
          <div className="relative mb-4 flex items-center bg-[#F5F5F5] rounded-md w-[280px]">
            <input
              type="text"
              placeholder="Search Store Here"
              className="w-full pl-4 pr-12 py-3 bg-[#F5F5F5] border-none focus:outline-none focus:ring-0"
            />
            <button className="px-4 py-[14px] bg-[#96C121] text-white flex items-center justify-center ">
              <BiSearch className="h-5 w-5" />
            </button>
          </div>


          <ul className="space-y-3">
            {categories.map((category) => (
              <li key={category.name}>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="text-green-600 hover:text-green-700">
                View More
              </a>
            </li>
          </ul>
        </div>

        {/* Stores Section */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Stores on Offers</h2>
            <div className="flex gap-2">
              <button className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200">
                <MdKeyboardArrowLeft className="w-6 h-6" />
              </button>
              <button className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200">
                <MdKeyboardArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Store Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {stores.map((store) => (
              <a
                key={store.name}
                href="#"
                className={`${store.bg} p-4 rounded-lg flex items-center justify-center h-24 transition-transform hover:scale-105`}
              >
                <img
                  src={store.logo || "/placeholder.svg"}
                  alt={store.name}
                  className="max-h-full max-w-full object-contain"
                />
              </a>
            ))}
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap gap-2 justify-center">
            {alphabet.map((letter) => (
              <a key={letter} href="#" className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                {letter}
              </a>
            ))}
          </div>

          {/* Description */}
          <p className="mt-8 text-sm text-gray-600 leading-relaxed">
            Here at livecofcoupon, we strive to help you save on everything, from food and fashion to toys and travel.
            This starts with sourcing the best coupon codes, promotions and bargain shopping tips for you to use at your
            favorite retailers.
          </p>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            From well-established big box stores, like Walmart and Target, to online shopping marketplaces, like eBay
            and Etsy, to digital services, like Spotify and Netflix, to food institutions, like Starbucks and Pizza Hut,
            to travel institutions, like Hilton and Booking.com, you'll find every brand, retailer, restaurant and
            digital service under the sun featured here on liveofcoupon.com
          </p>
        </div>
      </div>
    </div>
  )
}

