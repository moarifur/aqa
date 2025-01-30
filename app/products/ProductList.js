import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products}) => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-10 m-5 p-5">
        {products.map((product) => (
            <ProductItem key={product.id} product={product}/>
        ))}
    </div>

);

export default ProductList;
