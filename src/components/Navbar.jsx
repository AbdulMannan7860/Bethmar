import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/bethmar.png'

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
                        <a href="#home" className="text-2xl font-bold">
                            <img src={logo} alt="" className='h-20' />
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        <a href="#home" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                            Home
                        </a>
                        <a href="#about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                            About
                        </a>
                        <a href="#projects" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                            Projects
                        </a>
                        <a href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                            Contact
                        </a>
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
                    <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                        Home
                    </a>
                    <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                        About
                    </a>
                    <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                        Projects
                    </a>
                    <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                        Contact
                    </a>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
