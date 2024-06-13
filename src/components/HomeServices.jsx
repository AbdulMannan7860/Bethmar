import React from 'react'
import Aerial from '../assets/Aerial Fiber.svg';
import Fiber from '../assets/Fiber Optic.svg';
import trenching from '../assets/trenching.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const services = [
    { image: Aerial, text: 'Aerial Fibre & Underground Construction', description: "BethMar specializes in aerial and underground telecommunications construction. We have years of experience and cutting-edge equipment. We have completed thousands of overhead and underground projects. We commit to delivering quality, timely solutions that are budget-friendly. This makes us your trusted partner for all telecom infrastructure needs." },
    { image: Fiber, text: 'Fibre Optic Testing & Splicing', description: "Our Fibre-optic splicing services use the latest equipment, allowing us to work even in the most remote locations. We document all splicing work thoroughly and provide every customer with a proof of performance document upon completion." },
    { image: trenching, text: 'Underground Trenching & Directional Boring', description: "At BethMar, we use advanced trenchless technology to install Fibre optic networks with minimal disruption to the environment. We can install Fibre beneath buildings, highways, water bodies, and rock formations. Our services also include trenchless installation and maintenance of water lines, sewer systems, and sprinkler systems." },
];

const HomeServices = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gray-100">
            <div className='text-center text-3xl md:text-5xl mb-8 text-white font-bold bg-accentRed-dark py-6'>
                <h2 className="md:mx-auto">Services And Solutions</h2>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-4 md:mx-auto">
                {services.map((service, index) => {
                    const [ref, inView] = useInView({ triggerOnce: false });

                    return (
                        <motion.div
                            ref={ref}
                            key={index}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={cardVariants}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 bg-white shadow-lg py-12 px-4 rounded-lg md:py-4"
                        >
                            <img src={service.image} alt={service.text} className="w-24 h-24 md:w-40 md:h-40 object-cover object-center mx-auto my-3" />
                            <div
                                className='p-4 flex-grow'
                            >
                                <h3 className="text-lg md:text-2xl font-semibold mb-2 text-black ">{service.text}</h3>
                                <p className='text-gray-700 text-xs md:text-sm py-4 text-justify'>{service.description}</p>
                            </div>
                            <div className='md:w-6/12 mx-auto'>
                                <Link to="/services" className="items-center justify-center px-4 flex w-12/12 md:px-8 py-2 md:py-3 text-accentRed-dark border-2 border-accentRed-dark text-xs md:text-sm font-semibold shadow-md hover:text-white hover:bg-accentRed-dark hover:border-accentRed-dark transition-transform transform hover:scale-105">Learn More <span className="ml-2 self-center"> <FaArrowRight /> </span> </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div >
    );
};


export default HomeServices