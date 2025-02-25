"use client"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useState } from "react"

const slides = [
    {
        title: "Up To 70% OFF + Extra 20% OFF Sitewide",
        subtitle: "at Kate Spade Outlet",
        buttonText: "GET COUPON CODE",
    },
    {
        title: "Up To 70% OFF + Extra 20% OFF Sitewide 123",
        subtitle: "at Kate Spade Outlet",
        buttonText: "GET COUPON CODE",
    },
]

const promoCards = [
    { title: "70% OFF On Men's Fashion" },
    { title: "40% Cashback on Mobile Chargers" },
    { title: "Flat 25% OFF On $500 & Above" },
    { title: "Upto 40% Cashback on Recharge" },
    { title: "40% Cashback on Travel & Tickets" },
]

export default function PromoSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className="max-w-[1440px] mx-auto">
            {/* Main Slider */}
            <div className="relative">
                <div
                    className="relative h-[400px] sm:h-[500px] bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/banner-img.png')",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 " />

                    {/* Content */}
                    <div className="relative h-full flex items-center px-8 md:px-16">
                        {/* Text Content */}
                        <div className="max-w-xl text-white ml-10">
                            <h1 className="font-bold leading-tight mb-4" style={{ fontSize: "clamp(24px, 5vw, 51.2px)" }}>
                                {slides[currentSlide].title}
                            </h1>
                            <p className="mb-8" style={{ fontSize: "clamp(16px, 3vw, 30.93px)" }}>
                                {slides[currentSlide].subtitle}
                            </p>
                            <button style={{ fontSize: "clamp(10px, 3vw, 22.93px)" }} className="bg-[#96C121] text-white px-4 py-3 hover:bg-[#86AD1E] transition-colors">
                                {slides[currentSlide].buttonText}
                            </button>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#96C121] p-2"
                    >
                        <IoIosArrowBack className="md:w-6 md:h-6 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#96C121] p-2"
                    >
                        <IoIosArrowForward className="md:w-6 md:h-6 text-white" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Separating Line */}
            <div className="w-full h-0 bg-white"></div>

            {/* Promo Cards */}
            <div className="bg-[#14303B] grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 py-[10px]">
                {promoCards.map((card, index) => (
                    <div
                        key={index}
                        className="py-6 px-4 text-center text-white hover:bg-[#1c3f4d] transition-colors cursor-pointer relative"
                    >
                        <p className="text-sm font-medium">{card.title}</p>
                        {index !== promoCards.length - 1 && (
                            <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gray-600"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
