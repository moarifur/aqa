import { productData } from "@/app/products/data";

export async function generateStaticParams() {
    return productData.map((product) => ({
        slug: product.id.toString(),
    }));
}

const ProductDetailPage = ({ params }) => {
    const detailData = productData.find(
        (product) => product.id === parseInt(params.slug)
    );

    if (!detailData) {
        return <p className="text-center text-xl">Product not found.</p>;
    }

    return (
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center md:mt-16 mb-0">
            <div className="flex flex-col gap-6 lg:w-1/2 ">
                <img
                    src={detailData.imgURL}
                    alt={detailData.title}
                    className="w-[800px] h-[800px] aspect-square"
                />
                <div className="flex flex-col gap-4 lg:w-2/4">
                    <h1 className="text-3xl font-bold">{detailData.title}</h1>
                    <p className="text-gray-700">{detailData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
