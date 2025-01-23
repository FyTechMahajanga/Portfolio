import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layout, Code, Monitor, Camera, Megaphone, Network, Box, FileEdit, Check, Laptop, Smartphone, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const categories = [
    {
      title: t('services.categories.graphique'),
        services: [
          {
            icon: <Layout className="w-8 h-8" />,
            title: t('services.items.mockup.title'),
            description: t('services.items.mockup.description'),
            features: [
              t('services.items.mockup.features.logo'),
              t('services.items.mockup.features.cartevisite'),
              t('services.items.mockup.features.flyer'),
              t('services.items.mockup.features.affiche'),
              t('services.items.mockup.features.brochure'),
              t('services.items.mockup.features.depliant'),
              t('services.items.mockup.features.bannierepublicitaire'),
              t('services.items.mockup.features.redactionpublicitaire')
            ],
            price: t('services.items.mockup.price')
          },
          {
            icon: <Code className="w-8 h-8" />,
            title: t('services.web.website.title', 'Website Creation'),
            description: t('services.web.website.description', 'Development of modern and performant websites.'),
            features: [
              t('services.web.website.features.design', 'Custom design'),
              t('services.web.website.features.responsive', 'Responsive design'),
              t('services.web.website.features.seo', 'SEO optimization'),
              t('services.web.website.features.admin', 'Admin interface')
            ],
            price: t('services.web.website.price', 'From 500,000 Ar')
          },
          {
            icon: <Smartphone className="w-8 h-8" />,
            title: t('services.web.mobile.title', 'Mobile Development'),
            description: t('services.web.mobile.description', 'Native and cross-platform mobile applications.'),
            features: [
              t('services.web.mobile.features.platforms', 'iOS and Android'),
              t('services.web.mobile.features.ui', 'Mobile UI/UX'),
              t('services.web.mobile.features.performance', 'Optimized performance'),
              t('services.web.mobile.features.maintenance', 'Continuous maintenance')
            ],
            price: t('services.web.mobile.price', 'From 800,000 Ar')
          }
        ]
    },
    {
      title: t('services.categories.professional'),
        services: [
          {
            icon: <Box className="w-8 h-8" />,
            title: t('services.professional.modeling.title', '3D Modeling'),
            description: t('services.professional.modeling.description', 'Creation of 3D models for your projects.'),
            features: [
              t('services.professional.modeling.features.architectural', 'Architectural modeling'),
              t('services.professional.modeling.features.product', 'Product design'),
              t('services.professional.modeling.features.animation', '3D animations'),
              t('services.professional.modeling.features.rendering', 'Photorealistic rendering')
            ],
            price: t('services.professional.modeling.price', 'From 300,000 Ar')
          },
          {
            icon: <Camera className="w-8 h-8" />,
            title: t('services.professional.photo.title', 'Photo Services'),
            description: t('services.professional.photo.description', 'Professional photography for your business.'),
            features: [
              t('services.professional.photo.features.product', 'Product photos'),
              t('services.professional.photo.features.corporate', 'Corporate portraits'),
              t('services.professional.photo.features.events', 'Events'),
              t('services.professional.photo.features.retouching', 'Photo retouching')
            ],
            price: t('services.professional.photo.price', 'From 150,000 Ar')
          },
          {
            icon: <Megaphone className="w-8 h-8" />,
            title: t('services.professional.marketing.title', 'Digital Marketing'),
            description: t('services.professional.marketing.description', 'Marketing strategies for your online presence.'),
            features: [
              t('services.professional.marketing.features.social', 'Social media'),
              t('services.professional.marketing.features.seo', 'SEO/SEM'),
              t('services.professional.marketing.features.content', 'Content marketing'),
              t('services.professional.marketing.features.analytics', 'Data analysis')
            ],
            price: t('services.professional.marketing.price', 'From 250,000 Ar')
          }
        ]
    }
  ];

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]" /></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
              >
                {category.title}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-4 mb-6">
                        {service.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-center text-gray-700 dark:text-gray-300"
                          >
                            <Check className="w-5 h-5 mr-2 text-primary-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
                        {service.price}
                      </div>
                      <button 
                        onClick={handleContact}
                        className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-300"
                      >
                        {t('services.cta.button')}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('services.cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            {t('services.cta.subtitle')}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={handleContact}
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold text-lg transition-colors duration-300"
          >
            {t('services.cta.button')}
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Services;