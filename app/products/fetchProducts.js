import {productData} from "@/app/products/data";

export const fetchProductsByCategory =
    (category) => productData
        .filter(product => product.category === category)
