import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import HeroBanner from "./components/ui/HeroBanner";
import CouponTabs from "./components/ui/CouponTabs";
import FavoriteDeal from "./components/ui/FavoriteDeal";
import Categories from "./components/ui/Categories";
import FeaturedDeals from "./components/ui/FeaturedDeals";
import MerchantCard from "./components/ui/MerchantCard";
import TopDealsSlider from "./components/ui/TopDeals";
import Blogs from "./components/ui/Blogs";
import FAQ from "./components/ui/FAQ";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroBanner/>
   <MerchantCard/>
   <CouponTabs/>
   <Categories/>
   <FeaturedDeals/>
   <FavoriteDeal/>
   {/* <TopDealsSlider/> */}
   <Blogs/>
   <FAQ/>
   {/* <Footer/> */}
   </>
  );
}
