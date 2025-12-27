import Link from "next/link";

const Navbar=()=>{
    return (
        <div className="max-w-full h-max">
            <div>
            <div className=" bg-white p-4"> 
                <div className="ml-20 mr-10">
                    <div className="flex justify-between items-center">
                       <Link href='/'><h1 className="text-2xl font-bold uppercase "> <span className="text-green-600">Jong</span><span className="text-orange-600 opacity-75">olm</span><span className="text-orange-600 opacity-70">ohol</span></h1></Link>
                       {/* Desktop */}
                       <div className="text-xl font-semibold">
                        <Link href='/about'><h2>About</h2></Link>
                        
                       </div>
                       {/* Mobile */}
                       <p>login</p>
                    </div>
                    </div> 
                
            </div>
            </div>
        </div>
    )
}
export default Navbar;