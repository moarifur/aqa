import React from 'react';

const Hero = ({info, background}) => {
    return (
        <div className="h-screen w-full relative overflow-hidden flex items-center" data-aos="fade-up">

            {/* Image Container: Stretched from top to bottom */}
            <div className="absolute top-0 left-0 h-screen w-full flex">
                {background?.map((item, index) => (
                    <img
                        key={index}
                        src={item.imgURL}
                        alt=""
                        className="h-screen w-1/5 object-cover"
                    />
                ))}
            </div>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>

            {/* Text Content */}
            <div
                className="absolute text-center w-full top-[50%] font-sans font-semibold text-white">
                <h1 className="text-7xl leading-tight mb-5">{info.title}</h1>
            </div>
        </div>
    );
};

export default Hero;