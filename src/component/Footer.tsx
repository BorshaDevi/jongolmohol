import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";

const Footer=()=>{
    return(
        <div className="">
              <footer className="bg-orange-500 text-white py-5   ">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-8 ml-20">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">Jongolmohol</h2>
          <p className="mt-3  leading-relaxed text-xl">
            Your trusted online store for quality products at the best prices.
            Fast delivery, secure payment & 24/7 support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2  text-xl">
            <li><Link href="/about" className="hover:text-white hover:underline">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white hover:underline">Blog</Link></li>
            
          </ul>
        </div>

        
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>

          <p className=" mb-2 text-xl">
           <span className="flex"><AiOutlineMail className="mt-1 mr-1 text-red-500 "/> Email: yourgmail@gmail.com </span> 
            
          </p>

          <p className=" mb-4 text-xl">
             <span className="flex"><FcPhone className="mt-1 mr-1" /> Phone: 01823333333</span>
          </p>

          {/* Facebook Icon */}
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            className="inline-block mt-2 text-blue-900  text-3xl"
          >
            <FaFacebook  className=""/>
          </a>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-5 text-center text-sm">
        © {new Date().getFullYear()} Jongolmohol. All rights reserved.
      </div>
    </footer>
        </div>
    )
}
export default Footer;