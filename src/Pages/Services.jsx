import React from 'react';
import Banner from '../components/Banner';
import ServicesCards from '../components/ServicesCards';
import { Link } from 'react-router-dom';
import civil from '../assets/ConstructionServices.jpg';
import fiber from '../assets/Footer.jpeg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CounterSection from '../components/Counter';
import ContactUs from '../components/ContactUs';


const Services = () => {
    const projectVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const [CivilRef, CivilInView] = useInView({ triggerOnce: false });
    const [FiberRef, FiberInView] = useInView({ triggerOnce: false });

    return (
        <>
            <Banner />
            <div className='bg-white pt-16 pb-16'>
                <motion.div
                    ref={CivilRef}
                    initial="hidden"
                    animate={CivilInView ? "visible" : "hidden"}
                    variants={projectVariants}
                    transition={{ duration: 0.5 }}
                    className='max-w-[1400px] mx-auto bg-gray-100 rounded shadow-lg drop-shadow-xl md:flex my-6 p-6'
                >
                    <div className='w-full md:w-4/12 md:mx-0 mx-auto'>
                        <img src={civil} className='rounded-lg w-full h-full object-cover object-center' alt="Civil Img" />
                    </div>
                    <div className='md:w-8/12 mx-12'>
                        <h1 className='text-xl md:text-4xl font-semibold px-4 py-2 border-b-2 border-accentRed-dark pb-4'>Civil Services</h1>
                        <p className='text-gray-500 text-sm md:text-base text-justify px-4 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis est minus sed enim ab nesciunt aliquid veritatis mollitia fugit?</p>
                        <Link to='/civil' className='md:mx-4 px-4 flex w-6/12 md:w-3/12 md:px-8 py-2 my-4 border-2 border-accentRed text-accentRed text-sm md:text-base font-semibold shadow-md hover:bg-accentRed-dark hover:border-accentRed-dark hover:text-white transition-transform transform duration-300 justify-center'>Check Out</Link>
                    </div>
                </motion.div>
                <motion.div
                    ref={FiberRef}
                    initial="hidden"
                    animate={FiberInView ? "visible" : "hidden"}
                    variants={projectVariants}
                    transition={{ duration: 0.5 }}
                    className='max-w-[1400px] mx-auto bg-gray-100 rounded shadow-lg drop-shadow-xl md:flex my-6 p-6'
                >
                    <div className='w-full md:w-4/12 md:mx-0 mx-auto'>
                        <img src={fiber} className='rounded-lg w-full h-full object-cover object-center' alt="Fiber Img" />
                    </div>
                    <div className='md:w-8/12 mx-12'>
                        <h1 className='text-xl md:text-4xl font-semibold px-4 py-2 border-b-2 border-accentRed-dark pb-4'>Fiber Services</h1>
                        <p className='text-gray-500 text-sm md:text-base text-justify px-4 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis est minus sed enim ab nesciunt aliquid veritatis mollitia fugit?</p>
                        <Link to='/fiber' className='md:mx-4 px-4 flex w-6/12 md:w-3/12 md:px-8 py-2 my-4 border-2 border-accentRed text-accentRed text-sm md:text-base font-semibold shadow-md hover:bg-accentRed-dark hover:border-accentRed-dark hover:text-white transition-transform transform duration-300 justify-center'>Check Out</Link>
                    </div>
                </motion.div>
            </div>
            <ServicesCards />
            <CounterSection />
            <ContactUs />
        </>
    );
};

export default Services;
