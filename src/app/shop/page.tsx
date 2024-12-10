import Image from "next/image"
import orangechair from "../../../public/images/orangechair.png"
import foot3chair from "../../../public/images/foot3chair.png"
import { FaRegHeart } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai"
import Link from "next/link"

export default function ShopPage(){
    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
            <div className="md:flex justify-center my-20">
                <div className="md:mx-24 text-center sm:text-left">
                    <h3 className="font-bold text-xl text-center md:text-left mb-10">Bag</h3>
                    <div>
                        <Link href="orangechaircard">
                        <div className="sm:flex font-bold transition-transform transform hover:scale-105">
                            <div className="flex justify-center md:justify-start">
                            <Image src={orangechair} alt="Orange Chair" width={180}/>
                            </div>
                            <div className="md:ml-5">
                                <h3 className="text-slate-700 mb-8 mt-2">Library Stool Chair</h3>
                                <span className="text-slate-400">
                                    <p className="mb-2">Ashen Slate / Cobalt Bliss</p>
                                    <p className=""><span>Size L</span> <span className="sm:ml-12">Quuantity 1</span></p>
                                </span>
                                <p className="flex justify-center md:justify-start text-black text-2xl gap-4 mt-8 mb-3"><FaRegHeart /> <AiOutlineDelete /></p>
                            </div>
                            <span className="mt-4 md:ml-52 ml-4">MRP: $99</span>
                        </div>
                        </Link>
                        <hr className="my-10 "/>
                        <Link href="blackchaircard">
                        <div className="sm:flex font-bold transition-transform transform hover:scale-105">
                            <div className="flex justify-center md:justify-start">
                            <Image src={foot3chair} alt="3 Foot Chair" width={180}/>
                            </div>
                            <div className="md:ml-5">
                                <h3 className="text-slate-700 mb-8 mt-2">Library Stool Chair</h3>
                                <span className="text-slate-400">
                                    <p className="mb-2">Ashen Slate / Cobalt Bliss</p>
                                    <p className=""><span>Size L</span> <span className="sm:ml-12">Quuantity 1</span></p>
                                </span>
                                <p className="flex justify-center md:justify-start text-black text-2xl gap-4 mt-8 mb-3"><FaRegHeart /> <AiOutlineDelete /></p>
                            </div>
                            <span className="mt-4 md:ml-52 ml-4">MRP: $99</span>
                        </div>
                        </Link>
                        <hr className="mt-10"/>
                    </div>
                </div>
                <div>
                    <div className="mt-24 md:ml-20 mx-10">
                        <h3 className="text-xl font-bold mb-7">Summary</h3>
                        <p className="flex justify-between mb-3"><span>Subtotal</span> <span className="font-bold">$198.00</span></p>
                        <p className="flex justify-between"><span className="mr-6">Estimated Delivery and Handling</span> <span>Free</span></p>
                        <p className="border-t-2 border-b-2 py-3 flex justify-between"><span>Total</span> <span className="font-bold">$198.00</span></p>
                        <button className="border-2 md:px-20 px-10 py-3 rounded-full mt-6 bg-cyan-600 transition-transform transform hover:scale-105">Member Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}