import React from 'react';

const Product = ({ info, products = [] }) => {
    return (
        <div className="my-32 px-10">
            <div className="h-screen w-full grid grid-cols-1 md:grid-cols-5 gap-6" data-aos="fade-up">
                {/* First Column: Product Info */}
                <div className="col-span-1 flex flex-col justify-center items-center bg-white text-black p-8">
                    <h1 className="text-5xl font-bold mb-6">{info.title}</h1>
                    <p className="text-lg font-light text-center mb-6">{info.subtitle}</p>
                    <a
                        className="text-black px-6 py-3 inline-flex items-center gap-3 border-2 border-black hover:bg-white hover:text-black transition"
                        href={info?.link}
                    >
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="22" viewBox="0 0 39 22" fill="none">
                            <path d="M30.2274 5.43579L35.7916 11L30.2274 16.5641" stroke="black"
                                  strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path d="M1.41663 11L35.3333 11"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </svg>
                    </a>
                </div>

                {/* Product Grid (2nd - 5th Columns) */}
                <div className="col-span-4 grid grid-cols-4 gap-1">
                    {products.map((item, index) => (
                        <a
                            key={index}
                            href={item.link || '#'}
                            className="relative group overflow-hidden flex justify-center items-center"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                 style={{ backgroundImage: `url(${item.imgURL})` }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 group-hover:bg-opacity-50"></div>

                            {/* Title */}
                            <h2 className="absolute bottom-5 text-white text-2xl font-semibold">
                                {item.title}
                            </h2>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
