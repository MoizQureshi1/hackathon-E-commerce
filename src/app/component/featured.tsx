import Image from "next/image";
import whitechair from "../../../public/images/whitechair.png"
import pinkchair from "../../../public/images/pinkchair.png"
import orangechair from "../../../public/images/orangechair.png"
import whitesofa from "../../../public/images/whitesofa.png"
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

export default function Featured (){
    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center md:text-left md:ml-36 mb-7 mt-2">Featured Products</h2>
            <div className="flex flex-col md:flex-row gap-20 md:mx-36 mx-16">
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={whitechair} alt="White Chair" width={230} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20 </p>
                    </span>
                    <span className="p-1 my-4 bg-cyan-500 rounded-md mr-6 sm:mr-80 md:mr-0">
                    <LuShoppingCart className="text-4xl pt-2 pb-2"/>
                    </span>
                    </div>
                </a>
                </div>
                <div className="transition-transform transform hover:scale-105">
                <Link href="pinkchaircard">
                    <Image src={pinkchair} alt="Pink Chair" width={230} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black-400 pt-2 font-semibold text-lg">$20 <del className="text-slate-400"> $30</del></p>
                    </span>
                    <span className="p-1 my-4 bg-slate-100 rounded-md mr-6 sm:mr-80 md:mr-0">
                    <LuShoppingCart className="text-4xl pt-2 pb-2"/>
                    </span>
                    </div>
                </Link>
                </div>
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={orangechair} alt="Orange Chair" width={230} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20</p>
                    </span>
                    <span className="p-1 my-4 bg-slate-100 rounded-md mr-6 sm:mr-80 md:mr-0">
                    <LuShoppingCart className="text-4xl pt-2 pb-2"/>
                    </span>
                    </div>
                </a>
                </div>
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={whitesofa} alt="White Sofa" width={230} height={500} className="rounded-t-lg"/>
                   <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20</p>
                    </span>
                    <span className="p-1 my-4 bg-slate-100 rounded-md mr-6 sm:mr-80 md:mr-0">
                    <LuShoppingCart className="text-4xl pt-2 pb-2"/>
                    </span>
                    </div>
                </a>
                </div>
            </div>
        </div>
        </>
    )
}
