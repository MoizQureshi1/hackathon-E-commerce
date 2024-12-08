import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import chair from "../../../public/images/chair.png"

export default function Hero (){
    return(
        <>
        <main className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-around bg-slate-100 md:mx-44 pt-14 py-11 rounded-md">
                <Image src={chair} alt="chair" width={400} height={500} className="block md:hidden sm:ml-28 md:ml-40 lg:ml-0"/>
                <div className="text-indigo-950 mt-14 text-center md:text-left">
                    <h4 className="text-sm font-semibold mb-5">WELCOME TO CHAIRY</h4>
                    <h1 className="text-5xl font-bold pb-10">Best Furniture <br /> Collection For Your <br /> Interior.</h1>
                    <button className="flex text-sm font-semibold ml-28 sm:ml-60 md:ml-0 py-3 px-7 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition-transform transform hover:scale-105">Shop Now <GoArrowRight className="text-xl mt-0.5 ml-4"/></button>
                </div>
                <Image src={chair} alt="chair" width={400} height={500} className="hidden md:block "/>
            </div>
        </main>
        </>
    )
}