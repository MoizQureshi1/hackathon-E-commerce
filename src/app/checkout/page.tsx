"use client"; // This directive ensures the component runs only on the client side in a Next.js app.
// Install @stripe/stripe-js & @stripe/react-stripe-js
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";

// Initialize Stripe with the public key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckoutPage() {
  // State to store the client secret, which is required for processing the payment
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // When the component mounts, request a new PaymentIntent from the server
    createPaymentIntent()
      .then((res) => {
          setClientSecret(res.clientSecret); // Save the client secret to state
      })
  }, []);
  console.log(clientSecret);

  if (!clientSecret) {
    return <div className="text-3xl text-center font-extrabold my-52">Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1 className="text-xl font-bold my-4">Checkout</h1>

      {/* Stripe Elements Setup */}
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);


    // Confirm the payment
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
        shipping: {
          name: fullName,
          address: {
            line1: address,
          },
        },
      },
      redirect: "if_required",
    });

    if (error) {
      console.error("Error during payment confirmation:", error); // Log the error for debugging
      setErrorMessage(error.message || "An unknown error occurred");
      setIsProcessing(false);
    } else {
      setErrorMessage(null);
      alert("Payment successful!");
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-lg">

      {/* Stripe's Payment Element */}
      <PaymentElement className="my-4" />

      {/* Shipping Details */}


      <div className="flex flex-col mt-4">
        <label htmlFor="fullName" className="text-gray-700">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          placeholder="Your Full Name"
          className="py-2 px-3 border-2 rounded-sm shadow-sm text-black"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="address" className="text-gray-700">Address</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          placeholder="123 Main St, City, Country"
          className="py-2 px-3 border-2 rounded-sm shadow-sm text-black"
        />
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="flex text-sm font-semibold py-3 px-7 my-4 rounded-lg bg-[#029FAE] hover:bg-cyan-600 text-white transition-transform transform hover:scale-105"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>

      {/* Error Message */}
      {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
    </form>
  );
}
