import React from 'react';
import { useLanguage } from '../App';
import { content } from '../constants';
import { Building2, Award, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Header */}
      <section className="bg-primary-50 dark:bg-slate-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.about.title}</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {t.about.mission}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary-600 transform translate-x-4 translate-y-4 rounded-2xl"></div>
              <img 
                src="https://picsum.photos/800/600?office" 
                alt="SGC Office" 
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover"
              />
            </div>

            {/* Text Details */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-primary-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Est. 2001</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.about.history}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="text-primary-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.about.infoTitle}</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between border-b border-gray-200 dark:border-slate-700 pb-2">
                    <span className="font-medium">Company Name:</span>
                    <span>SGC Co., Ltd</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 dark:border-slate-700 pb-2 pt-2">
                    <span className="font-medium">Tax Code:</span>
                    <span>0302298015</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span className="font-medium">Head Office:</span>
                    <span>District 1, HCMC</span>
                  </li>
                </ul>
              </div>

              <div>
                 <div className="flex items-center gap-3 mb-4">
                  <Award className="text-primary-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Why SGC?</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  With over 20 years in the industry, we don't just write code; we build business advantages. We understand the specific challenges of SMEs and provide tailored, cost-effective, and scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;