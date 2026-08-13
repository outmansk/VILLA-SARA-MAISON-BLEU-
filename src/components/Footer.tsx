import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';
import { studioData } from '../data';
import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#5C121F] text-[#FAF6F0] pt-14 sm:pt-20 pb-10 sm:pb-12 border-t border-[#8B2332]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-[#8B2332]/40 items-start">
          {/* Logo Badge & Brand Identity */}
          <div className="md:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <Logo variant="monochrome-dark" size={56} className="shrink-0" />
              <div>
                <span className="font-serif text-lg sm:text-2xl font-light tracking-[0.15em] sm:tracking-[0.2em] block uppercase">
                  MY LITTLE BOHÈME
                </span>
                <span className="text-[9px] sm:text-[11px] font-sans tracking-[0.25em] sm:tracking-[0.35em] text-[#E8D1D5] uppercase block mt-1">
                  VILLA PRIVÉE DE LUXE BY SARLA
                </span>
              </div>
            </div>
            <p className="text-xs font-sans text-[#E8D1D5] max-w-sm font-light leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A64654] font-medium block mb-2">
              Localisation &amp; Contact
            </span>
            <p className="text-sm font-serif text-[#FAF6F0]">{t.location}</p>
            <a
              href="https://wa.me/447938766267"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#E8D1D5] hover:text-white transition-colors block font-mono pt-1"
            >
              +44 7938 766267 (WhatsApp Direct)
            </a>
          </div>

          {/* Journal Signup */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A64654] font-medium block">
              Journal d’Espaces &amp; Conciergerie
            </span>
            <p className="text-xs text-[#E8D1D5] font-light leading-relaxed">
              Inscrivez-vous pour recevoir nos actualités et disponibilités de la villa.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="w-full px-4 py-2.5 bg-[#2A3429] border border-[#8B2332]/50 rounded-full text-xs text-[#FAF6F0] focus:outline-hidden focus:border-[#E8D1D5] placeholder:text-[#A64654]"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Merci pour votre inscription à la lettre d’information MY LITTLE BOHÈME.');
                }}
                className="px-5 py-2.5 bg-[#8B2332] hover:bg-[#FAF6F0] hover:text-[#5C121F] rounded-full text-xs font-medium uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
              >
                Rejoindre
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A64654] font-light gap-4">
          <p>© {new Date().getFullYear()} MY LITTLE BOHÈME by Sarla. {t.rights}</p>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/mylittleboheme_marrakech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={`mailto:${studioData.email}`}
              className="hover:text-white transition-colors"
            >
              Contact Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#2A3429] hover:bg-[#8B2332] text-white rounded-full transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

