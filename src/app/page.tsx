import Gallery from "@/components/gallery";
import CashAccount from "../components/cashAcu";
import Category from "../components/category";
import Featured from "../components/featured";
import Products from "../components/products";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <div className="max-w-screen-2xl mx-auto">
    <Hero/>
    <CashAccount/>
    <Featured/>
    <Category/>
    <Gallery/>
    <Products/>
    </div>
    </>
  );
}
