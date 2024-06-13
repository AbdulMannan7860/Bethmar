import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import civil from '../assets/CivilServices.jpg';
import fiber from '../assets/FiberServices.jpg';
import { motion } from 'framer-motion';
import CounterSection from '../components/Counter';
import ContactUs from '../components/ContactUs';
import BG from '../assets/AIBG.jpeg';

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
        {
            image: fiber,
            title: "Fiber Services",
            desc: "Our Specialist Fibre Services division enables us to offer our partner clients a resource of highly experienced fibre and hybrid cable engineers who are, collectively, able to reach anywhere in the United Kingdom within a two hour time frame.",
            link: "/Fiber"
        },
        {
            image: civil,
            title: "Civil Services",
            desc: "Working nationwide as a main contractor, Bethmar delivers Excellence into every project we work on or assist with.",
            link: "/Civil"
        },
        {
            image: civil,
            title: "Traffic Management Services",
            desc: "Working nationwide as a main contractor, Bethmar delivers Excellence into every project we work on or assist with.",
            link: "/traffic-management"
        },
        {
            image: civil,
            title: "Reinstatement Services",
            desc: "Working nationwide as a main contractor, Bethmar delivers Excellence into every project we work on or assist with.",
            link: "/reinstatement"
        },
        {
            image: civil,
            title: "Design Validation Services",
            desc: "Working nationwide as a main contractor, Bethmar delivers Excellence into every project we work on or assist with.",
            link: "/design-validation"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            rotateCarousel('next');
        }, 5000); // Adjust the delay as needed
        return () => clearInterval(interval);
    }, []);

    const rotateCarousel = (direction) => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.2)) , url(${BG})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <Banner />
            <div className='bg-gray-100 py-4' style={divStyle} >
                <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='relative flex justify-center items-center overflow-hidden h-[60vh] md:h-[90vh]'>
                        <div className='relative w-full h-full' style={{ perspective: '1200px', }} >
                            {services.map((service, index) => {
                                const angle = (360 / services.length) * (index - currentIndex);
                                const zIndex = services.length - Math.abs(index - currentIndex);
                                const isFront = index === currentIndex;
                                const gradient = !isFront ? 'bg-gradient-to-t from-black to-gray-200' : '';
                                const shadow = !isFront ? 'shadow-xl' : 'shadow-2xl';

                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute w-[200px] md:w-[300px] h-[80%] mt-auto bg-white rounded-lg transition-transform duration-1000 ease-in-out ${shadow} ${gradient}`}
                                        style={{
                                            transform: `rotateY(${angle}deg) translateZ(300px)`,
                                            zIndex: zIndex,
                                            left: '50%',
                                            transformOrigin: 'center center -300px',
                                            transform: `translateX(-50%) rotateY(${angle}deg) translateZ(300px)`,
                                            filter: isFront ? 'none' : 'brightness(0.5)',
                                        }}
                                    >
                                        <div className='w-full h-[50%] overflow-hidden'>
                                            <img src={service.image} className='w-full h-full object-cover content-center' alt={`${service.title} image`} />
                                        </div>
                                        <div className='w-full p-4 md:text-justify flex flex-col'>
                                            <h2 className='text-sm md:text-base font-bold text-gray-900 mb-4'>{service.title}</h2>
                                            <p className='text-gray-600 text-xs md:text-xs mb-6'>{service.desc}</p>
                                            <div className='mt-auto'>
                                                <Link
                                                    to={service.link}
                                                    className='inline-block bg-red-600 text-xs md:text-xs text-white px-6 py-3 shadow hover:bg-red-700 transition duration-300'
                                                >
                                                    Check Out
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <button
                            onClick={() => rotateCarousel('next')}
                            className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300'
                        >
                            <i> &#8250; </i>
                        </button>
                    </div>
                </div>
            </div>
            <CounterSection />
            <ContactUs />
        </>
    );
};

export default Services;
