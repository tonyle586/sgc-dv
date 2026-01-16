import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, ChevronRight } from 'lucide-react';
import { useTheme } from '../App';
import { useLanguage } from '../App';
import { content } from '../constants';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const t = content[lang];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleLang = () => {
    setLang(lang === 'vi' ? 'en' : 'vi');
  };

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/portfolio', label: t.nav.portfolio },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30">
                SGC
              </div>
              <div className="hidden sm:block">
                <span className="block text-lg font-bold text-gray-900 dark:text-white leading-none">SGC Co., Ltd</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">Est. 2001</span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Switch Language"
              >
                <Globe size={18} />
                <span>{lang.toUpperCase()}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 animate-fade-in-down">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-slate-800 flex justify-between px-3">
                 <button
                  onClick={toggleLang}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  <Globe size={18} />
                  <span>Switch to {lang === 'vi' ? 'English' : 'Tiếng Việt'}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center text-white font-bold text-sm">
                  SGC
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">SGC Co., Ltd</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {t.home.hero.slogan}
              </p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <p>Tax Code: 0302298015</p>
                <p>Est. April 2001</p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 uppercase text-sm tracking-wider">{t.footer.quickLinks}</h3>
              <ul className="grid grid-cols-2 gap-4">
                 {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink to={link.path} className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm flex items-center gap-1">
                      <ChevronRight size={14} />
                      {link.label}
                    </NavLink>
                  </li>
                 ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 uppercase text-sm tracking-wider">{t.nav.contact}</h3>
               <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <li>0833 246 247</li>
                <li>info@sgc.vn</li>
                <li>District 1, HCMC, Vietnam</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;