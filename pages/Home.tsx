import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Clock, Users } from 'lucide-react';
import { useLanguage } from '../App';
import { content } from '../constants';

const Home: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  const icons = [Clock, TrendingUp, Shield, Users];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300 min-h-[85vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/5 dark:bg-black/40 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-slate-900 dark:via-slate-900/90 dark:to-transparent z-20 sm:w-3/4"></div>
            
            {/* Background Image with Slow Zoom */}
            <img 
                src="https://picsum.photos/1920/1080?blur=2" 
                alt="Technology Background" 
                className="w-full h-full object-cover animate-slow-zoom opacity-30 dark:opacity-20 transform origin-center"
            />
            
            {/* Ambient Floating Blobs */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200 dark:bg-primary-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-200 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-sm font-semibold mb-6 border border-primary-100 dark:border-primary-800 backdrop-blur-sm">
                SGC Co., Ltd — Est. 2001
                </span>
            </div>
            
            {/* Animated Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {t.home.hero.slogan}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {t.home.hero.sub}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <Link
                to="/contact"
                className="group inline-flex justify-center items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-primary-600/30 hover:-translate-y-1"
              >
                {t.home.hero.cta}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 font-semibold rounded-lg transition-all hover:-translate-y-1"
              >
                {t.nav.services}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.home.values.title}</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.values.items.map((item, index) => {
              const Icon = icons[index];
              return (
                <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-800 group hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-8">Trusted by SMEs in Vietnam & Globally</p>
             <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale dark:invert">
                 {/* Placeholder for Client Logos - Using text for simplicity in this demo */}
                 <span className="text-2xl font-bold text-gray-400 hover:text-primary-500 transition-colors cursor-default">TechCorp</span>
                 <span className="text-2xl font-bold text-gray-400 hover:text-primary-500 transition-colors cursor-default">VN-Retail</span>
                 <span className="text-2xl font-bold text-gray-400 hover:text-primary-500 transition-colors cursor-default">EduSystem</span>
                 <span className="text-2xl font-bold text-gray-400 hover:text-primary-500 transition-colors cursor-default">GlobalLogistics</span>
                 <span className="text-2xl font-bold text-gray-400 hover:text-primary-500 transition-colors cursor-default">FinanceAsia</span>
             </div>
        </div>
      </section>
    </>
  );
};

export default Home;