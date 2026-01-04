import Bannar from "@/component/Bannar";
import Discount from "@/component/Discount";
import FeaturedProducts from "@/component/FeaturedProducts";
import CustomerReview from "@/component/Review";
import ShopByCategory from "@/component/ShopByCategory";
import WhyChooseUs from "@/component/WhyChooseUs";



export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <Bannar></Bannar>
      <ShopByCategory></ShopByCategory>
      <FeaturedProducts></FeaturedProducts>
      <Discount></Discount>
      <CustomerReview></CustomerReview>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
