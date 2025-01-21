import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Formations from '../pages/Formations';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Testimonials from '../pages/Testimonials';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
};

export default AppRoutes;