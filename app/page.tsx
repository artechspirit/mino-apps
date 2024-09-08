import Footer from "@/components/globals/Footer";
import Navbar from "@/components/globals/Navbar";
import Blog from "@/components/landing/Blog";
import Header from "@/components/landing/Header";
import HeroBottom from "@/components/landing/HeroBottom";
import Keunggulan from "@/components/landing/Keunggulan";
import ProductCategory from "@/components/landing/ProductCategory";
import ThisWeekProduct from "@/components/landing/ThisWeekProduct";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Keunggulan />
      <ThisWeekProduct />
      <ProductCategory />
      <HeroBottom />
      <Blog />
      <Footer />
    </>
  );
}
