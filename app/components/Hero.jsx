import { Carousel } from 'antd';

// data source
const items = [
    {
        title: 'AQF Represents AQA',
        subtitle: 'Assurance Quality Apparels',
        imgURL: '/images/img01.jpg'
    },
    {
        title: 'Assurance Quality Apparels',
        subtitle: 'Believe in  Quality, Commitment & Service',
        imgURL: '/images/img02.jpg'
    },
    {
        title: 'AQA',
        subtitle: 'Designing | Sourcing | Manufacturing',
        imgURL: '/images/img03.jpg'
    },
    {
        title: 'AQA',
        subtitle: 'Your Global Partner in Textile Business',
        imgURL: '/images/img04.jpg'
    },
    {
        title: 'Assurance Quality Apparels',
        subtitle: 'Elevating Excellence in Every Thread',
        imgURL: '/images/img05.jpg'
    },
    {
        title: 'Assurance Quality Apparels',
        subtitle: 'Assurance Quality Apparels',
        imgURL: '/images/img06.jpg'
    },
    {
        title: 'AQA',
        subtitle: 'Believe in  Quality | Commitment | Service',
        imgURL: '/images/img07.jpg'
    },
    {
        title: 'AQA',
        subtitle: 'Designing | Sourcing | Manufacturing',
        imgURL: '/images/img08.jpg'
    },
    {
        title: 'AQA',
        subtitle: 'Your Global Partner in Textile Business',
        imgURL: '/images/img09.jpg'
    },
    {
        title: 'Assurance Quality Apparels',
        subtitle: 'Elevating Excellence in Every Thread',
        imgURL: '/images/img10.jpg'
    },
];


const Hero = () => {
    return (
        <div>
            <Carousel autoplay={true} fade={true}>
                {
                    items.map( (item, index) => {
                        return (
                            <div
                                key={index}
                                className="h-screen w-screen relative overflow-hidden"
                                data-aos="fade-up"
                            >
                                <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>
                                <img src={item.imgURL} alt="" className="object-cover object-top h-full w-full" />
                                <div className="absolute top-52 left-0 h-full w-full flex flex-col justify-center items-center text-white">
                                    <h1 className="text-yellow-100 text-7xl font-raleway font-bold leading-tight mb-0 text-center p-5">
                                        {item.title}
                                    </h1>
                                    <p className="text-4xl text-cyan-100 font-sans font-medium leading-loose mb-2">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Hero;