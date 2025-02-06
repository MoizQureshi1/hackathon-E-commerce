'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: string;
  badge: string;
  image_url: string;
  category: { _id: string; title: string };
  description: string;
  inventory: number;
  tags: string[];
}

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

  const cartItemCount = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center py-4 mx-32">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
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
              cart.map((post, index) => (
                <div key={`${post._id}-${index}`}>
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
            <p className="flex justify-between my-5">
              <span className="mr-6">Estimated Delivery and Handling</span> <span>Free</span>
            </p>
            <p className="border-t-2 border-b-2 py-4 flex justify-between">
              <span>Total</span>
              <span>
                ${cart.reduce((total, item) => total + item.price, 0)}.00
              </span>
            </p>
            <div className="mt-8 transition-transform transform hover:scale-105">
              <Link
                href={{
                  pathname: "/checkout", 
                  query: { cart: JSON.stringify(cart), totalPrice: totalPrice.toString() },
                }}
                className="border-2 md:px-20 px-10 py-3 rounded-full bg-cyan-600 transition-transform transform hover:scale-105"
              >
                Member Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
