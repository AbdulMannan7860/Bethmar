import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
    {
        Heading: 'PLANNING / DESIGN & CONSULTANCY',
        SubHeadings: [
            { title: "Feasibility Studies", description: "Conducting comprehensive feasibility studies to assess the viability of proposed projects. This includes evaluating technical, financial, and environmental factors to ensure informed decision-making and project success." },
            { title: "Route Surveys", description: "Performing detailed route surveys to determine the most efficient and effective paths for infrastructure installation. This involves analyzing geographical, environmental, and logistical considerations." },
            { title: "Planning & Design", description: "Offering expert planning and design services to create innovative and practical solutions for infrastructure projects. This encompasses everything from initial concept development to detailed engineering plans." },
            { title: "NRSWA Noticing & Permits", description: "Managing New Roads and Street Works Act (NRSWA) notices and permits, ensuring compliance with all regulatory requirements and facilitating smooth project execution." }
        ]
    },
    {
        Heading: 'NEW CONNECTIONS',
        SubHeadings: [
            { title: "ICP (Independent Connections Provider)", description: "Providing Independent Connections Provider (ICP) services for the installation and connection of new electrical infrastructure, ensuring reliable and efficient power supply." },
            { title: "Private Networks", description: "Designing and implementing private networks tailored to meet the specific needs of clients, delivering secure and dedicated infrastructure solutions." },
            { title: "Cable Diversions", description: "Managing cable diversion projects to relocate existing cables, minimizing disruption and ensuring continuity of service during construction or redevelopment activities." }
        ]
    },
    {
        Heading: 'SUBSTATIONS',
        SubHeadings: [
            { title: "Switchgear and Transformers", description: "Supplying, installing, and maintaining high-quality switchgear and transformers, ensuring optimal performance and reliability of electrical substations." },
            { title: "Testing & Commissioning", description: "Conducting thorough testing and commissioning of substation equipment to verify functionality, safety, and compliance with industry standards." },
            { title: "Containerised Solutions", description: "Providing containerized solutions for substations, offering a flexible and cost-effective approach to housing critical electrical infrastructure." },
            { title: "Substation Relocation and Upgrades", description: "Executing substation relocation and upgrade projects to enhance capacity, improve performance, and meet evolving demands." }
        ]
    },
    {
        Heading: 'CABLE INSTALLATION',
        SubHeadings: [
            { title: "Excavation & Reinstatement", description: "Performing precise excavation and reinstatement works to lay cables underground, ensuring minimal disruption to the surrounding environment." },
            { title: "Duct Laying", description: "Specializing in the laying of ducts for cable installation, providing a robust and durable conduit system to protect and manage cables." },
            { title: "Vacuum Excavation", description: "Utilizing vacuum excavation techniques for safe and efficient digging around sensitive utilities, minimizing the risk of damage." },
            { title: "Directional Drilling", description: "Employing directional drilling technology to install cables underground with minimal surface disruption, ideal for complex or congested areas." }
        ]
    },
    {
        Heading: 'FAULTS & MAINTENANCE',
        SubHeadings: [
            { title: "EHV Fault Repairs", description: "Providing rapid and effective repair services for Extra High Voltage (EHV) faults, ensuring minimal downtime and restoring service promptly." },
            { title: "Substation Maintenance", description: "Offering comprehensive maintenance services for substations, ensuring reliable operation, and extending the lifespan of critical infrastructure." }
        ]
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const dotVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
};

const CivilCards = () => {
    return (
        <div className="p-8 max-w-screen-xl mx-auto">
            {services.map((service, index) => (
                <div key={index}>
                    <h2 className="text-center text-2xl font-bold mb-8">{service.Heading}</h2>
                    {service.SubHeadings.map((subHeading, subIndex) => {
                        const isLeft = subIndex % 2 === 0;
                        const [ref, inView] = useInView({ triggerOnce: false });

                        return (
                            <div
                                ref={ref}
                                key={subIndex}
                                className={`flex ${isLeft ? 'justify-start' : 'justify-end'} items-center my-10`}
                            >
                                {isLeft && (
                                    <motion.div
                                        initial="hidden"
                                        animate={inView ? 'visible' : 'hidden'}
                                        variants={cardVariants}
                                        transition={{ duration: 0.5 }}
                                        className="w-96 p-5 bg-white shadow-lg rounded-lg"
                                    >
                                        <h3 className="text-xl font-semibold">{subHeading.title}</h3>
                                        <p className="mt-2">{subHeading.description}</p>
                                    </motion.div>
                                )}
                                <div className="flex flex-col items-center mx-5">
                                    {[...Array(5)].map((_, dotIndex) => (
                                        <motion.div
                                            key={dotIndex}
                                            initial="hidden"
                                            animate={inView ? 'visible' : 'hidden'}
                                            variants={dotVariants}
                                            transition={{ duration: 0.3, delay: dotIndex * 0.1 }}
                                            className="bg-maroon-800 rounded-full"
                                            style={{
                                                width: `${10 + dotIndex * 5}px`,
                                                height: `${10 + dotIndex * 5}px`,
                                                marginBottom: '5px',
                                                transform: `translate(${isLeft ? dotIndex * 5 : -dotIndex * 5}px, ${dotIndex * 5}px)`
                                            }}
                                        ></motion.div>
                                    ))}
                                </div>
                                {!isLeft && (
                                    <motion.div
                                        initial="hidden"
                                        animate={inView ? 'visible' : 'hidden'}
                                        variants={cardVariants}
                                        transition={{ duration: 0.5 }}
                                        className="w-96 p-5 bg-white shadow-lg rounded-lg"
                                    >
                                        <h3 className="text-xl font-semibold">{subHeading.title}</h3>
                                        <p className="mt-2">{subHeading.description}</p>
                                    </motion.div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default CivilCards;
