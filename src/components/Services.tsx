import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Feather, Check } from 'lucide-react';
import { servicesData } from '../data';
import { Language, translations } from '../translations';

interface ServicesProps {
  onInquire: (serviceTitle?: string) => void;
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ onInquire, lang }) => {
  const t = translations[lang].services;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#8B2332] stroke-[1.5]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#8B2332] stroke-[1.5]" />;
      case 'Feather':
        return <Feather className="w-7 h-7 text-[#8B2332] stroke-[1.5]" />;
      default:
        return <Compass className="w-7 h-7 text-[#8B2332] stroke-[1.5]" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-24 md:py-36 bg-[#FAF6F0] border-t border-[#E6E1D6]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="mb-10 sm:mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="h-[1px] w-8 sm:w-12 bg-[#8B2332]/40" />
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.4em] font-medium text-[#8B2332]">
              {t.eyebrow}
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#8B2332]/40" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] leading-snug">
            {t.title}
          </h2>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-sans font-light text-[#4A4A4A]">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Minimalist Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-6 text-[#C5A059]">
                {getIcon(service.icon)}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A] mb-3">
                {service.title}
              </h3>

              <p className="text-xs uppercase tracking-[0.2em] text-[#8B2332] font-medium">
                {service.tagline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

