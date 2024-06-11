import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import logo from '../assets/bethmarColor.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isVisible = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);
        setVisible(isVisible);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

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
        <nav className={`bg-white text-black fixed w-full  z-10 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold">
                            <img src={logo} alt="Bethmar" className="h-16 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        {renderNavLinks(location.pathname)}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-white"
                            aria-expanded={isOpen}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <AiOutlineUp className="h-6 w-6" /> : <AiOutlineDown className="h-6 w-6" />}
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
                    {renderNavLinks(location.pathname)}
                </div>
            </motion.div>
        </nav>
    );

    function renderNavLinks(currentPath) {
        const links = [
            { to: "/", text: "Home" },
            {
                text: "Services", dropdown: true, dropdownLinks: [
                    { to: "/services", text: "Our Services" },
                    { to: "/civil", text: "Civil Services" },
                    { to: "/fiber", text: "Fibre Services" }
                ]
            },
            { to: "/contact", text: "Contact" }
        ];

        return links.map((link, index) => {
            const isDropdown = link.dropdown;
            const isSelected = currentPath === link.to;

            return (
                <div className='flex flex-col' key={index}>
                    {isDropdown ? (
                        <div className="relative inline-block">
                            <button
                                className={`hover:bg-gray-200 px-3 py-2 text-lg font-medium cursor-pointer flex items-center w-full ${isSelected ? 'bg-gray-200' : ''}`}
                                onClick={toggleMenu}
                            >
                                {link.text} {isOpen ? <AiOutlineUp className="h-4 w-4 ml-auto" /> : <AiOutlineDown className="h-4 w-4 ml-1" />}
                            </button>
                            <div className={`absolute z-10 mt-2 w-32 bg-white rounded-md shadow-lg md:ml-0 ml-[200px] ${isOpen ? '' : 'hidden'}`}>
                                {link.dropdownLinks.map((dropdownLink, dropdownIndex) => (
                                    <Link
                                        key={dropdownIndex}
                                        to={dropdownLink.to}
                                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${currentPath === dropdownLink.to ? 'bg-gray-200' : ''}`}
                                        onClick={closeDropdown}
                                    >
                                        {dropdownLink.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Link
                            to={link.to}
                            className={`hover:bg-gray-200 px-3 py-2 text-lg font-medium cursor-pointer ${isSelected ? 'bg-gray-200' : ''}`}
                        >
                            {link.text}
                        </Link>
                    )}
                </div>
            );
        });
    }
}

export default Navbar;
