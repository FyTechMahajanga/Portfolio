import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LucideIcon, ChevronDown } from 'lucide-react';

interface FormationCardProps {
  title: {
    fr: string;
    en: string;
    mg: string;
  };
  description: {
    fr: string;
    en: string;
    mg: string;
  };
  duration: {
    fr: string;
    en: string;
    mg: string;
  };
  price: {
    fr: string;
    en: string;
    mg: string;
  };
  buttonname : {
    fr: string;
    en: string;
    mg: string;
  };
  detailsabout: {
    fr: string;
    en: string;
    mg: string;
  };
  notebene :{
    fr: string;
    en: string;
    mg: string;
  };
  plus :{
    fr: string;
    en: string;
    mg: string;
  };
  image: string;
  icon: LucideIcon;
  index: number;
}

const FormationCard: React.FC<FormationCardProps> = ({
  title,
  description,
  duration,
  price,
  buttonname,
  detailsabout,
  notebene,
  plus,
  image,
  icon: Icon,
  index
}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const currentLang = i18n.language as 'fr' | 'en' | 'mg';

  const handleInscription = () => {
    navigate('/contact', {
      state: {
        formation: {
          title: title[currentLang],
          duration: duration[currentLang],
          price: price[currentLang]
        },
        subject: `Inscription: ${title[currentLang]}`,
        message: `Je souhaite m'inscrire à la formation "${title[currentLang]}" (Durée: ${duration[currentLang]}, Prix: ${price[currentLang]})`
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title[currentLang]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">
            {title[currentLang]}
          </h3>
          <div className="flex justify-between text-gray-200 text-sm">
            <span>{duration[currentLang]}</span>
            <span>{price[currentLang]}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {description[currentLang]}
        </p>
        
        {/* Note Bene Collapsible Section */}
        <div className="mb-6">
          <button
            onClick={() => setIsNoteVisible(!isNoteVisible)}
            className="flex items-center justify-between w-full text-left text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <span className="font-medium">{plus[currentLang]}</span>
            <motion.div
              animate={{ rotate: isNoteVisible ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {isNoteVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-3 pl-2 border-l-2 border-primary-600">
                  {detailsabout[currentLang]}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2 pl-2 border-l-2 border-primary-600">
                  {notebene[currentLang]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={handleInscription}
          className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-300"
        >
          {buttonname[currentLang]}
        </button>
      </div>
    </motion.div>
  );
};

export default FormationCard;