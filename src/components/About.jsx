import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import about from '../assets/Banner1.jpeg';
import AboutUs from '../assets/AboutUs.jpeg';
import transformer from '../assets/transformer.jpg';
import project1 from '../assets/Project1.jpg';
import project2 from '../assets/Project2.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.0)), linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.6)) , url(${transformer})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    };

    const Projects = [
        {
            image: project1,
            text: 'London Urban Fiber Optic Expansion',
            description: "The London Urban Fiber Optic Expansion project was a comprehensive initiative aimed at upgrading the telecommunications infrastructure in the heart of London. BETHMAR LIMITED spearheaded this project, deploying advanced fiber optic networks to enhance connectivity for both residential and commercial areas. The project involved meticulous planning and execution, including the installation of fiber optic cables both underground and aerially across various districts. This upgrade significantly improved internet speeds and reliability, supporting the city's growing demand for high-speed internet. Our team worked around the clock, ensuring minimal disruption to the public while adhering to the highest safety standards. The success of this project has set a new benchmark for urban telecommunications infrastructure. Throughout the project's duration, BETHMAR LIMITED faced and overcame numerous challenges, from navigating complex urban landscapes to coordinating with multiple stakeholders. Our expertise in civil engineering and fiber optics was crucial in achieving seamless integration with existing systems. The project not only boosted connectivity but also paved the way for future technological advancements in London's telecommunications sector."
        },
        {
            image: project2,
            text: 'Rural Broadband Initiative',
            description: "The Rural Broadband Initiative was a transformative project designed to bring high-speed internet to underserved rural communities. BETHMAR LIMITED played a pivotal role in this initiative, leveraging trenchless technology to lay fiber optic cables across vast and challenging terrains. This project aimed to bridge the digital divide, providing rural areas with the same quality of internet access as urban centers. Our team conducted extensive field surveys and collaborated closely with local authorities to ensure the project's success. The Rural Broadband Initiative has empowered communities with better access to education, healthcare, and economic opportunities, driving significant socio-economic development. In addition to improving connectivity, the project also focused on training and employing local workforce, fostering community involvement, and ensuring sustainable practices. BETHMAR LIMITED’s commitment to innovation and excellence was evident in every phase of the project, from initial planning to final deployment. The positive impact of this initiative continues to resonate, enhancing the quality of life in rural areas and contributing to their long-term growth and development."
        },
        {
            image: about,
            text: 'Smart City Infrastructure Development',
            description: "The Smart City Infrastructure Development project is a forward-looking initiative aimed at integrating cutting-edge technology into urban planning. BETHMAR LIMITED was tasked with deploying a robust fiber optic network to support various smart city applications, including traffic management, public safety, and energy efficiency. This project involved installing high-capacity fiber optic cables and connecting key infrastructures such as traffic lights, surveillance cameras, and utility meters. Our team’s expertise in civil engineering and telecommunications ensured the seamless implementation of this complex project. The Smart City Infrastructure Development is a testament to our commitment to innovation and sustainability in urban development. <br/> By leveraging the latest technology, the project has enhanced the city's operational efficiency and quality of life for its residents. BETHMAR LIMITED’s role extended beyond installation; we also provided ongoing maintenance and support to ensure the network's reliability and performance. The success of this project has positioned the city as a model for smart urban development, showcasing how advanced telecommunications infrastructure can drive modernization and growth."
        },
    ];

    const [expanded, setExpanded] = useState(Array(Projects.length).fill(false));

    const toggleExpand = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    const handleOutOfView = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = false;
        setExpanded(newExpanded);
    };

    const aboutVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const projectVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const [aboutRef, aboutInView] = useInView({ triggerOnce: false });

    return (
        <div id="about" className="py-12 bg-gray-100 mx-auto">
            <motion.div
                initial="hidden"
                animate={aboutInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.7 }}
                variants={aboutVariants}
                className="container mx-auto flex flex-col md:flex-row items-center md:max-w-[1300px] bg-white rounded shadow-lg py-6">
                <div
                    ref={aboutRef}
                    className="md:w-1/2 px-4"

                >
                    <h2 className="text-xl md:text-4xl font-semibold md:px-6 text-center md:text-left">About Us</h2>
                    <div className='w-52 h-1 bg-accentRed-dark my-4 md:mx-6 mx-4'></div>
                    <p className="text-gray-700 md:px-6 my-2 md:my-8 text-sm md:text-base text-justify">BETHMAR LIMITED is a renowned leader in civil engineering and fiber infrastructure within the U.K. telecommunications industry. Founded in 2013, we have rapidly built a reputation for excellence and reliability, leveraging our expertise to deliver top-tier solutions. Our team of seasoned professionals is dedicated to enhancing the telecommunications landscape through innovative engineering practices and cutting-edge technology.</p>
                    <Link to="/about" className=" mt-4 px-4 flex w-4/12 md:px-8 py-2 md:py-3 mx-6 bg-accentRed-dark border-2 border-accentRed-dark text-white text-sm md:text-lg font-semibold shadow-md hover:bg-accentRed hover:border-accentRed transition-transform transform hover:scale-105">Learn More <span className="ml-2 self-center"> <FaArrowRight /> </span> </Link>
                </div>
                <div
                    className="md:w-1/2 md:px-4"
                >
                    <img src={AboutUs} alt="About Us" className="w-full h-auto rounded md:px-0 px-4" />
                </div>
            </motion.div>
            <div className="py-12 mt-8" style={divStyle}>
                <h2 className="text-center text-xl md:text-4xl font-semibold text-white">Our Projects</h2>
                <div className='w-72 h-1 bg-accentRed-dark my-4 mx-auto mb-8'></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-w-[1300px] mx-auto md:px-0 px-4">
                    {Projects.map((project, index) => {
                        const [ref, inView] = useInView({ triggerOnce: false });
                        const [pRef, pInView] = useInView({
                            triggerOnce: false,
                            onChange: (inView) => {
                                if (!inView) {
                                    handleOutOfView(index);
                                }
                            }
                        });
                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                className={`p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300 ${expanded[index] ? 'max-h-auto' : 'max-h-[450px]'}`}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                variants={projectVariants}
                            >
                                <img src={project.image} alt={project.text} className="w-full h-48 object-cover rounded mb-4" />
                                <h3 className="text-lg md:text-xl mb-2 font-bold">{project.text}</h3>
                                <AnimatePresence>
                                    <motion.div
                                        id={`project${index}`}
                                        key={`description-${index}`}
                                        className={`text-sm md:text-base text-gray-700 overflow-hidden transition-all duration-500 ease-in-out`}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={aboutVariants}
                                    >
                                        <p ref={pRef} className={`${expanded[index] ? 'text-justify' : 'line-clamp-4 text-justify'} text-base`}>{project.description}</p>
                                    </motion.div>
                                </AnimatePresence>
                                <button
                                    className="mt-4 px-4 py-2 bg-transparent border-accentRed border text-accentRed rounded hover:bg-accentRed-dark hover:border-accentRed-dark hover:text-white transition-colors duration-300 text-sm md:text-base"
                                    onClick={() => toggleExpand(index)}
                                >
                                    {expanded[index] ? 'Read Less' : 'Read More'}
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default About;
