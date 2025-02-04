"use client";

import React, { useState, useEffect } from "react";
import { fetchProductsByCategory } from "./data";
import Link from "next/link";

const categories = [
    'Womenswear', 'Menswear', 'Kidswear', 'Knitwear',
    'Denim', 'Activewear', 'Outerwear', 'Footwear'
];

const ProductPage = () => {
    const [category, setCategory] = useState('Womenswear');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(fetchProductsByCategory(category));
    }, [category]);

    return (
        <div className="mt-20 mb-20">
            <h1 className="p-9 text-center text-5xl font-extrabold font-serif">Our Products</h1>

            {/* Category Buttons */}
            <div className="text-center w-full p-3 sticky">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        className="bg-red-950 hover:bg-sky-700 mr-3 p-2 rounded-md text-white pl-5 pr-5 active:bg-black"
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-10 m-5 p-5">
                {products.length ? (
                    products.map((product, index) => (
                        <div key={index} className="col-span-2 rounded-md shadow bg-gray-900 mb-10">
                            <div className="h-3/4">
                                <Link href={`/products/${index}`}> {/* Use Next.js Link for navigation */}
                                    <img src={product.imgURL} alt={product.title} className="w-full h-full object-cover" />
                                </Link>
                            </div>
                            <div className="text-white px-5">
                                <h1 className="text-xl font-bold mt-2">{product.title}</h1>
                                <p className="text-sm text-neutral-400 mt-1 mb-10">{product.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No products available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default ProductPage;