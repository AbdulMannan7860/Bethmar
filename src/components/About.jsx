import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import about from '../assets/Banner1.jpeg';
import transformer from '../assets/transformer.jpg';

const About = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)) , url(${transformer})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }
    const Projects = [
        { image: about, text: 'Project 1', description: 'Detailed description for Project 1' },
        { image: about, text: 'Project 2', description: 'Detailed description for Project 2' },
        { image: about, text: 'Project 3', description: 'Detailed description for Project 3' },
    ];
    const [expanded, setExpanded] = useState(Array(Projects.length).fill(false));

    const toggleExpand = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
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
        <div className="about py-12 bg-white mx-auto">
            <div className="container mx-auto flex flex-col md:flex-row items-center w-[1400px]">
                <motion.div
                    ref={aboutRef}
                    className="md:w-1/2 px-4"
                    initial="hidden"
                    animate={aboutInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5 }}
                    variants={aboutVariants}
                >
                    <h2 className="text-5xl mb-4">About Us</h2>
                    <p className="text-gray-700 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio minus atque harum eligendi! Enim ducimus repudiandae ullam blanditiis modi repellendus doloremque vel reiciendis perspiciatis consectetur sint quibusdam, hic officia assumenda. Veniam dolore debitis quidem, earum facere eos qui. Asperiores quae distinctio officia consequatur facilis aut alias deserunt earum laudantium!</p>
                </motion.div>
                <motion.div
                    className="md:w-1/2 px-4"
                    initial="hidden"
                    animate={aboutInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={aboutVariants}
                >
                    <img src={about} alt="About Us" className="w-full h-auto rounded" />
                </motion.div>
            </div>
            <div className="projects py-12 mt-8" style={divStyle}>
                <h2 className="text-center text-3xl mb-8 text-white">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
                    {Projects.map((project, index) => {
                        const [ref, inView] = useInView({ triggerOnce: false });
                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                className="project-card p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300"
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                variants={projectVariants}
                            >
                                <img src={project.image} alt={project.text} className="w-full h-48 object-cover rounded mb-4" />
                                <h3 className="text-xl mb-2">{project.text}</h3>
                                <AnimatePresence>
                                    <motion.p
                                        key={`description-${index}`}
                                        className={`text-gray-700 ${expanded[index] ? 'block' : 'line-clamp-2'}`}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={aboutVariants}
                                    >
                                        {project.description}
                                    </motion.p>
                                </AnimatePresence>
                                <button
                                    className="mt-4 px-4 py-2 bg-accentGreen text-white rounded"
                                    onClick={() => toggleExpand(index)}
                                >
                                    {expanded[index] ? 'Read Less' : 'Read More'}
                                </button>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default About;
