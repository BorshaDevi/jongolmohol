
import Image from "next/image";
const Bannar = () => {
  return (
    <div>
      <div className="bg-white opacity-85 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              <span className="text-green-800">Eat Fresh. </span ><span className="text-green-700">Stay </span> <span className="text-orange-700"> Healthy.</span> <span className="text-orange-600">Live Better.</span>
            </h1>

            <p className="mt-5 text-black text-xl">
              Daily fresh fish, vegetables, fruits & premium nuts delivered at your doorstep.
            </p>

            <button className="mt-7 bg-green-900 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            
            <Image
              src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1767202374/freepik__talk__35170_yobdbu.jpg"
              alt="Fresh Food"
              width={600}
              height={500}
              className="object-contain rounded-md"
              priority
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bannar;