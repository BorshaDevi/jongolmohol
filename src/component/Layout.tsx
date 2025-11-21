import { ReactNode } from "react";
import Footer from '@/component/Footer'
import AllDepartments from "@/component/AllDepartments";
import Header from "@/component/Header";
const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {/* / page ar jono */}
            <div>
                <div className="flex justify-around md:justify-normal gap-2 ">
                <AllDepartments></AllDepartments>
                <div>
                    <Header></Header>
                    {children}
                    {/* desktop device */}
                    <div className="hidden md:block">
                  <Footer></Footer>
                    </div>
                </div>
            </div>
            {/* mobile device */}
            <div className="block md:hidden">
                  <Footer></Footer>
                    </div>
            </div>



        </div>
    )
}
export default Layout;