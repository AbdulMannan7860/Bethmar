import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fiberServices = [
    {
        title: "Cabinet and Racking",
        description: "Our fibre engineers maintain, upgrade and activate cabinet equipment and technology."
    },
    {
        title: "Splicing and Cabling",
        description: "We offer nationwide splicing and cabling solutions to major network providers."
    },
    {
        title: "Pole Access",
        description: "We’re bringing FTTx solutions to premises across the UK through pole access."
    },
    {
        title: "Blown Fibre",
        description: "We are recognised industry experts in delivering blown fibre solutions."
    },
    {
        title: "Mole Ploughing",
        description: "We possess in-house mole plough equipment, enabling us to build quickly in soft surfaces."
    },
    {
        title: "Directional Drilling",
        description: "We are directional drilling experts, specialising in all types of thrust-boring and drilling."
    },
    {
        title: "Duct Laying and Maintenance",
        description: "We are able to utilise, lay, unblock and maintain all types of traditional and micro duct on civils builds."
    },
    {
        title: "PIA/DPA Solutions",
        description: "Providing Physical Infrastructure Access (PIA) and Duct and Pole Access (DPA) solutions to ensure efficient infrastructure deployment."
    }
];

const FiberCards = () => {
    return (
        <div className='py-12'>
            <div className="h-auto max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto p-4 pt-6 md:p-6 lg:p-12"
                >
                    {fiberServices.map((service, index) => {
                        const [ref, inView] = useInView({
                            triggerOnce: false,
                            threshold: 0.1,
                        });

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial={{ y: 20, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='h-screen'
                            >
                                <h2 className="text-2xl my-3 font-bold text-center text-white py-4 border-y-2 border-accentRed-dark">{service.title}</h2>
                                <div className="grid grid-cols-1">
                                    <motion.div
                                        key={index}
                                        ref={ref}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                        className="bg-white text-center shadow-lg rounded-lg px-6 py-8 mb-4"
                                    >
                                        <p className="text-gray-700">{service.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default FiberCards;
