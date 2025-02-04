import { FaHome, FaFax, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { footer_info } from "@/app/layout/data";

const Footer = () => {
    return (
        <div id="contact">
            {/* Footer Content */}
            <div className="bg-gray-100 w-full flex flex-col md:flex-row justify-between items-start p-8 md:p-12">
                {/* Left Section (60% width) */}
                <div className="w-full md:w-[60%] flex flex-col gap-4">
                    {/* Logo & name in one row */}
                    <div className="flex items-center gap-3">
                        <img src={footer_info.logo} alt={footer_info.name} className="h-12 w-auto"/>
                        <h1 className="text-4xl font-bold">{footer_info.name}</h1>
                    </div>
                    {/* Description */}
                    <p className="text-gray-600 mt-3">{footer_info.description}</p>
                </div>

                {/* Right Section (40% width) */}
                <div className="w-full md:w-[40%]">
                    {/* Address & Contact Info */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-start gap-2 text-neutral-600 text-sm cursor-pointer hover:text-yellow-600">
                            <FaHome className="text-neutral-800 text-2xl"/>
                            <span>House # 343 (Apartment-C2) , Road # 5 (East), DOSH Baridhara, Dhaka - 1206, Bangladesh</span>
                        </div>
                        <div className="mt-1 flex items-start gap-2 text-neutral-600 text-sm cursor-pointer hover:text-yellow-600">
                            <MdOutlineMailOutline className="text-neutral-800 text-xl"/>
                            <span>lodi78@gmail.com | nobinlodi@aqfbd.com</span>
                        </div>
                        <div className="mt-1 text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                            <span className='flex gap-x-2'>
                                <GiRotaryPhone className='text-neutral-800 text-xl'/>
                                (+88) 02 841 5611
                            </span>
                        </div>
                        <div className="mt-1 text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                            <span className='flex gap-x-2'>
                                <MdOutlinePhoneInTalk className='text-neutral-800 text-xl'/>
                                (+88) 017 1312 3832
                            </span>
                        </div>
                    </div>
                    {/* Connect With Us */}
                    <div className="flex gap-4 text-3xl mt-5">
                        <FaInstagram className="cursor-pointer hover:text-pink-600"/>
                        <FaTwitter className="cursor-pointer hover:text-blue-600"/>
                        <FaLinkedin className="cursor-pointer hover:text-blue-600"/>
                        <FaYoutube className="cursor-pointer hover:text-red-600"/>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            {/* <div className="bg-neutral-100 flex flex-col justify-center items-center text-center p-5">
                <h1 className="text-neutral-800 font-semibold">
                    © 2024 All rights reserved | Developed by{" "}
                    <span className="hover:text-yellow-600 font-semibold cursor-pointer">
                        Mohammad Arifur Rahman
                    </span>
                </h1>
            </div> */}
        </div>
    );
};

export default Footer;
