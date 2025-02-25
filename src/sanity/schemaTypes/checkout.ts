export default {
  name: 'checkoutForm',
  title: 'Checkout Form',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'subject', title: 'Subject', type: 'string' },
    { name: 'message', title: 'Message', type: 'text' },
    { name: 'address', title: 'Address', type: 'string' },
    { name: 'phoneNumber', title: 'Phone Number', type: 'string' },
    { name: 'cartDetails', title: 'Cart Details', type: 'array', of: [{ type: 'object', fields: [
      { name: 'name', title: 'Product Name', type: 'string' },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'quantity', title: 'Quantity', type: 'number' },
      { name: 'imageUrl', title: 'Image URL', type: 'string' }
    ]}] },
    { name: 'totalPrice', title: 'Total Price', type: 'number' },
  ],
};
