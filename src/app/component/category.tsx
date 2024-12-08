import wingchair from "../../../public/images/wingchair.png";
import woodenchair from "../../../public/images/woodenchair.png";
import deskchair from "../../../public/images/deskchair.png";
import orangechair from "../../../public/images/orangechair.png"
import whitesofa from "../../../public/images/whitesofa.png"
import text from "../../../public/images/text.png"
import whitechair2 from "../../../public/images/whitechair2.png"
import graychair from "../../../public/images/graychair.png"
import Image from "next/image";

export default function Category (){
    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold md:ml-40 text-center md:text-left mb-6 mt-20">Top Categories</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10 ml-10 md:ml-0">
                <Image src={wingchair} alt="Wing Chairs" className="w-80 h-80 rounded-xl transition-transform transform hover:scale-105"/>
                <Image src={woodenchair} alt="Wooden Chairs" className="w-80 h-80 rounded-xl transition-transform transform hover:scale-105"/>
                <Image src={deskchair} alt="Desk Chairs" className="w-80 h-80 rounded-xl transition-transform transform hover:scale-105"/>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-28 ml-5md:ml-0">
                <div className="flex ">
                <Image src={text} alt="text" height={500}/>
                <Image src={orangechair} alt="Orange Chair" width={400} className="rounded-lg ml-1 transition-transform transform hover:scale-105"/>
                </div>
                <div className="flex gap-4 ml-6 md:ml-0 ">
                    <div>
                        <Image src={whitesofa} alt="White Sofa" className="rounded-lg transition-transform transform hover:scale-105"/>
                        <Image src={whitechair2} alt="White Chair" className="mt-4 rounded-lg transition-transform transform hover:scale-105"/>
                    </div>
                    <div>
                        <Image src={whitechair2} alt="White Chair" className="mb-4 rounded-lg transition-transform transform hover:scale-105"/>
                        <Image src={graychair} alt="Gray Cair" className="rounded-lg transition-transform transform hover:scale-105"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}