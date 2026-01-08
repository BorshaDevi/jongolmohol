import { GiFruitBowl } from "react-icons/gi";
import { GiFlatfish } from "react-icons/gi";
import { GiCoconuts } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
const WhatWeOffer=()=>{
    return(
        <div>
           <div className="bg-white opacity-90 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          What We Offer
        </h2>
        <p className="mt-4 text-black max-w-2xl mx-auto text-xl">
          We deliver fresh, healthy, and quality food items directly to your
          doorstep.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-cyan-100
                         hover:shadow-lg transition duration-300"
            >
              <div className={`text-4xl mb-4 text-center flex justify-center items-center ${item.title==='Fresh Fruits'?'text-rose-300': ''} ${item.title==='Fresh Fish'?'text-blue-300': ''}  ${item.title==='Nuts & Dry Fruits'?'text-orange-900': ''}  ${item.title==='Fresh Vegetables'?'text-green-300': ''}`}>{item.icon}</div>
              <h3 className="text-xl font-semibold ">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
        </div>
    )
}
export default WhatWeOffer;
const offers = [
  {
    icon: <GiFlatfish />,
    title: "Fresh Fish",
    description:
      "Fresh and hygienically processed fish collected from trusted local markets.",
  },
  {
    icon: <LuLeafyGreen />,
    title: "Fresh Vegetables",
    description:
      "Daily fresh vegetables sourced directly from farmers for better quality.",
  },
  {
    icon: <GiFruitBowl />,
    title: "Fresh Fruits",
    description:
      "Seasonal and premium quality fruits selected with care and freshness.",
  },
  {
    icon: <GiCoconuts />,
    title: "Nuts & Dry Fruits",
    description:
      "High-quality nuts and dry fruits packed safely to maintain nutrition.",
  },
];