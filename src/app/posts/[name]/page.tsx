'use client'
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Sanity client to fetch data
import { Product } from "@/types"; // Assuming you have a Product type defined
import { LuShoppingCart } from "react-icons/lu"; // Cart icon for the Add to Cart button
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use next/navigation to use `router.push`

// Component to display product details
const ProductPage = ({ product }: { product: Product }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  // Handle Add to Cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
    alert(`${product.title} added to cart!`);
    router.push("/cart"); // Navigate to Cart page after adding to cart
  };

  // Fetch cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <>
    <div className="max-w-screen-2xl mx-auto">
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
    </div>
    </>
  );
};

// Fetch product data dynamically from Sanity
const getProductData = async (id: string) => {
  try {
    const posts: Product[] = await client.fetch(`
      *[_type == "products" && _id == $id] {
        _id,
        title,
        price,
        "image_url": image.asset->url,
        description
      }
    `, { id });

    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

// Dynamic Route Handler
const ProductPageWrapper = ({ params }: { params: { name: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductData(params.name);
      setProduct(productData);
      setLoading(false);
    };

    fetchProduct();
  }, [params.name]);

  if (loading) return <p className="text-3xl text-center font-extrabold my-52">Loading...</p>;

  return product ? <ProductPage product={product} /> : <p className="text-3xl text-center font-extrabold my-52">Product not found.</p>;
};

export default ProductPageWrapper;
