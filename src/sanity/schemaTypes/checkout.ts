import { Rule } from "@sanity/types";

export default {
  name: "checkoutForm",
  title: "Checkout Form",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: "subject",
      title: "Subject",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).max(100),  // Ensuring subject is not empty
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule: Rule) => Rule.required().min(10).max(500),  // Ensuring message has content
    },
    {
      name: "address", // Address field
      title: "Address",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(5).max(255), // Ensuring address is provided
    },
    {
      name: "phoneNumber", // Phone Number field
      title: "Phone Number",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(10).max(15), // Phone number length validation
    },
    {
      name: "cartDetails", // Cart details field (products in the cart)
      title: "Cart Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Product Name",
              type: "string",
              validation: (Rule: Rule) => Rule.required(), // Ensuring the product name is required
            },
            {
              name: "price",
              title: "Product Price",
              type: "string",
              validation: (Rule: Rule) => Rule.required(), // Ensuring price is required
            },
            {
              name: "quantity",
              title: "Product quantity",
              type: "number",
              validation: (Rule: Rule) => Rule.required(), // Ensuring price is required
            },
            {
              name: "imageUrl",
              title: "Product Image URL",
              type: "string",
              validation: (Rule: Rule) => Rule.required(), // Ensuring image URL is provided
            },
          ],
        },
      ],
    },
    {
      name: "totalPrice", // Total price field
      title: "Total Price",
      type: "string",
      validation: (Rule: Rule) => Rule.required(), // Ensuring total price is provided
    },
  ],
};
