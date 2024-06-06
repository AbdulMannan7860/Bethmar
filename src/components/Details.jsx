import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import about from '../assets/Banner1.jpeg';
import { FaPhone } from "react-icons/fa";
import constructionImg from '../assets/ConstructionServices.jpg';
import reliableServices from '../assets/ReliableServices.jpg';
import supportTeam from '../assets/SupportTeam.jpeg';
import WhyUs from '../assets/WhyUs.jpeg';

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
        des: "At BETHMAR LIMITED, we prioritize our clients’ needs and strive to build long-term relationships based on trust and mutual respect. Our dedicated support team is always ready to address any issues and provide rapid-response services in emergencies. Our engineers and technicians are highly qualified and continually undergo training to stay updated with industry standards and best practices. This ensures that our team can handle even the most complex and challenging projects with confidence.",
        title: "Dedicated Support Team.",
        img: supportTeam
    }];

    return (
        <div className='mx-auto bg-gray-100 border-2 border-gray-100'>
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center py-6">
                <motion.div
                    ref={aboutRef}
                    className="md:w-1/2 px-4 py-12 md:py-0"
                    initial="hidden"
                    animate={aboutInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5 }}
                    variants={aboutVariants}
                >
                    <h2 className="text-xl md:text-5xl font-semibold md:px-6 text-center md:text-left">Why Choose Us?</h2>
                    <p className="text-gray-700 md:px-6 my-2 md:my-12 text-sm md:text-xl">Choosing BETHMAR LIMITED means partnering with a company that prioritizes quality, reliability, and innovation. <br /> Partner with BETHMAR LIMITED for your civil engineering and fiber infrastructure needs, and experience the difference that quality, expertise, and dedication can make. <br />  </p>
                    <button className=" mt-4 px-4  md:px-8 flex py-2 md:py-3 mx-auto bg-accentRed border-2 border-accentRed text-white text-sm md:text-xl font-semibold shadow-md hover:bg-accentRed-dark hover:border-accentRed-dark transition-transform transform hover:scale-105">Contact Now <span className='ml-2 self-center'><FaPhone /></span> </button>
                </motion.div>
                <motion.div
                    className=" md:w-1/2 md:px-4"
                    initial="hidden"
                    animate={aboutInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={aboutVariants}
                >
                    <img src={WhyUs} alt="About Us" className="w-full h-auto rounded md:rounded-lg px-4 md:px-0" />
                </motion.div>
            </div>
            <div className='mx-auto bg-white max-w-[1400px] shadow mb-6 md:px-0 px-4'>
                <div className='flex p-4 md:p-6 rounded-md space-x-4'>
                    <h1
                        onClick={() => handleChange(0)}
                        className={`text-lg md:text-2xl border-black border-b-2 md:font-semibold p-2 md:px-2 md:py-4 cursor-pointer ${selected === 0 ? 'bg-accentRed text-white border-b-4 border-t-0 border-l-0 border-r-0  border-slate-300' : 'hover:bg-accentRed hover:text-white hover:border-t-0 hover:border-l-0 hover:border-r-0 transition duration-300'}`}
                    >
                        Professional Services
                    </h1>
                    <h1
                        onClick={() => handleChange(1)}
                        className={`text-lg md:text-2xl border-black border-b-2 md:font-semibold p-2 md:px-2 md:py-4 cursor-pointer ${selected === 1 ? 'bg-accentRed text-white border-b-4 border-t-0 border-l-0 border-r-0  border-slate-300' : 'hover:bg-accentRed hover:text-white hover:border-t-0 hover:border-l-0 hover:border-r-0 transition duration-300'}`}
                    >
                        Reliable Solutions
                    </h1>
                    <h1
                        onClick={() => handleChange(2)}
                        className={`text-lg md:text-2xl border-black border-b-2 md:font-semibold p-2 md:px-2 md:py-4 cursor-pointer ${selected === 2 ? 'bg-accentRed text-white border-b-4 border-t-0 border-l-0 border-r-0  border-slate-300' : 'hover:bg-accentRed hover:text-white hover:border-t-0 hover:border-l-0 hover:border-r-0 transition duration-300'}`}
                    >
                        Support Team
                    </h1>
                </div>
                <div className="py-6">
                    {selected !== null && (
                        <div className='md:flex justify-between'>
                            <div className='md:w-6/12'>
                                <img src={descriptions[selected].img} alt="" className='w-auto h-auto  pb-4' />
                            </div>
                            <div className='md:w-6/12'>
                                <h1 className='text-lg md:text-2xl font-semibold md:px-6 md:py-4'>{descriptions[selected].title}</h1>
                                <p className="text-gray-700 md:px-6 my-2 md:my-4 px-2 text-sm md:text-xl">
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
