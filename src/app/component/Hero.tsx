import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import chair from "../../../public/images/chair.png"
import Link from "next/link";

export default function Hero (){
    return(
        <>
        <main className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row zjustify-around bg-slate-100 lg:mx-44 md:mx-20 md:pl-10 pt-16 py-11 lg:pl-20 rounded-md">
                <div className="flex justify-center">
                <Image src={chair} alt="chair" width={400} height={500} className="block md:hidden"/>
                </div>
                <div className="text-indigo-950 mt-14 md:mt-10 text-center md:text-left">
                    <h4 className="text-sm font-semibold mb-5">WELCOME TO CHAIRY</h4>
                    <h1 className="text-5xl font-bold pb-10">Best Furniture <br /> Collection For Your <br /> Interior.</h1>
                    <Link href="heroChairItem" className="flex justify-center md:justify-start"> <button className="flex text-sm font-semibold py-3 px-7 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition-transform transform hover:scale-105">Shop Now <GoArrowRight className="text-xl mt-0.5 ml-4"/></button></Link>
                </div>
                <Image src={chair} alt="chair" width={400} height={500} className="hidden md:block "/>
            </div>
        </main>
        </>
    )
}