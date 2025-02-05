'use client';
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Sanity client to fetch data
import { LuShoppingCart } from "react-icons/lu"; // Cart icon for the Add to Cart button
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use next/navigation to use `router.push`
import Link from "next/link";

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
}

// Fetch featured items (This is outside the component to keep the code clean)
const CMSItem: Product[] = await client.fetch(`
  *[_type == "products" && "featured" in tags][0..4] {
    _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    "image_url": image.asset->url,
    category->{
      _id,
      title
    },
    description,
    inventory,
    tags,
  }
`);

console.log(CMSItem);

// Component to display product details
const ProductPage = ({ product }: { product: Product }) => {
  const [, setCart] = useState<Product[]>([]); // Use the state for cart
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
      <div className="flex justify-center md:justify-around mr-14 sm:mr-0 gap-4 sm:gap-14 lg:gap-96 lg:mr-40">
        <h2 className="text-2xl font-bold text-center md:text-left md:ml-10">FEATURED PRODUCTS</h2>
        <button className="border-b-2 mb-7 mt-3 border-black font-bold">View all</button>
      </div>
      <div className="flex flex-col md:flex-row justify-around gap-11 lg:mx-36 md:mx-16 mb-24">
        {CMSItem.map((feature) => (
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

// Dynamic Route Handler (params is now a Promise)
const ProductPageWrapper = ({ params }: { params: Promise<{ name: string }> }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resolvedParams = await params;  // Unwrap the Promise
        const productData = await getProductData(resolvedParams.name); // Fetch product by ID
        if (productData) {
          setProduct(productData);
        } else {
          console.error("Product not found!");
        }
      } catch (error) {
        console.error("Error in fetching product:", error);
      } finally {
        setLoading(false); // Stop loading state after data is fetched
      }
    };

    fetchProduct();
  }, [params]);  // Re-run effect when params change

  if (loading) return <p className="text-3xl text-center font-extrabold my-52">Loading...</p>;

  return product ? <ProductPage product={product} /> : <p className="text-3xl text-center font-extrabold my-52">Product not found.</p>;
};

// Dynamic route handler for the [name] path
export default function Page({ params }: { params: { name: string } }) {
  return (
    <div>
      <ProductPageWrapper params={Promise.resolve(params)} />
    </div>
  );
}