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
        <div className="md:flex justify-around md:mx-36 md:my-20 my-10 mx-16 sm:mx-52 ">
            <div className="flex gap-10">
            <Image src={zapier} alt="Bank Account" className="w-28 h-12"/>
            <Image src={pipedrive} alt="Bank Account" className="w-28 h-12"/>
            </div>
            <div className="flex gap-10">
            <Image src={cib} alt="Bank Account" className="w-28 h-12"/>
            <Image src={zo} alt="Bank Account" className="w-28 h-12"/>
            </div>
            <div className="flex gap-10">
            <Image src={burnt} alt="Bank Account" className="w-28 h-12"/>
            <Image src={pandadoc} alt="Bank Account" className="w-28 h-12"/>
            </div>
            <Image src={moz} alt="Bank Account" className="w-28 h-12 ml-16 md:ml-0"/>
        </div>
        </div>
        </>
    )
}