import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/common/HeroSection';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import Mirana from '../assets/mirana.jpg';
import Nanchia from '../assets/Nachia.jpg';
import Renty from '../assets/RRenty.jpg';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      content: t('testimonials.quotes.first.content'),
      author: t('testimonials.quotes.first.author'),
      role: t('testimonials.quotes.first.role'),
      company: t('testimonials.quotes.first.company'),
      rating: 5,
      image: `${Mirana}`,
    },
    {
      id: 2,
      content: t('testimonials.quotes.second.content'),
      author: t('testimonials.quotes.second.author'),
      role: t('testimonials.quotes.second.role'),
      company: t('testimonials.quotes.second.company'),
      rating: 4,
      image: `${Nanchia}`,
    },
    {
      id: 3,
      content: t('testimonials.quotes.third.content'),
      author: t('testimonials.quotes.third.author'),
      role: t('testimonials.quotes.third.role'),
      company: t('testimonials.quotes.third.company'),
      rating: 3,
      image: `${Renty}`,
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900">
      <HeroSection
        title={t('testimonials.title')}
        subtitle={t('testimonials.subtitle')}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;