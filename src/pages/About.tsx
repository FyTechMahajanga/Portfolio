import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Users, Target, Award, Rocket, MapPin, Phone, Mail, Clock } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const About = () => {
  const { t } = useTranslation();
  const position: [number, number] = [-15.7167, 46.3167]; // Mahajanga coordinates

  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t('about.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Nell'Faa Group Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <img
                src="./src/assets/1.png"
                alt="Nell'Faa Group Logo"
                className="w-64 mx-auto md:mx-0"
              />
              <img
                src="./src/assets/2.png"
                alt="Nell'Faa Group Logo"
                className="w-64 mx-auto md:mx-0"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.headtitle')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('about.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('about.mission.title')}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {t('about.mission.content')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Rocket className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('about.vision.title')}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {t('about.vision.content')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            {t('about.values.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4 text-primary-600 dark:text-primary-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            {t('about.contact.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {t('about.contact.address')}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {t('about.contact.phone')}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {t('about.contact.email')}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {t('about.contact.hours')}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-[400px] rounded-xl overflow-hidden shadow-lg"
            >
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    FŸ-TECH <br /> {t('about.subtitle')}
                  </Popup>
                </Marker>
              </MapContainer>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;