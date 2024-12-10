import Image from "next/image";
import zapier from "../../../public/images/zapier.png";
import pipedrive from "../../../public/images/pipedrive.png";
import cib from "../../../public/images/cib.png";
import zo from "../../../public/images/zo.png";
import burnt from "../../../public/images/burnt.png";
import pandadoc from "../../../public/images/pandadoc.png";
import moz from "../../../public/images/moz.png";

export default function CashAccount (){
    return(
        <>
        <div className=" max-w-screen-2xl mx-auto">
        <div className="md:flex justify-around sm:mx-40 my-20">
            <div className="flex justify-center md:justify-around gap-4">
            <a href="https://zapier.com/" target="blank"><Image src={zapier} alt="Bank Account" className="w-32 h-14 transition-transform transform hover:scale-105"/></a>
            <a href="https://www.pipedrive.com/" target="blank"><Image src={pipedrive} alt="Bank Account" className="w-32 h-14 transition-transform transform hover:scale-105"/></a>
            </div>
            <div className="flex justify-center md:justify-around gap-4">
            <a href="https://www.cib.hu/" target="blank"><Image src={cib} alt="Bank Account" className="w-32 h-14 transition-transform transform hover:scale-105"/></a>
            <a href="https://zapier.com" target="blank"><Image src={zo} alt="Bank Account" className="w-32 h-14 transition-transform transform hover:scale-105"/></a>
            </div>
            <div className="flex justify-center md:justify-around gap-4">
            <a href="https://www.instagram.com/burnttoast/?hl=en" target="blank"><Image src={burnt} alt="Bank Account" className="w-32 h-14 transition-transform transform hover:scale-105"/></a>
            <a href="https://www.pandadoc.com/" target="blank"><Image src={pandadoc} alt="Bank Account" className="w-32 h-14 transition-transform transform hover:scale-105"/></a>
            </div>
            <div className="flex justify-center md:justify-around">
            <a href="https://moz.com/" target="blank"><Image src={moz} alt="Bank Account" className="w-32 h-14 transition-transform transform hover:scale-105"/></a>
            </div>
        </div>
        </div>
        </>
    )
}