import { Metadata } from "next";
import Navbar from "@/app/components/ui/Navbar";
import axios from "axios";
import CategoryBanner from "@/app/components/category/categoryBanner";
import CategoryCoupons from "@/app/components/category/CategoryCoupons";

// Define the type for the props
type Props = {
    params: { slug: string };
};

// The `generateMetadata` function will now await `params` properly
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params; // Await params here to prevent the error
    const res = await axios.get(`http://localhost:3000/categories/slug/by/${slug}`);
    const data = res.data?.list;

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
            "google-site-verification": "jun25llOGzjnJpsoK3-Qvha-gL5rLMR73W68lVU-h6M",
        },
    };
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params; // Await params here as well
    console.log("slug:::", slug);
    const res = await axios.get(`http://localhost:3000/categories/slug/by/${slug}`);
    console.log("res:::",res?.data);
    const data = res.data;

    return (
        <div>
            {/* <Navbar /> */}
            <div className='mt-[100px]' >
                <CategoryBanner data={data} />
            </div>
            <CategoryCoupons data={data} />
        </div>
    );
}
