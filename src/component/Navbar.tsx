import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="max-w-full h-max">
            <div>
                <div className=" bg-white p-4">
                    <div className="ml-20 mr-10">
                        <div className="flex justify-between items-center">
                            <Link href='/'><h1 className="text-2xl font-bold uppercase "> <span className="text-green-600">Jong</span><span className="text-orange-600 opacity-75">olm</span><span className="text-orange-600 opacity-70">ohol</span></h1></Link>
                            {/* Desktop */}
                            <div >
                                <NavigationMenu className="text-xl font-semibold">
                                    <NavigationMenuList >
                                        <NavigationMenuItem>
                                        <Link href='/about'><h2>About</h2></Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="text-xl font-semibold">All Departments</NavigationMenuTrigger>
                                            <NavigationMenuContent className="bg-white opacity-85 ">
                                                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                    <Link href='/nuts'><li>Nuts</li></Link>
                                                    <Link href='/fish'><li>Fish</li></Link>
                                                    <Link href='/fruit'><li>Fruit</li></Link>
                                                    <Link href='/vegetables'><li>Vegetables</li></Link>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                        <Link href='/blog'><h2>Blog</h2></Link>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>


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