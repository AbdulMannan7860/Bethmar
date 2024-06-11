import React from 'react';
import { motion } from 'framer-motion';
import CivilCards from '../components/CivilCards';
import banner from '../assets/excavator.jpeg';
import CounterSection from '../components/Counter';
import ContactUs from '../components/ContactUs';

const Civil = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4)) ,url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    };

    return (
        <div className='bg-gray-200'>
            <div style={divStyle}>
                <div className='h-[60vh] md:h-[90vh] justify-center flex flex-col'>
                    <motion.h2
                        className="text-center text-3xl md:text-8xl text-white font-bold py-6 md:py-20"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Civil Services
                    </motion.h2>

                    <motion.p
                        className="mx-auto px-4 md:w-6/12 text-sm md:text-base text-white font-semibold text-justify "
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Working nationwide as a main contractor, Bethmar delivers Excellence into every project we work on or assist with. <br />
                        With an unrivaled commitment to delivering an ever-improving service and product, our Excellence is evident through every stage of a project from planning and procurement, to supply chain management and operative activity.
                    </motion.p>
                </div>
                <CivilCards />
            </div>
            <CounterSection />
            <ContactUs />
        </div>
    );
};

export default Civil;
