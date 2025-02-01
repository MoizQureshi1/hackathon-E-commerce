import { BsTelephoneFill } from "react-icons/bs";
import { FaClock, FaHeadset } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import { IoTrophy } from "react-icons/io5";

export default function ShopPage(){
    return(
       <>
         <>
        <div className="max-w-screen-2xl mx-auto">
            <div>
                <div className="text-center">
                    <h2 className="font-bold text-3xl my-3 mt-20">Get In Touch With Us</h2>
                    <p className="font-bold text-slate-400">For More Information About Our Products & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out Do Not Hositate!</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-44 my-20">
                    <div>
                        <div className="flex justify-center mt-2">
                            <FaLocationDot className="text-2xl mr-6"/>
                            <span>
                                <h2 className="font-semibold text-2xl">Address</h2>
                                <p className="text-black font-medium">236 5th SE Avenue, New <br /> York NY10000, United <br />State</p>
                            </span>
                        </div>
                        <div className="flex justify-center mt-8">
                            <BsTelephoneFill className="text-2xl mr-6"/>
                            <span>
                                <h2 className="font-semibold text-2xl">Phone</h2>
                                <p className="text-black font-medium">Mobile: +(84) 546-6789</p>
                                <p className="text-black font-medium">Hotline: +(84) 546-6789</p>
                            </span>
                        </div>
                        <div className="flex justify-center mt-9">
                            <FaClock className="text-2xl mr-6"/>
                            <span>
                                <h2 className="font-semibold text-2xl">Working Time</h2>
                                <p className="text-black font-medium">Monday-Friday 9:00- <br />22:00</p>
                                <p className="text-black font-medium">Satureday-Sunday 9:00- <br />21:00</p>
                            </span>
                        </div>
                    </div>
                    <div>
                        <form className="mx-20 md:mx-0">
                            <div className="flex justify-center flex-col">
                                <label className="text-black font-semibold mt-2">Full Name</label>
                                <input type="text" placeholder="Your Full Name" required className="border-2 py-4 pr-36 pl-8 rounded-lg mt-3"/>
                            </div>
                            <div className="flex justify-center flex-col">
                                <label className="text-black font-semibold mt-10">Email Address</label>
                                <input type="text" placeholder="ABCExample@gmail.com" required className="border-2 py-4 pr-36 pl-8 rounded-lg mt-3"/>
                            </div>
                            <div className="flex justify-center flex-col">
                                <label className="text-black font-semibold mt-10">Subject</label>
                                <input type="text" placeholder="This is an Optional" className="border-2 py-4 pr-36 pl-8 rounded-lg mt-3"/>
                            </div>
                            <div className="flex justify-center flex-col">
                                <label className="text-black font-semibold mt-10">Message</label>
                                <textarea className="py-4 border-2 rounded-lg mt-3 pl-8 pb-6" required placeholder="Hi! Id like to ask About"></textarea>
                            </div>
                            <div className="flex justify-center md:justify-start mt-4 md:mt-0">
                            <button className="border-2 rounded-xl mt-5 py-3 px-20 bg-[#029FAE] text-white transition-transform transform hover:scale-105">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-24 bg-gray-100 text-gray-900 mx-8 sm:mx-40 md:mx-16 lg:mx-32 py-24">
                <div className="flex justify-center">
                    <IoTrophy className="text-5xl mr-4"/>
                    <span>
                        <h3 className="text-xl font-bold">High Quality</h3>
                        <p className="text-gray-600 font-semibold">Crafted from Top Materials</p>
                    </span>
                </div>
                <div className="flex justify-center mr-3 md:mr-0">
                    <GoVerified className="text-5xl mr-4"/>
                    <span>
                        <h3 className="text-xl font-bold">Warranty Protection</h3>
                        <p className="text-gray-600 font-semibold">Over 2 Year</p>
                    </span>
                </div>
                <div className="flex justify-center mr-12 md:mr-0">
                   <FaHeadset className="text-5xl mr-4"/>
                    <span>
                        <h3 className="text-xl font-bold">24/7 Support</h3>
                        <p className="text-gray-600 font-semibold">Dadicated Support</p>
                    </span>
                </div>
            </div>
        </div>
        </>
       </>
    )
}