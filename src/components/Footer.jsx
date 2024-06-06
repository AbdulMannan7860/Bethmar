import React from 'react';
import { FaSquareFacebook, FaSquareTwitter, } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo from '../assets/bethmar.png'

const Footer = () => {
    return (
        <div className="py-4 md:py-8 bg-black text-white">
            <div className="max-w-[1400px] flex flex-col md:flex-row justify-between items-center mx-auto border-b border-gray-700 py-4 md:py-8 px-4 md:px-0">
                <div className="text-sm md:text-xl px-4">
                    <img src={logo} alt="Company Logo" className="w-auto h-[40px] md:h-[100px] " />
                    <p className='px-4'>Location: 17 PENNINE PARADE PENNINE DRIVE, LONDON, NW2 1NT, GB</p>
                    <p className='px-4'>Contact: 01707322748</p>
                    <p className='px-4'>Email: info@bethmar.co.uk</p>
                    <div className="flex space-x-4 mt-4 px-4">
                        <a href='#'><FaSquareFacebook className='h-10 w-10 hover:text-accentRed duration-300 transition-colors' /></a>
                        <a href='#'><FaSquareTwitter className='h-10 w-10 hover:text-accentRed duration-300 transition-colors' /></a>
                        <a href='#'><FaLinkedin className='h-10 w-10 hover:text-accentRed duration-300 transition-colors' /></a>
                    </div>
                </div>
                <div className='flex justify-around md:w-1/2 w-auto py-4 md:py-0'>
                    <div className="self-center px-4">
                        <h4 className="mb-4 md:text-3xl text-lg font-semibold text-accentRed">Quick Links</h4>
                        <ol className='px-4 md:text-xl text-base'>
                            <li className='py-1 md:py-2 hover:decoration-accentRed hover:underline hover:decoration-2 transition duration-300'><a href="#services">Services</a></li>
                            <li className='py-1 md:py-2 hover:decoration-accentRed hover:underline hover:decoration-2 transition duration-300'><a href="#about">About</a></li>
                            <li className='py-1 md:py-2 hover:decoration-accentRed hover:underline hover:decoration-2 transition duration-300'><a href="#contact">Contact</a></li>
                        </ol>
                    </div>
                    <div className="self-center px-4">
                        <h4 className="mb-4 md:text-3xl text-lg font-semibold text-accentRed ">Our Projects</h4>
                        <ol className='px-4 md:text-xl text-base'>
                            <li className='py-1 md:py-2 hover:decoration-accentRed hover:underline hover:decoration-2 transition duration-300'><a href="#project1">London Urban Fiber Optic Expansion</a></li>
                            <li className='py-1 md:py-2 hover:decoration-accentRed hover:underline hover:decoration-2 transition duration-300'><a href="#project2">Rural Broadband Initiative</a></li>
                            <li className='py-1 md:py-2 hover:decoration-accentRed hover:underline hover:decoration-2 transition duration-300'><a href="#project3">Smart City Infrastructure Development</a></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="pt-4 text-center text-xs md:text-lg max-w-[1200px] mx-auto px-4 md:px-0 ">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#terms" className="mr-4">Terms & Conditions</a>
                        <span>© 2024 Company Name. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
