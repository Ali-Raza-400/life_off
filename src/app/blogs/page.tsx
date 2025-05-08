import type { Metadata } from "next"
import BlogsContent from "../components/blog/BlogsContent"

export const metadata: Metadata = {
  title: "Blogs | Latest Money-Saving Tips & Coupon Updates | LiveOffCoupon",
  description:
    "Stay updated with LiveOffCoupon's latest blogs featuring expert shopping tips, discount hacks, and trending promo code news.",
  openGraph: {
    title: "LiveOffCoupon Blogs - Promo Tips & Deals Insight",
    description:
      "Explore expert shopping tips, saving guides, and insider coupon updates in the LiveOffCoupon blog section.",
    type: "website",
    url: "https://liveoffcoupon.com/blogs",
    images: [
      {
        url: "/images/store-logo.png",
        width: 1200,
        height: 630,
        alt: "LiveOffCoupon",
      },
    ],
  },
  alternates: {
    canonical: "https://liveoffcoupon.com/blogs",
  },
  other: {
    "google-site-verification": "jun25llOGzjnJpsoK3-Qvha-gL5rLMB73W68lVU-h6M",
  },
}

export default function Page() {
  return <BlogsContent />
}

