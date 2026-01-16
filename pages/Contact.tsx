import React, { useState } from 'react';
import { useLanguage } from '../App';
import { content } from '../constants';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <section className="bg-primary-600 py-20">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 dark:border-slate-700">
            
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3 bg-gray-50 dark:bg-slate-900 p-10 border-r border-gray-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">SGC Co., Ltd</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-slate-800 p-3 rounded-lg text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{t.contact.info.office}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t.contact.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-slate-800 p-3 rounded-lg text-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Hotline</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                      {t.contact.info.hotline}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-slate-800 p-3 rounded-lg text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t.contact.info.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 p-10">
              {isSubmitted ? (
                 <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                        <Send size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Success!</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t.contact.form.success}</p>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.form.name}
                        </label>
                        <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.form.phone}
                        </label>
                        <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                        />
                    </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.form.email}
                        </label>
                        <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.form.service}
                        </label>
                        <select
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                        >
                            <option value="">Select a service...</option>
                            <option value="web">Web Development</option>
                            <option value="email">Email Services</option>
                            <option value="ai">AI / Gemini</option>
                            <option value="app">Mobile App</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.form.message}
                        </label>
                        <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-primary-600/30"
                    >
                        {t.contact.form.submit}
                    </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;