import Gallery from "@/components/gallery";
import CashAccount from "../components/cashAcu";
import Category from "../components/category";
import Featured from "../components/featured";
import Products from "../components/products";
import Hero from "@/components/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
    <div className="max-w-screen-2xl mx-auto">
    <Hero/>

    <Suspense>
      <CashAccount/>
    </Suspense>

    <Suspense fallback={<div className="text-2xl text-center font-extrabold my-20">Loading...</div>}>
      <Featured/>
    </Suspense>

    <Suspense fallback={<div className="text-2xl text-center font-extrabold my-20">Loading...</div>}>
      <Category/>
    </Suspense>

    <Suspense>
      <Gallery/>
    </Suspense>

    <Suspense>
      <Products/>
    </Suspense>
    </div>
    </>
  );
}
