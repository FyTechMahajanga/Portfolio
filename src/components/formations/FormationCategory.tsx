import React from 'react';
import { motion } from 'framer-motion';
import FormationCard from './FormationCard';
import { LucideIcon } from 'lucide-react';

interface Formation {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  price: string;
}

interface FormationCategoryProps {
  title: string;
  formations: Formation[];
}

const FormationCategory: React.FC<FormationCategoryProps> = ({ title, formations }) => {
  return (
    <div className="mb-20">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
      >
        {title}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formations.map((formation, index) => (
          <FormationCard
            key={index}
            {...formation}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FormationCategory;