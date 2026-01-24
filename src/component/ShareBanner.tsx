import Image from "next/image";

type shareBannerTypes={
    title:string,
    text:string,
}

const ShareBanner=({title,text}:shareBannerTypes)=>{
    return(
         <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner.jpg"
        alt="Share Banner"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
        <h1 className="text-2xl font-semibold">
          {title}
        </h1>
        <p className="mt-2  opacity-90 max-w-xs text-xl">
          {text}
        </p>
      </div>
    </div>
    )
}
export default ShareBanner;