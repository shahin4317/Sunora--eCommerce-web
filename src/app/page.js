import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import PopularProductsCard from "@/components/shared/PopularProductsCard";
import SkinCareSection from "@/components/shared/SkinCareSection";
import TopBrands from "@/components/shared/TopBrands";

export default function Home() {
  return (

    <div className="">
      <HeroSection></HeroSection>
      <PopularProductsCard></PopularProductsCard>
      <SkinCareSection></SkinCareSection>
      <TopBrands></TopBrands>
      <Footer></Footer>

    </div>



  )
}