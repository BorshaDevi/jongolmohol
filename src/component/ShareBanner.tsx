import Image from "next/image";

const ShareBanner=()=>{
    return(
       <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
      {/* Image */}
      <Image
        src="/banner.jpg"   // public/banner.jpg
        alt="Share Banner"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <h2 className="text-xl font-semibold">
          Share with friends
        </h2>
        <p className="text-sm opacity-90">
          Invite your friends and earn rewards
        </p>
      </div>
    </div>
    )
}
export default ShareBanner;