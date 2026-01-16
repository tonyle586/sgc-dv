import React from 'react';
import { useLanguage } from '../App';
import { content } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.portfolio.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.portfolio.items.map((item) => (
              <div key={item.id} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;