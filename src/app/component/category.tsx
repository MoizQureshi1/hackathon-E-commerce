import wingchair from "../../../public/images/wingchair.png";
import woodenchair from "../../../public/images/woodenchair.png";
import deskchair from "../../../public/images/deskchair.png";
import orangechair from "../../../public/images/orangechair.png"
import whitesofa from "../../../public/images/whitesofa.png"
import text from "../../../public/images/text.png"
import whitechair2 from "../../../public/images/whitechair2.png"
import graychair from "../../../public/images/graychair.png"
import Image from "next/image";
import Link from "next/link";

export default function Category (){
    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold md:ml-40 text-center md:text-left mb-6 mt-20">Top Categories</h2>
            <div className="flex flex-col md:flex-row justify-center md:mx-3 lg:mx-0 gap-5 lg:gap-10">
                <div className="flex justify-center">
                <Link href="products"><Image src={wingchair} alt="Wing Chairs" className="w-80 h-80 rounded-xl transition-transform transform hover:scale-105"/></Link>
                </div>
                <div className="flex justify-center">
                <Link href="products"><Image src={woodenchair} alt="Wooden Chairs" className="w-80 h-80 rounded-xl transition-transform transform hover:scale-105"/></Link>
                </div>
                <div className="flex justify-center">
                <Link href="products"><Image src={deskchair} alt="Desk Chairs" className="w-80 h-80 rounded-xl transition-transform transform hover:scale-105"/></Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-28 mx-10">
                <div className="flex justify-center">
                <Image src={text} alt="text" height={400} />
                <Link href="orangeChairItem"><Image src={orangechair} alt="Orange Chair" height={474} className="rounded-lg transition-transform transform hover:scale-105"/></Link>
                </div>
                <div className="flex justify-center gap-4 ml-6">
                    <div>
                        <Link href="whiteSofaItem"><Image src={whitesofa} alt="White Sofa" width={230} className="rounded-lg transition-transform transform hover:scale-105"/></Link>
                        <Link href="whiteChairItem"><Image src={whitechair2} alt="White Chair" width={230} className="mt-4 rounded-lg transition-transform transform hover:scale-105"/></Link>
                    </div>
                    <div>
                        <Link href="whiteChairItem"><Image src={whitechair2} alt="White Chair" width={230} className="mb-4 rounded-lg transition-transform transform hover:scale-105"/></Link>
                        <Link href="grayChairItem"><Image src={graychair} alt="Gray Cair" width={230} className="rounded-lg transition-transform transform hover:scale-105"/></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}