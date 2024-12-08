import Image from "next/image";
import whitechair from "../../../public/images/whitechair.png"
import pinkchair from "../../../public/images/pinkchair.png"
import orangechair from "../../../public/images/orangechair.png"
import whitesofa from "../../../public/images/whitesofa.png"
import foot3chair from "../../../public/images/foot3chair.png"
import text2 from "../../../public/images/text2.png"
import sleepchair from "../../../public/images/sleepchair.png"
import whitechair2 from "../../../public/images/whitechair2.png"
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

export default function Products (){
    return(
        <>
        <div className=" mb-20 max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 mt-32">Our Products</h2>
            <div className="flex flex-col md:flex-row gap-20 md:mx-36 mx-20 mt-10">
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={whitechair} alt="White Chair" width={230} height={500} className="rounded-t-lg"/>
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
                    <Image src={pinkchair} alt="Pimk Chair" width={230} height={500} className="rounded-t-lg"/>
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
                    <Image src={orangechair} alt="Orange Chair" width={230} height={500} className="rounded-t-lg"/>
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
                    <Image src={whitesofa} alt="White Sofa" width={230} height={500} className="rounded-t-lg"/>
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
            <div className="flex flex-col md:flex-row gap-20 md:mx-36 mx-20 mt-10">
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={foot3chair} alt="3 Foot Chair" width={230} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                    <span>
                    <p className="pt-2 text-md font-semibold">Library Stool Chair</p>
                    <p className="text-black pt-2 font-semibold text-lg">$20 </p>
                    </span>
                    <span className="p-1 my-4 bg-slate-100 rounded-md">
                    <LuShoppingCart className="text-4xl pt-2 pb-2 sm:mr-80 md:mr-0"/>
                    </span>
                    </div>
                </a>
                </div>
                <div className="transition-transform transform hover:scale-105">
                <a href="#" target="blank">
                    <Image src={text2} alt="Text 2 Chair" width={230} height={500} className="rounded-t-lg"/>
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
                    <Image src={whitechair2} alt="White Chair" width={230} height={500} className="rounded-t-lg"/>
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
        </div>
        </>
    )
}