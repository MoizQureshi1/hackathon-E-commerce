import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import whitechair from "../../../public/images/whitechair.png"
import pinkchair from "../../../public/images/pinkchair.png"
import orangechair from "../../../public/images/orangechair.png"
import whitesofa from "../../../public/images/whitesofa.png"
import tablechair from "../../../public/images/tablechair.png"
import text2 from "../../../public/images/text2.png"
import sleepchair from "../../../public/images/sleepchair.png"
import whitechair2 from "../../../public/images/whitesofa.png"
import foot3chair from "../../../public/images/foot3chair.png"
import onestandchair from "../../../public/images/onestandchair.png"
import Link from "next/link";

export default function ProductsPage (){
    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center md:text-left md:ml-36 mb-7 mt-10">All Products</h2>
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
                <a href="#" target="blank">
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
                </a>
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
                    <Image src={whitesofa} alt="White Chair" width={230} height={500} className="rounded-t-lg"/>
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

            <div className="flex flex-col md:flex-row gap-20 md:mx-36 mx-20 mt-10">
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={tablechair} alt="Table Chair" width={230} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20 </p>
                    </span>
                    <span className="p-1 my-4 bg-cyan-500 rounded-md">
                    <LuShoppingCart className="text-4xl pt-2 pb-2 sm:mr-80 md:mr-0"/>
                    </span>
                    </div>
                </a>
                </div>
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={text2} alt="Text Chair" width={230} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black-400 pt-2 font-semibold text-lg">$20 <del className="text-slate-400"> $30</del></p>
                    </span>
                    <span className="p-1 my-4 bg-slate-100 rounded-md">
                    <LuShoppingCart className="text-4xl pt-2 pb-2 sm:mr-80 md:mr-0"/>
                    </span>
                    </div>
                </a>
                </div>
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={sleepchair} alt="Sleeping Chair" width={230} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20</p>
                    </span>
                    <span className="p-1 my-4 bg-slate-100 rounded-md">
                    <LuShoppingCart className="text-4xl pt-2 pb-2 sm:mr-80 md:mr-0"/>
                    </span>
                    </div>
                </a>
                </div>
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={whitechair2} alt="WhiteChair" width={230} height={500} className="rounded-t-lg"/>
                   <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20</p>
                    </span>
                    <span className="p-1 my-4 bg-slate-100 rounded-md">
                    <LuShoppingCart className="text-4xl pt-2 pb-2 sm:mr-80 md:mr-0"/>
                    </span>
                    </div>
                </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-20 md:mx-36 mx-20 mt-10">
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={foot3chair} alt="3 Foot Chair" width={230} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20 </p>
                    </span>
                    <span className="p-1 my-4 bg-cyan-500 rounded-md">
                    <LuShoppingCart className="text-4xl pt-2 pb-2 sm:mr-80 md:mr-0"/>
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
                    <span className="p-1 my-4 bg-slate-100 rounded-md">
                    <LuShoppingCart className="text-4xl pt-2 pb-2 sm:mr-80 md:mr-0"/>
                    </span>
                    </div>
                    </Link>
                </div>
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={orangechair} alt="Orange Cahir" width={230} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20</p>
                    </span>
                    <span className="p-1 my-4 bg-slate-100 rounded-md">
                    <LuShoppingCart className="text-4xl pt-2 pb-2 sm:mr-80 md:mr-0"/>
                    </span>
                    </div>
                </a>
                </div>
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={onestandchair} alt="One Stand Chair" width={230} height={500} className="rounded-t-lg"/>
                   <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20</p>
                    </span>
                    <span className="p-1 my-4 bg-slate-100 rounded-md">
                    <LuShoppingCart className="text-4xl pt-2 pb-2sm:mr-80 md:mr-0"/>
                    </span>
                    </div>
                </a>
                </div>
            </div>

            <div className="flex justify-center bg-slate-100 mt-24 rounded-md">
                <div className="text-black mt-20 mb-24 text-center">
                    <h4 className="text-3xl font-semibold mb-12">Or Subcribe To The Newslatter</h4>
                    <p><input type="text" className=" border-b-2 border-slate-600 bg-slate-100 pb-1 md:pr-48 pr-12 mr-4" placeholder="Email Address..." /><a href="" className="border-b-2 pb-2 px-2 border-slate-600">SUBMIT</a></p>
                    <h1 className="text-4xl font-semibold my-14 mx-5">Follow Products And Discound On Instagram</h1>
                    <div className="flex flex-col md:flex-row gap-5 mx-28">
                        <Image src={tablechair} alt="Table Chair" className=" md:w-36 w-60 rounded-lg"/>
                        <Image src={foot3chair} alt="3 Foot Chair" className=" md:w-36 w-60 rounded-lg"/>
                        <Link href="pinkchaircard"><Image src={pinkchair} alt="Pink Chair" className=" md:w-36 w-60 rounded-lg"/></Link>
                        <Image src={whitechair2} alt="White Chair" className=" md:w-36 w-60 rounded-lg"/>
                        <Image src={orangechair} alt="Orange Chair" className=" md:w-36 w-60 rounded-lg"/>
                        <Image src={onestandchair} alt="One Stand Chair" className=" md:w-36 w-60 rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}