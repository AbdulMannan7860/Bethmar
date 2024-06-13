import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const contactVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <motion.div
                    ref={ref}
                    className="bg-white shadow-lg overflow-hidden"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.7 }}
                    variants={contactVariants}
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-4 md:p-8 bg-accentRed-dark text-white">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact Us</h2>
                            <p className="italic text-sm md:text-lg">"The way to get started is to quit talking and begin doing." - William Disney</p>
                        </div>
                        <div className="md:w-1/2 p-4 md:p-8">
                            <p className="mb-6 text-sm md:text-base">
                                We would love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                            </p>
                            <Link to={'/contact'} className="bg-accentRed-dark text-white font-bold py-3 px-6 hover:bg-accentRed justify-center items-center flex md:inline-block text-xs md:text-sm">
                                Contact Now
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactUs;
