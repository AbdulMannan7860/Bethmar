import React from 'react';
import { FaSquareFacebook, FaSquareTwitter, } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo from '../assets/bethmar.png'

const Footer = () => {
    return (
        <div className="footer py-8 bg-black text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px]">
                <div className="">
                    <img src={logo} alt="Company Logo" className="w-auto h-[90px] " />
                    <p>Location: 17 PENNINE PARADE PENNINE DRIVE, LONDON, NW2 1NT, GB</p>
                    <p>Contact: 01707322748</p>
                    <p>Email: info@bethmar.com</p>
                    <div className="flex space-x-4 mt-4">
                        <FaSquareFacebook />
                        <FaSquareTwitter />
                        <FaLinkedin />
                    </div>
                </div>
                <div className="self-center px-4">
                    <h4 className="mb-4 ">Quick Links</h4>
                    <ol className='px-4'>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ol>
                </div>
                <div className="self-center px-4">
                    <h4 className="mb-4 ">Our Projects</h4>
                    <ol className='px-4'>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ol>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm max-w-[1200px] mx-auto">
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
