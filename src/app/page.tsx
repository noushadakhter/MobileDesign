import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import FeaturedProduct from "./Components/FeaturedProduct";


export default function Home() {
  return (
   <div>
    <HeroSection />
    <FeaturedProduct />
   </div>
  );
}
