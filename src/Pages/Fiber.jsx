import React from 'react'
import FiberCards from '../components/FiberCards'
import { motion } from 'framer-motion';
import CounterSection from '../components/Counter';
import ContactUs from '../components/ContactUs';
import banner from '../assets/Footer.jpeg';


const Fiber = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4)) ,url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    };
    return (
        <>
            <div style={divStyle}>
                <div className='h-[60vh] md:h-[90vh] justify-center flex flex-col'>
                    <motion.h2
                        className="text-center text-3xl md:text-8xl text-white font-bold py-6 md:py-20"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Fibre Services
                    </motion.h2>

                    <motion.p
                        className="mx-auto px-4 md:w-6/12 text-sm md:text-base text-white font-semibold text-justify "
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Combining more than three decades of experience, our communications construction teams offer a flexible, total solution in the deployment, repair and maintenance of new telecommunications infrastructure, utilising technologies and techniques which far supersede our competitors, including our in-house development of narrow trenching solutions.<br />
                        Our Specialist Fibre Services division enables us to offer our partner clients a resource of highly experienced fibre and hybrid cable engineers who are, collectively, able to reach anywhere in the United Kingdom within a two hour time frame.<br />
                        The Fibre Services Division manages a range of expertise, ranging from upgrading existing network technologies, fibre splicing, cabling and delivering cabinet, racking and installation solutions into the premises, including multiple dwelling units (MDUs) and business premises. </motion.p>
                </div>
                <FiberCards />
            </div>

            <CounterSection />
            <ContactUs />
        </>
    )
}

export default Fiber