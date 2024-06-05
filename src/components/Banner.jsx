import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../assets/excavator.jpeg';
import banner2 from '../assets/fiberRoll.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    const handleSlideChange = (index) => {
        setIsExiting(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsExiting(false);
        }, 500);
    };

    const slideVariants = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    const buttonVariants = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    };

    const slides = [
        {
            id: 0,
            text: "Transforming Infrastructure, Enhancing Lives.",
            buttonText: "Get Started",
            background: banner1
        },
        {
            id: 1,
            text: "Empowering Connections, Endless Possibilities.",
            buttonText: "Learn More",
            background: banner2
        },
        {
            id: 2,
            text: "Connecting the Dots, Between People & Possibilities.",
            buttonText: "Join Us",
            background: banner1
        },
    ];

    const currentSlideData = slides[currentSlide];

    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0)) , url(${currentSlideData.background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className="bg-no-repeat bg-cover bg-center">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={6000}
                transitionTime={1000}
                onChange={handleSlideChange}
                selectedItem={currentSlide}
                stopOnHover={false}
            >
                {slides.map((slide, index) => (
                    <div
                        className="flex items-center justify-center h-[75vh] p-8"
                        key={slide.id}
                        style={divStyle}
                    >
                        <div className="text-center space-y-8">
                            <AnimatePresence>
                                {!isExiting && currentSlide === index && (
                                    <>
                                        <motion.h2
                                            key={`h2-${slide.id}`}
                                            className="mx-auto text-white text-6xl p-4 font-bold mt-4 bg-slate-500 bg-opacity-70"
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            variants={slideVariants}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                        >
                                            {slide.text}
                                        </motion.h2>
                                        <motion.button
                                            key={`button-${slide.id}`}
                                            className="mt-4 px-8 py-3 bg-accentGreen-dark text-white text-3xl font-semibold shadow-md hover:bg-accentGreen transition-transform transform hover:scale-105"
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            variants={buttonVariants}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                        >
                                            {slide.buttonText}
                                        </motion.button>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
