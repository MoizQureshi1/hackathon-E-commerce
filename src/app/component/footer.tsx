import Link from "next/link";
import {FaCcPaypal, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoLogoTwitter } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";

export default function Footer() {
  return (
    <>
    <footer className="bg-white border-t-2 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-around md:px-20">
        <div className="sm:flex">
        <div className="py-10 px-12 md:px-0">
        <h2 className="flex justify-center sm:mr-20 md:mr-48 text-indigo-950 text-3xl font-bold my-3"><GiSofa className="text-cyan-500 text-5xl mr-1"/><span className="mt-2">Comforty</span></h2>
          <p className="text-center sm:text-left font-medium text-gray-500 text-sm md:text-lg md:py-4 mt-2">Vivamus tristique odio sit amet velit semper,<br /> en posuere trups interdum. <br /> Cras egestas purus</p>
          <ul className="flex justify-center sm:justify-start gap-4 mt-3 text-xl text-gray-700">
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://www.facebook.com/profile.php?id=100089981983705&mibextid=ZbWKwL"><FaFacebookF /></a></li>
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://x.com/Mohamma09033769?s=08"><IoLogoTwitter /></a></li>
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://www.instagram.com/moiz_qureshi07/profilecard/?igsh=Nno3aGZmbzgwNGR3"><FaInstagram /></a></li>
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9"><FaLinkedinIn /></a></li>
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://www.youtube.com/@solve-swift"><FaYoutube /></a></li>
          </ul>
        </div>
        
        <div className="flex justify-center gap-12 sm:gap-10 md:gap-0">
        <div className="pt-4 sm:mt-12">
          <h3 className="text-slate-400 text-lg">CATEGORY</h3>
          <ul className="font-semibold md:mt-4 mt-2">
            <li><Link href="greenSofaItem" className="hover:underline text-gray-500">Sofa</Link></li>
            <li><Link href="plasticChairItem" className="hover:underline text-gray-500">Armchair</Link></li>
            <li><Link href="styleChairItem" className="hover:underline text-gray-500">Wing Chair</Link></li>
            <li><Link href="standChairItem"  className="hover:underline text-gray-500">Desk Chair</Link></li>
            <li><Link href="tableChairItem" className="hover:underline text-gray-500">Wooden Chair</Link></li>
            <li><Link href="orangeChairItem" className="hover:underline text-gray-500">Park Bench</Link></li>
          </ul>
        </div>

        <div className="pt-4 sm:mt-12 md:ml-12">
          <h3 className="text-slate-400 text-xl">Support</h3>
          <ul className="font-semibold md:mt-4 mt-2">
            <li><Link href="page" className="hover:underline text-gray-500">Help & Support</Link></li>
            <li><Link href="about" className="hover:underline text-gray-500">Tearms & Condition</Link></li>
            <li><Link href="about" className="hover:underline text-gray-500">Privacy Policy</Link></li>
            <li><Link href="page" className="hover:underline text-gray-500">Help</Link></li>
          </ul>
        </div>
        </div>
        </div>

      <div className="mt-20 text-center lg:text-left">
        <h3 className="text-slate-400 text-sm font-bold pb-3 md:ml-3">NEWSLETTER</h3>
        <div className="flex justify-center mx-3">
        <input type="text" className="text-slate-500 bg-white font-normal border-2 p-3 md:pl-5 pl-2 md:pr-16 pr-6 rounded-lg" placeholder="Your email" required/>
        <a href="https://www.youtube.com/@solve-swift" target="blank"><button className="bg-cyan-500 rounded-xl text-white font-bold py-3 md:px-8 px-3 ml-3 transition-transform transform hover:scale-105">Subscribe</button></a>
        </div>
        <p className="text-slate-400 text-md mt-3 md:ml-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Cupiditate velit corrupti accusamus.</p>
      </div>
      </div>
      

      <div className="border-t-2 mt-8 text-gray-400 py-3 text-lg flex flex-col md:flex-row text-center md:text-left justify-around">
        <p className="mt-5">&copy; {new Date().getFullYear()} - blogy - Designed & Develop by <a href="https://www.facebook.com/profile.php?id=100084536345048" target="blank"><span className="text-black underline">Moiz Qureshi</span></a></p>
        <p className="flex justify-center text-5xl gap-6 mt-2"><a href="https://www.paypal.com/pk/home" className="transition-transform transform hover:scale-105"><FaCcPaypal /></a> <a href="https://pk.visamiddleeast.com/pay-with-visa/find-a-card/credit-cards.html" className="transition-transform transform hover:scale-105"><RiVisaLine /></a></p>
      </div>
    </footer>
    </>
  );
}