"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "../../sanity/lib/image";
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

// Cart type
type CartDetails = {
  _id: string;
  name: string;
  price: number;
  image_url: string;
  title: string;
  quantity: number;
};

type FormattedCartItem = {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

// Schema
const formSchema = z.object({
  fullName: z.string().min(2).max(49),
  email: z.string().email(),
  subject: z.string().min(2).max(49),
  message: z.string(),
  address: z.string().min(5).max(255),
  phoneNumber: z.string().min(10).max(15),
  cartDetails: z.array(
    z.object({
      name: z.string(),
      price: z.number(), // NOTE: price should be number
      imageUrl: z.string(),
      quantity: z.number(),
    })
  ),
  totalPrice: z.number(), // totalPrice as number
});

type FormType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [cart, setCart] = useState<CartDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      cartDetails: [],
      totalPrice: 0,
      address: "",
      phoneNumber: "",
    },
  });

  // Load cart from localStorage
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const parsedCart = JSON.parse(cartData);

      const formattedCart: FormattedCartItem[] = parsedCart.map((item: CartDetails) => ({
        name: item.title || "Unnamed Product",
        price: Number(item.price) * (item.quantity || 1),
        quantity: item.quantity || 1,
        imageUrl: item.image_url || "/default-image.jpg",
      }));
      
      const totalPrice = formattedCart.reduce(
        (acc: number, item: FormattedCartItem) => acc + item.price,
        0
      );
      
      form.reset({
        fullName: "",
        email: "",
        subject: "Order Inquiry",
        message:
          "I am interested in the following products:\n" +
          formattedCart
            .map(
              (item: FormattedCartItem) =>
                `${item.name} - $${item.price.toFixed(2)} - Quantity: ${item.quantity}`
            )
            .join("\n"),
        address: "",
        phoneNumber: "",
        cartDetails: formattedCart,
        totalPrice,
      });

      setCart(parsedCart);
    }
  }, [form]);

  // Submit
  const onSubmit = async (values: FormType) => {
    setLoading(true);
    try {
      const response = await client.create({
        _type: "checkoutForm",
        name: values.fullName,
        email: values.email,
        subject: values.subject,
        message: values.message,
        address: values.address,
        phoneNumber: values.phoneNumber,
        cartDetails: values.cartDetails,
        totalPrice: values.totalPrice,
      });
      console.log("Sanity Response:", response);
      
      toast({
        title: "Order Confirmed! 🎉",
        description: "Thank you for your order. We'll process it shortly.",
        action: <ToastAction altText="View Order">View Order</ToastAction>,
        className: "bg-green-50 border-green-200",
      });

      form.reset(); // Reset form
      localStorage.removeItem("cart"); // Clear cart
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Order Failed!",
        description: "There was an error processing your order. Please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-[#272343] py-8">
        <Form {...form}>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold font-sans mb-2">CheckOut Form</h2>
            <p>Please fill out the form below to get in touch with us</p>
          </div>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col justify-center border-4 px-6 mx-5 lg:mx-80 md:px-20 py-8 rounded-xl bg-[#F0F2F3]"
          >
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Subject */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Subject" {...field} className="bg-white" />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Message"
                      {...field}
                      className="bg-white p-3 border rounded w-full"
                      rows={4}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Cart Details */}
            {cart.length > 0 && (
              <div className="space-y-4 grid sm:grid-cols-2">
                {form.getValues("cartDetails").map((product, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Image
                      src={urlFor(product.imageUrl).width(200).height(200).url()}
                      alt={product.name}
                      width={60}
                      height={60}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-semibold">{product.name}</p>
                      <p className="text-xs text-gray-500">Price: ${product.price.toFixed(2)}</p>
                      <p className="text-xs text-gray-500">Qty: {product.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total Price */}
            {form.watch("totalPrice") > 0 && (
              <div className="mt-4 text-lg font-semibold">
                Total Price: ${form.watch("totalPrice").toFixed(2)}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="text-white bg-[#029FAE] hover:bg-cyan-600 px-7 py-3 rounded-lg transition-transform transform hover:scale-105"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
