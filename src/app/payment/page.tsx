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

  // While waiting for the client secret, show a loading message
  if (!clientSecret) {
    return <div className="text-3xl text-center font-extrabold my-52">Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h1>Checkout</h1>
      {/* Wrap the payment form inside the Elements provider with Stripe instance and client secret */}
      <Elements stripe={stripePromise} 
      options={{ clientSecret }}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

function PaymentForm() {
  const stripe = useStripe(); // Hook to access Stripe methods
  const elements = useElements(); // Hook to access Stripe elements
  const [isProcessing, setIsProcessing] = useState(false); // State to manage loading state while processing
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message handling

  const [formData, setFormData] = useState({
    name: "",
    address: "",
  }); // State to handle the name and address input

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh when submitting the form

    if (!stripe || !elements) return; // Ensure Stripe is loaded before proceeding

    setIsProcessing(true); // Indicate that the payment is being processed

    // Attempt to confirm the payment
    const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: formData.name, // Add name to billing details
              address: {
                line1: formData.address, // Add address to billing details
              },
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

      {/* Shipping Section */}
      <div className="mb-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="mt-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="border-2 py-2 pr-44 pl-8 rounded-lg mb-3"
          />
        </div>

        {/* Address Input */}
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
            className="border-2 py-2 pr-44 pl-8 rounded-lg mb-3"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="flex text-sm font-semibold py-3 px-7 rounded-lg bg-[#029FAE] hover:bg-cyan-600 text-white mb-6 transition-transform transform hover:scale-105"
      >
        {isProcessing ? "Processing..." : "Pay Now"} {/* Show dynamic button text */}
      </button>

      {/* Display any error messages if they occur */}
      {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
    </form>
  );
}