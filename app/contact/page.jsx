"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                setMessage('Message sent successfully!');
                form.current.reset();
            })
            .catch((error) => {
                setMessage('Failed to send message. Try again later.');
                console.error(error);
            });
    };

    return (
        <div className="my-16 md:grid md:grid-cols-2">
            {/* Left Part */}
            <div className="md:grid-cols-1 mt-16">
                <img src="/images/contact.jpg" alt="Contact" />
            </div>

            {/* Right Part */}
            <div className="container md:grid-cols-1 mt-10 md:mt-24 pr-16 pl-16">
                <h1 className='text-3xl font-bold mb-5 font-mono'>Contact Us</h1>
                <form ref={form} onSubmit={sendEmail} className='items-center'>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-lg font-medium text-black font-serif">
                            Name
                        </label>
                        <input type="text" name="user_name" id="name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Name" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 font-serif">
                            Email address
                        </label>
                        <input type="email" name="user_email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Email" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900 font-serif">
                            Message
                        </label>
                        <textarea name="message" id="message"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                  placeholder="Write Your Query" required></textarea>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-10 md:mb-0">
                        Submit
                    </button>
                    {message && <p className="mt-4 text-green-600">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;

// User: lodi78@gmail.com
// Pass: #ZZ!nR&u6hV-gXP