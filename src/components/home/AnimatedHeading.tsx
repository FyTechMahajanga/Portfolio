import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  title: string;
  subtitle: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-600 dark:text-gray-300"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default AnimatedHeading;