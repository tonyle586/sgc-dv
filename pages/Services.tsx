import React from 'react';
import { useLanguage } from '../App';
import { content } from '../constants';
import { Link } from 'react-router-dom';
import { Globe, Mail, Bot, Layout, Smartphone, QrCode, Server, MoreHorizontal, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  Globe,
  Mail,
  Bot,
  Layout,
  Smartphone,
  QrCode,
  Server,
  MoreHorizontal
};

const Services: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/50"></div>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.services.list.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <div key={service.id} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 bg-primary-100 dark:bg-slate-700 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 min-h-[56px] flex items-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link to="/contact" className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                   Consult Now <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-primary-600 rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Our team of experts is ready to analyze your needs and provide the perfect solution.</p>
                <Link to="/contact" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                    Contact Us Today
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;