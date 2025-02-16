"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Footer from "@/components/footer";
import Navbar from "@/components/header";

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
  quantity: number; // Add quantity field for each product
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
      }
    }
  }, []);

  // Increment the quantity of a specific product
  const increment = (productId: string) => {
    setCart(cart.map(item => 
      item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
  };

  // Decrement the quantity of a specific product
  const decrement = (productId: string) => {
    setCart(cart.map(item => 
      item._id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (productId: string) => {
    const updatedCart = cart.filter(item => item._id !== productId);
    setCart(updatedCart);
    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate Subtotal and Total
  const SubTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0); // Update total to account for quantity
  };
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity + 48, 0); // Update total to account for quantity
  };

  const cartItemCount = cart.length;

  return (
    <>
    <Navbar/>
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center py-4 md:mx-28 gap-3 lg:gap-96 lg:ml-72 md:gap-32">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        <button className="bg-cyan-600 text-white py-2 px-6 rounded-full flex items-center gap-2">
          <span>Cart</span>
          <span className="bg-white text-cyan-600 px-3 py-1 rounded-full">{cartItemCount}</span>
        </button>
      </div>

      <h3 className="font-bold text-xl text-center md:text-left md:ml-32 mb-10">Bag</h3>
      <div className="lg:flex justify-center my-16 gap-32">
        <div className="text-center sm:text-left flex justify-center">
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
                    <div className="sm:ml-5">
                      <h3 className="text-slate-700 mb-8 mt-2">{post.title}</h3>
                      <span className="text-slate-400">
                        <p className="mb-2">Ashen Slate/Cobalt Bliss</p>
                        <div className="flex gap-3"> 
                          <span> Quantity : </span> 
                          <button className="bg-red-500  px-1" onClick={() => decrement(post._id)}> 
                            <IoIosArrowBack /> 
                          </button>
                          <h2 className={post.quantity <= 0 ? 'text-red-500' : 'text-slate-400'}>Count: {post.quantity}</h2> 
                          <button className="bg-cyan-600 px-1" onClick={() => increment(post._id)}>
                            <IoIosArrowForward /> 
                          </button> 
                        </div>
                      </span>
                      <p className="flex justify-center md:justify-start text-black text-2xl gap-4 mt-8 mb-3">
                        <FaRegHeart />
                        <AiOutlineDelete
                          onClick={() => handleRemoveItem(post._id)}
                          className="cursor-pointer"
                        />
                      </p>
                    </div>
                    {/* Update the price display to show price x quantity */}
                    <span className="mt-4 md:ml-52 text-center">MRP: ${(post.price * post.quantity).toFixed(2)}</span> 
                  </div>
                  <hr className="my-10" />
                </div>
              ))
            )}
            <p className="font-semibold">If your Products Quantity is not work so refresh your page.</p>
          </div>
        </div>
        <div>
          <div className="mt-16 mx-5">
            <h3 className="text-xl font-bold mb-7">Summary</h3>
            <p className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>${SubTotal().toFixed(2)}</span> {/* Format the total to two decimal places */}
            </p>
            <p className="flex justify-between my-5">
              <span className="mr-6">Estimated Delivery and Handling</span> <span>96</span>
            </p>
            <p className="border-t-2 border-b-2 py-4 flex justify-between">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span> {/* Format the total to two decimal places */}
            </p>
            <div className="mt-8 flex justify-center md:justify-start transition-transform transform hover:scale-105">
              <Link
                href="orderconform"
                className="border-2 md:px-20 px-10 py-3 rounded-full bg-cyan-600 transition-transform transform hover:scale-105"
              >
                Member Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
