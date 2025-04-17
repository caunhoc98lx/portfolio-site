import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import PropTypes from 'prop-types';

interface LoaderProps {
    isLoading: boolean;
    setIsLoading: () => void;
}

function Loader({ isLoading, setIsLoading }: LoaderProps) {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading();
        }, 1900);

        return () => clearTimeout(timeoutId);
    }, [setIsLoading]);

    const svgVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.3,
                duration: 1,
                ease: [0.4, 0, 0.2, 1],
            },
        }),
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.6 } },
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div className="loader" initial="hidden" animate="visible" exit="exit">
                    <motion.svg
                        id="logo"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        variants={svgVariants}
                        custom={0}
                    >
                        <title>Tran Hien</title>
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#8892AF', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#CCD6F6', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <g>
                            {/* -----start draw the letter H------ */}
                            <motion.rect
                                x="10"
                                y="15"
                                width="20"
                                height="80"
                                fill="url(#grad1)"
                                stroke="#8892AF"
                                strokeWidth="2"
                                variants={svgVariants}
                                custom={1}
                            />

                            <motion.rect
                                x="65"
                                y="15"
                                width="20"
                                height="80"
                                fill="url(#grad1)"
                                stroke="#8892AF"
                                strokeWidth="2"
                                variants={svgVariants}
                                custom={1.25}
                            />

                            <motion.rect
                                x="32"
                                y="48"
                                width="31"
                                height="20"
                                fill="url(#grad1)"
                                stroke="#8892AF"
                                strokeWidth="2"
                                variants={svgVariants}
                                custom={1.25}
                            />
                            {/* -----end draw the letter H------ */}
                            
                            <motion.circle
                                cx="75"
                                cy="75"
                                r="5"
                                fill="#CCD6F6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2, delay: 0.5 }}
                            />
                            <motion.polygon
                                points="50,10 60,30 40,30"
                                fill="#CCD6F6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, rotate: 360 }}
                                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5 }}
                            />
                            <motion.polygon
                                points="30,90 40,70 20,70"
                                fill="#CCD6F6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, rotate: 360 }}
                                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5, delay: 1 }}
                            />

                            {/* Glowing Effect */}
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="50"
                                fill="none"
                                stroke="#CCD6F6"
                                strokeWidth="2"
                                filter="url(#glow)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
                            >
                                <animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite" />
                            </motion.circle>
                        </g>
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

Loader.prototype = {
    isLoading: PropTypes.bool.isRequired,
    setIsLoading: PropTypes.func.isRequired,
}

export default Loader;