import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="py-12 bg-gray-100">
            <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto space-y-8 md:space-y-0 md:space-x-12 p-4">
                <motion.div
                    className="md:w-1/2"
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                    variants={formVariants}
                >
                    <h2 className="text-left font-semibold text-4xl mb-8 p-4">Contact Us</h2>
                    <p className='py-2 text-lg w-10/12 font-semibold'>Location: 17 PENNINE PARADE PENNINE DRIVE, LONDON, NW2 1NT, GB</p>
                    <p className='py-2 text-lg w-10/12 font-semibold'>Contact: 01707322748</p>
                    <p className='py-2 text-lg w-10/12 font-semibold'>Email: info@bethmar.com</p>
                </motion.div>
                <motion.div
                    className="md:w-1/2"
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={formVariants}
                >
                    <form className="max-w-xl mx-auto bg-white p-8 rounded shadow-md">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                            <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600" type="text" id="name" name="name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600" type="email" id="email" name="email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                            <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600" type="text" id="phone" name="phone" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                            <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600" type="text" id="subject" name="subject" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                            <textarea className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600" id="message" name="message" rows="4"></textarea>
                        </div>
                        <div className="text-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-green-600 text-white rounded shadow-md hover:bg-green-700 transition-all duration-300"
                                type="submit"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactForm;
