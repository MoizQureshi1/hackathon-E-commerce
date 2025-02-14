"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { client } from "../../sanity/lib/client";
import { BsTelephoneFill } from "react-icons/bs";
import { FaClock, FaHeadset } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import { IoTrophy } from "react-icons/io5";
import { useState } from "react";

const formSchema = z.object({
    fullName: z.string().min(2).max(49),
    email: z.string().email(),
    subject: z.string().min(2).max(49),
    message: z.string()
})

type FormType =  z.infer<typeof formSchema>

const ShopPage = () => {
      const [loading, setLoading] = useState(false);

    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            subject:"",
            message:"",
        }
    })

    const onSubmit = async (values: FormType) => {
        setLoading(true);
        try {
            await client.create({
            _type: "contactForm",
            name: values.fullName,
            email: values.email,
            subject: values.subject,
            message: values.message
        });
        alert("Your message has been submitted!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

    return(
       <>
        <div className="max-w-screen-2xl mx-auto">
        <Form {...form}>
            <div>
                <div className="text-center mx-4">
                    <h2 className="font-bold text-3xl my-3 mt-20">Get In Touch With Us</h2>
                    <p className="font-bold text-slate-400">For More Information About Our Products & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out Do Not Hositate!</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-44 my-20 mx-2">
                    <div>
                        <div className="flex justify-center mt-2">
                            <FaLocationDot className="text-2xl mr-6"/>
                            <span>
                                <h2 className="font-semibold text-2xl">Address</h2>
                                <p className="text-black font-medium">sector 8/B, Baldia <br /> Town, Saidabad, Karachi</p>
                            </span>
                        </div>
                        <div className="flex justify-center mt-8 ml-6">
                            <BsTelephoneFill className="text-2xl mr-6"/>
                            <span>
                                <h2 className="font-semibold text-2xl">Phone</h2>
                                <p className="text-black font-medium">Mobile: +(92) 332-4364289</p>
                                <p className="text-black font-medium">Hotline: +(92) 332-4364289</p>
                            </span>
                        </div>
                        <div className="flex justify-center mt-9 ml-8">
                            <FaClock className="text-2xl mr-6"/>
                            <span>
                                <h2 className="font-semibold text-2xl">Working Time</h2>
                                <p className="text-black font-medium">Monday-Friday 09:00 AM- <br />09:00 PM</p>
                                <p className="text-black font-medium">Satureday-Sunday 09:00 AM- <br />08:00 PM</p>
                            </span>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-20 md:mx-0">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-black font-semibold mt-2">Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Full Name" {...field} className="border-2 py-7 pr-36 pl-8 rounded-lg mt-3"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />    
                            <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-black font-semibold mt-2">Email address</FormLabel>
                                <FormControl>
                                  <Input placeholder="email.address@gmail.com" {...field} className="border-2 py-7 pr-36 pl-8 rounded-lg mt-3"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />  
                            <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-black font-semibold mt-2">Subject</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Subject" {...field} className="border-2 py-7 pr-36 pl-8 rounded-lg mt-3"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />  
                            <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="text-black font-semibold mt-2">Message</FormLabel>
                                <FormControl>
                                  <textarea placeholder="Hi! id like to ask about" {...field} className="border-2 py-2 pr-36 pl-8 rounded-lg mt-3"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />  
                            <div className="flex justify-center md:justify-start mt-4 md:mt-0">
                            <Button 
                            type="submit" 
                            className="border-2 rounded-xl mt-5 py-5 px-16 bg-[#029FAE] text-white transition-transform transform hover:scale-105"
                            disabled={loading}
                            >
                              {loading ? "Submitting..." : "Submit"}
                            </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Form>
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
    )
}

export default ShopPage;