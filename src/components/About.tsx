import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-14 sm:py-24 md:py-32 bg-[#FBF9F5] border-t border-[#EAE6DD]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10"
        >
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium text-[#6C7D6B]">
            {t.eyebrow}
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-[#6C7D6B]/40" />
        </motion.div>

        {/* Minimalist Editorial Layout (Royal Mansour Style) */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#B59960] font-light leading-tight mb-10 md:mb-14"
          >
            {t.title}
          </motion.h2>

          {/* Central Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="w-full relative aspect-[4/3] md:aspect-video rounded-sm overflow-hidden shadow-xl mb-10 md:mb-14"
          >
            <img
              src="/photos/59.jpg"
              alt="MY LITTLE BOHÈME Villa Privée"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover img-editorial-hover"
            />
          </motion.div>

          {/* Minimal Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="text-sm sm:text-base md:text-lg font-sans font-light text-[#5A605D] leading-relaxed max-w-3xl"
          >
            {t.p1}
          </motion.p>
        </div>
      </div>
    </section>
  );
};


