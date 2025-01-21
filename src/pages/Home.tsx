import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Monitor, Code, Brain, Laptop, ChevronRight } from 'lucide-react';
import ServiceCard from '../components/home/ServiceCard';
import StatCard from '../components/home/StatCard';
import TeamMember from '../components/home/TeamMember';
import TestimonialCard from '../components/home/TestimonialCard';
import AnimatedHeading from '../components/home/AnimatedHeading';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleServiceRedirect = () => {
    navigate('/services');
  };

  const services = [
    {
      icon: Monitor,
      title: t('home.services.items.training.title'),
      description: t('home.services.items.training.description'),
    },
    {
      icon: Code,
      title: t('home.services.items.solutions.title'),
      description: t('home.services.items.solutions.description'),
    },
    {
      icon: Brain,
      title: t('home.services.items.consulting.title'),
      description: t('home.services.items.consulting.description'),
    },
    {
      icon: Laptop,
      title: t('home.services.items.development.title'),
      description: t('home.services.items.development.description'),
    },
  ];

  const stats = [
    { 
      number: t('home.stats.items.expertise.number'), 
      label: t('home.stats.items.expertise.label')
    },
    { 
      number: t('home.stats.items.projects.number'), 
      label: t('home.stats.items.projects.label')
    },
    { 
      number: t('home.stats.items.clients.number'), 
      label: t('home.stats.items.clients.label')
    },
    { 
      number: t('home.stats.items.trainings.number'), 
      label: t('home.stats.items.trainings.label')
    },
  ];

  const team = [
    {
      image: './src/assets/zonirina.jpg',
    },
    {
      image: './src/assets/mario.jpg',
    },
    {
      image: './src/assets/arduino.jpg',
    },{
      image: './src/assets/tantely.jpg',
    },{
      image: './src/assets/sedrick.jpg',
    },{
      image: './src/assets/renty.jpg',
    },{
      image: './src/assets/julien.jpg',
    },{
      image: './src/assets/tolotra.jpg',
    },{
      image: './src/assets/orlando.jpg',
    },{
      image: './src/assets/ruino.jpg',
    },{
      image: './src/assets/gino.jpg',
    },{
      image: './src/assets/zanah.jpg',
    },{
      image: './src/assets/achil.jpg',
    },{
      image: './src/assets/mahatsangy.jpg',
    },{
      image: './src/assets/juliano.jpg',
    },{
      image: './src/assets/sitraka.jpg',
    },{
      image: './src/assets/jess.jpg',
    },{
      image: './src/assets/nado.jpg',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {t('home.hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-gray-100"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleServiceRedirect}
            className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto space-x-2 group"
          >
            <span>{t('home.hero.cta')}</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHeading
            title={t('home.services.title')}
            subtitle={t('home.services.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHeading
            title={t('home.stats.title')}
            subtitle={t('home.stats.subtitle')}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHeading
            title={t('home.team.title')}
            subtitle={t('home.team.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;