import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  company,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg relative group hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute top-6 right-8">
        <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800 transform -scale-x-100" />
      </div>
      
      <div className="relative">
        <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-lg leading-relaxed">
          "{content}"
        </p>
        
        <div className="flex items-center">
          <div className="flex-grow">
            <p className="font-semibold text-gray-900 dark:text-white text-lg">
              {author}
            </p>
            <p className="text-primary-600 dark:text-primary-400">
              {role} • {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;