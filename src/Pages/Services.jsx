import React from 'react';
import Banner from '../components/Banner';
import ServicesCards from '../components/ServicesCards';
import { Link } from 'react-router-dom';
import civil from '../assets/CivilServices.jpg';
import fiber from '../assets/FiberServices.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CounterSection from '../components/Counter';
import ContactUs from '../components/ContactUs';

const Services = () => {
    const projectVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0 },
    };

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

    return (
        <>
            <Banner />
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    {services.map((service, index) => {
                        const [ref, inView] = useInView({ triggerOnce: false });
                        return (
                            <motion.div
                                ref={ref}
                                key={index}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={projectVariants}
                                transition={{ duration: 0.5 }}
                                className='bg-white rounded-lg shadow-lg overflow-hidden mb-12 flex flex-col md:flex-row'
                            >
                                <div className='md:w-1/3 w-full h-[350px] overflow-hidden'>
                                    <img src={service.image} className='w-full h-full object-cover' alt={`${service.title} image`} />
                                </div>
                                <div className='md:w-2/3 w-full p-6 flex flex-col'>
                                    <h2 className='text-2xl md:text-4xl font-bold text-gray-900 mb-4'>{service.title}</h2>
                                    <p className='text-gray-600 text-sm md:text-base mb-6'>{service.desc}</p>
                                    <div className='mt-auto mx-auto md:mx-0'>
                                        <Link
                                            to={service.link}
                                            className='inline-block bg-accentRed text-xs md:text-sm text-white px-6 py-3 shadow hover:bg-accentRed-dark transition duration-300'
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
            <ServicesCards />
            <CounterSection />
            <ContactUs />
        </>
    );
};

export default Services;
