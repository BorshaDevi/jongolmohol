import { ReactNode } from "react";
import Footer from '@/component/Footer'
import AllDepartments from "@/component/AllDepartments";
import Header from "@/component/Header";
const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="flex gap-2">
                <AllDepartments></AllDepartments>
                <Header></Header>
            </div>
            {children}
            <Footer></Footer>
        </div>
    )
}
export default Layout;