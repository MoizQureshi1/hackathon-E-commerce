import Image from "next/image"
import orangechair from "../../../public/images/orangechair.png"
import foot3chair from "../../../public/images/foot3chair.png"
import { FaRegHeart } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai"

export default function ShopPage(){
    return(
        <>
        <div>
            <div className="flex justify-center my-20">
                <div>
                    <h3 className="font-bold text-xl">Bag</h3>
                    <div>
                        <div className="flex font-bold">
                            <Image src={orangechair} alt="Orange Chair" width={180}/>
                            <div className="ml-5">
                                <h3 className="text-slate-700 mb-8 mt-2">Library Stool Chair</h3>
                                <span className="text-slate-400">
                                    <p className="mb-2">Ashen Slate / Cobalt Bliss</p>
                                    <p className=""><span>Size L</span> <span className="ml-12">Quuantity 1</span></p>
                                </span>
                                <p className="flex text-black text-2xl gap-4 mt-8"><FaRegHeart /> <AiOutlineDelete /></p>
                            </div>
                            <span className="mt-4 ml-52">MRP: $99</span>
                        </div>
                        <hr className="my-10"/>
                        <div className="flex font-bold">
                            <Image src={foot3chair} alt="Orange Chair" width={180}/>
                            <div className="ml-5">
                                <h3 className="text-slate-700 mb-8 mt-2">Library Stool Chair</h3>
                                <span className="text-slate-400">
                                    <p className="mb-2">Ashen Slate / Cobalt Bliss</p>
                                    <p className=""><span>Size L</span> <span className="ml-12">Quuantity 1</span></p>
                                </span>
                                <p className="flex text-black text-2xl gap-4 mt-8"><FaRegHeart /> <AiOutlineDelete /></p>
                            </div>
                            <span className="mt-4 ml-52">MRP: $99</span>
                        </div>
                        <hr className="mt-10"/>
                    </div>
                </div>
                <div>
                    <div className="mt-10 ml-20 ">
                        <h3 className="text-xl font-bold mb-7">Summary</h3>
                        <p className="flex justify-between mb-3"><span>Subtotal</span> <span className="font-bold">$198.00</span></p>
                        <p className=""><span className="mr-6">Estimated Delivery and Handling</span> <span>Free</span></p>
                        <p className="border-t-2 border-b-2 py-3 flex justify-between"><span>Total</span> <span className="font-bold">$198.00</span></p>
                        <button className="border-2 px-20 py-3 rounded-full mt-6 bg-cyan-600 transition-transform transform hover:scale-105">Member Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}