"use client"

import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import {fetchProductsByCategory} from './fetchProducts';

const ProductPage = () => {

    const categories = ['Women', 'Men', 'Kids', 'Accessories']
    const [category, setCategory] = useState('Women');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchedProducts = fetchProductsByCategory(category);
        setProducts(fetchedProducts);
    }, [category]);

    return (
        <div className='mt-20 mb-20'>
            <h1 className='p-9 text-center text-5xl font-extrabold font-serif'>Our Products</h1>

            {/* Choice Menu */}
            <div>
                <div className="text-center w-full p-3 sticky">
                    {
                        categories.map(category => {
                            return (
                                <button
                                    key={crypto.randomUUID()}
                                    className={`
                                    bg-red-950 hover:bg-sky-700 mr-3 p-2 rounded-md text-white pl-5 pr-5
                                    active:bg-black
                                    `}
                                    onClick={() => setCategory(category)}
                                >
                                    {category}
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            <ProductList products={products}/>
        </div>
    );
};

export default ProductPage;