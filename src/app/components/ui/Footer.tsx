import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A2730] text-white mt-28">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        <div className="bg-[#95C959]  p-6 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[calc(100%-2rem)]">
          <h2 className="text-[58.9px] font-bold mb-2">Love to save?</h2>
          <p className="text-[23px] mb-4">
            Sign up for the free liveoffcoupons newsletter today! It's packed with the latest promo codes and top discounts.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7DAD41]"
            />
            <button className="bg-[#0A2730] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pt-48">
          {/* Logo Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/footer_logo.svg" alt="" className="h-[71.41480255126953px]"/>
            </div>
          </div>

          {/* Seasonal Deals */}
          <div>
            <h3 className="font-semibold mb-4">Seasonal Deals</h3>
            <ul className="space-y-2 text-[16px]">
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Cyber Monday</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Black Friday</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Christmas</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Halloween</a></li>
            </ul>
          </div>

          {/* Browse By */}
          <div>
            <h3 className="font-semibold mb-4">Browse By</h3>
            <ul className="space-y-2 text-[16px]">
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Stores</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Free Shipping Coupons</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[16px]">
              <li><a href="#" className="hover:text-[#95C959] transition-colors">How to Use Coupon</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Submit a Coupon</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Connect with Us</a></li>
              <li><a href="#" className="hover:text-[#95C959] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-[#95C959] transition-colors">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#95C959] transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#95C959] transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#95C959] transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="text-sm text-gray-400 flex flex-wrap justify-center gap-2">
            <span>Copyright 2024 LiveOff coupons. All rights reserved.</span>
            <span>•</span>
            <span>Made by</span>
            <a href="#" className="text-[#95C959] hover:underline">Blackmoon</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;