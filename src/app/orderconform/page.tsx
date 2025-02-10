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
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Adjusted types for cart details
type CartProduct = {
  _id: string;
  name: string;
  price: number;
  image_url: string;
  title: string;
  quantity: number;
};

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
      price: z.string(),
      imageUrl: z.string(),
      quantity: z.number(),
    })
  ),
  totalPrice: z.string(),
});

type FormType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch the cart items from localStorage on the client side
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  // Map cart data into the necessary format
  const cartDetails = cart.length
    ? cart.map((item) => ({
        name: item.title || "Unnamed Product",
        price: `$${(item.price * item.quantity).toFixed(2)}` || "0.00",
        quantity: item.quantity || 1,
        imageUrl: item.image_url || "/default-image.jpg",
      }))
    : [];

  const totalPrice = cart
    .reduce((acc: number, item: { price: number; quantity: number }) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: cartDetails.length ? `Inquiry about products in cart` : "",
      message:
        cartDetails.length
          ? `I am interested in the following products:\n` +
            cartDetails
              .map((item) => `${item.name} - ${item.price} - Quantity: ${item.quantity}`)
              .join(", ")
          : "",
      cartDetails: cartDetails,
      totalPrice: `$${totalPrice}`,
      address: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (values: FormType) => {
    console.log("Form Values on Submit: ", values); // Debugging
    setLoading(true);
    try {
      await client.create({
        _type: "checkoutForm",
        name: values.fullName,
        email: values.email,
        subject: values.subject,
        message: values.message,
        address: values.address,
        phoneNumber: values.phoneNumber,
        cartDetails: values.cartDetails.map(item => ({
          name: item.name,
          price: parseFloat(item.price.replace('$', '')), // Ensure price is stored as a number
          quantity: item.quantity,
          imageUrl: item.imageUrl,
        })),
        totalPrice: parseFloat(values.totalPrice.replace('$', '')), // Convert total price to a number
      });
      alert("Your message has been submitted!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-[#272343] py-8">
      <Form {...form}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold font-sans mb-2">Contact Us</h2>
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
                  <Input
                    placeholder="Enter your phone number"
                    {...field}
                    value={field.value || ""}
                    className="bg-white"
                  />
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
                  <Input
                    placeholder="Enter your address"
                    {...field}
                    value={field.value || ""}
                    className="bg-white"
                  />
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
                  <Input placeholder="Subject" {...field} value={field.value || ""} className="bg-white" />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="mb-1 mt-1">Message</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Message"
                    {...field}
                    value={field.value || ""}
                    className="bg-white text-sm font-medium border-2 pt-3 pl-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Cart Product Details Section */}
          <div className="space-y-4 grid sm:grid-cols-2">
            {cartDetails.map((product, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">{product.name}</p>
                  <div className="flex gap-3">
                    <p className="text-xs text-gray-500">Price - {product.price}</p>
                    <p className="text-xs text-gray-500">Quantity - {product.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Display Total Price */}
          {cartDetails.length > 0 && (
            <div className="mt-4 text-lg font-semibold">
              <p>Total Price: {`$${totalPrice}`}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="flex text-sm font-semibold py-3 px-7 rounded-lg bg-[#029FAE] hover:bg-cyan-600 text-white mx-6 transition-transform transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
