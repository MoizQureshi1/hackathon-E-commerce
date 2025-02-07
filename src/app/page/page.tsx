import { GoPlus } from "react-icons/go";


export default function ShopPage(){
    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
            <div>
                <div className="text-center">
                    <h2 className="font-bold text-3xl my-3 mt-20">Questions Looks Here</h2>
                    <p className=" text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio obcaecati minus optio vel in laudantium accusantium.</p>
                </div>
                <div className="md:flex my-10 mb-28 mx-6">
                <div>
                <div className="p-5 bg-slate-100 my-6 md:mr-5 md:ml-16 transition-transform transform hover:scale-105">
                    <span className="flex justify-between pb-4">
                        <h2 className="text-xl font-bold">What types of Chairs do you offer?</h2>
                        <a href=""><GoPlus className="text-3xl"/></a>
                    </span>
                    <p className="text-slate-500">We offer a wide range of chairs including ergonomic office chairs, lounge chairs, recliners, gaming chairs, and adjustable task chairs. All designed for comfort and style in various settings.</p>
                </div>
                <div className="p-5 bg-slate-100 my-6 md:mr-5 md:ml-16 transition-transform transform hover:scale-105">
                    <span className="flex justify-between pb-4">
                        <h2 className="text-xl font-bold">Do you Chairs come with a warranty?</h2>
                        <a href=""><GoPlus className="text-3xl"/></a>
                    </span>
                    <p className="text-slate-500">Yes, all our chairs come with a standard 2 day warranty. It covers manufacturing defects and offers replacement parts or repair services. Terms and conditions apply based on specific product models.</p>
                </div>
                <div className=" p-5 bg-slate-100 my-6 md:mr-5 md:ml-16 transition-transform transform hover:scale-105">
                    <span className="flex justify-between pb-4">
                        <h2 className="text-xl font-bold">Can I try a chairs Before purchasing?</h2>
                        <a href=""><GoPlus className="text-3xl"/></a>
                    </span>
                    <p className="text-slate-500">No, you can visit our showroom to try out chairs before buying. We also offer a 30-day return policy if you re not satisfied with your purchase after testing it.</p>
                </div>
                </div>
                <div>
                <div className="p-5 bg-slate-100 my-6 md:ml-5 md:mr-16 transition-transform transform hover:scale-105">
                    <span className="flex justify-between pb-4">
                        <h2 className="text-xl font-bold">How Can we get in touch with you?</h2>
                        <a href=""><GoPlus className="text-3xl"/></a>
                    </span>
                    <p className="text-slate-500">You can reach us via email, phone, or through our websites contact form. We also have live chat support available for quick responses. Feel free to reach out anytime!</p>
                </div>
                <div className="p-5 bg-slate-100 my-6 md:ml-5 md:mr-16 transition-transform transform hover:scale-105">
                    <span className="flex justify-between pb-4">
                        <h2 className="text-xl font-bold">What will be Delivered? And When?</h2>
                        <a href=""><GoPlus className="text-3xl"/></a>
                    </span>
                    <p className="text-slate-500">You will receive the chair, along with all required parts and assembly instructions. Delivery times vary but usually take 5-7 business days. Expedited shipping options are available at checkout.</p>
                </div>
                <div className="p-5 bg-slate-100 my-6 md:ml-5 md:mr-16 transition-transform transform hover:scale-105">
                    <span className="flex justify-between pb-4">
                        <h2 className="text-xl font-bold">How Do I clean andmaintam my comforty chair?</h2>
                        <a href=""><GoPlus className="text-3xl"/></a>
                    </span>
                    <p className="text-slate-500">To clean, wipe your chair with a soft, damp cloth. Avoid harsh chemicals. For maintenance, periodically check for loose screws and keep the chairs wheels free of dirt and debris.</p>
                </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}