import React from 'react';
import { FaSquareFacebook, FaSquareTwitter, } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo from '../assets/bethmar.png'
import Fiber from '../assets/Footer.jpeg'

const Footer = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)) , url(${Fiber})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }

    return (
        <div style={divStyle} className="py-4 md:py-8 text-white">
            <div className="max-w-[1400px] flex flex-col md:flex-row justify-between items-center mx-auto border-b border-gray-700 py-4 md:py-8 px-4 md:px-0">
                <div className="text-sm md:text-xl px-4">
                    <img src={logo} alt="Company Logo" className="w-auto h-[40px] md:h-[80px] " />
                    <p className='py-2'>Location: 17 PENNINE PARADE PENNINE DRIVE, LONDON, NW2 1NT, GB</p>
                    <p className='py-2'>Contact: 01707322748</p>
                    <p className='py-2'>Email: info@bethmar.co.uk</p>
                    <div className="flex space-x-4 mt-4">
                        <a href='#'><FaSquareFacebook className='h-10 w-10 hover:text-accentRed-dark duration-300 transition-colors' /></a>
                        <a href='#'><FaLinkedin className='h-10 w-10 hover:text-accentRed-dark duration-300 transition-colors' /></a>
                    </div>
                </div>
                <div className='flex justify-around md:w-1/2 w-auto py-4 md:py-0'>
                    <div className="self-center px-4">
                        <h4 className="mb-4 md:text-3xl text-lg font-semibold text-accentRed-dark">Quick Links</h4>
                        <ol className='md:text-xl text-base px-1'>
                            <li className='py-1 md:py-2 hover:decoration-accentRed-dark hover:underline hover:decoration-2 transition duration-300'><a href="#services">Services</a></li>
                            <li className='py-1 md:py-2 hover:decoration-accentRed-dark hover:underline hover:decoration-2 transition duration-300'><a href="#about">About</a></li>
                            <li className='py-1 md:py-2 hover:decoration-accentRed-dark hover:underline hover:decoration-2 transition duration-300'><a href="#contact">Contact</a></li>
                        </ol>
                    </div>
                    <div className="self-center px-4">
                        <h4 className="mb-4 md:text-3xl text-lg font-semibold text-accentRed-dark ">Our Projects</h4>
                        <ol className='md:text-xl text-base px-1'>
                            <li className='py-1 md:py-2 hover:decoration-accentRed-dark hover:underline hover:decoration-2 transition duration-300'><a href="#project1">London Urban Fiber Optic Expansion</a></li>
                            <li className='py-1 md:py-2 hover:decoration-accentRed-dark hover:underline hover:decoration-2 transition duration-300'><a href="#project2">Rural Broadband Initiative</a></li>
                            <li className='py-1 md:py-2 hover:decoration-accentRed-dark hover:underline hover:decoration-2 transition duration-300'><a href="#project3">Smart City Infrastructure Development</a></li>
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
