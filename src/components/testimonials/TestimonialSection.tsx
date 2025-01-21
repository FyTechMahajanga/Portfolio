import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

const TestimonialSection = () => {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "FŸ-TECH's digital training program completely transformed our team's capabilities. Their hands-on approach and expert instruction made complex concepts accessible.",
      author: "Marie Rakoto",
      role: "HR Director",
      company: "Tech Corp Madagascar",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      id: 2,
      content: "The custom software solution developed by FŸ-TECH streamlined our operations and increased efficiency by 40%. Their team's expertise and professionalism exceeded our expectations.",
      author: "Jean Paul",
      role: "Operations Director",
      company: "Logistics Plus",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      id: 3,
      content: "Working with FŸ-TECH has been transformative for our business. Their tech consulting helped us navigate digital transformation seamlessly.",
      author: "Sarah Anderson",
      role: "CEO",
      company: "StartUp MG",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from our satisfied clients about their experience with FŸ-TECH
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative group hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white transform -scale-x-100" />
                </div>
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;