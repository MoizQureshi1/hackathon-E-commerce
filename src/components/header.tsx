import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";
import { GiSofa } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { client } from "../sanity/lib/client";

export default async function Navbar (){
    
    const CMSHeader = await client.fetch(`
        *[_type == "header"] {
            paragraph,
            heading,
            phone
        }[0]
    `)

    console.log(CMSHeader);



    return(
        <header className="border-b-2 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-around bg-[#272343] text-sm text-[#FFFFFF] py-2 lg:gap-40">
                <p className="flex justify-center md:justify-start"><TiTick className="text-2xl mr-1"/>{CMSHeader.paragraph}</p>
                <div className="flex justify-center md:justify-start gap-4 ">
                    <div className="hover:underline">
                      <ClerkProvider>
                        <SignedOut>
                          <SignInButton />
                        </SignedOut>
                        <SignedIn>
                          <UserButton />
                        </SignedIn>
                      </ClerkProvider>
                    </div>
                    <select className="bg-indigo-950">
                        <option>Eng</option>
                        <option>....</option>
                        <option>....</option>
                        <option>....</option>
                        <option>Other</option>
                    </select>
                    <Link href="page" className="hover:underline">Faqs</Link>
                    <Link href="shop"className="flex hover:underline"><BiErrorCircle className="mt-1 mr-1"/>Need Help</Link>
                </div>
            </div>
            <div className="flex justify-around bg-[#F0F2F3]">
                <h2 className="flex md:mr-48 text-[#272343] text-3xl font-medium my-3"><GiSofa className="text-[#029FAE] text-5xl mr-1"/><span className="mt-2">{CMSHeader.heading}</span></h2>
                <div className="flex gap-4">
                <Link href="cart" className="flex md:ml-40 bg-[#FFFFFF] rounded-xl text-[#272343] font-medium py-3 px-5 my-3 transition-transform transform hover:scale-105"><LuShoppingCart className="mr-2 text-xl"/>Cart</Link>
                </div>
            </div>
            <div className="flex justify-around text-[#636270] font-semibold lg:gap-16 sm:mt-6 bg-[#FFFFFF]">
                <div className="hidden md:block">
                <ul className="flex gap-5">
                    <li className="hover:text-[#029FAE] transition-transform transform hover:scale-105"><Link href="">Home</Link></li>
                    <li className="hover:text-[#029FAE] transition-transform transform hover:scale-105"><Link href="shop">Shop</Link></li>
                    <li className="hover:text-[#029FAE] transition-transform transform hover:scale-105"><Link href="products">Products</Link></li>
                    <li className="hover:text-[#029FAE] transition-transform transform hover:scale-105"><Link href="page">Pages</Link></li>
                    <li className="hover:text-[#029FAE] transition-transform transform hover:scale-105"><Link href="about">About</Link></li>
                    <li className="hover:text-[#029FAE] transition-transform transform hover:scale-105">
                        <ClerkProvider>
                              <SignedOut>
                                <SignInButton />
                              </SignedOut>
                              <SignedIn>
                                <UserButton />
                              </SignedIn>
                        </ClerkProvider>
                    </li>
                </ul>
                </div>
                <p className="hidden md:block">Contact: <span className="text-[#272343]">{CMSHeader.phone}</span></p>
            </div>
            <Sheet>
                <div className="flex justify-around my-3 bg-[#FFFFFF]">
                <SheetTrigger className="block md:hidden text-3xl bg-white"><HiOutlineBars3CenterLeft /></SheetTrigger>
                <p className="block md:hidden text-[#636270] font-semibold mt-1.5">Contact: <span className="text-[#272343]">{CMSHeader.phone}</span></p>
                </div>
                <SheetContent className="bg-[#FFFFFF]">
                <h2 className="flex text-[#272343] text-3xl font-medium mt-6"><GiSofa className="text-[#029FAE] text-5xl mr-1"/><span className="mt-2">{CMSHeader.heading}</span></h2>
                <ul>
                    <li className="my-4"><Link href="">Home</Link></li>
                    <li className="my-4"><Link href="shop">Shop</Link></li>
                    <li className="my-4"><Link href="products">Products</Link></li>
                    <li className="my-4"><Link href="page">Pages</Link></li>
                    <li className="my-4"><Link href="about">About</Link></li>
                    <li className="my-4 mr-48 bg-[#029FAE] text-center rounded-xl text-[#272343] font-medium py-2 px-3 transition-transform transform hover:scale-105">
                    <ClerkProvider>
                              <SignedOut>
                                <SignInButton />
                              </SignedOut>
                              <SignedIn>
                                <UserButton />
                              </SignedIn>
                        </ClerkProvider>
                    </li>
                </ul>
                </SheetContent>
            </Sheet>
        </header>
    )
}