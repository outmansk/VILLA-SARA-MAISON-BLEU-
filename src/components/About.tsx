import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-16 sm:py-24 md:py-36 bg-[#FBF9F5] border-t border-[#F2EFE9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium text-[#6C7D6B]">
            {t.eyebrow}
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-[#6C7D6B]/40" />
        </motion.div>

        {/* Minimalist Editorial Layout (Royal Mansour Style) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#B59960] font-light leading-tight mb-8"
            >
              {t.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="text-sm sm:text-base md:text-lg font-sans font-light text-[#2A2E2C] opacity-90 leading-relaxed mb-6"
            >
              {t.p1}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="text-sm sm:text-base md:text-lg font-sans font-light text-[#2A2E2C] opacity-90 leading-relaxed mb-10"
            >
              {t.p2}
            </motion.p>
            
            {/* Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 border-t border-[#F2EFE9]"
            >
              <div className="flex-1">
                <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-[#2A2E2C] mb-3">{t.privatizationTitle}</h4>
                <p className="text-sm text-[#6C7D6B] font-light leading-relaxed">{t.privatizationDesc}</p>
              </div>
              <div className="flex-1">
                <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-[#2A2E2C] mb-3">{t.conciergeTitle}</h4>
                <p className="text-sm text-[#6C7D6B] font-light leading-relaxed">{t.conciergeDesc}</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="w-full relative aspect-[4/3] md:aspect-auto md:h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-xl"
            >
              <img
                src="/photos/59.jpg"
                alt="MY LITTLE BOHÈME Villa Privée"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover img-editorial-hover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#F2EFE9] p-8 sm:p-10 rounded-sm relative"
            >
              <span className="absolute top-4 left-6 text-4xl text-[#B59960] font-serif opacity-40">"</span>
              <p className="text-sm sm:text-base font-serif italic text-[#2A2E2C] leading-relaxed mb-4 relative z-10 pt-2">
                {t.quote}
              </p>
              <p className="text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#6C7D6B]">
                {t.quoteAuthor}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


