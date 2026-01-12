import { FcShipped } from "react-icons/fc";
import { FcDonate } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
const promises = [
  {
    icon: <FcApproval />,
    title: "Fresh & High-Quality",
    description:
      "We deliver only fresh and high-quality fish, vegetables, fruits, and nuts.",
  },
  {
    icon:<FcServices />,
    title: "Hygienic Handling",
    description:
      "All products are carefully handled and packed safely to ensure hygiene.",
  },
  {
    icon: <FcShipped />,
    title: "Fast Delivery",
    description:
      "We ensure quick and reliable delivery right to your doorstep.",
  },
  {
    icon:<FcDonate />,
    title: "Fair Pricing",
    description:
      "Our pricing is transparent and fair, with no hidden charges.",
  },
  {
    icon: <FcManager />,
    title: "Customer Satisfaction",
    description:
      "Your happiness is our priority. We guarantee complete satisfaction.",
  },
];
const OurPromise=()=>{
    return(
        <div>
               <div className="bg-white opacity-90 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Our Promise
        </h2>
        <p className="mt-4 text-black max-w-2xl mx-auto">
          We are committed to providing fresh, safe, and high-quality products 
          with fast delivery and fair pricing.
        </p>

        {/* Promise Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {promises.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl hover:bg-green-200 hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4 flex justify-center items-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-2 text-black text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>   
        </div>
    )
}
export default OurPromise;

