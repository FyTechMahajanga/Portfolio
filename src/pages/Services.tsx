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
      title: t('services.categories.professional'),
        services: [
          {
            icon: <Code className="w-8 h-8" />,
            title: t('services.items.mockup.title2'),
            description: t('services.items.mockup.description2'),
            features: [
              t('services.items.mockup.features2.responsive'),
              t('services.items.mockup.features2.integrationcontenu'),
              t('services.items.mockup.features2.optimisationseo'),
              t('services.items.mockup.features2.facilitegestion'),
              t('services.items.mockup.features2.personnalisation')
            ],
            price: t('services.items.mockup.price2')
          },
          {
            icon: <Code className="w-8 h-8" />,
            title: t('services.items.mockup.title3'),
            description: t('services.items.mockup.description3'),
            features: [
              t('services.items.mockup.features3.navigation'),
              t('services.items.mockup.features3.fichesproduits'),
              t('services.items.mockup.features3.avancees'),
              t('services.items.mockup.features3.responsive'),
              t('services.items.mockup.features3.simplifiee'),
              t('services.items.mockup.features3.optimisationseo')
            ],
            price: t('services.items.mockup.price3')
          },
          {
            icon: <Code className="w-8 h-8" />,
            title: t('services.items.mockup.title4'),
            description: t('services.items.mockup.description4'),
            features: [
              t('services.items.mockup.features4.analyseconseil'),
              t('services.items.mockup.features4.designunique'),
              t('services.items.mockup.features4.specifiques'),
              t('services.items.mockup.features4.responsive'),
              t('services.items.mockup.features4.simplifiee'),
              t('services.items.mockup.features4.optimisationseo'),
              t('services.items.mockup.features4.evolutivite')
            ],
            price: t('services.items.mockup.price4')
          }
        ]
    },
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
            icon: <Layout className="w-8 h-8" />,
            title: t('services.items.mockup.title1'),
            description: t('services.items.mockup.description1'),
            features: [
              t('services.items.mockup.features1.maquettesweb'),
              t('services.items.mockup.features1.maquettemobile'),
              t('services.items.mockup.features1.maquettegraphique'),
              t('services.items.mockup.features1.wireframes'),
              t('services.items.mockup.features1.prototypes')
            ],
            price: t('services.items.mockup.price1')
          }
        ]
    },
    {
      title: t('services.categories.maintenance'),
        services: [
          {
            icon: <Laptop className="w-8 h-8" />,
            title: t('services.items.mockup.title5'),
            description: t('services.items.mockup.description5'),
            features: [
              t('services.items.mockup.features5.installation'),
              t('services.items.mockup.features5.preventive'),
              t('services.items.mockup.features5.performance'),
              t('services.items.mockup.features5.sauvegarde')
            ],
            price: t('services.items.mockup.price5')
          },
          {
            icon: <Laptop className="w-8 h-8" />,
            title: t('services.items.mockup.title6'),
            description: t('services.items.mockup.description6'),
            features: [
              t('services.items.mockup.features6.depannage'),
              t('services.items.mockup.features6.corrective'),
              t('services.items.mockup.features6.evolutive'),
              t('services.items.mockup.features6.misejour')
            ],
            price: t('services.items.mockup.price6')
          }
        ]
    },
    {
      title: t('services.categories.photo'),
        services: [
          {
            icon: <Camera className="w-8 h-8" />,
            title: t('services.items.mockup.title7'),
            description: t('services.items.mockup.description7'),
            features: [
              t('services.items.mockup.features7.portraits'),
              t('services.items.mockup.features7.evenementielle'),
              t('services.items.mockup.features7.commercial'),
              t('services.items.mockup.features7.immobiliere'),
              t('services.items.mockup.features7.mode'),
              t('services.items.mockup.features7.restauration')
            ],
            price: t('services.items.mockup.price7')
          }
        ]
    },
    {
      title: t('services.categories.marketing'),
        services: [
          {
            icon: <Megaphone className="w-8 h-8" />,
            title: t('services.items.mockup.title8'),
            description: t('services.items.mockup.description8'),
            features: [
              t('services.items.mockup.features8.gestionreseaux'),
              t('services.items.mockup.features8.publiciter'),
              t('services.items.mockup.features8.contenu')
            ],
            price: t('services.items.mockup.price8')
          }
        ]
    },
    {
      title: t('services.categories.reseau'),
        services: [
          {
            icon: <Network className="w-8 h-8" />,
            title: t('services.items.mockup.title9'),
            description: t('services.items.mockup.description9'),
            features: [
              t('services.items.mockup.features9.conceptions'),
              t('services.items.mockup.features9.reseau')
            ],
            price: t('services.items.mockup.price9')
          }
        ]
    },
    {
      title: t('services.categories.design2d'),
        services: [
          {
            icon: <Monitor className="w-8 h-8" />,
            title: t('services.items.mockup.title10'),
            description: t('services.items.mockup.description10'),
            features: [
              t('services.items.mockup.features10.conception2d'),
              t('services.items.mockup.features10.modelisation3d'),
              t('services.items.mockup.features10.rendu3d'),
              t('services.items.mockup.features10.designuiux')
            ],
            price: t('services.items.mockup.price10')
          }
        ]
    },
    {
      title: t('services.categories.developpementjeux'),
        services: [
          {
            icon: <Box className="w-8 h-8" />,
            title: t('services.items.mockup.title11'),
            description: t('services.items.mockup.description11'),
            features: [
              t('services.items.mockup.features11.programmation'),
              t('services.items.mockup.features11.designartistique')
            ],
            price: t('services.items.mockup.price11')
          }
        ]
    },
    {
      title: t('services.categories.conceptionlogiciel'),
        services: [
          {
            icon: <Monitor className="w-8 h-8" />,
            title: t('services.items.mockup.title12'),
            description: t('services.items.mockup.description12'),
            features: [
              t('services.items.mockup.features12.appsimple'),
              t('services.items.mockup.features12.logiciel')
            ],
            price: t('services.items.mockup.price12')
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
        <div className="absolute inset-0 bg-gradient-to-r service from-primary-600 to-secondary-600">
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
      <section className="py-20 bg-gray-100 service dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white dark:text-white mb-6"
          >
            {t('services.cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white dark:text-white mb-8"
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