'use client';
import { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client"; // Sanity client to fetch data
import { LuShoppingCart } from "react-icons/lu"; // Cart icon for the Add to Cart button
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // To navigate to the cart page

// Define the Product type
interface Product {
  _id: string;
  title: string;
  price: string;
  priceWithoutDiscount: string;
  badge: string;
  image_url: string;
  category: { _id: string; title: string };
  description: string;
  inventory: number;
  tags: string[];
  featuredProducts?: Product[]; // Optional field for featured products
}

// Function to fetch the product data from Sanity CMS
const getProductData = async (id: string): Promise<Product | null> => {
  try {
    const posts: Product[] = await client.fetch(`
      *[_type == "products" && _id == $id] {
        _id,
        title,
        price,
        "image_url": image.asset->url,
        description,
        featuredProducts[]->{
          _id,
          title,
          price,
          "image_url": image.asset->url
        }
      }
    `, { id });

    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

// Function to fetch featured products from Sanity
const getFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const featured: Product[] = await client.fetch(`
      *[_type == "products" &&  "featured" in tags][0..4] {
        _id,
        title,
        price,
        "image_url": image.asset->url
      }
    `);
    return featured;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
};

// Component to display product details and handle adding to the cart
const ProductPage = ({ product, featuredProducts }: { product: Product; featuredProducts: Product[] }) => {
  const router = useRouter(); // Use Next.js router to navigate to cart page

  // Handle Add to Cart functionality
  const addToCart = (product: Product) => {
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Add new product to the existing cart
    const updatedCart = [...existingCart, product];

    // Store updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${product.title} added to cart!`);

    // Redirect to the cart page after adding to the cart
    router.push('/cart');  // Navigates to the cart/checkout page
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row justify-center my-28 mx-20 md:mx-36">
        {product.image_url && (
          <Image
            src={product.image_url}
            alt={product.title}
            width={1000}
            height={500}
            className="rounded-lg"
          />
        )}
        <div className="md:ml-14 mt-2">
          <h2 className="text-indigo-950 text-4xl font-bold lg:mr-64">{product.title}</h2>
          <p className="bg-cyan-600 p-1 rounded-2xl sm:mr-72 lg:mr-96 text-center text-white mt-4">${product.price}.00 USD</p>
          <p className="border-t-2 mt-7 pt-8 lg:mr-40 text-slate-400">{product.description}</p>
          <button 
            onClick={() => addToCart(product)} 
            className="flex p-3 px-3 bg-cyan-600 text-white my-6 rounded-md transition-transform transform hover:scale-105"
          >
            <LuShoppingCart className="mr-1 text-xl" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="flex justify-center md:justify-around mr-14 sm:mr-0 gap-4 sm:gap-14 lg:gap-96 lg:mr-40">
        <h2 className="text-2xl font-bold text-center md:text-left md:ml-10">FEATURED PRODUCTS</h2>
        <button className="border-b-2 mb-7 mt-3 border-black font-bold">View all</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mx-6 lg:mx-40 mb-20">
        {featuredProducts.map((feature) => (
          <div key={feature._id}>
            <div className="flex justify-center transition-transform transform hover:scale-105">
              <Link href={`/posts/${feature._id}`}>
                <Image src={feature.image_url} alt={feature.title} width={180} height={500} className="rounded-t-lg"/>
                <div className="flex justify-between">
                  <p className="pt-2 text-md font-semibold text-slate-500 mt-0.5">{feature.title}</p>
                  <p className="text-black-400 pt-2 font-semibold text-lg">${feature.price}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
};

// Dynamic Route Handler Component to Fetch Product Data Based on `params`
const ProductPageWrapper = ({ params }: { params: Promise<{ name: string }> }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]); // Featured products state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const resolvedParams = await params; // Unwrap the promise
      const productData = await getProductData(resolvedParams.name); // Get product data using the `name` param
      const featuredData = await getFeaturedProducts(); // Get featured products
      setProduct(productData);
      setFeaturedProducts(featuredData);
      setLoading(false);
    };

    fetchProduct();
  }, [params]); // Re-fetch when `params` changes

  if (loading) return <p className="text-3xl text-center font-extrabold my-52">Loading...</p>;

  return product ? <ProductPage product={product} featuredProducts={featuredProducts} /> : <p className="text-3xl text-center font-extrabold my-52">Product not found.</p>;
};

export default ProductPageWrapper;
