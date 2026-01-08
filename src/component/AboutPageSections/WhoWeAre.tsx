const WhoWeAre=()=>{
    return(
        <div>
          <div className="  bg-white opacity-90 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://res.cloudinary.com/dg1okcxsx/image/upload/v1767806746/25019537_2558_ctvb7o.jpg"
            alt="Our team"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Who We Are
          </h2>
          <p className="text-black text-lg mb-4">
            We are a dedicated team passionate about delivering fresh and healthy fish, vegetables, fruits, and nuts directly to your doorstep. Our mission is to make quality food accessible, affordable, and convenient for everyone.
          </p>
          <p className="text-black text-lg">
            From trusted farms and suppliers to careful packaging and fast delivery, we ensure every product reaches you fresh and safe.
          </p>
        </div>

      </div>
    </div>
        </div>
    )
}
export default WhoWeAre;