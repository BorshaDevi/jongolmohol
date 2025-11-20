import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-white w-full h-max p-4 shadow-md rounded-sm">
            <div >
                <div className="">
                    <div className="space-x-4 text-center text-xl font-bold text-black">
                        <Link href='/'>Home</Link>
                        <Link href='/about'>About us</Link>
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