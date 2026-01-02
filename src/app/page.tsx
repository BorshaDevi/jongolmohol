import Bannar from "@/component/Bannar";
import Discount from "@/component/Discount";
import FeaturedProducts from "@/component/FeaturedProducts";
import ShopByCategory from "@/component/ShopByCategory";
import WhyChooseUs from "@/component/WhyChooseUs";



export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <Bannar></Bannar>
      <ShopByCategory></ShopByCategory>
      <FeaturedProducts></FeaturedProducts>
      <Discount></Discount>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
