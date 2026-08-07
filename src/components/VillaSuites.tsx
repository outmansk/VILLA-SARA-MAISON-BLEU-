import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { Language, translations } from '../translations';

interface VillaSuitesProps {
  onSelectSuiteToBook: (suiteId: string) => void;
  lang: Language;
}

export const VillaSuites: React.FC<VillaSuitesProps> = ({ onSelectSuiteToBook, lang }) => {
  const t = translations[lang].villa;

  return (
    <section id="suites" className="py-14 sm:py-24 md:py-32 bg-[#FBF9F5] relative overflow-hidden border-t border-[#EAE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-16 gap-5">
          <div>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#6C7D6B] font-semibold block mb-2 sm:mb-3">
              {t.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#2A2E2C] tracking-wide leading-snug">
              {t.title}
            </h2>
          </div>
          <div className="max-w-md">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6C7D6B]/10 text-[#6C7D6B] text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.privatizationBadge}</span>
            </span>
            <p className="text-xs sm:text-base text-[#2A2E2C]/80 font-light leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* Minimalist Spaces Showcase (Royal Mansour Style) */}
        <div className="flex flex-col gap-16 md:gap-24 mt-10 md:mt-16">
          {t.spaces.map((space, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center text-center max-w-5xl mx-auto w-full"
            >
              <div className="w-full relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-sm shadow-xl mb-6 md:mb-10">
                <img
                  src={space.img}
                  alt={space.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover img-editorial-hover"
                />
              </div>
              
              <h3 className="font-serif text-2xl md:text-4xl text-[#B59960] font-light mb-4">
                {space.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

