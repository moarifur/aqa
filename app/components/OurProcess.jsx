import React from 'react';

const OurProcess = ({ info, background = [] }) => {
    return (
        <div className="mt-32">
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
                <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>

                {/* Text Content */}
                <div
                    className="absolute left-10 top-[65%] transform -translate-y-1/2 w-full font-sans font-light text-white">
                    <h1 className="text-7xl leading-tight mb-5">{info.title}</h1>
                    <p className="text-2xl mb-5 font-thin">{info.subtitle}</p>
                    <a
                        className="text-white px-6 py-3 inline-flex items-center gap-3 border-2 border-white hover:bg-black transition"
                        href={info?.link}
                    >
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="22" viewBox="0 0 39 22" fill="none">
                            <path d="M30.2274 5.43579L35.7916 11L30.2274 16.5641" stroke="white"
                                  strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path d="M1.41663 11L35.3333 11"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;