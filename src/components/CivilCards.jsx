import React from 'react'
import { motion } from 'framer-motion';

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
const CivilCards = () => {
    return (
        <div className='bg-gray-100 py-4'>
            <div className='p-2 border-2 border-accentRed-dark'></div>
            <div className="h-auto max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 "
                >
                    {services.map((service, index) => (
                        <div className='my-6'>
                            <h2 className="text-2xl my-3 font-bold text-center py-4 border-y-2 border-accentRed-dark">{service.Heading}</h2>
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            >
                                {service.SubHeadings.map((subheading, subIndex) => (
                                    <motion.div
                                        key={subIndex}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: subIndex * 0.1 }}
                                        className="bg-white shadow-md rounded px-4 py-6 mb-4"
                                    >
                                        <h3 className="text-base font-bold">{subheading.title}</h3>
                                        <p className="text-sm">{subheading.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default CivilCards



// const services = [
//     {

//         Heading: 'PLANNING / DESIGN & CONSULTANCY',
//         SubHeadings: [
//             { title: "Feasibility Studies", description: "Conducting comprehensive feasibility studies to assess the viability of proposed projects. This includes evaluating technical, financial, and environmental factors to ensure informed decision-making and project success." },
//             { title: "Route Surveys", description: "Performing detailed route surveys to determine the most efficient and effective paths for infrastructure installation. This involves analyzing geographical, environmental, and logistical considerations." },
//             { title: "Planning & Design", description: "Offering expert planning and design services to create innovative and practical solutions for infrastructure projects. This encompasses everything from initial concept development to detailed engineering plans." },
//             { title: "NRSWA Noticing & Permits", description: "Managing New Roads and Street Works Act (NRSWA) notices and permits, ensuring compliance with all regulatory requirements and facilitating smooth project execution." }
//         ]
//     },
//     {

//         Heading: 'NEW CONNECTIONS',
//         SubHeadings: [
//             { title: "ICP (Independent Connections Provider)", description: "Providing Independent Connections Provider (ICP) services for the installation and connection of new electrical infrastructure, ensuring reliable and efficient power supply." },
//             { title: "Private Networks", description: "Designing and implementing private networks tailored to meet the specific needs of clients, delivering secure and dedicated infrastructure solutions." },
//             { title: "Cable Diversions", description: "Managing cable diversion projects to relocate existing cables, minimizing disruption and ensuring continuity of service during construction or redevelopment activities." }
//         ]
//     },
//     {

//         Heading: 'SUBSTATIONS',
//         SubHeadings: [
//             { title: "Switchgear and Transformers", description: "Supplying, installing, and maintaining high-quality switchgear and transformers, ensuring optimal performance and reliability of electrical substations." },
//             { title: "Testing & Commissioning", description: "Conducting thorough testing and commissioning of substation equipment to verify functionality, safety, and compliance with industry standards." },
//             { title: "Containerised Solutions", description: "Providing containerized solutions for substations, offering a flexible and cost-effective approach to housing critical electrical infrastructure." },
//             { title: "Substation Relocation and Upgrades", description: "Executing substation relocation and upgrade projects to enhance capacity, improve performance, and meet evolving demands." }
//         ]
//     },
//     {

//         Heading: 'CABLE INSTALLATION',
//         SubHeadings: [
//             { title: "Excavation & Reinstatement", description: "Performing precise excavation and reinstatement works to lay cables underground, ensuring minimal disruption to the surrounding environment." },
//             { title: "Duct Laying", description: "Specializing in the laying of ducts for cable installation, providing a robust and durable conduit system to protect and manage cables." },
//             { title: "Vacuum Excavation", description: "Utilizing vacuum excavation techniques for safe and efficient digging around sensitive utilities, minimizing the risk of damage." },
//             { title: "Directional Drilling", description: "Employing directional drilling technology to install cables underground with minimal surface disruption, ideal for complex or congested areas." }
//         ]
//     },
//     {

//         Heading: 'FAULTS & MAINTENANCE',
//         SubHeadings: [
//             { title: "EHV Fault Repairs", description: "Providing rapid and effective repair services for Extra High Voltage (EHV) faults, ensuring minimal downtime and restoring service promptly." },
//             { title: "Substation Maintenance", description: "Offering comprehensive maintenance services for substations, ensuring reliable operation, and extending the lifespan of critical infrastructure." }
//         ]
//     }
// ];