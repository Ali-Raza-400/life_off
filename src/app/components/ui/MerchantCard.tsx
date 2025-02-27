
import React from "react";

const MerchantCard = () => {
  const merchants = [
    {
      name: "1800contacts",
      image: '/assets/addidas-logo.svg', // Text-only
    },
    {
      name: "ASOS",
      image: "/assets/addidas-logo.svg",
    },
    {
      name: "JCPenney",
      image: '/assets/addidas-logo.svg', // Text-only
    },
    {
      name: "adidas",
      image: "/assets/addidas-logo.svg",
    },
    // {
    //   name: "OOFOS",
    //   image: '/assets/addidas-logo.svg', // Text-only
    // },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10" style={{ fontSize: "clamp(20px, 2vw, 51.2px)" }}>
        Our Favorite Merchants
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {merchants.map((merchant, index) => (
          <button
            key={index}
            className=" !h-[120px] w-full min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] bg-[#7FA842] flex items-center justify-center px-4 py-3 rounded-[10px] text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#8DC63F]"
          >
            <div className="flex items-center justify-center space-x-2">
              {merchant.image ? (
                // If image exists, render it
                <img
                  src={merchant.image}
                  alt={`${merchant.name} logo`}
                  className="w-auto h-[76px] sm:h-[40px] lg:h-[50px] object-contain"
                />
              ) : (
                // If no image, show text
                <span className="text-sm sm:text-base lg:text-lg font-medium px-2 text-center">
                  {merchant.name}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MerchantCard;
