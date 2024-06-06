import React, { useState } from 'react';
import Aerial from '../assets/Aerial Fiber.svg';
import EV from '../assets/EV Engineering.svg';
import Fiber from '../assets/Fiber Optic.svg';
import Maintenance from '../assets/maintenance services.svg';
import Project from '../assets/project design.svg';
import site from '../assets/site build.svg';
import trenching from '../assets/trenching.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import transformer from '../assets/transformer.jpg';

const services = [
    { image: Aerial, text: 'Aerial Fiber & Underground Construction', description: "BethMar specializes in aerial and underground telecommunications construction. We have years of experience and cutting-edge equipment. We have completed thousands of overhead and underground projects. We commit to delivering quality, timely solutions that are budget-friendly. This makes us your trusted partner for all telecom infrastructure needs." },
    { image: Fiber, text: 'Fiber Optic Testing & Splicing', description: "Our fiber-optic splicing services use the latest equipment, allowing us to work even in the most remote locations. We document all splicing work thoroughly and provide every customer with a proof of performance document upon completion." },
    { image: trenching, text: 'Underground Trenching & Directional Boring', description: "At BethMar, we use advanced trenchless technology to install fiber optic networks with minimal disruption to the environment. We can install fiber beneath buildings, highways, water bodies, and rock formations. Our services also include trenchless installation and maintenance of water lines, sewer systems, and sprinkler systems." },
    { image: Project, text: 'Project Design & Consulting', description: "Our Design & Consulting team collaborates closely with clients to plan the workflow for tailored fiber business solutions. At BethMar, we handle everything from permitting to project design and implementation, ensuring peace of mind for our clients. We offer field engineering and mapping. We also offer strand mapping and as-built information. Additionally, we offer radiofrequency and fiber optic design." },
    { image: Maintenance, text: 'Emergency & Maintenance Services', description: "BethMar provides rapid-response crews ready to address telecom fiber emergencies at a moment's notice. Whether it's hurricanes, ice storms, accidents, or any unforeseen events, BethMar is here to assist. Additionally, we offer maintenance agreement programs, ensuring priority clients have access to our 24/7, 365-day first responder services." },
    { image: site, text: 'New Site Builds', description: "BethMar excels in new site builds for wireless and cell tower services. Our streamlined process involves identifying prime locations, negotiating leases and access agreements, and obtaining site permits. With our experienced engineers, we conduct thorough structural analysis and provide detailed designs and construction drawings to ensure a resilient and effective cell tower infrastructure. Committed to quality and innovation, we're your go-to partner for wireless connectivity solutions." },
    { image: EV, text: 'EV Engineering & Installation', description: "BethMar provides comprehensive solutions for smart charging and energy-efficient infrastructure with Autel EV Charging. Whether it's for residential or commercial use, our EV charging services contribute to enhancing renewable energy infrastructure." },
];

const Services = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)) , url(${transformer})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="services bg-gray-100">
            <div className='text-center text-lg md:text-3xl mb-8 text-white font-bold bg-accentRed py-6'>
                <h2 className="mx-12 md:mx-auto">Check Out Our Comprehensive List of Services & Solutions</h2>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-4 md:mx-auto">
                {services.map((service, index) => {
                    const [ref, inView] = useInView({ triggerOnce: false });

                    return (
                        <div
                            key={index}
                            className="flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 bg-white shadow-lg py-12 px-6 rounded-lg md:py-4"
                        >
                            <img src={service.image} alt={service.text} className="w-24 h-24 md:w-32 md:h-32 object-cover object-center mx-auto" />
                            <div
                                ref={ref}
                                className=' bg-accentRed animate-pulse my-3'></div>
                            <motion.div
                                className='p-4 flex-grow'
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={cardVariants}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-xl md:text-3xl font-semibold mb-2 text-black ">{service.text}</h3>
                                <p className='text-black text-sm md:text-lg py-4 '>{service.description}</p>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
};

export default Services;
