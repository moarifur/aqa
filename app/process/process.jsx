import React from 'react';
import {process_info} from "@/lib/data";
import {compliance, concept, merchandising, quality, shipping, showcase} from "@/app/process/data";

const Process = () => {
    return (
        <div className={`my-16 w-full`}>
            <h1 className={`px-60 text-slate-700 tracking-wider leading-loose`}>{process_info.description}</h1>

            {/*--------------------------------- concept ---------------------------------*/}
            <div className="px-60 my-16 flex items-center justify-center gap-20">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-64 object-cover"
                        src={concept.imgURL}
                        alt="wh us"
                    />
                    <div className="">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{concept.title}</p>
                        <p className='text-slate-900 tracking-wider leading-loose'>{concept.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- merchandising ---------------------------------*/}
            <div className="px-60 my-16 flex items-center justify-center gap-20 flex-row-reverse">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-64 object-cover"
                        src={merchandising.imgURL}
                        alt="wh us"
                    />
                    <div className="">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{merchandising.title}</p>
                        <p className='text-slate-900 tracking-wider'>{merchandising.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- quality ---------------------------------*/}
            <div className="px-60 my-16 flex items-center justify-center gap-20 flex-row-reverse">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-64 object-cover"
                        src={quality.imgURL}
                        alt="why us"
                    />
                    <div className="">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{quality.title}</p>
                        <p className='text-slate-900 tracking-wider'>{quality.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- compliance ---------------------------------*/}
            <div
                className="relative my-16 h-[450px] flex items-center justify-center gap-20 bg-[center_top]"
                style={{
                    backgroundImage: `url(${compliance.imgURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative flex items-start justify-center gap-16 z-10">
                    <div className="px-60 max-w-full">
                        <p className="text-white font-bold text-5xl tracking-wide mb-32">
                            {compliance.title}
                        </p>
                        <p className="text-white tracking-wider text-2xl">{compliance.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- shipping ---------------------------------*/}
            <div className="px-60 my-16 flex items-center justify-center gap-20 flex-row-reverse">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-64 object-cover"
                        src={shipping.imgURL}
                        alt="wh us"
                    />
                    <div className="">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{shipping.title}</p>
                        <p className='text-slate-900 tracking-wider'>{shipping.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- showcase ---------------------------------*/}
            <div className="px-60 my-16 flex items-center justify-center gap-20 flex-row-reverse">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-64 object-cover"
                        src={showcase.imgURL}
                        alt="why us"
                    />
                    <div className="">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{showcase.title}</p>
                        <p className='text-slate-900 tracking-wider'>{showcase.description}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Process;