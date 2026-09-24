"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [active , setActive] = useState("home")
    const links = <>
        <Link href={"/"}><li onClick={()=>setActive("home")} className={`text-[#131313CC] text-lg cursor-pointer ${active === "home" ? "border border-[#23BE0A] px-7 py-4.5 rounded-lg": ""}`}>Home</li>
        </Link>
        <Link href={"/listedbooks"}> <li onClick={()=>setActive("books")} className={`text-[#131313CC] text-lg cursor-pointer ${active === "books" ? "border border-[#23BE0A] px-7 py-4.5 rounded-lg": ""}`}>Listed Books</li></Link>
        <Link href={"/pages"}><li onClick={()=>setActive("read")} className={`text-[#131313CC] text-lg cursor-pointer ${active === "read" ? "border border-[#23BE0A] px-7 py-4.5 rounded-lg": ""}`}>Pages to Read</li></Link>
    </>
    return (
        <nav className="flex justify-between items-center mt-6">
            <Link href={`/`}><h3 className="text-[#131313] font-bold text-[28px]" onClick={()=>setActive("home")}>Book Vibe</h3></Link>
            <ul className="flex gap-4 items-center">
                {links}
            </ul>
            <div className="space-x-4">
                <button className="text-white font-semibold text-lg px-7 py-4.5 bg-[#23BE0A] rounded-lg">Sign In</button>
                <button className="text-white font-semibold text-lg px-7 py-4.5 bg-[#59C6D2] rounded-lg">Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;