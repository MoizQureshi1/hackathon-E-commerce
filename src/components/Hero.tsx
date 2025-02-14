import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { client } from "../sanity/lib/client";

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

export default async function Hero (){


  const CMSHero:Product[] = await client.fetch(`
          *[_type == "products" && "hero" in tags][0..3] {
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
      `)
  
      console.log(CMSHero)

    return(
        <>
          <main className="max-w-screen-2xl mx-auto">
                  {CMSHero.map((feature) => (
                    <div key={feature._id}>
                  <div className="flex justify-center">   
                    <div className="flex flex-col md:flex-row justify-around bg-[#F0F2F3] lg:mx-44 md:mx-20 md:pl-10 pt-16 py-11 lg:px-20 rounded-md">
                  <div className="block md:hidden">
                    <Image src={feature.image_url} alt={feature.badge} width={800} height={900}/>
                  </div>
                  <div className="text-[#272343] mt-14 text-center md:text-left">
                    <h4 className="text-sm font-semibold mb-5">{feature.badge}</h4>
                    <h1 className="text-5xl font-bold pb-10">{feature.title}</h1>
                      <div className="flex justify-center md:justify-start">
                    <Link href={`/posts/${feature._id}`} className="flex text-sm font-semibold py-3 px-7 rounded-lg bg-[#029FAE] hover:bg-cyan-600 text-white transition-transform transform hover:scale-105">{feature.description}<GoArrowRight className="text-xl mt-0.5 ml-4"/></Link>
                    </div>
                  </div>
                      <div className="hidden md:block">
                     <Image src={feature.image_url} alt="Gray Chair" width={800} height={900}/>
                  </div>
              </div>
            </div>
                </div>
                      ))}
          </main>
        </>
    )
}