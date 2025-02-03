import Hero from "@/app/about/Hero";
import AboutUs from "@/app/about/AboutUs";
import OurProcess from "@/app/components/OurProcess";
import React from "react";
import {about_us_background, about_us_info} from "@/app/about/data";
import {process_background, process_info} from "@/lib/data";

const Page = () => {
    return (
        <div className={`my-0`}>
            <Hero info={about_us_info} background={about_us_background}/>
            <AboutUs />
            <OurProcess info={process_info} background={process_background}/>
        </div>
    );
};

export default Page;