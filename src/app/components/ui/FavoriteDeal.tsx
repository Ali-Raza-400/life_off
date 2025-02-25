import React from 'react';

const FavoriteDeal = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8 bg-[#7FA8421F] my-8">
      <h2 className="text-[35px] font-bold text-center mb-8">Favorite Deal</h2>

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large Feature Image - Takes up 2 columns */}
        <div className="md:col-span-2 relative group cursor-pointer">
          <img
            src="/assets/feature-img1.png"
            alt="Tropical beach resort with wooden pier"
            className="w-full h-[420px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        </div>

        {/* Right Side Grid - 1 column with 3 rows */}
        <div className="space-y-4">
          {/* Travel Deals Card */}
          <div className="flex  rounded-lg overflow-hidden cursor-pointer group">
            <div className="w-1/2">
              <img
                src="/assets/feature-img2.png"
                alt="Family traveling"
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="w-1/2 p-3 flex flex-col justify-between">
              <span className="text-sm font-semibold text-black  px-2 py-1 rounded w-fit">
                TRAVEL DEALS & CASH BACK
              </span>
              <p className="text-sm font-medium text-gray-800">What is Spring Savecation?</p>
            </div>
          </div>

          {/* Coffee Maker Card */}
          <div className="flex  rounded-lg overflow-hidden cursor-pointer group">
            <div className="w-1/2">
              <img
                src="/assets/feature-img3.png"
                alt="Nespresso coffee maker"
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="w-1/2 p-3 flex flex-col justify-between">
              <span className="text-sm font-semibold text-black  px-2 py-1 rounded w-fit">
                WE TESTED IT!
              </span>
              <p className="text-sm font-medium text-gray-800">The Nespresso Coffee Maker to Buy</p>
            </div>
          </div>

          {/* Shopping Tips Card */}
          <div className="flex  rounded-lg overflow-hidden cursor-pointer group">
            <div className="w-1/2">
              <img
                src="/assets/feature-img4.png"
                alt="Security tag removal"
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="w-1/2 p-3 flex flex-col justify-between">
              <span className="text-sm font-semibold text-black  px-2 pt-1 rounded w-fit">
                SHOPPING TIPS
              </span>
              <p className="text-sm font-medium text-gray-800">How to (Legally) Remove a Security Tag</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="mt-6 text-center">
        <span className="text-[30px] font-semibold text-[#96C121]">TRAVEL</span>
        <h2 className="text-[30px] font-bold mt-2 mb-3">Spring Travel By the Numbers 2025</h2>
        <p className="text-gray-600 text-[17.23px]">
          Travelers kick off the season early to beat crowds & big with Spring Savecation
        </p>
      </div>
    </div>
  );
};

export default FavoriteDeal;