import React from 'react';
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import OurProcess from "@/app/components/OurProcess";
import Product from "@/app/components/Product";
import {about_background, about_info, process_info, process_background, product_info, product_details} from "@/lib/data";

const HomePage = () => {
    return (
        <>
            <Hero />
            <About info={about_info} background={about_background}/>
            <OurProcess info={process_info} background={process_background}/>
            <Product info={product_info} products={product_details}/>
        </>
    );
};

export default HomePage;