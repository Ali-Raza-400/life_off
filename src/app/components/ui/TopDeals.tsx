"use client"

import { useState, useEffect } from "react"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { SiAliexpress } from "react-icons/si"

interface Product {
  id: number
  name: string
  discount: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Crest 3D Whitestrips Sensitive At-Home Treatment",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 2,
    name: '43" Aliexpress Fire TV 4-Series 4K HDR Smart TV',
    discount: "35% OFF",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 3,
    name: "Crest 3D Whitestrips Sensitive At-Home Kit",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 4,
    name: "Apple AirTag Tracker (4-Pack)",
    discount: "29% OFF",
    image: "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?auto=format&fit=crop&q=80&w=300&h=300",
  },
]

function TopDealsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768) // md breakpoint
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3))
  }

  return (
    <div className="md:p-8 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between md:mb-8 m-4">
          <div className="flex items-center md:gap-4 gap-2">
            <div
              className="bg-[#ff4747] rounded-full flex items-center justify-center"
              style={{ width: "clamp(100px, 6vw, 190px)", height: "clamp(100px, 6vw, 190px)" }}
            >
              <SiAliexpress className="w-2/3 h-2/3 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ fontSize: "clamp(20px, 1vw, 30px)" }}>
                Top Deals
              </h1>
              <p className="text-gray-600" style={{ fontSize: "clamp(12px, 1vw, 17.23px)" }}>
                PRESENTED BY ALI EXPRESS
              </p>
            </div>
          </div>
          <button className="hidden md:block px-6 py-2 border-2 border-[#95c959] text-[#95c959] rounded-full hover:bg-[#95c959] hover:text-white transition-colors">
            View More Products
          </button>
        </div>


        {/* Products Section */}
        <div className="relative">
          {/* Desktop Slider */}
          <div className={`${isDesktop ? "block" : "hidden"} overflow-hidden`}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Desktop Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
            >
              <MdChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
            >
              <MdChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Desktop Dots Navigation */}
            <div className="flex justify-center gap-6 mt-8">
              {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "bg-[#95c959] w-8" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Vertical List */}
          <div className={`${isDesktop ? "hidden" : "block"} space-y-8`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="md:hidden flex justify-center">

            <button className="md:hidden px-6 py-2 mx-4 mt-8 border-2 border-[#95c959] text-[#95c959] rounded-full hover:bg-[#95c959] hover:text-white transition-colors">
              View More Products
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full md:w-1/3 flex-shrink-0 px-4 mb-4 md:mb-0">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="flex h-[140px]">
          {/* Left side - Image */}
          <div className="w-1/3 relative">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Right side - Content */}
          <div className="w-2/3 p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-[14.24px] font-medium line-clamp-2 flex-1 pr-2">{product.name}</h3>
                <span className="flex items-center text-[14.24px] font-semibold bg-red-50 text-red-500 px-2 py-1 rounded whitespace-nowrap">
                  🔥 {product.discount}
                </span>
              </div>
            </div>
            <button className="w-full bg-[#95c959] text-white py-1.5 rounded text-sm font-medium hover:bg-[#86b84e] transition-colors">
              Check Price
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopDealsSlider

