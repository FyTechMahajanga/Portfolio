import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  company,
  rating,
  image,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative group hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
          <Quote className="w-6 h-6 text-white transform -scale-x-100" />
        </div>
      </div>

      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={author}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {author}
          </h3>
          <p className="text-primary-600 dark:text-primary-400">
            {role} • {company}
          </p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
          />
        ))}
      </div>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        "{content}"
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  );
};

export default TestimonialCard;