import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";
import { GiSofa } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";


export default function Navbar (){
    return(
        <header className="border-b-2 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-around bg-indigo-950 text-md text-slate-200 py-2">
                <p className="flex justify-center md:justify-start"><TiTick className="text-2xl mr-1"/>Free Shipping ON All Order Over $50</p>
                <div className="flex justify-center md:justify-start gap-4 ">
                    <select className="bg-indigo-950">
                        <option>Eng</option>
                        <option>......</option>
                        <option>......</option>
                        <option>......</option>
                        <option>Other</option>
                    </select>
                    <Link href="page" className="hover:underline">Faqs</Link>
                    <Link href="page"className="flex hover:underline"><BiErrorCircle className="mt-1 mr-1"/>Need Help</Link>
                </div>
            </div>
            <div className="flex justify-around bg-fuchsia-100">
                <h2 className="flex md:mr-48 text-indigo-950 text-3xl font-medium my-3"><GiSofa className="text-cyan-500 text-5xl mr-1"/><span className="mt-2">Comforty</span></h2>
                <Link href="cart" className="flex md:ml-40 bg-white rounded-xl text-indigo-950 font-medium py-3 px-5 my-3 transition-transform transform hover:scale-105"><LuShoppingCart className="mr-2 text-xl"/>Cart<PiNumberCircleTwoFill className="text-xl ml-2"/></Link>
            </div>
            <div className="flex justify-around text-gray-400 font-semibold lg:gap-36 sm:mt-6">
                <div className="hidden sm:block">
                <ul className="flex gap-6">
                    <li className="hover:text-cyan-500  transition-transform transform hover:scale-105"><Link href="">Home</Link></li>
                    <li className="hover:text-cyan-500  transition-transform transform hover:scale-105"><Link href="shop">Shop</Link></li>
                    <li className="hover:text-cyan-500  transition-transform transform hover:scale-105"><Link href="products">Products</Link></li>
                    <li className="hover:text-cyan-500  transition-transform transform hover:scale-105"><Link href="page">Pages</Link></li>
                    <li className="hover:text-cyan-500  transition-transform transform hover:scale-105"><Link href="about">About</Link></li>
                </ul>
                </div>
                <p className="hidden sm:block">Contact: <span className="text-gray-900">(808) 555-0111</span></p>
            </div>
            <Sheet>
                <div className="flex justify-around my-3">
                <SheetTrigger className="block sm:hidden text-3xl bg-white"><HiOutlineBars3CenterLeft /></SheetTrigger>
                <p className="block sm:hidden text-gray-400 font-semibold mt-1.5">Contact: <span className="text-gray-900">(808) 555-0111</span></p>
                </div>
                <SheetContent>
                <h2 className="flex text-indigo-950 text-3xl font-medium mt-6"><GiSofa className="text-cyan-500 text-5xl mr-1"/><span className="mt-2">Comforty</span></h2>
                <ul>
                    <li className="my-4"><Link href="">Home</Link></li>
                    <li className="my-4"><Link href="shop">Shop</Link></li>
                    <li className="my-4"><Link href="products">Products</Link></li>
                    <li className="my-4"><Link href="page">Pages</Link></li>
                    <li className="my-4"><Link href="about">About</Link></li>
                </ul>
                </SheetContent>
            </Sheet>
        </header>
    )
}