import Hero from "@/app/about/Hero";
import {process_background, process_info} from "@/app/process/data";
import Process from "@/app/process/process";

const Page = () => {
    return (
        <div>
            <Hero info={process_info} background={process_background}/>
            <Process />
        </div>
    );
};

export default Page;