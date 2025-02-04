'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import { Product } from "@/types"; // Assuming you have a Product type defined

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Handle removing an item from the cart
  const handleRemoveItem = (productId: string) => {
    const updatedCart = cart.filter(item => item._id !== productId);
    setCart(updatedCart);
    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Cart Item Count
   const cartItemCount = cart.length;

  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center py-4 mx-32">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        {/* Cart Button with Item Count */}
        <button className="bg-cyan-600 text-white py-2 px-6 rounded-full flex items-center gap-2">
          <span>Cart</span>
          <span className="bg-white text-cyan-600 px-3 py-1 rounded-full">{cartItemCount}</span>
        </button>
      </div>

      <div className="md:flex justify-center my-16 gap-32">
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-xl text-center md:text-left mb-10">Bag</h3>
          <div>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((post) => (
                <div key={post._id}>
                    <div className="sm:flex">
                      <div className="flex justify-center md:justify-start">
                  <Link href={`/posts/${post._id}`}>
                        <Image
                          src={post.image_url}
                          alt={post.title}
                          width={180}
                          height={180}
                          className="rounded"
                        />
                  </Link>
                      </div>
                      <div className="md:ml-5">
                        <h3 className="text-slate-700 mb-8 mt-2">{post.title}</h3>
                        <span className="text-slate-400">
                          <p className="mb-2">Ashen Slate/Cobalt Bliss</p>
                          <p className="">
                            <span>{post.size}</span>
                            <span className="sm:ml-12 md:ml-0">Quantity 1</span>
                          </p>
                        </span>
                        <p className="flex justify-center md:justify-start text-black text-2xl gap-4 mt-8 mb-3">
                          <FaRegHeart />
                          <AiOutlineDelete
                            onClick={() => handleRemoveItem(post._id)}
                            className="cursor-pointer"
                          />
                        </p>
                      </div>
                      <span className="mt-4 md:ml-52 ml-4">MRP:${post.price}</span>
                    </div>
                    <hr className="my-10" />
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-7">Summary</h3>
            <p className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>
                ${cart.reduce((total, item) => total + item.price, 0)}.00
              </span>
            </p>
            <p className="flex justify-between">
              <span className="mr-6">Estimated Delivery and Handling</span> <span>Free</span>
            </p>
            <p className="border-t-2 border-b-2 py-3 flex justify-between">
              <span>Total</span>
              <span>
                ${cart.reduce((total, item) => total + item.price, 0)}.00
              </span>
            </p>
            <button className="border-2 md:px-20 px-10 py-3 rounded-full mt-6 bg-cyan-600 transition-transform transform hover:scale-105">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}