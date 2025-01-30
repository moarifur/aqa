import { discoverData } from "@/app/discover/data";

const DiscoverPage = () => {
    return (
        <div className=''>
            <h1 className='text-center text-5xl font-extrabold font-serif pt-16 md:pt-24 md:mb-14'>Discover Us</h1>
            <div className="grid grid-cols-1 gap-4">
                {
                    discoverData.map((dData, index) => (
                        <div key={index} className="container mx-auto p-3 md:p-10 mb-2">
                            <div className="bg-neutral-300 rounded-xl">
                                <div className="md:flex md:items-center md:justify-between">
                                    {
                                        dData.imgURL && (
                                            <img
                                                src={dData.imgURL}
                                                className='md:w-1/2 md:h-[500px] rounded-none object-cover'
                                                alt=""
                                            />
                                        )
                                    }

                                    {
                                        dData.videoURL && (
                                            <video
                                                className='md:w-1/2 md:h-[500px] rounded-none object-cover'
                                                muted
                                                autoPlay
                                                loop
                                            >
                                                <source src={dData.videoURL} />
                                            </video>
                                        )
                                    }

                                    <div className='md:pl-10 md:pr-10 mt-3 md:mt-0'>
                                        <h1 className='font-bold text-center md:text-start text-2xl mb-3 md:mb-1'>{dData.title}</h1>
                                        <h1 className='font-bold text-center md:text-start text-gray-700'>
                                            {dData.subtitle}
                                        </h1>
                                        <p className='text-sm text-center md:text-start text-neutral-600 font-serif p-5 md:p-0 md:mt-3'>
                                            {dData.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DiscoverPage;