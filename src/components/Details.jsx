import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone } from "react-icons/fa";
import constructionImg from '../assets/ConstructionServices.jpg';
import reliableServices from '../assets/ReliableServices.jpg';
import supportTeam from '../assets/SupportTeam.jpeg';
import WhyUs from '../assets/WhyUs.jpeg';
import { Link } from 'react-router-dom';

const Details = () => {
    const aboutVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const [aboutRef, aboutInView] = useInView({ triggerOnce: false });

    const [selected, setSelected] = useState(1);
    const handleChange = (index) => {
        setSelected(index);
    };

    const descriptions = [{
        des: "We utilize the latest equipment and techniques to ensure precision and efficiency in our work. Our commitment to staying at the forefront of technological advancements allows us to provide innovative solutions that meet the evolving needs of the telecommunications industry. We employ advanced trenchless technology to minimize environmental impact and disruption to existing infrastructure. Our sustainable practices reflect our commitment to protecting the environment while delivering exceptional results.",
        title: "Professional Engineering and Construction Services. ",
        img: constructionImg
    },
    {
        des: "With over a decade of experience in the industry, our team brings a wealth of knowledge and technical proficiency to every project. We have successfully completed thousands of overhead and underground projects, demonstrating our ability to deliver high-quality solutions on time and within budget. From initial project design and consulting to construction, testing, and maintenance, we offer a full suite of services. Our ability to handle every aspect of telecom infrastructure projects makes us a one-stop solution for our clients.",
        title: "Reliable and Convenient Solutions.",
        img: reliableServices
    },
    {
        des: "At BETHMAR LIMITED, we prioritize our client’s needs and strive to build long-term relationships based on trust and mutual respect. Our dedicated support team is always ready to address any issues and provide rapid-response services in emergencies. Our engineers and technicians are highly qualified and continually undergo training to stay updated with industry standards and best practices. This ensures that our team can handle even the most complex and challenging projects with confidence.",
        title: "Dedicated Support Team.",
        img: supportTeam
    }];

    return (
        <div className='mx-auto bg-gray-100 border-2 border-gray-100'>
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center py-12">
                <motion.div
                    ref={aboutRef}
                    className="md:w-1/2 px-4 py-12 md:py-0"
                    initial="hidden"
                    animate={aboutInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.7 }}
                    variants={aboutVariants}
                >
                    <h2 className="text-xl md:text-5xl font-bold md:px-6 text-center md:text-left">Why Choose Us?</h2>
                    <div className='w-100 h-1 bg-accentRed-dark my-4 md:mx-6 mx-auto'></div>
                    <p className="text-gray-700 md:px-6 mx-4 md:mx-0 my-2 md:my-12 text-sm md:text-sm text-justify">Choosing <span className='font-semibold text-black'>BETHMAR LIMITED</span> means partnering with a company that prioritizes quality, reliability, and innovation. <br /> Partner with us for your civil engineering and fibre infrastructure needs, and experience the difference that quality, expertise, and dedication can make. <br />  </p>
                    <Link to="/contact" className="my-4 flex w-4/12 md:w-4/12 px-4 md:px-8 py-2 md:py-3 mx-auto md:mx-6 justify-center items-center bg-accentRed-dark border-2 border-accentRed-dark text-white text-xs md:text-sm font-semibold shadow-md hover:bg-accentRed hover:border-accentRed transition-transform transform hover:scale-105">Contact Now <span className='ml-2 self-center'><FaPhone /></span> </Link>
                </motion.div>
                <motion.div
                    className=" md:w-1/2 "
                    initial="hidden"
                    animate={aboutInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.7 }}
                    variants={aboutVariants}
                >
                    <img src={WhyUs} alt="About Us" className="w-full h-auto rounded md:rounded-lg px-4 md:px-0" />
                </motion.div>
            </div>
            <div className='mx-auto max-w-[1400px] bg-white shadow-lg rounded-lg mb-6 md:px-0 px-4'>
                <div className='flex p-4 md:p-6 rounded-md space-x-4'>
                    <h1
                        onClick={() => handleChange(0)}
                        className={`text-lg md:text-2xl border-black border-b-2 md:font-semibold p-2 md:px-2 md:py-4 cursor-pointer ${selected === 0 ? 'bg-accentRed-dark text-white border-b-4 border-t-0 border-l-0 border-r-0  border-slate-300' : 'hover:bg-accentRed-dark hover:text-white hover:border-t-0 hover:border-l-0 hover:border-r-0 transition duration-300'}`}
                    >
                        Professional Services
                    </h1>
                    <h1
                        onClick={() => handleChange(1)}
                        className={`text-lg md:text-2xl border-black border-b-2 md:font-semibold p-2 md:px-2 md:py-4 cursor-pointer ${selected === 1 ? 'bg-accentRed-dark text-white border-b-4 border-t-0 border-l-0 border-r-0  border-slate-300' : 'hover:bg-accentRed-dark hover:text-white hover:border-t-0 hover:border-l-0 hover:border-r-0 transition duration-300'}`}
                    >
                        Reliable Solutions
                    </h1>
                    <h1
                        onClick={() => handleChange(2)}
                        className={`text-lg md:text-2xl border-black border-b-2 md:font-semibold p-2 md:px-2 md:py-4 cursor-pointer ${selected === 2 ? 'bg-accentRed-dark text-white border-b-4 border-t-0 border-l-0 border-r-0  border-slate-300' : 'hover:bg-accentRed-dark hover:text-white hover:border-t-0 hover:border-l-0 hover:border-r-0 transition duration-300'}`}
                    >
                        Support Team
                    </h1>
                </div>
                <div className="py-6 ">
                    {selected !== null && (
                        <div className='md:flex justify-center items-center'>
                            <div className='md:w-6/12'>
                                <img src={descriptions[selected].img} alt="" className='w-auto h-auto' />
                            </div>
                            <div className='md:w-6/12'>
                                <h2 className='text-lg md:text-3xl font-bold md:px-6 md:py-4'>{descriptions[selected].title}</h2>
                                <p className="text-gray-700 md:px-6 my-2 md:my-4 text-xs md:text-sm text-justify">
                                    {descriptions[selected].des}
                                </p>
                            </div>
                        </div >
                    )}
                </div >
            </div >
        </div >
    );
};

export default Details;
