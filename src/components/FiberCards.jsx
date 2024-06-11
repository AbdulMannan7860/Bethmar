import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../assets/Footer.jpeg';
import cabinetRacking from '../assets/CabinetRacking.jpg';
import directionalDrilling from '../assets/DirectionalDrilling.jpg';
import blockageRepair from '../assets/BlockageRepair.jpg';

const fiberServices = [
    {
        title: "Cabinet and Racking",
        description: "Our fibre engineers maintain, upgrade and activate cabinet equipment and technology.",
        image: cabinetRacking
    },
    {
        title: "Splicing and Cabling",
        description: "We offer nationwide splicing and cabling solutions to major network providers.",
        image: img
    },
    {
        title: "Pole Access",
        description: "We’re bringing FTTx solutions to premises across the UK through pole access.",
        image: img
    },
    {
        title: "Blown Fibre",
        description: "We are recognised industry experts in delivering blown fibre solutions.",
        image: img
    },
    {
        title: "Mole Ploughing",
        description: "We possess in-house mole plough equipment, enabling us to build quickly in soft surfaces.",
        image: img
    },
    {
        title: "Directional Drilling",
        description: "We are directional drilling experts, specialising in all types of thrust-boring and drilling.",
        image: directionalDrilling
    },
    {
        title: "Duct Laying and Maintenance",
        description: "We are able to utilise, lay, unblock and maintain all types of traditional and micro duct on civils builds.",
        image: blockageRepair
    },
    {
        title: "PIA/DPA Solutions",
        description: "Providing Physical Infrastructure Access (PIA) and Duct and Pole Access (DPA) solutions to ensure efficient infrastructure deployment.",
        image: img
    }
];

const FiberCards = () => {
    return (
        <div className="px-4 md:p-8 max-w-screen-xl mx-auto overflow-auto">
            {fiberServices.map((service, index) => {
                const [ref, inView] = useInView({
                    triggerOnce: false,
                    threshold: 0.1,
                });

                return (
                    <motion.div
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='bg-white shadow-lg rounded my-6 md:my-12 flex flex-col lg:flex-row items-center'
                    >
                        <div className='lg:w-1/3 w-full h-[250px] md:h-[400px] p-2 md:mx-4'>
                            <img src={service.image} alt={`${service.title} image`} className='rounded-lg h-full w-full object-cover content-center' />
                        </div>
                        <div className='lg:w-2/3 w-full lg:ml-8 px-4 py-8 md:p-8'>
                            <h2 className="text-center text-xl md:text-2xl font-bold mb-8 border-b-2 border-accentRed-dark pb-4">{service.title}</h2>
                            <p className="text-gray-700 text-xs md:text-sm">{service.description}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default FiberCards;
