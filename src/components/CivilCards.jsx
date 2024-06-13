import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../assets/Footer.jpeg';
import cableInstallation from '../assets/CableInstallation.jpg';
import faultsMaintainance from '../assets/FaultsMaintainance.jpg';
import directionalDrilling from '../assets/DirectionalDrilling.jpg';
import blockageRepair from '../assets/BlockageRepair.jpg';
const services = [
    {
        Heading: 'PLANNING / DESIGN & CONSULTANCY',
        SubHeadings: [
            "Feasibility Studies",
            "Route Surveys",
            "Planning & Design",
            "NRSWA Noticing & Permits"
        ],
        image: img
    },
    {
        Heading: 'NEW CONNECTIONS',
        SubHeadings: [
            "ICP (Independent Connections Provider)",
            "Private Networks",
            "Cable Diversions"
        ],
        image: img
    },
    {
        Heading: 'SUBSTATIONS',
        SubHeadings: [
            "Switchgear and Transformers",
            "Testing & Commissioning",
            "Containerised Solutions",
            "Substation Relocation and Upgrades"
        ],
        image: img
    },
    {
        Heading: 'CABLE INSTALLATION',
        SubHeadings: [
            "Excavation & Reinstatement",
            "Duct Laying",
            "Vacuum Excavation",
            "Directional Drilling"
        ],
        image: cableInstallation
    },
    {
        Heading: 'Mole Ploughing',
        SubHeadings: [
            "EHV Fault Repairs",
            "Substation Maintenance"
        ],
        image: faultsMaintainance
    },
    {
        Heading: 'Directional Drilling',
        SubHeadings: [
            "EHV Fault Repairs",
            "Substation Maintenance"
        ],
        image: directionalDrilling
    },
    {
        Heading: 'Duct Laying',
        SubHeadings: [
            "EHV Fault Repairs",
            "Substation Maintenance"
        ],
        image: blockageRepair
    }
];

const CivilCards = () => {
    return (
        <div className="px-4 md:p-8 max-w-[1400px] mx-auto overflow-hidden">
            {services.map((service, index) => {
                const [cardRef, cardInView] = useInView({ triggerOnce: true });
                return (
                    <motion.div
                        ref={cardRef}
                        key={index}
                        className='bg-white shadow-lg rounded my-6 md:my-12 flex flex-col lg:flex-row items-center'
                        initial="hidden"
                        animate={cardInView ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className='lg:w-1/3 w-full h-[250px] md:h-[400px] p-2 md:mx-4'>
                            <img src={service.image} alt={`${service.Heading} image`} className='rounded-lg content-center w-full h-full object-cover' />
                        </div>
                        <div className='lg:w-2/3 w-full lg:ml-8 p-4 md:p-8'>
                            <h2 className="text-center text-lg md:text-3xl font-bold mb-8 border-b-2 border-accentRed-dark pb-4">{service.Heading}</h2>
                            <div className='flex flex-col space-y-2'>
                                {service.SubHeadings.map((subHeading, subIndex) => {
                                    const [subHeadingRef, subHeadingInView] = useInView({ triggerOnce: false });
                                    return (
                                        <motion.div
                                            ref={subHeadingRef}
                                            key={subIndex}
                                            initial="hidden"
                                            animate={subHeadingInView ? 'visible' : 'hidden'}
                                            variants={{
                                                hidden: { opacity: 0, x: -50 },
                                                visible: { opacity: 1, x: 0 }
                                            }}
                                            transition={{ duration: 0.5 }}
                                            className=' md:p-2 rounded-lg'
                                        >
                                            <h3 className="text-xs text-gray-700">{subHeading}</h3>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default CivilCards;
