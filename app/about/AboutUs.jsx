import {about_us_info, history, goal, mission, vision} from "@/app/about/data";

const AboutUs = () => {
    return (
        <div className={`my-16 w-full`}>
            <h1 className={`px-60 text-slate-700 tracking-wider leading-loose`}>{about_us_info.description}</h1>

            {/*--------------------------------- Vision ---------------------------------*/}
            <div className="px-60 my-16 flex items-center justify-center gap-20">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-64 object-cover"
                        src={vision.imgURL}
                        alt="wh us"
                    />
                    <div className="">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{vision.title}</p>
                        <p className='text-slate-900 tracking-wider leading-loose'>{vision.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- Mission ---------------------------------*/}
            <div className="px-60 my-16 flex items-center justify-center gap-20 flex-row-reverse">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-64 object-cover"
                        src={mission.imgURL}
                        alt="wh us"
                    />
                    <div className="">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{mission.title}</p>
                        <p className='text-slate-900 tracking-wider'>{mission.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- Goal ---------------------------------*/}
            <div className="px-60 my-16 flex items-center justify-center gap-20 flex-row-reverse">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-64 object-cover"
                        src={goal.imgURL}
                        alt="why us"
                    />
                    <div className="">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{goal.title}</p>
                        <p className='text-slate-900 tracking-wider'>{goal.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- History ---------------------------------*/}
            <div
                className="relative my-16 h-[450px] flex items-center justify-center gap-20 bg-[center_top]"
                style={{
                    backgroundImage: `url(${history.imgURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative flex items-start justify-center gap-16 z-10">
                    <div className="px-60 max-w-full">
                        <p className="text-white font-bold text-5xl tracking-wide mb-32">
                            {history.title}
                        </p>
                        <p className="text-white tracking-wider text-2xl">{history.description}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;