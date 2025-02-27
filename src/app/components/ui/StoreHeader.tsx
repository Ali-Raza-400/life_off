export default function StoreHeader() {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="relative">
          {/* Main container with green border */}
          <div className="flex flex-col sm:flex-row items-center justify-center rounded-xl border-[10px] border-[#96C121] overflow-visible relative py-6 px-4">
            
            {/* Logo container with absolute positioning */}
            <div className="bg-white border-[8px] border-[#14303B] rounded-xl flex items-center justify-center absolute top-[-9px] left-[-10px] p-[35px]">
              <img src="/assets/category-logo.svg" alt="A Beka Book Logo" className="h-12 w-auto" />
            </div>

            {/* Text content centered inside */}
            <div className="text-center flex flex-col items-center justify-center w-full">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">A Beka Book Coupons & Promo Codes</h1>
              <p className="text-sm text-gray-600 uppercase tracking-wide">Top Offers for February, 25th 2025</p>
            </div>
          </div>
        </div>
      </div>
    );
}
