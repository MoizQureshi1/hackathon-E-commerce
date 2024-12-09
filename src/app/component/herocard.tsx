import Image from "next/image";
import cardchair from "../../../public/images/cardchair.png"
import sleepchair from "../../../public/images/sleepchair.png"
import whitechair2 from "../../../public/images/whitechair2.png"
import onestandchair from "../../../public/images/onestandchair.png"
import orangechair from "../../../public/images/orangechair.png"
import foot3chair from "../../../public/images/foot3chair.png"
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

export default function PinkChairCard (){
    return(
        <>
        <div>
        <div className="flex justify-center my-28">
            <Image src={cardchair} alt="Card Chair" width={500}/>
            <div className="ml-14 mt-5">
                <h2 className="text-indigo-950 text-4xl font-bold ">Library Stool <br /> Chair</h2>
                <p className="border-2 bg-cyan-600 p-1 rounded-2xl mr-96 text-center text-white mt-4">$20.00 USD</p>
                <p className=" border-t-2 mt-7 pt-8 text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing <br />elit. Eum temporibus modi dignissimos fugiat sint <br />provident cum laboriosam minus placeat.</p>
                <button className="flex border-2 border-indigo-950 p-2 px-3 bg-cyan-600 text-white my-6 transition-transform transform hover:scale-105"><LuShoppingCart className="mr-1 text-xl"/>Add to Card</button>
            </div>
        </div>
        <div>
            <div className="flex justify-around gap-96 mr-40">
                <h2 className="text-3xl font-bold text-center md:text-left md:ml-36 mb-7 mt-2 mr-44">FEATURED PRODUCTS</h2>
                <button className="border-b-2 mb-7 mt-3 border-black font-bold">View all</button>
            </div>
            <div className="flex justify-around mx-36 mb-24">
                <div className="transition-transform transform hover:scale-105">
                    <Link href="pinkchaircard">
                        <Image src={sleepchair} alt="Pink Chair" width={180} height={500} className="rounded-t-lg"/>
                        <div className="flex justify-between">
                                <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">Library Stool Chair</p>
                                <p className="text-black-400 pt-2 font-semibold text-lg">$20</p>
                        </div>
                    </Link>
                </div>
                <div className="transition-transform transform hover:scale-105">
                    <Link href="pinkchaircard">
                        <Image src={whitechair2} alt="Pink Chair" width={180} height={500} className="rounded-t-lg"/>
                        <div className="flex justify-between">
                                <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">Library Stool Chair</p>
                                <p className="text-black-400 pt-2 font-semibold text-lg">$20</p>
                        </div>
                    </Link>
                </div>
                <div className="transition-transform transform hover:scale-105">
                    <Link href="pinkchaircard">
                        <Image src={onestandchair} alt="Pink Chair" width={180} height={500} className="rounded-t-lg"/>
                        <div className="flex justify-between">
                                <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">Library Stool Chair</p>
                                <p className="text-black-400 pt-2 font-semibold text-lg">$20</p>
                        </div>
                    </Link>
                </div>
                <div className="transition-transform transform hover:scale-105">
                    <Link href="pinkchaircard">
                        <Image src={orangechair} alt="Pink Chair" width={180} height={500} className="rounded-t-lg"/>
                        <div className="flex justify-between">
                                <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">Library Stool Chair</p>
                                <p className="text-black-400 pt-2 font-semibold text-lg">$20</p>
                        </div>
                    </Link>
                </div>
                <div className="transition-transform transform hover:scale-105">
                    <Link href="pinkchaircard">
                        <Image src={foot3chair} alt="Pink Chair" width={180} height={500} className="rounded-t-lg"/>
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