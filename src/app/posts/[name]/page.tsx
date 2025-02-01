import { client } from "@/sanity/lib/client"; // Sanity client to fetch data
import { Product } from "@/types"; // Assuming you have a Product type defined
import { urlFor } from "@/sanity/lib/image"; // For handling image URLs from Sanity
import { LuShoppingCart } from "react-icons/lu"; // Cart icon for the Add to Cart button

// This is the product page component
const ProductPage = async ({ params }: { params: { name: string } }) => {
  const { name } = params; // Extract the 'name' parameter from the URL

  // Fetch the product data from Sanity using 'name' as the product ID
  const product: Product = await client.fetch(`
    *[_type == "products" && _id == $id][0] {
      _id,
      title,
      price,
      priceWithoutDiscount,
      badge,
      "imageURL": image.asset->url,
      description,
      inventory,
      tags,
    }
  `, { id: name });

  // If no product is found, show a "Product Not Found" message
  if (!product) {
    return <h2 className="text-2xl font-bold text-center mt-10">Product Not Found</h2>;
  }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center my-28 mx-20 md:mx-36">
        {product.imageURL && (
          <img
            src={urlFor(product.imageURL).url()}
            alt={product.title}
            width={1000}
            height={500}
            className="rounded-lg"
          />
        )}
        <div className="md:ml-14 mt-2">
          <h2 className="text-indigo-950 text-4xl font-bold lg:mr-64">{product.title}</h2>
          <p className="bg-cyan-600 p-1 rounded-2xl sm:mr-72 lg:mr-96 text-center text-white mt-4">$20.00 USD</p>
          <p className="border-t-2 mt-7 pt-8 lg:mr-40 text-slate-400">{product.description}</p>
          <button className="flex p-3 px-3 bg-cyan-600 text-white my-6 rounded-md transition-transform transform hover:scale-105">
            <LuShoppingCart className="mr-1 text-xl" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

// Static params generation for pre-building the pages
export async function generateStaticParams() {
  const products = await client.fetch(`
    *[_type == "products"] {
      _id
    }
  `);

  // Generate static paths for each product (_id used as the dynamic route 'name')
  return products.map((product) => ({
    name: product._id, // Use the product _id to generate dynamic route
  }));
}