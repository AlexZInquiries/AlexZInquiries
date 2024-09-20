'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const LoadingOverlay = () => {
    return (
        <AnimatePresence>
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <motion.div
                className="flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                {/* Custom SVG Spinner */}
                <svg
                    className="w-16 h-16 mb-4 animate-spin"
                    viewBox="0 0 50 50"
                >
                    <motion.circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="89, 200"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -200 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 2,
                            ease: 'linear',
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="75%" stopColor="#3b82f6" /> {/* primary-500 */}
                            <stop offset="100%" stopColor="#4f46e5" /> {/* primary-600 */}
                        </linearGradient>
                    </defs>
                </svg>

                <motion.p
                    className="text-white text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Loading...
                </motion.p>
            </motion.div>
        </motion.div>
        </AnimatePresence>
    );
};

export default LoadingOverlay;