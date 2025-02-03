import {about_us_info, history, goal, mission, vision} from "@/app/about/data";

const AboutUs = () => {
    return (
        <div className={`my-16 w-full`}>
            <h1 className={`px-60 text-slate-700 tracking-wider leading-loose`}>{about_us_info.description}</h1>

            {/*--------------------------------- Vision ---------------------------------*/}
            <div className="my-16 flex items-center justify-center gap-20">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-[300px] object-cover"
                        src={vision.imgURL}
                        alt="wh us"
                    />
                    <div className="max-w-96">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{vision.title}</p>
                        <p className='text-slate-900 tracking-wider'>{vision.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- Mission ---------------------------------*/}
            <div className="my-16 flex items-center justify-center gap-20 flex-row-reverse">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-[300px] object-cover"
                        src={mission.imgURL}
                        alt="wh us"
                    />
                    <div className="max-w-96">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{mission.title}</p>
                        <p className='text-slate-900 tracking-wider'>{mission.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- Goal ---------------------------------*/}
            <div className="my-16 flex items-center justify-center gap-20 flex-row-reverse">
                <div className="flex items-start justify-center gap-16">
                    <img
                        className="max-w-[40%] h-[300px] object-cover"
                        src={goal.imgURL}
                        alt="wh us"
                    />
                    <div className="max-w-96">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{goal.title}</p>
                        <p className='text-slate-900 tracking-wider'>{goal.description}</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------- History ---------------------------------*/}
            <div
                className='my-16 flex items-center justify-center gap-20 bg-[center_top]'
                style={{
                    backgroundImage: `url(${history.imgURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex items-start justify-center gap-16">
                    <div className="max-w-96">
                        <p className='text-slate-400 font-bold text-lg tracking-wide mb-10'>{history.title}</p>
                        <p className='text-white tracking-wider'>{history.description}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;