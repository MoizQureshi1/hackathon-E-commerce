import Image from "next/image";
import whitechair2 from "../../../public/images/whitechair2.png"
import { TbBusStop } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import { LiaEnvelopeSolid } from "react-icons/lia";
import { PiFlowerTulip } from "react-icons/pi";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
    _id: string;
    title: string;
    price: string;
    priceWithoutDiscount: string;
    badge: string;
    image_url: string;
    category: { _id: string; title: string };
    description: string;
    inventory: number;
    tags: string[];
  }

export default async function Aboutpage (){


   const CMSAbout: Product[] = await client.fetch(`
        *[_type == "products" && "about" in tags] {
         _id,
         title,
         price,
         priceWithoutDiscount,
         badge,
         "image_url": image.asset->url,
         category->{
           _id,
           title
         },
         description,
         inventory,
         tags,
       }
     `);

     console.log(CMSAbout);


    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center text-center md:text-left gap-8 my-16 mx-10">
                <div className="border-2 bg-[#007580] p-12 px-16">
                    <h2 className="text-white text-3xl font-semibold mb-4">About Us - Comforty</h2>
                    <p className="text-slate-200 font-normal">At Comforty, We believe that the right chair can transform <br />your space and elevate your comfort. Specializing in <br />ergonomic design, premium materials, and modern <br />easthetics, we craft chairs that seamlessly blend style <br />with functionality.</p>
                    <button className="py-4 px-10 mt-28 bg-[#F9F9F926] text-slate-200 transition-transform transform hover:scale-105">View Collection</button>
                </div>
                <div className="flex justify-center">
                <Image src={whitechair2} alt="White Chair" width={480} className=""/>
                </div>
            </div>
            <div className="mx-10">
                <h1 className="text-3xl font-bold text-center my-8 pt-14 text-[#272343]">What Makes Our Brand Different</h1>
                <div className="text-[#007580] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14 lg:mx-24">
                    <div className="flex flex-col  justify-center bg-slate-100 p-5">
                        <TbBusStop className="text-2xl"/>
                        <h2 className="text-xl my-2">Next day as Standard</h2>
                        <p>Order before 3pm and get <br />your the Next day as <br />Standard</p>
                    </div>
                    <div className="flex  flex-col justify-center bg-slate-100 p-5">
                        <SiTicktick className="text-2xl"/>
                        <h2 className="text-xl my-2">Made by true artisans</h2>
                        <p>Handmade Carfted goods <br /> made with real passion and <br />craftmanship</p>
                    </div>
                    <div className="flex  flex-col justify-center bg-slate-100 p-5">
                        <LiaEnvelopeSolid className="text-2xl"/>
                        <h2 className="text-xl my-2">Unbeatable prices</h2>
                        <p>For Our Materials and <br />quality you wont find better <br />prices antwhere</p>
                    </div>
                    <div className="flex  flex-col justify-center bg-slate-100 p-5">
                        <PiFlowerTulip className="text-2xl"/>
                        <h2 className="text-xl my-2">Recycled packaging</h2>
                        <p>We use 100% recycled to <br />ensure our footprint is more <br />manageable</p>
                    </div>
                </div>
            </div>
            <div className="ld:mx-10">
                <h2 className="text-3xl text-center md:text-left font-semibold sm:ml-20 lg:ml-32 my-8 pt-20 text-[#272343]">Our Popular Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-32 lg:mx-28">
                    {CMSAbout.map((feature) => (
                        <div key={feature._id}>
                    <Link href={`/posts/${feature._id}`} className="flex justify-center">
                    <div className="transition-transform transform hover:scale-105 text-[#2A254B]">
                        <Image src={feature.image_url} alt={feature.title} width={500} height={500} className="w-full h-auto object-cover"/>
                        <p className="mt-5 text-slate-600">{feature.title}</p>
                        <span className="mt-5 text-slate-600">${feature.price}.00</span>
                    </div>
                    </Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}