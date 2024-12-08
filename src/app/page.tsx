import CashAccount from "./component/cashAcu";
import Category from "./component/category";
import Featured from "./component/featured";
import Hero from "./component/Hero";
import Products from "./component/products";

export default function Home() {
  return (
    <>
    <div className="max-w-screen-2xl mx-auto">
    <Hero/>
    <CashAccount/>
    <Featured/>
    <Category/>
    <Products/>
    </div>
    </>
  );
}
