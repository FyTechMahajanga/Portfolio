import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from './hooks/useTheme';
import Navigation from './components/Navigation';
import AppRoutes from './routes';
import Footer from './components/Footer';
import TechParticles from './components/particles/TechParticles';
import BinaryRain from './components/effects/BinaryRain';

function App() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <Router>
      <div className={`${theme} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 relative`}>
        <TechParticles />
        <BinaryRain />
        <Navigation />
        <main className="relative z-10">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;