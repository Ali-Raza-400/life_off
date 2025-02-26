'use client'
import { useState } from "react";
import { BiSearch, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-[1440px] mx-auto h-[65px] mt-4 relative z-50">
      <div className="h-full flex">
        {/* Left side with white background */}
        <div className="bg-white flex items-center px-8">
          <img src="/assets/logo.svg" alt="Logo" className="h-12" />
        </div>

        {/* Rest of navbar with dark background */}
        <div className="flex-1 bg-[#14303B] flex items-center justify-between px-4 lg:px-8">
          {/* Center navigation (hidden on small screens) */}
          <div className="flex-1 hidden lg:flex items-center w-[100%]  justify-center space-x-8">
            <NavLink href="#">Stores</NavLink>
            <NavLink href="#">Categories</NavLink>
            <NavLink href="#">Best Deals</NavLink>
            <NavLink href="#">Savings Tips</NavLink>
          </div>

          {/* Right side - Search & Menu Toggle */}
          <div className=" flex-2 flex items-center  space-x-4 ml-auto">
            {/* Search (hidden on small screens) */}
            <div className="hidden lg:flex relative">
              <input
                type="text"
                placeholder="Search Store Here"
                className="max-w-[280px] pl-4 pr-12 py-2 border-none focus:outline-none focus:ring-0"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-[#96C121] text-white">
                <BiSearch className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white p-2 ml-auto" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <BiMenu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu & Search */}
      {menuOpen && (
        <div className="lg:hidden bg-[#14303B] p-4 absolute w-full top-[65px] left-0 z-50 shadow-lg">
          <input
            type="text"
            placeholder="Search Store Here"
            className="w-full p-2 text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <ul className="flex flex-col space-y-4 mt-4">
            <li><NavLink href="#">Stores</NavLink></li>
            <li><NavLink href="#">Categories</NavLink></li>
            <li><NavLink href="#">Best Deals</NavLink></li>
            <li><NavLink href="#">Savings Tips</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

// NavLink component for consistent styling
const NavLink = ({ href, children }: any) => {
  return (
    <a href={href} className="text-[16px] font-medium text-white hover:text-gray-200 transition-colors">
      {children}
    </a>
  );
};

export default Navbar;
