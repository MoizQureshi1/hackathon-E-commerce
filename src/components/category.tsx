import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Categories {
  _id: string;
  title: string;
  image_url: string; // Image field is an object (of type ImageAsset)
  products: number;
}

export default async function Category() {
  // Fetch categories from Sanity CMS
  const CMSCategory: Categories[] = await client.fetch(`
    *[_type == "categories"]{
        _id,
        title,
         "image_url": image.asset->url,
        products
      }
  `);
  const CMSGellery: Categories[] = await client.fetch(`
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

  // Log categories to check the fetched data
  console.log(CMSCategory);
  console.log(CMSGellery);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold md:ml-40 text-center md:text-left mb-6 mt-20 text-[#272343]">
          Top Categories
        </h2>
        <Link href="products">
        <div className="flex flex-col md:flex-row justify-center mx-6 md:mx-3 lg:mx-0 gap-5 lg:gap-10">
          {CMSCategory.map((category) => (
            <div className="flex justify-center relative transition-transform transform hover:scale-105" key={category._id}>
              {/* Display image directly */}
              <Image
                src={category.image_url} // Use urlFor to get the image URL
                alt={category.title}
                className="w-80 h-80 rounded-lg object-cover "
                width={320} // Set the width and height manually
                height={320}
              />
                <div className="absolute inset-0 flex flex-col text-[#FFFFFF] bg-black bg-opacity-70 mt-64 rounded-b-lg px-3 py-2">
                  <span className="text-lg font-medium">{category.title}</span>
                  <span className="text-sm text-slate-300">{category.products}</span>
                </div>
            </div>
          ))}
        </div>
        </Link>
      </div>
    </>
  );
}