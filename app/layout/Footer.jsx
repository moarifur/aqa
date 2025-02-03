import React from "react";
import { FaHome, FaFax, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import {product_details} from "@/lib/data";
import Link from "next/link";

const Footer = () => {
    return (
        <div id='contact'>
            {/* Footer Content */}
            <div className="bg-gray-100 w-full flex md:flex-row flex-col justify-around items-start p-8 md:p-12">
                {/* Logo and Address Section */}
                <div className="p-3">
                    <div className="flex items-center gap-x-1">
                        <a href="/public">
                            <img src="/images/logo.png" alt="" width={50} height={50} />
                        </a>
                        <p className='text-neutral-800 text-lg font-bold'>Assurance Quality Apparels</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-7 text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                            <span className='flex gap-x-2'>
                                <FaHome className='text-neutral-800 text-2xl' />
                                House # 343, (Apartment-C2)
                                <br />
                                Road # 5, (East)
                                <br />
                                DOSH Baridhara, Dhaka - 1206
                                <br />
                                Bangladesh
                            </span>
                        </div>
                        <div className="mt-2 text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                            <span className='flex gap-x-2'>
                                <GiRotaryPhone className='text-neutral-800 text-xl' />
                                (+88) 02 841 5611
                            </span>
                        </div>
                        <div className="mt-2 text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                            <span className='flex gap-x-2'>
                                <FaFax className='text-neutral-800 text-xl' />
                                (+88) 02 841 5610
                            </span>
                        </div>
                        <div className="mt-2 text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                            <span className='flex gap-x-2'>
                                <MdOutlinePhoneInTalk className='text-neutral-800 text-xl' />
                                (+88) 017 1312 3832
                            </span>
                        </div>
                        <div className="mt-2 text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                            <span className='flex gap-x-2'>
                                <MdOutlineMailOutline className='text-neutral-800 text-xl' />
                                lodi78@gmail.com
                                <br />
                                nobinlodi@aqfbd.com
                            </span>
                        </div>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="p-5">
                    <p className="text-neutral-800 text-lg font-bold pb-4">Categories</p>
                    <ul>
                        {
                            product_details.map((item, index) => (
                                <li key={index} className="text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                    <Link href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Popular Pages */}
                <div className="p-5">
                    <p className="text-neutral-800 text-lg font-bold pb-4">Popular Pages</p>
                    <ul>
                        {
                            product_details.map((item, index) => (
                                <li key={index}
                                    className="text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">
                                    <Link href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Connect With Us */}
                <div className="p-5">
                    <ul>
                        {/*<p className="text-neutral-800 text-md font-bold pb-4">Quick Contact</p>*/}
                        {/*<li className="text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">*/}
                        {/*    <span className='flex gap-x-2'>*/}
                        {/*        <MdOutlinePhoneInTalk className='text-neutral-800 text-xl' />*/}
                        {/*        (+88) 017 1312 3832*/}
                        {/*    </span>*/}
                        {/*</li>*/}
                        {/*<li className="text-neutral-600 text-sm pb-2 hover:text-yellow-600 cursor-pointer">*/}
                        {/*    <span className='flex gap-x-2'>*/}
                        {/*        <MdOutlineMailOutline className='text-neutral-800 text-xl' />*/}
                        {/*        lodi78@gmail.com*/}
                        {/*    </span>*/}
                        {/*</li>*/}
                        {/*<br />*/}

                        <li className="text-neutral-800 text-xl font-bold">
                            <span>Connect With Us</span>
                            <div className="flex gap-x-3 text-3xl">
                                <FaInstagram className="mt-3 cursor-pointer hover:text-pink-600" />
                                <FaTwitter className="mt-3 cursor-pointer hover:text-blue-600" />
                                <FaLinkedin className="mt-3 cursor-pointer hover:text-blue-600" />
                                <FaYoutube className="mt-3 cursor-pointer hover:text-red-600" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            {/*<div className="bg-neutral-100 flex flex-col justify-center items-center text-center p-5">*/}
            {/*    <h1 className="text-neutral-800 font-semibold">*/}
            {/*        © 2024 All rights reserved | Developed by{" "}*/}
            {/*        <span className="hover:text-yellow-600 font-semibold cursor-pointer">*/}
            {/*            Mohammad Arifur Rahman*/}
            {/*        </span>*/}
            {/*    </h1>*/}
            {/*</div>*/}
        </div>
    );
};

export default Footer;