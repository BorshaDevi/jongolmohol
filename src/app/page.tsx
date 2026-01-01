import Bannar from "@/component/Bannar";
import ShopByCategory from "@/component/ShopByCategory";
import WhyChooseUs from "@/component/WhyChooseUs";



export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <Bannar></Bannar>
      <ShopByCategory></ShopByCategory>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
