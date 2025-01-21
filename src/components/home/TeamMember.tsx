import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={image}
          className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-center space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;