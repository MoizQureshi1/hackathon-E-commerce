import Image from "next/image"
import { FaRegHeart } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai"
import Link from "next/link"

export default function ShopPage(){

    const posts = [{
        name: "orange-chair",
        title: "Library Stool Chair",
        MRP: "MRP: $99",
        para: "Ashen Slate / Cobalt Bliss",
        size: "Size L",
        quantity:"Quantity 1",
        imageURL: "/images/orangechair.png",
    },
    {
        name: "new-wing-chair",
        title: "Library Stool Chair",
        MRP: "MRP: $99",
        para: "Ashen Slate / Cobalt Bliss",
        size: "Size L",
        quantity:"Quantity 1",
        imageURL: "/images/wingerchair.png",
    }]


    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
            <div className="md:flex justify-center my-16">
                <div className="md:mx-24 text-center sm:text-left">
                    <h3 className="font-bold text-xl text-center md:text-left mb-10">Bag</h3>
                    <div>
                        {posts.map((post) => (
                        <div key={post.name}>
                        <Link  href={`/posts/${post.name}`}>
                        <div className="sm:flex transition-transform transform hover:scale-105">
                            <div className="flex justify-center md:justify-start">
                            <Image src={post.imageURL} alt={post.para} width={180} height={0}/>
                            </div>
                            <div className="md:ml-5">
                                <h3 className="text-slate-700 mb-8 mt-2">{post.title}</h3>
                                <span className="text-slate-400">
                                    <p className="mb-2">{post.para}</p>
                                    <p className=""><span>{post.size}</span> <span className="sm:ml-12">{post.quantity}</span></p>
                                </span>
                                <p className="flex justify-center md:justify-start text-black text-2xl gap-4 mt-8 mb-3"><FaRegHeart /> <AiOutlineDelete /></p>
                            </div>
                            <span className="mt-4 md:ml-52 ml-4">{post.MRP}</span>
                        </div>
                        <hr className="my-10 "/>
                        </Link>
                        </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="mt-24 md:ml-20 mx-10">
                        <h3 className="text-xl font-bold mb-7">Summary</h3>
                        <p className="flex justify-between mb-3"><span>Subtotal</span> <span>$198.00</span></p>
                        <p className="flex justify-between"><span className="mr-6">Estimated Delivery and Handling</span> <span>Free</span></p>
                        <p className="border-t-2 border-b-2 py-3 flex justify-between"><span>Total</span> <span>$198.00</span></p>
                        <button className="border-2 md:px-20 px-10 py-3 rounded-full mt-6 bg-cyan-600 transition-transform transform hover:scale-105">Member Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}