import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/common/HeroSection';
import TestimonialCard from '../components/testimonials/TestimonialCard';

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
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      id: 2,
      content: t('testimonials.quotes.second.content'),
      author: t('testimonials.quotes.second.author'),
      role: t('testimonials.quotes.second.role'),
      company: t('testimonials.quotes.second.company'),
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      id: 3,
      content: t('testimonials.quotes.third.content'),
      author: t('testimonials.quotes.third.author'),
      role: t('testimonials.quotes.third.role'),
      company: t('testimonials.quotes.third.company'),
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300"
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