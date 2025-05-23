import { client } from "../sanity/lib/client";
import text from "../../public/images/text.png"
import Link from "next/link";
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

export default async function Gallery() {
  const CMSGellery: Product[] = await client.fetch(`
    *[_type == "products" && "gallery" in tags] {
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
  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log(CMSGellery);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center mx-6 mt-28 lg:mr-20 gap-4">
        {/* Left Side Image */}
        <div className="flex justify-center w-full md:w-1/2">
        <Image src={text} alt="text" width={40}/>
          {CMSGellery[0] && (
            <Link href={`/posts/${CMSGellery[0]._id}`}>
                <Image
                  src={CMSGellery[0].image_url}
                  alt={CMSGellery[0].title}
                  height={500}
                  width={500}
                  className="rounded-xl transition-transform transform hover:scale-105"
                />
            </Link>
          )}
        </div>

        {/* Right Side Images Grid */}
        <div className="grid grid-cols-2 gap-4 md:w-1/1 mt-5 md:mt-0">
          {CMSGellery.slice(1, 5).map((feature,) => (
            <div key={feature._id}>
              <Link href={`/posts/${feature._id}`}>
                  <Image
                    src={feature.image_url}
                    alt={feature.title}
                    width={240}
                    height={240}
                    className="rounded-lg transition-transform transform hover:scale-105"
                  />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}