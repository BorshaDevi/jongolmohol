import { Truck, Leaf, ShieldCheck, ThumbsUp } from "lucide-react";
const WhyChooseUs=()=>{
    return(
        <div className="mt-10">
             <div className="py-14">
                
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10 underline-offset-auto underline">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center hover:mb-5">
          <Leaf className="mx-auto text-green-600 w-12 h-12" />
          <h3 className="text-2xl font-extrabold mt-4">Fresh Products</h3>
          <p className="text-black mt-2">
            Fresh fish & vegetables directly from market.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center hover:mb-5">
          <ShieldCheck className="mx-auto text-green-600 w-12 h-12" />
          <h3 className="text-2xl font-extrabold mt-4">Hygienic Packing</h3>
          <p className="text-black mt-2">
            Clean and safe packaging for every order.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center hover:mb-5">
          <Truck className="mx-auto text-green-600 w-12 h-12" />
          <h3 className="text-2xl font-extrabold mt-4">Fast Delivery</h3>
          <p className="text-black mt-2">
            Quick delivery at your doorstep.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center hover:mb-5">
          <ThumbsUp className="mx-auto text-green-600 w-12 h-12" />
          <h3 className="text-2xl font-extrabold mt-4">Best Quality</h3>
          <p className="text-black mt-2">
            Trusted by hundreds of happy customers.
          </p>
        </div>

      </div>
             </div>
        </div>
    )
}
export default WhyChooseUs;