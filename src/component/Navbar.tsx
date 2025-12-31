'use client'
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()
    const user = false;

    return (
        <div className="w-full h-max shadow-2xl rounded-md">
            <div>
                <div className=" bg-white p-4">
                    <div className="ml-20 mr-10">
                        <div className="flex justify-between items-center">
                            <Link href='/'><h1 className="text-2xl font-bold uppercase "> <span className="text-green-600">Jong</span><span className="text-orange-600 opacity-75">olm</span><span className="text-orange-600 opacity-70">ohol</span></h1></Link>
                            {/* Desktop */}

                            <div className="md:block hidden" >
                                <NavigationMenu className="text-xl font-semibold">
                                    <NavigationMenuList >
                                        <NavigationMenuItem>
                                            <Link href='/about' className={`text-xl font-semibold hover:underline hover:underline-offset-8 ${pathName === '/about' ? 'text-orange-500' : 'text-black'}`}><h2>About</h2></Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className={`text-xl font-semibold hover:underline hover:underline-offset-8 ${pathName === '/nuts' || pathName === '/fish' || pathName === '/fruit' || pathName === '/vegetables' ? 'text-orange-500' : 'text-black'}`}>All Departments</NavigationMenuTrigger>
                                            <NavigationMenuContent className="bg-white opacity-85 ">
                                                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                    <Link href='/nuts'>
                                                        <li className="text-orange-500 hover:underline hover:underline-offset-8 ">Nuts</li>
                                                        <p className="text-gray-500 ">All types of  Nuts you can get here. </p>
                                                    </Link>

                                                    <Link href='/fish'>
                                                        <li className="text-orange-500 hover:underline hover:underline-offset-8">Fish</li>
                                                        <p className="text-gray-500 ">All types of Fish you can get here. </p>
                                                    </Link>
                                                    <Link href='/fruit'>
                                                        <li className="text-orange-500 hover:underline hover:underline-offset-8"> Fruit</li>
                                                        <p className="text-gray-500 ">All types of Fruit you can get here. </p>
                                                    </Link>
                                                    <Link href='/vegetables'>
                                                        <li className="text-orange-500 hover:underline hover:underline-offset-8">Vegetables</li>
                                                        <p className="text-gray-500 ">All types of Vegetables you can get here. </p>
                                                    </Link>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link href='/blog' className={`text-xl font-semibold hover:underline hover:underline-offset-8 ${pathName === '/blog' ? 'text-orange-500' : 'text-black'}`}><h2>Blog</h2></Link>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>

                            <div className="md:block hidden">
                                {user ?
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <Avatar>
                                                <AvatarFallback className='hover:cursor-pointer'>CN</AvatarFallback>
                                            </Avatar>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="bg-white opacity-85 ">
                                            <div className="grid grid-cols-1 text-xl hover:cursor-pointer">
                                                <Link href='/dashboard' >Dashboard</Link>
                                                <Button className='mt-3 text-xl hover:cursor-pointer'>Logout</Button>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>

                                    : <Link href='/login' className="text-xl text-white font-semibold bg-orange-500 p-2 rounded-md">Join us</Link>}
                            </div>
                            {/* mobile */}
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Navbar;