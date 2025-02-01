'use client';
import Image from "next/image";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const heros = [
    {
        name: "chair",
        title: "Library Stool Chair",
        price: "$20.00 USD",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus modi dignissimos fugiat sint provident cum laboriosam minus placeat.",
        button: "Add to Card",
        width: 1000,
        imageURL: "/images/chair.png",
    },
    {
        name: "green-sofa",
        title: "Green Sofa",
        price: "$250.00 USD",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus modi dignissimos fugiat sint provident cum laboriosam minus placeat.",
        button: "Add to Cart",
        width: 500,
        imageURL: "/images/bigsofa.png",
    },
    {
        name: "winger-chair",
        title: "Winger Chair",
        price: "$120.00 USD",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus modi dignissimos fugiat sint provident cum laboriosam minus placeat.",
        button: "Add to Cart",
        width: 1000,
        imageURL: "/images/black3chair.png",
    },
    {
        name: "black-chair",
        title: "Black Chair",
        price: "$150.00 USD",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus modi dignissimos fugiat sint provident cum laboriosam minus placeat.",
        button: "Add to Cart",
        width: 1000,
        imageURL: "/images/blackchair.png",
    },
];

export default function Hero({ params }: { params: { name: string } }) {
    const { name } = params;
    const hero = heros.find((p) => p.name === name);

    if (!hero) {
        return (
            <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
        );
    }

    const renderParagraphs = (description: string) => {
        return description.split("/n").map((para, index) => (
            <p key={index} className="mt-4 text-justify">{para.trim()}</p>
        ));
    };

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center my-28 mx-20 md:mx-36">
                {hero.imageURL && (
                    <Image
                        src={hero.imageURL}
                        alt={hero.title}
                        width={hero.width}
                        height={500}
                        className="rounded-lg"
                    />
                )}
                <div className="md:ml-14 mt-2">
                    <h2 className="text-indigo-950 text-4xl font-bold lg:mr-64">{hero.title}</h2>
                    <p className="bg-cyan-600 p-1 rounded-2xl sm:mr-72 lg:mr-96 text-center text-white mt-4">{hero.price}</p>
                    <p className="border-t-2 mt-7 pt-8 lg:mr-40 text-slate-400">{renderParagraphs(hero.description)}</p>
                    <button className="flex p-3 px-3 bg-cyan-600 text-white my-6 rounded-md transition-transform transform hover:scale-105">
                        <LuShoppingCart className="mr-1 text-xl" />
                        {hero.button}
                    </button>
                </div>
            </div>
        </div>
    );
}