import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  number: string;
  label: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4"
      >
        {number}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        className="text-gray-600 dark:text-gray-300 text-lg"
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default StatCard;