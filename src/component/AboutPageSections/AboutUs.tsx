const AboutUs=()=>{
    return(
        <div>
             <div className="bg-white opacity-90 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Delivering fresh fish, vegetables, fruits, and nuts directly from trusted sources to your doorstep.
          </p>

          <button className="bg-green-900 text-white rounded-md text-xl font-semibold p-3 hover:bg-green-700">
            Shop Fresh Products
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1767275850/408645018_e4f72981-ae5c-4248-b859-1bce1dd3e773_yqtvab.jpg"
            alt="Fresh food"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
        </div>
    )
}
export default AboutUs;