import Link from "next/link";
import Image from "next/image";


export default function InCard (){


    const posts = [
        {
            name: "plastic-chair",
            title: "Library Stool Chair",
            price: "$99",
            alt: "Plastic Chair",
            imageURL: "/images/sleepchair.png",
        },
        {
            name: "white-chair",
            title: "Library Stool Chair",
            price: "$99",
            alt: "White Chair",
            imageURL: "/images/whitechair2.png",
        },
        {
            name: "desk-chair",
            title: "Library Stool Chair",
            price: "$99",
            alt: "Desk Chaird",
            imageURL: "/images/onestandchair.png",
        },
        {
            name: "orange-chair",
            title: "Library Stool Chair",
            price: "$99",
            alt: "Orange Chair",
            imageURL: "/images/orangechair.png",
        },
        {
            name: "wing-chair",
            title: "Library Stool Chair",
            price: "$99",
            alt: "Winger Chair",
            imageURL: "/images/wingerchair.png",
        },
    ]

return(
    <>
      <div>
            <div className="flex justify-center md:justify-around mr-14 sm:mr-0 gap-4 sm:gap-14 lg:gap-96 lg:mr-40">
              <h2 className="text-3xl font-bold text-center md:text-left lg:ml-36 mb-7 mt-2 lg:mr-44">FEATURED PRODUCTS</h2>
              <button className="border-b-2 mb-7 mt-3 border-black font-bold">View all</button>
            </div>
            <div className="flex flex-col md:flex-row justify-around gap-11 lg:mx-36 md:mx-16 mb-24">
                {posts.map((post) => (
                <div key={post.name}>
              <div className="flex justify-center transition-transform transform hover:scale-105">
                <Link href={`/posts/${post.name}`}>
                  <Image src={post.imageURL} alt={post.alt} width={180} height={500} className="rounded-t-lg"/>
                    <div className="flex justify-between">
                      <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">{post.title}</p>
                      <p className="text-black-400 pt-2 font-semibold text-lg">{post.price}</p>
                    </div>
                </Link>
              </div>
              </div>
                ))}
            </div>    
          </div>
    </>
)
}