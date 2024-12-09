import Link from "next/link";
import {FaCcPaypal, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoLogoTwitter } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";

export default function Footer() {
  return (
    <>
    <footer className="bg-white border-t-2 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-around md:px-20">
        <div className="py-10 px-12 md:px-0">
        <h2 className="flex md:mr-48 text-indigo-950 text-3xl font-bold my-3"><GiSofa className="text-cyan-500 text-5xl mr-1"/><span className="mt-2">Comforty</span></h2>
          <p className=" font-medium text-gray-500 text-sm md:text-lg md:py-4 mt-2">Vivamus tristique odio sit amet velit semper,<br /> en posuere trups interdum. <br /> Cras egestas purus</p>
          <ul className="flex gap-4 mt-3 text-xl text-gray-700">
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://www.facebook.com/profile.php?id=100089981983705&mibextid=ZbWKwL"><FaFacebookF /></a></li>
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://x.com/Mohamma09033769?s=08"><IoLogoTwitter /></a></li>
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://www.instagram.com/moiz_qureshi07/profilecard/?igsh=Nno3aGZmbzgwNGR3"><FaInstagram /></a></li>
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9"><FaLinkedinIn /></a></li>
            <li className="hover:border-2 border-gray-800 rounded-full p-2 md:p-3 hover:bg-slate-100"><a href="https://www.youtube.com/@solve-swift"><FaYoutube /></a></li>
          </ul>
        </div>
        
        <div className="pt-4 md:mt-12 px-12 md:px-0">
          <h3 className="text-slate-400 text-lg">CATEGORY</h3>
          <ul className="font-semibold md:mt-4 mt-2">
            <li><Link href="/about" className="hover:underline text-gray-500">Sofa</Link></li>
            <li><Link href="/product" className="hover:underline text-gray-500">Armchair</Link></li>
            <li><a href="https://www.aboutamazon.com/" target="blank" className="hover:underline text-gray-500">Wing Chair</a></li>
            <li><a href="https://ir.aboutamazon.com/overview/default.aspx" target="blank" className="hover:underline text-gray-500">Desk Chair</a></li>
            <li><a href="https://ir.aboutamazon.com/overview/default.aspx" target="blank" className="hover:underline text-gray-500">Wooden Chair</a></li>
            <li><a href="https://ir.aboutamazon.com/overview/default.aspx" target="blank" className="hover:underline text-gray-500">Park Bench</a></li>
          </ul>
        </div>

        <div className="pt-4 md:mt-12 mt-4 md:ml-12 px-12 md:px-0">
          <h3 className="text-slate-400 text-xl">Support</h3>
          <ul className="font-semibold md:mt-4 mt-2">
            <li><a href="https://www.amazon.com/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&language=en_US&pageId=amzn_retail_yourorders_us&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-orders%2Forders%3F_encoding%3DUTF8%26ref_%3Dfooter_yo&prevRID=8FKSD3ZG312Z599CWPD0&openid.assoc_handle=amzn_retail_yourorders_us&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" target="blank" className="hover:underline text-gray-500">Help & Support</a></li>
            <li><a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468520&ref_=footer_shiprates" target="blank" className="hover:underline text-gray-500">Tearms & Condition</a></li>
            <li><a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-orders%2Forders%3F_encoding%3DUTF8%26ref_%3Dfooter_yo&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_retail_yourorders_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" target="blank" className="hover:underline text-gray-500">Privacy Policy</a></li>
            <li><a href="https://www.amazon.com/ap/signin?clientContext=135-6575674-7058946&openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fdigital%2Ffiona%2Fmanage&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&marketPlaceId=USAmazon&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" target="blank" className="hover:underline text-gray-500">Help</a></li>
          </ul>
        </div>

      <div className="mt-20 text-center md:text-left ">
        <h3 className="text-slate-400 text-sm font-bold pb-3 md:ml-3">NEWSLETTER</h3>
        <div className="flex mx-3">
        <input type="text" className="text-slate-500 bg-white font-normal border-2 p-3 md:pl-5 pl-2 md:pr-16 pr-6 rounded-lg" placeholder="Your email" />
        <button className="bg-cyan-500 rounded-xl text-white font-bold py-3 md:px-8 px-3 ml-3 transition-transform transform hover:scale-105">Subscribe</button>
        </div>
        <p className="text-slate-400 text-md mt-3 md:ml-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Cupiditate velit corrupti accusamus.</p>
      </div>
      </div>
      

      <div className="border-t-2 mt-8 text-gray-400 py-3 text-lg flex flex-col md:flex-row text-center md:text-left justify-around">
        <p className="mt-2">&copy; {new Date().getFullYear()} - blogy - Designed & Develop by <span className="text-black">ZakirSoft</span></p>
        <p className="flex text-5xl gap-6 ml-32 md:ml-0 mt-2"><FaCcPaypal /> <RiVisaLine /></p>
      </div>
    </footer>
    </>
  );
}