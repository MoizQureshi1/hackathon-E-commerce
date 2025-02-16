import Gallery from "@/components/gallery";
import CashAccount from "../components/cashAcu";
import Category from "../components/category";
import Featured from "../components/featured";
import Products from "../components/products";
import Hero from "@/components/Hero";
import { Suspense } from "react";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="max-w-screen-2xl mx-auto">
    <Hero/>

    <Suspense>
      <CashAccount/>
    </Suspense>

    <Suspense>
      <Featured/>
    </Suspense>

    <Suspense fallback={<div className="text-2xl text-center font-extrabold my-20">Loading...</div>}>
      <Category/>
    </Suspense>

    <Suspense>
      <Gallery/>
    </Suspense>

    <Suspense fallback={<div className="text-2xl text-center font-extrabold my-20">Loading...</div>}>
      <Products/>
    </Suspense>
    </div>
    <Footer/>
    </>
  );
}
