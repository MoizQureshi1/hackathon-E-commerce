"use client"; // This directive ensures the component runs only on the client side in a Next.js app.
// Install @stripe/stripe-js & @stripe/react-stripe-js
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "@/app/checkout/action";

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

  // While waiting for the client secret, show a loading message
  if (!clientSecret) {
    return <div className="text-3xl text-center font-extrabold my-52">Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h1 className="text-xl font-bold my-4">Checkout</h1>
      {/* Wrap the payment form inside the Elements provider with Stripe instance and client secret */}
      <Elements stripe={stripePromise} 
      options={{ clientSecret }}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

// Component that handles the payment form
function PaymentForm() {
  const stripe = useStripe(); // Hook to access Stripe methods
  const elements = useElements(); // Hook to access Stripe elements
  const [isProcessing, setIsProcessing] = useState(false); // State to manage loading state while processing
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to show error messages
  const [fullName, setFullName] = useState(""); // State for full name input
  const [address, setAddress] = useState(""); // State for address input

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh when submitting the form

    if (!stripe || !elements) return; // Ensure Stripe is loaded before proceeding

    setIsProcessing(true); // Indicate that the payment is being processed

    // Attempt to confirm the payment
    const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.href, // Where to redirect after payment
          // You can also send the full name and address to your server for future reference
          shipping: {
            name: fullName,
            address: {
              line1: address, // You can expand this for more address fields
            },
          },
        },
        redirect: "if_required", // Redirect if required by the payment method
      });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred"); // Display error message if payment fails
      setIsProcessing(false);
    } else {
      // Payment was successful
      setErrorMessage(null);
      alert("Payment successful!"); // Notify the user
      setIsProcessing(false);
      // You can optionally redirect the user to a success page here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Stripe's payment element (handles input fields for card details, etc.) */}
      <PaymentElement />
        {/* Full Name Input */}
        <div className="flex flex-col mt-3">
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
        {/* Address Input */}
      <div className="flex flex-col mt-3">
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
      <button type="submit" 
      disabled={!stripe || isProcessing} className="flex text-sm font-semibold py-3 px-7 my-4 rounded-lg bg-[#029FAE] hover:bg-cyan-600 text-white transition-transform transform hover:scale-105">
        {isProcessing ? "Processing..." : "Pay Now"} {/* Show dynamic button text */}
      </button>
      {/* Display any error messages if they occur */}
      {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
    </form>
  );
}