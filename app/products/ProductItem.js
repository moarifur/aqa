import React from 'react';

const ProductItem = ({product}) => (
    <div key={product.id} className="col-span-2 rounded-md shadow bg-gray-900 mb-10">
        <div className="h-3/4">
            <a href={`products/${product.id}`}>
                <img src={product.imgURL} alt=""/>
            </a>
        </div>
        <div className='text-white pl-5 pr-5'>
            <h1 className='text-xl font-bold mt-2'>{product.title}</h1>
            <p className='text-sm text-neutral-400 mt-1 mb-10'>{product.description}</p>
        </div>
    </div>
);

export default ProductItem;


