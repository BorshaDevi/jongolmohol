'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import AllDepartments from "./AllDepartments";


const Header = () => {
    const [open, setOpen] = useState(false)
    console.log(open)
    useEffect(()=>{
        const saved=localStorage.getItem('menuOpen')
        if(saved==='true')
        {
            setOpen(true)
        } else setOpen(false)
    },[])
    const handleOpenBar = () => {
        const newValue=!open
        setOpen(newValue)
        localStorage.setItem('menuOpen', newValue.toString())   
    }
    return (
        <div className="bg-white max-w-7xl mx-auto h-max p-4 shadow-md rounded-sm ">
            <div >
                <div className="w-full flex justify-between px-5 gap-6 md:gap-0">
                    <div className="flex gap-2 text-start">
                        <HiBars3 onClick={handleOpenBar} className="text-2xl mt-1 md:hidden flex " />
                        {open ? '' : <h1 className="uppercase text-xl font-bold text-start md:hidden flex "><span className="text-green-800">jongol</span><span className="text-orange-500">mohol</span></h1>}
                    </div>
                    <div className="space-x-4 md:text-center  text-xl font-bold  text-black">
                        <Link href='/about'>About</Link>
                        <Link href=''>Blog</Link>
                    </div>
                    <div className="  text-xl">
                        Login
                    </div>
                </div>

            </div>
            {open && <AllDepartments open={open} ></AllDepartments>}
        </div>
    )
}
export default Header;