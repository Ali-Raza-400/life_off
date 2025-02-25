'use client'
// import React, { useState } from 'react';
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// // Product data
// const products = [
//   {
//     id: 1,
//     name: "Crest 3D Whitestrips Sensitive At-Home...",
//     image: "/assets/product1.svg",
//     discount: "30%OFF",
//     price: "Check Price",
//   },
//   {
//     id: 2,
//     name: '43" Aliexpress Fire TV 4-Series 4K HDR Smart TV',
//     image: "/assets/product2.svg",
//     discount: "35%OFF",
//     price: "Check Price",
//   },
//   {
//     id: 3,
//     name: "Crest 3D Whitestrips Sensitive At-Home...",
//     image: "/assets/product3.svg",
//     discount: "30%OFF",
//     price: "Check Price",
//   },
//   {
//     id: 4,
//     name: "Apple AirTag Tracker (4-Pack)",
//     image: "/assets/product4.svg",
//     discount: "29%OFF",
//     price: "Check Price",
//   },
//   // Add more products with the same pattern
// ].concat(
//   Array.from({ length: 12 }, (_, i) => ({
//     id: i + 5,
//     name: `Product ${i + 5}`,
//     image: `/assets/product${(i % 4) + 1}.svg`,
//     discount: `${30 + (i % 6)}%OFF`,
//     price: "Check Price",
//   }))
// );

// const TopDealsSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const itemsPerView = {
//     mobile: 1,
//     tablet: 2,
//     desktop: 4,
//   };

//   const totalSlides = Math.ceil(products.length / itemsPerView.desktop);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => 
//       prev + itemsPerView.desktop >= products.length ? 0 : prev + itemsPerView.desktop
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => 
//       prev - itemsPerView.desktop < 0 ? 
//         Math.max(0, products.length - itemsPerView.desktop) : 
//         prev - itemsPerView.desktop
//     );
//   };

//   const goToSlide = (slideIndex: number) => {
//     setCurrentIndex(slideIndex * itemsPerView.desktop);
//   };

//   return (
//     <div className="max-w-[1440px] mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex items-center gap-6">
//           <img src="/assets/aliexpress-logo.svg" alt="AliExpress" className="w-24" />
//           <div>
//             <h2 className="text-2xl font-bold">Top Deals</h2>
//             <p className="text-sm text-gray-600">PRESENTED BY ALI EXPRESS</p>
//           </div>
//         </div>
//         <button className="border border-[#96C121] text-[#96C121] px-6 py-2 rounded-full hover:bg-[#96C121] hover:text-white transition-colors">
//           View More Products
//         </button>
//       </div>

//       {/* Slider Container */}
//       <div className="relative">
//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
//           aria-label="Previous slide"
//         >
//           <MdChevronLeft className="w-6 h-6" />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
//           aria-label="Next slide"
//         >
//           <MdChevronRight className="w-6 h-6" />
//         </button>

//         {/* Products Grid */}
//         <div className="overflow-hidden">
//           <div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-transform duration-300"
//             style={{
//               transform: `translateX(-${(currentIndex / itemsPerView.desktop) * 100}%)`,
//             }}
//           >
//             {products.map((product) => (
//               <div key={product.id} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
//                 <div className="relative mb-4">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-contain"
//                   />
//                   <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-sm font-medium">
//                     <span role="img" aria-label="fire">🔥</span> {product.discount}
//                   </div>
//                 </div>
//                 <h3 className="text-sm font-medium mb-4 line-clamp-2">{product.name}</h3>
//                 <button className="w-full bg-[#96C121] text-white py-2 rounded hover:bg-[#86AD1E] transition-colors">
//                   {product.price}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Dots */}
//         <div className="flex justify-center gap-2 mt-6">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-8 h-1 rounded-full transition-colors ${
//                 Math.floor(currentIndex / itemsPerView.desktop) === index
//                   ? "bg-[#96C121]"
//                   : "bg-gray-300"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopDealsSlider;



import React, { useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
// import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SiAliexpress } from 'react-icons/si';

interface Product {
  id: number;
  name: string;
  discount: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Crest 3D Whitestrips Sensitive At-Home Treatment",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 2,
    name: "43\" Aliexpress Fire TV 4-Series 4K HDR Smart TV",
    discount: "35% OFF",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 3,
    name: "Crest 3D Whitestrips Sensitive At-Home Kit",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 4,
    name: "Apple AirTag Tracker (4-Pack)",
    discount: "29% OFF",
    image: "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?auto=format&fit=crop&q=80&w=300&h=300"
  }
];

function TopDealsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;
  const totalSlides = Math.ceil(products.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className=" p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-[179px] h-[179px] bg-[#ff4747] rounded-full flex items-center justify-center">
              <SiAliexpress className="w-32 h-32 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Top Deals</h1>
              <p className="text-gray-600">PRESENTED BY ALI EXPRESS</p>
            </div>
          </div>
          <button className="px-6 py-2 border-2 border-[#95c959] text-[#95c959] rounded-full hover:bg-[#95c959] hover:text-white transition-colors">
            View More Products
          </button>
        </div>

        {/* Products Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex h-[140px]">
                      {/* Left side - Image */}
                      <div className="w-1/3 relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Right side - Content */}
                      <div className="w-2/3 p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[14.24px] font-medium line-clamp-2 flex-1 pr-2">
                              {product.name}
                            </h3>
                            <span className="flex items-center text-[14.24px] font-semibold bg-red-50 text-red-500 px-2 py-1 rounded whitespace-nowrap">
                              🔥 {product.discount}
                            </span>
                          </div>
                        </div>
                        <button className="!w-[1/4] bg-[#95c959] text-white py-1.5 rounded text-sm font-medium hover:bg-[#86b84e] transition-colors">
                          Check Price
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {/* <button
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
          </button> */}

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                    ? 'bg-[#95c959] w-8'
                    : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDealsSlider;