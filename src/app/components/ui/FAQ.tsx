'use client'
import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How can LiveOff Coupon save me money when shopping online?",
    answer: "LiveOff Coupon helps you save money by providing the latest promo codes, deals, and discounts for your favorite online retailers. Our team constantly verifies and updates offers to ensure maximum savings."
  },
  {
    question: "How many online stores does LiveOff Coupon have coupons & promo codes for?",
    answer: "We partner with thousands of online retailers across various categories including fashion, electronics, home goods, and more. Our database is continuously updated with new stores and offers."
  },
  {
    question: "Does LiveOff Coupon provide cash back for online purchases?",
    answer: "Yes, LiveOff Coupon offers cash back opportunities for select retailers. Simply click through our links to make your purchase and earn cash back on qualifying transactions."
  },
  {
    question: "Does LiveOff Coupon have a browser extension?",
    answer: "Yes, we offer a free browser extension that automatically finds and applies the best available coupons while you shop online."
  },
  {
    question: "Does LiveOff Coupon have an app I can use on my smartphone?",
    answer: "Yes, our mobile app is available for both iOS and Android devices, allowing you to save money on-the-go with instant access to deals and promo codes."
  }
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{item.question}</span>
        <BiPlus 
          className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 mb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className=" mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-1">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;