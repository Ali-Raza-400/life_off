import type { Metadata } from "next"
import axios from "axios"
import CategoryBanner from "@/app/components/category/categoryBanner"
import CategoryCoupons from "@/app/components/category/CategoryCoupons"
import { API_URL } from "@/app/components/utils/BASE_URL"

// Update the type to reflect that params is a Promise
type Params = Promise<{ slug: string }>

// Update generateMetadata to properly await the params Promise
export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  // Await the params Promise to get the actual params object
  const resolvedParams = await params
  const { slug } = resolvedParams

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  const res = await axios.get(`${API_URL}/categories/slug/by/${slug}`)
  const data = res.data?.list

  return {
    title: data?.categoryTitle || "Women's Clothing Promo Codes & Coupons | LiveOffCoupon",
    description: data?.metaDescription || data?.categoryDescription,
    openGraph: {
      title: data?.categoryTitle,
      description: data?.metaDescription,
      url: `https://liveoffcoupon.com/category/${data?.slug}`,
      type: "website",
      images: [data?.image || "https://liveoffcoupon.com/default.jpg"],
    },
    alternates: {
      canonical: `https://liveoffcoupon.com/category/${data?.slug}`,
    },
    other: {
      "google-site-verification": "jun25llOGzjnJpsoK3-Qvha-gL5rLMB73W68lVU-h6M",
    },
  }
}

// The component is already correctly handling the Promise params
export default async function CategoryPage({ params }: { params: Params }) {
  // Resolve the params promise
  const resolvedParams = await params
  const { slug } = resolvedParams


  const res = await axios.get(`${API_URL}/categories/slug/by/${slug}`)
  const data = res.data

  return (
    <div>
      <div className="mt-[100px]">
        <CategoryBanner data={data} />
      </div>
      <CategoryCoupons data={data} />
    </div>
  )
}
