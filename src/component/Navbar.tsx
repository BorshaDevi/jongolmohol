import Header from "@/component/Header";
import AllDepartments from "./AllDepartments";

const Navbar=()=>{
    return (
        <div>
            <h1 className="font-bold">Navbar</h1>
            <button className="button">Apply</button>
            <div className="flex">
                <AllDepartments></AllDepartments>
                <Header></Header>
            </div>
        </div>
    )
}
export default Navbar;