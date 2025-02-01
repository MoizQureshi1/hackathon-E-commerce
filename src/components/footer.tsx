import { client } from "@/sanity/lib/client";
import Link from "next/link";
import {FaCcPaypal, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoLogoTwitter } from "react-icons/io";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";

export default async function Footer() {
 
    const CMSFooter = await client.fetch(`
      *[_type == "footer"] {
        heading,
      }[0]
    `)
  
      console.log(CMSFooter);


  
  
  const posts = [
    {
      name: "green-sofa",
      title: "Sofa",
    },
    {
        name: "plastic-chair",
        title: "Armchair",
    },
    {
      name: "new-wing-chair",
      title: "Wing Chair",
    },
    {
        name: "desk-chair",
        title: "Desk Chair",
    },
    {
        name: "wooden-chair",
        title: "Wooden Chair",
      },
      {
          name: "orange-chair",
          title: "Park Chair",
      },
  ]


  return (
    <>
    <footer className="bg-white border-t-2 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-around md:px-20">
        <div className="sm:flex">
        <div className="py-10 px-12 md:px-0">
        <h2 className="flex justify-center sm:mr-20 md:mr-48 text-indigo-950 text-3xl font-bold my-3"><GiSofa className="text-[#029FAE] text-5xl mr-1"/><span className="mt-2">{CMSFooter.heading}</span></h2>
          <p className="text-center sm:text-left font-medium text-gray-500 text-sm md:text-lg md:py-4 mt-2">Vivamus tristique odio sit amet velit semper,<br />nen posuere trups interdum. <br />nCras egestas purus</p>
          <ul className="flex justify-center sm:justify-start gap-4 mt-3 text-xl text-gray-700">
            <li className="hover:border-2 border-[#029FAE] rounded-full p-2 md:p-3 hover:text-[#029FAE]"><a href="https://www.facebook.com/profile.php?id=100089981983705&mibextid=ZbWKwL"><FaFacebookF /></a></li>
            <li className="hover:border-2 border-[#029FAE] rounded-full p-2 md:p-3 hover:text-[#029FAE]"><a href="https://x.com/Mohamma09033769?s=08"><IoLogoTwitter /></a></li>
            <li className="hover:border-2 border-[#029FAE] rounded-full p-2 md:p-3 hover:text-[#029FAE]"><a href="https://www.instagram.com/moiz_qureshi07/profilecard/?igsh=Nno3aGZmbzgwNGR3"><FaInstagram /></a></li>
            <li className="hover:border-2 border-[#029FAE] rounded-full p-2 md:p-3 hover:text-[#029FAE]"><a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9"><FaLinkedinIn /></a></li>
            <li className="hover:border-2 border-[#029FAE] rounded-full p-2 md:p-3 hover:text-[#029FAE]"><a href="https://www.youtube.com/@solve-swift"><FaYoutube /></a></li>
          </ul>
        </div>
        
        <div className="flex justify-center gap-12 sm:gap-10 md:gap-0">
        <div className="pt-4 sm:mt-12">
          <h3 className="text-slate-400 text-lg">CATEGORY</h3>
          <ul className=" md:mt-4 mt-2">
            {posts.map((post) => (
              <div key={post.name}>   
            <li><Link href={`/posts/${post.name}`} className="hover:underline text-black hover:text-[#029FAE]">{post.title}</Link></li>
          </div>
            ))}
            </ul>
        </div>

        <div className="pt-4 sm:mt-12 md:ml-12">
          <h3 className="text-slate-400 text-lg">SUPPORT</h3>
          <ul className=" md:mt-4 mt-2">
            <li><Link href="shop" className="hover:underline text-black hover:text-[#029FAE]">Help & Support</Link></li>
            <li><Link href="about" className="hover:underline text-black hover:text-[#029FAE]">Tearms & Condition</Link></li>
            <li><Link href="about" className="hover:underline text-black hover:text-[#029FAE]">Privacy Policy</Link></li>
            <li><Link href="shop" className="hover:underline text-black hover:text-[#029FAE]">Help</Link></li>
          </ul>
        </div>
        </div>
        </div>

      <div className="mt-20 text-center lg:text-left">
        <h3 className="text-slate-400 text-sm font-bold pb-3 md:ml-3">NEWSLETTER</h3>
        <div className="flex justify-center mx-3">
        <input type="text" className="text-slate-500 bg-white font-normal border-2 p-3 md:pl-5 pl-2 md:pr-16 pr-6 rounded-lg" placeholder="Your email" required/>
        <a href="https://www.youtube.com/@solve-swift" target="blank"><button className="bg-[#029FAE] rounded-xl text-white font-bold py-3 md:px-8 px-3 ml-3 transition-transform transform hover:scale-105">Subscribe</button></a>
        </div>
        <p className="text-slate-400 text-md mt-3 md:ml-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Cupiditate velit corrupti accusamus.</p>
      </div>
      </div>
      

      <div className="border-t-2 mt-8 text-gray-400 py-3 text-lg flex flex-col md:flex-row text-center md:text-left justify-around">
        <p className="mt-5">&copy; {new Date().getFullYear()} - blogy - Designed & Develop by <a href="https://www.facebook.com/profile.php?id=100084536345048" target="blank"><span className="text-black underline">Moiz Qureshi</span></a></p>
        <p className="flex justify-center text-5xl gap-6 mt-2">
          <a href="https://www.mastercard.us/en-us/business/issuers.html" target="blank" className="transition-transform transform hover:scale-105"><RiMastercardFill /></a>
          <a href="https://www.paypal.com/pk/home" target="blank" className="transition-transform transform hover:scale-105"><FaCcPaypal /></a> 
          <a href="https://www.americanexpress.com/" target="blank"  className="transition-transform transform hover:scale-105"><SiAmericanexpress /></a>
          <a href="https://pk.visamiddleeast.com/pay-with-visa/find-a-card/credit-cards.html" target="blank" className="transition-transform transform hover:scale-105"><RiVisaLine /></a> 
        </p>
      </div>
    </footer>
    </>
  );
}