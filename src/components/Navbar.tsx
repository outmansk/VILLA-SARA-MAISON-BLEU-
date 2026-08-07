import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar as CalendarIcon, Globe, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { Language, translations } from '../translations';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  lang,
  onLanguageChange
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t.about },
    { id: 'suites', label: t.villa },
    { id: 'portfolio', label: t.portfolio },
    { id: 'reservation', label: t.booking },
    { id: 'services', label: t.services },
    { id: 'contact', label: t.contact }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const languagesList: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' }
  ];

  const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const currentLang = languagesList.find(l => l.code === lang) || languagesList[0];
    const otherLangs = languagesList.filter(l => l.code !== lang);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className="relative" ref={dropdownRef} onMouseLeave={() => !isMobile && setIsOpen(false)}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          className={`flex items-center gap-1.5 bg-[#F2EFE9] border border-[#EAE6DD] rounded-full transition-all cursor-pointer ${isMobile ? 'px-2.5 py-1 text-[9px]' : 'px-3 py-1.5 text-[10px]'} font-sans font-medium uppercase tracking-wider text-[#2A2E2C] hover:bg-[#EAE6DD]`}
        >
          {!isMobile && <Globe className="w-3 h-3 text-[#6C7D6B]" />}
          {currentLang.label}
          <ChevronDown className={`w-3 h-3 text-[#6C7D6B] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 bg-white border border-[#EAE6DD] rounded-2xl shadow-xl flex flex-col py-1 overflow-hidden min-w-[70px] z-50"
            >
              {otherLangs.map(item => (
                <button
                  key={item.code}
                  onClick={() => {
                    onLanguageChange(item.code);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 font-sans font-medium uppercase tracking-wider text-[#2A2E2C] hover:bg-[#F2EFE9] text-center transition-colors ${isMobile ? 'text-[9px]' : 'text-[10px]'}`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#EAE6DD] py-3 shadow-xs'
            : 'bg-white md:bg-transparent border-b border-[#EAE6DD] md:border-transparent py-3 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 sm:gap-3.5 group text-left cursor-pointer focus:outline-hidden max-w-[65%] sm:max-w-none"
            aria-label="MY LITTLE BOHÈME Home"
          >
            <Logo
              variant="badge"
              size={scrolled ? 36 : 42}
              className="transition-all duration-300 shrink-0"
            />
            <div className="flex flex-col min-w-0 mt-0.5">
              <span className="font-serif text-[13px] sm:text-base md:text-lg font-medium tracking-[0.14em] sm:tracking-[0.2em] text-[#2A2E2C] group-hover:text-[#6C7D6B] transition-colors truncate leading-tight">
                MY LITTLE BOHÈME
              </span>
              <span className="text-[7.5px] sm:text-[9.5px] font-sans tracking-[0.2em] sm:tracking-[0.25em] text-[#6C7D6B] uppercase font-medium truncate leading-tight">
                {t.subtagline}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-[11px] xl:text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer py-1 ${
                    isActive ? 'text-[#6C7D6B] font-semibold' : 'text-[#2A2E2C]/80 hover:text-[#2A2E2C]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#6C7D6B]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Area: Language Switcher + Book CTA */}
          <div className="hidden md:flex items-center space-x-3 xl:space-x-4">
            {/* Language Dropdown Selector */}
            <LanguageSwitcher />

            {/* Book CTA */}
            <button
              onClick={() => handleLinkClick('reservation')}
              className="inline-flex items-center gap-1.5 px-4 xl:px-5 py-2.5 rounded-full bg-[#6C7D6B] text-white text-[10.5px] xl:text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#374436] hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>{t.bookCta}</span>
            </button>
          </div>

          {/* Mobile Right Bar (Language Dropdown + Hamburger) */}
          <div className="flex items-center lg:hidden">
            <div className="pr-3">
              <LanguageSwitcher isMobile={true} />
            </div>

            <div className="pl-3 py-1 border-l border-[#EAE6DD]">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 text-[#2A2E2C] hover:text-[#6C7D6B] transition-colors cursor-pointer focus:outline-hidden"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-30 bg-[#FBF9F5] pt-24 px-8 pb-10 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center space-y-4 my-auto">
              <Logo variant="badge" size={60} className="mb-1" />

              {/* Mobile Drawer Navigation Links */}
              <div className="flex flex-col items-center space-y-4 my-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`font-serif text-2xl tracking-widest transition-colors cursor-pointer py-1.5 ${
                      activeSection === link.id ? 'text-[#6C7D6B] font-medium' : 'text-[#2A2E2C] hover:text-[#6C7D6B]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="pt-3 w-full max-w-xs">
                <button
                  onClick={() => handleLinkClick('reservation')}
                  className="w-full py-3.5 bg-[#6C7D6B] text-white rounded-full text-xs font-medium uppercase tracking-[0.25em] hover:bg-[#374436] transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>{t.bookCta}</span>
                </button>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-[#EAE6DD]">
              <p className="text-xs tracking-widest text-[#6C7D6B] uppercase">Paris • Palma de Mallorca • Provence</p>
              <p className="text-xs text-[#5A605D] mt-1">reservation@mylittleboheme.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


