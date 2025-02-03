import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

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

export default async function InCard() {
  const CMSItem: Product[] = await client.fetch(`
     *[_type == "products" && "featured" in tags][0..4] {
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

  console.log(CMSItem);

return(
    <>
      <div>
            <div className="flex justify-center md:justify-around mr-14 sm:mr-0 gap-4 sm:gap-14 lg:gap-96 lg:mr-40">
              <h2 className="text-3xl font-bold text-center md:text-left lg:ml-36 mb-7 mt-2 lg:mr-44">FEATURED PRODUCTS</h2>
              <button className="border-b-2 mb-7 mt-3 border-black font-bold">View all</button>
            </div>
            <div className="flex flex-col md:flex-row justify-around gap-11 lg:mx-36 md:mx-16 mb-24">
                {CMSItem.map((feature) => (
                <div key={feature._id}>
              <div className="flex justify-center transition-transform transform hover:scale-105">
              <Link href={`/posts/${feature._id}`}>
                  <Image src={feature.image_url} alt={feature.title} width={180} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                      <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">{feature.title}</p>
                      <p className="text-black-400 pt-2 font-semibold text-lg">{feature.price}</p>
                    </div>
                </Link>
              </div>
              </div>
                ))}
            </div>    
          </div>
    </>
)
}