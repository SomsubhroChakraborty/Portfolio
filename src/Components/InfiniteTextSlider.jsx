import React from "react";
import { motion } from "framer-motion";

const InfiniteTextSlider = ({ items, duration = 20 }) => {
    return (
        <div className="overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,_#111111_5%,_transparent,_#111111_95%)] z-10 w-full pointer-events-none" />
            <div className="flex">
                {/* Duplicate the animation block twice to simulate infinite scroll */}
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-shrink-0 gap-10"
                        initial={{ x: '0%' }}
                        animate={{ x: '-100%' }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    >
                        {items.map((text, index) => (
                            <span
                                key={index}
                                className="text-white text-lg font-semibold whitespace-nowrap cursor-pointer hover:text-purple-400 transition-all duration-300"
                            >
                                {text}
                            </span>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteTextSlider;
