import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";
import PopularProductCard from "@/components/shared/PopularProductCard";
import Products from "@/components/shared/Products";
import SkinCareSection from "@/components/shared/SkinCareSection";
import TopBrands from "@/components/shared/TopBrands";

export default function Home() {
  return (

    <div className="">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Products></Products> 
      <SkinCareSection></SkinCareSection>
      <TopBrands></TopBrands>
      <Footer></Footer>

    </div>



  )
}