import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/common/HeroSection';
import ArticleCard from '../components/blog/ArticleCard';

const Blog = () => {
  const { t } = useTranslation();

  const articles = [
    {
      id: 1,
      title: t('blog.articles.digital.title'),
      excerpt: t('blog.articles.digital.excerpt'),
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000",
      author: t('blog.articles.digital.author'),
      date: "2024-03-10",
      readTime: t('blog.articles.digital.readTime')
    },
    {
      id: 2,
      title: t('blog.articles.webdev.title'),
      excerpt: t('blog.articles.webdev.excerpt'),
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
      author: t('blog.articles.webdev.author'),
      date: "2024-03-08",
      readTime: t('blog.articles.webdev.readTime')
    },
    {
      id: 3,
      title: t('blog.articles.training.title'),
      excerpt: t('blog.articles.training.excerpt'),
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
      author: t('blog.articles.training.author'),
      date: "2024-03-05",
      readTime: t('blog.articles.training.readTime')
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900">
      <HeroSection
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                {...article}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;