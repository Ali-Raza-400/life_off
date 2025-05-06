"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { convertToSecureUrl } from "../utils/convertToSecureUrl"

const SafeHtml = dynamic(() => import('../utils/SafeHtml'), { ssr: false });
// import SafeHtml from "../utils/SafeHtml"
import dynamic from "next/dynamic"
// import dayjs from "dayjs"

interface Category {
  id: string
  categoryName: string
  image: string
  heading1?: string
  heading2?: string
  categoryDescription?: string
}

interface Coupon {
  id: string
  name: string
  code?: string
  store?: {
    name?: string
    slug?: string
    logoUrl?: string
  }
  mainImage?: string
  secondaryImage?: string
  endDate?: string
}

export default function CategoryCoupons({ data }: { data: Category }) {
  const [categories, setCategories] = useState<Category[]>([])
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [loadingCoupons, setLoadingCoupons] = useState(false)

  const router = useRouter()

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

  useEffect(() => {
    // Ensure code that may vary between client and server runs only on the client
    const fetchCoupons = async (categoryId:any) => {
      setLoadingCoupons(true)
      try {
        const res = await axios.get(`${API_URL}/categories/${categoryId}/coupons`)
        setCoupons(res.data || [])
      } catch (error) {
        console.error("Error fetching coupons:", error)
      } finally {
        setLoadingCoupons(false)
      }
    }
  
    if (data?.id) {
      fetchCoupons(data.id)
      setSelectedCategory(data.id)
    }
  }, [data?.id])
  
  

  const fetchCoupons = async (categoryId: string) => {
    setLoadingCoupons(true)
    try {
      const res = await axios.get(`${API_URL}/categories/${categoryId}/coupons`)
      setCoupons(res.data || [])
    } catch (error) {
      console.error("Error fetching coupons:", error)
    } finally {
      setLoadingCoupons(false)
    }
  }

  const currentCategory = categories.find((cat) => cat.id === selectedCategory)
  const categoryDescription = data?.categoryDescription || currentCategory?.categoryDescription || ""
  const categoryHeading2 = currentCategory?.heading2 || data?.heading2 || "heading2"

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    fetchCoupons(categoryId)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {categoryDescription && (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
              <h2 className="text-xl font-bold mb-3 text-gray-800">{categoryHeading2}</h2>
              <SafeHtml html={categoryDescription} />
            </div>
          )}

          {/* Categories Section */}
          <div className="sticky top-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">Categories</h2>
            <div className="max-h-[70vh] overflow-y-auto p-2">
              {loadingCategories ? (
                <div className="p-4 text-center">Loading categories...</div>
              ) : categories.length > 0 ? (
                <ul className="space-y-1">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryClick(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                          selectedCategory === category.id
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center">
                          {category.image && (
                            <div className="w-8 h-8 mr-3 flex-shrink-0">
                              <img
                                src={convertToSecureUrl(category.image) || "/placeholder.svg"}
                                alt={category.categoryName}
                                className="w-full h-full object-cover rounded"
                                onError={(e: any) => {
                                  e.target.onerror = null
                                  e.target.src = "/placeholder.svg"
                                }}
                              />
                            </div>
                          )}
                          <span>{category.categoryName}</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-gray-500">No categories available.</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Coupons */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory && categories.find((cat) => cat.id === selectedCategory)?.heading1}
          </h2>

          {loadingCoupons ? (
            <div className="text-center py-8">Loading coupons...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coupons.map((coupon) => (
                <div
                  key={coupon.id}
                  className="border border-gray-200 rounded-md p-6 flex flex-col relative h-full group hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-8">
                    <img
                      src={convertToSecureUrl(coupon.store?.logoUrl) || "/placeholder.svg"}
                      alt={coupon.store?.name || "Store logo"}
                      className="h-12 w-auto object-contain"
                    />
                    <div className="border border-gray-300 rounded px-3 py-1 text-sm group-hover:bg-[#7FA842] group-hover:text-white group-hover:border-[#7FA842] transition-all duration-300">
                      {coupon?.mainImage + " " + coupon?.secondaryImage}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 min-h-[3rem] line-clamp-2">{coupon.name}</h3>

                  <div className="mt-auto flex justify-center">
                    <div className="w-[60%]">
                      <button
                        onClick={() => router.push(`/store/${coupon?.store?.slug || "no-slug"}`)}
                        className="bg-[#7FA842] hover:bg-[#6a8e38] text-white font-bold py-3 px-1 rounded w-full mb-4 transition-colors duration-300"
                      >
                        {coupon.code ? `Reveal Code` : "Get Deal"}
                      </button>

                      {/* {coupon.endDate && (
                        <p className="text-sm text-gray-500 text-center">
                          Expires On: {dayjs(coupon.endDate).format("DD MMM YYYY")}
                        </p>
                      )} */}
                    </div>
                  </div>
                </div>
              ))}

              {coupons.length === 0 && !loadingCoupons && (
                <p className="text-center col-span-full text-gray-500">No coupons available for this category.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
