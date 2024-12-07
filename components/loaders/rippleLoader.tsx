import React, { FC } from "react";
import { motion } from "framer-motion";

// Ripple Loader Component
// Source: https://syntaxui.com/components/loaders/ripple

const RippleLoader: FC = () => {
    const rippleVariants = {
      start: {
        opacity: 1,
        scale: 0,
      },
      end: {
        opacity: 0,
        scale: 3,
      },
    };
  
    const rippleTransition = {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        {/* Full-screen loader */}
        <div className="relative h-24 w-24">
          <motion.div
            className="absolute h-full w-full rounded-full bg-red-500 opacity-0"
            variants={rippleVariants}
            initial="start"
            animate="end"
            transition={rippleTransition}
          />
          <motion.div
            className="absolute h-full w-full rounded-full bg-red-500 opacity-0"
            variants={rippleVariants}
            initial="start"
            animate="end"
            transition={{ ...rippleTransition, delay: 0.5 }}
          />
          <motion.div
            className="absolute h-full w-full rounded-full bg-red-500 opacity-0"
            variants={rippleVariants}
            initial="start"
            animate="end"
            transition={{ ...rippleTransition, delay: 1 }}
          />
        </div>
      </div>
    );
  };

export default RippleLoader;