import Image from "next/image";
import whitechair2 from "../../../public/images/whitechair2.png"
import onestandchair from "../../../public/images/onestandchair.png"
import orangechair from "../../../public/images/orangechair.png"
import sleepchair from "../../../public/images/sleepchair.png"
import whitesofa from "../../../public/images/whitesofa.png"
import foot3chair from "../../../public/images/foot3chair.png"
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

export default function PinkChairCard (){
    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center my-28 mx-20 md:mx-8 lg:mx-0">
            <Image src={whitesofa} alt="Card Chair" width={450} className="rounded-lg "/>
            <div className="md:ml-14 mt-5">
                <h2 className="text-indigo-950 text-4xl font-bold ">Library Stool <br /> Chair</h2>
                <p className="border-2 bg-cyan-600 p-1 rounded-2xl md:mr-96 text-center text-white mt-4">$20.00 USD</p>
                <p className=" border-t-2 mt-7 pt-8 text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing <br />elit. Eum temporibus modi dignissimos fugiat sint <br />provident cum laboriosam minus placeat.</p>
                <button className="flex border-2 border-indigo-950 p-2 px-3 bg-cyan-600 text-white my-6 transition-transform transform hover:scale-105"><LuShoppingCart className="mr-1 text-xl"/>Add to Card</button>
            </div>
        </div>
        <div>
            <div className="flex justify-center md:justify-around mr-14 sm:mr-0 gap-4 sm:gap-14 lg:gap-96 lg:mr-40">
                <h2 className="text-3xl font-bold text-center md:text-left lg:ml-36 mb-7 mt-2 lg:mr-44">FEATURED PRODUCTS</h2>
                <button className="border-b-2 mb-7 mt-3 border-black font-bold">View all</button>
            </div>
            <div className="flex flex-col md:flex-row justify-around gap-11 lg:mx-36 md:mx-16 mb-24">
                <div className="flex justify-center transition-transform transform hover:scale-105">
                    <Link href="plasticChairItem">
                        <Image src={sleepchair} alt="Sleep Chair" width={180} height={500} className="rounded-t-lg"/>
                        <div className="flex justify-between">
                                <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">Library Stool Chair</p>
                                <p className="text-black-400 pt-2 font-semibold text-lg">$20</p>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center transition-transform transform hover:scale-105">
                    <Link href="whiteChairItem">
                        <Image src={whitechair2} alt="White Chair" width={180} height={500} className="rounded-t-lg"/>
                        <div className="flex justify-between">
                                <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">Library Stool Chair</p>
                                <p className="text-black-400 pt-2 font-semibold text-lg">$20</p>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center transition-transform transform hover:scale-105">
                    <Link href="standChairItem">
                        <Image src={onestandchair} alt="One Stand Chair" width={180} height={500} className="rounded-t-lg"/>
                        <div className="flex justify-between">
                                <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">Library Stool Chair</p>
                                <p className="text-black-400 pt-2 font-semibold text-lg">$20</p>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center transition-transform transform hover:scale-105">
                    <Link href="orangeChairItem">
                        <Image src={orangechair} alt="Orange Chair" width={180} height={500} className="rounded-t-lg"/>
                        <div className="flex justify-between">
                                <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">Library Stool Chair</p>
                                <p className="text-black-400 pt-2 font-semibold text-lg">$20</p>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center transition-transform transform hover:scale-105">
                    <Link href="styleChairItem">
                        <Image src={foot3chair} alt="3 Foot Chair" width={180} height={500} className="rounded-t-lg"/>
                        <div className="flex justify-between">
                                <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">Library Stool Chair</p>
                                <p className="text-black-400 pt-2 font-semibold text-lg">$20</p>
                        </div>
                    </Link>
                </div>
            </div>    
        </div>
        </div>
        </>
    )
}