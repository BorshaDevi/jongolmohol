import Header from "@/component/Header";
import AllDepartments from "./AllDepartments";

const Navbar=()=>{
    return (
        <div>
            <div className="flex gap-2 ">
                <AllDepartments></AllDepartments>
                <Header></Header>
            </div>
        </div>
    )
}
export default Navbar;