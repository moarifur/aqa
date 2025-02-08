"use client"
import React, { useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

// Navbar data
const navLinks = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About Us',
        link: '/about'
    },
    {
        title: 'Our Process',
        link: '/process'
    },
    {
        title: 'Our Products',
        link: '/products'
    },
    {
        title: 'Why AQA',
        link: '/about'
    },
    {
        title: 'Contact Us',
        link: '/contact'
    },
]

// const nav_info = {
//     imgURL: "/images/logo.png"
// }

const Navbar = () => {

    const [open, setOpen] = useState(false) // State for Mobile Menu

    // Handle Mobile Menu
    const handleMenu =() =>{
        setOpen(prev => !prev)
        console.log(open)
    }

    return (
        <div
            className={`bg-white w-full fixed top-0 left-0 z-10 shadow-md transition-all duration-300`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex items-center gap-x-1">
                        <a href="/">
                            <img src="/images/logo.png" alt="" width={50} height={50}/>
                            {/*<img src={imgURL} alt="" width={50} height={50}/>*/}
                        </a>

                        {/* Medium Device Menu */}
                        <div className="hidden md:block">
                            <div className="flex ml-0 items-baseline space-x-1 text-lg">
                                {navLinks.map((link, index) => (
                                    <a key={index}
                                       className='
                               text-[#5f5f5f] hover:text-[#A7D378] transition-all
                               duration-500 px-3 py-2 rounded-md text-md font-serif'
                                       href={link.link}
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Company Name */}
                    <p className='text-xl md:text-4xl font-raleway ml-auto mr-auto'>{/* Centered text */}
                        Assurance Quality Apparels
                    </p>
                    {/* Hamburger Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type='button'
                            onClick={handleMenu}
                            className='
                    inline-flex items-center justify-center p-2 rounded-md
                    text-gray-400 hover:text-white hover:bg-gray-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-offset-gray-800 focus:ring-white'
                        >
                            <span className='sr-only'>Open Main Menu</span>
                            {open === true ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                </div>
            </div>


            {/*  Mobile Menu  */}
            {
                open ? (
                    <div className='md:hidden'>
                        <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            {navLinks.map((link, index) => (
                                <a key={index}
                                   className='
                                   text-black hover:text-yellow-500 text-lg block
                                   px-3 py-2 rounded-md font-bold pl-10'
                                   href={link.link}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Navbar;