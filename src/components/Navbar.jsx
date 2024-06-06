import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/bethmar.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navVariants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <nav className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-2xl font-bold">
                            <img src={logo} alt="Bethmar" className='h-32 w-auto' />
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                        >
                            About
                        </ScrollLink>
                        <ScrollLink
                            to="services"
                            smooth={true}
                            duration={500}
                            className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                        >
                            Services
                        </ScrollLink>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                        >
                            Contact
                        </ScrollLink>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={navVariants}
                className="md:hidden"
            >
                <div className="px-5 pt-2 pb-3 space-y-1 sm:px-3">
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        About
                    </ScrollLink>
                    <ScrollLink
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        Projects
                    </ScrollLink>
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        Contact
                    </ScrollLink>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
