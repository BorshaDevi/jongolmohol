import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-white max-w-full h-max p-4 shadow-md rounded-sm">
            <div >
                <div className="">
                    <div className="md:space-x-4 md:text-center space-x-1 text-xl font-bold text-black">
                        <Link href='/'>Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href=''>Blog</Link>
                    </div>
                    <div className="flex justify-end-safe -mt-7 text-xl">
                        Login
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Header;