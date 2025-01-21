import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { database } from '../config/firebase';
import { ref, push } from 'firebase/database';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const currentLang = i18n.language as 'fr' | 'en' | 'mg';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    try {
      setStatus('loading');
      
      // Create a reference to the 'newsletters' node in your database
      const newslettersRef = ref(database, 'newsletters');
      
      // Push the new email with timestamp
      await push(newslettersRef, {
        email,
        timestamp: new Date().toISOString(),
        language: currentLang
      });

      setStatus('success');
      setEmail('');

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'loading':
        return {
          fr: 'Inscription en cours...',
          en: 'Subscribing...',
          mg: 'Misoratra anarana...'
        }[currentLang];
      case 'success':
        return {
          fr: 'Inscription réussie !',
          en: 'Successfully subscribed!',
          mg: 'Voasoratra soa aman-tsara!'
        }[currentLang];
      case 'error':
        return {
          fr: 'Erreur lors de l\'inscription',
          en: 'Error subscribing',
          mg: 'Nisy olana tamin\'ny fisoratana anarana'
        }[currentLang];
      default:
        return '';
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Fÿ-Tech Mahajanga
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61569050678982" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="linkedin.com/in/fÿ-tech-004469304" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  {t('nav.formations')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  {t('nav.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5" />
                <span>fytech0823@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+261 329719391 / +261 329742598</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Mahajanga, Madagascar</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {t('footer.newsletters')}
            </h4>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full btn-primary ${
                  status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? getStatusMessage() : t('footer.subscribe')}
              </button>
              {(status === 'success' || status === 'error') && (
                <p className={`text-sm ${
                  status === 'success' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {getStatusMessage()}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Fÿ-Tech Mahajanga.{t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;