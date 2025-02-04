import { productData } from "@/app/products/data";

// Generate static paths for all products
export async function generateStaticParams() {
    return productData.map((_, index) => ({
        slug: index.toString(),
    }));
}

const ProductDetailPage = ({ params }) => {
    // Extract the product details based on the slug
    const detailData = productData[parseInt(params.slug)];

    // Handle case where product is not found
    if (!detailData) {
        return <p className="text-center text-xl">Product not found.</p>;
    }

    return (
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center md:my-48">
            {/* Product Image */}
            <div className="lg:w-1/2 flex justify-end">
                <img
                    src={detailData.imgURL}
                    alt={detailData.title}
                    className="w-[600px] max-h-screen aspect-square object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6 lg:w-1/2">
                {/* Category */}
                <div className="text-lg font-bold text-gray-300 tracking-wider font-serif">{detailData.category}</div>

                {/* Title and Description */}
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-2xl leading-loose tracking-wider font-sans">{detailData.title}</h1> {/* Title */}
                    <p className="text-gray-700 leading-loose tracking-wider font-mono text-3xl">{detailData.description}</p> {/* Description */}
                </div>
            </div>
        </div>

    );
};

export default ProductDetailPage;