import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import chair from "../../public/images/chair.png";
import { client } from "@/sanity/lib/client";

interface Hero {
  hero: {name: string; imageURL: string };
}

export default async function Hero (){


  const CMSHero = await client.fetch(`
          *[_type == "hero"] {
            paragraph,
            heading,
            buttonText,
            image
          }[0]
      `)
  
      console.log(CMSHero)

    const heros = [{
      name: "chair",
      imageURL: "/images/chair.png",
    }]

    return(
        <>
          <main className="max-w-screen-2xl mx-auto">
                  <div className="flex justify-center">   
                    <div className="flex flex-col md:flex-row justify-around bg-[#F0F2F3] lg:mx-44 md:mx-20 md:pl-10 pt-16 py-11 lg:px-20 rounded-md">
                  <div className="block md:hidden">
                    <Image src={chair} alt="Gray Chair" width={800} height={900}/>
                  </div>
                  <div className="text-[#272343] mt-14 text-center md:text-left">
                    <h4 className="text-sm font-semibold mb-5">{CMSHero.paragraph}</h4>
                    <h1 className="text-5xl font-bold pb-10">{CMSHero.heading}</h1>
                  {heros.map((post) => (
                    <div key={post.name}>
                      <div className="flex justify-center md:justify-start">
                    <Link href={`/hero/${post.name}`} className="flex text-sm font-semibold py-3 px-7 rounded-lg bg-[#029FAE] hover:bg-cyan-600 text-white transition-transform transform hover:scale-105">{CMSHero.buttonText}<GoArrowRight className="text-xl mt-0.5 ml-4"/></Link>
                    </div>
                </div>
                ))}
                  </div>
                      <div className="hidden md:block">
                     <Image src={chair} alt="Gray Chair" width={800} height={900}/>
                  </div>
              </div>
            </div>
          </main>
        </>
    )
}