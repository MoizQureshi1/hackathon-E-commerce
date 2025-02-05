"use client";

import { useState, useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu";
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

export default function Featured() {
  const [CMSFeatured, setCMSFeatured] = useState<Product[]>([]);

  // Fetch the featured products from the Sanity CMS
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const products: Product[] = await client.fetch(
        `*[_type == "products" && "featured" in tags][0..3] {
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
        }`
      );
      setCMSFeatured(products);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    };

    fetchFeaturedProducts();
  }, []);

  // Add product to cart function
  const addToCart = (product: Product) => {
    if (typeof window !== "undefined") {
      // Ensure we're on the client-side
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Add the product to the cart
      cart.push(product);

      // Save it back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Redirect to the cart page using window.location
      window.location.href = "/cart"; // Redirect to cart page
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center md:text-left md:ml-40 mb-7 mt-2 text-[#272343]">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-6 md:mx-40">
        {CMSFeatured.map((feature, index) => (
          <div key={feature._id}>
            <div className="flex justify-center transition-transform transform hover:scale-105">
              <Link href={`/posts/${feature._id}`}>
                <div className="relative">
                  <Image
                    src={feature.image_url}
                    alt={feature.title}
                    width={230}
                    height={400} // Adjust height based on the aspect ratio you prefer
                    className="rounded-t-lg object-cover"
                  />
                  {index === 0 && (
                    <button className="absolute inset-0 text-center text-[#FFFFFF] bg-[#01AD5A] rounded-md mb-48 mt-3 ml-2 mr-40 transition-transform transform hover:scale-105">
                      <span className="text-sm font-medium">{feature.badge}</span>
                    </button>
                  )}
                  {index === 1 && (
                    <button className="absolute inset-0 text-center text-[#FFFFFF] bg-[#01AD5A] rounded-md mb-48 mt-3 ml-2 mr-40 transition-transform transform hover:scale-105">
                      <span className="text-sm font-medium">{feature.badge}</span>
                    </button>
                  )}
                  {index === 3 && (
                    <button className="absolute inset-0 text-center text-[#FFFFFF] bg-[#01AD5A] rounded-md mb-48 mt-3 ml-2 mr-40 transition-transform transform hover:scale-105">
                      <span className="text-sm font-medium">{feature.badge}</span>
                    </button>
                  )}
                </div>
                <div className="flex justify-between text-[#272343]">
                  <span>
                    <p className="pt-2 text-sm font-semibold hover:text-[#029FAE]">
                      {feature.title}
                    </p>
                    <span className="flex">
                      <p className="pt-1.5 mr-0.5 font-semibold text-md">${feature.price}</p>
                      {index === 1 && (
                        <del className="mt-2 text-sm text-[#9A9CAA]">
                          {/* {feature.priceWithoutDiscount} */}
                        </del>
                      )}
                    </span>
                  </span>
                  <button
                    onClick={() => addToCart(feature)} // Add to cart on button click
                    className="p-1 my-4 mb-3 bg-gray-200 hover:bg-[#029FAE] rounded-md"
                  >
                    <LuShoppingCart className="text-4xl pt-2 pb-2" />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}