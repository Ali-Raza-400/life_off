import type { Metadata } from "next"
import axios from "axios"
import CategoryBanner from "@/app/components/category/categoryBanner"
import CategoryCoupons from "@/app/components/category/CategoryCoupons"
import { API_URL } from "@/app/components/utils/BASE_URL"

// Define params as a Promise as expected by your Next.js 15 setup
type Params = Promise<{ slug: string }>

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  // Resolve the params Promise
  const resolvedParams = await params
  const { slug } = resolvedParams
  
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://liveoffcoupon.com/api"
    const res = await axios.get(`${apiUrl}/categories/slug/by/${slug}`)
    const data = res.data
    
    // Ensure data exists before using it
    if (!data) {
      console.error("No data returned from API for slug:", slug)
      return {
        title: "Category | LiveOffCoupon",
        description: "Find the best coupons and promo codes",
      }
    }
    
    return {
      title: data.categoryTitle || "Category | LiveOffCoupon",
      description: data.metaDescription || data.categoryDescription || "Find the best coupons and promo codes",
      openGraph: {
        title: data.categoryTitle || "Category | LiveOffCoupon",
        description: data.metaDescription || data.categoryDescription || "Find the best coupons and promo codes",
        url: `https://liveoffcoupon.com/category/${data.slug}`,
        siteName: "LiveOffCoupon",
        images: [
          {
            url: data.image || "https://liveoffcoupon.com/default.jpg",
            width: 1200,
            height: 630,
            alt: data.categoryName || "Category image",
          }
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: data.categoryTitle || "Category | LiveOffCoupon",
        description: data.metaDescription || data.categoryDescription || "Find the best coupons and promo codes",
        images: [data.image || "https://liveoffcoupon.com/default.jpg"],
      },
      alternates: {
        canonical: `https://liveoffcoupon.com/category/${data.slug}`,
      },
      other: {
        "google-site-verification": "jun25llOGzjnJpsoK3-Qvha-gL5rLMB73W68lVU-h6M",
      },
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Category | LiveOffCoupon",
      description: "Find the best coupons and promo codes",
    }
  }
}

// Keep using params as a Promise as expected by your setup
export default async function CategoryPage({ params }: { params: Params }) {
  // Resolve the params Promise
  const resolvedParams = await params
  const { slug } = resolvedParams

  try {
    const res = await axios.get(`${API_URL}/categories/slug/by/${slug}`)
    const data = res.data

    if (!data) {
      throw new Error("No data returned from API")
    }

    return (
      <div>
        <div className="mt-[100px]">
          <CategoryBanner data={data} />
        </div>
        <CategoryCoupons data={data} />
      </div>
    )
  } catch (error) {
    console.error("Error fetching category data:", error)
    return (
      <div className="mt-[100px] p-4 text-center">
        <h1>Category not found</h1>
        <p>Sorry, we couldn't find the category you're looking for.</p>
      </div>
    )
  }
}