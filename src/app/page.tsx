import Bannar from "@/component/Bannar";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";


export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <Navbar></Navbar>
      <Bannar></Bannar>
      <Footer></Footer>
      
    </div>
  );
}
