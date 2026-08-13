import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../translations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ABOUT_IMAGES = [
  "/photos/59.jpg",
  "/photos/53.jpg",
  "/photos/3.jpg"
];

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % ABOUT_IMAGES.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + ABOUT_IMAGES.length) % ABOUT_IMAGES.length);

  return (
    <section id="about" className="py-16 sm:py-24 md:py-36 bg-[#FAF6F0] border-t border-[#F0ECE4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center justify-center gap-4 mb-16 sm:mb-24"
        >
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.4em] font-medium text-[#8B2332]">
            {t.eyebrow}
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#8B2332]/40" />
        </motion.div>

        {/* Minimalist Editorial Layout (Royal Mansour Style) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C5A059] font-light leading-tight mb-8"
            >
              {t.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="text-sm sm:text-base md:text-lg font-sans font-light text-[#1A1A1A] opacity-80 leading-relaxed mb-6"
            >
              {t.p1}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="text-sm sm:text-base md:text-lg font-sans font-light text-[#1A1A1A] opacity-80 leading-relaxed mb-10"
            >
              {t.p2}
            </motion.p>
            
            {/* Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 border-t border-[#F0ECE4]"
            >
              <div className="flex-1">
                <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-[#1A1A1A] mb-3">{t.privatizationTitle}</h4>
                <p className="text-sm text-[#8B2332] font-light leading-relaxed">{t.privatizationDesc}</p>
              </div>
              <div className="flex-1">
                <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-[#1A1A1A] mb-3">{t.conciergeTitle}</h4>
                <p className="text-sm text-[#8B2332] font-light leading-relaxed">{t.conciergeDesc}</p>
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
              className="w-full relative aspect-[4/3] md:aspect-auto md:h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-xl group"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={ABOUT_IMAGES[currentImageIndex]}
                  alt="MY LITTLE BOHÈME Villa Privée"
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-cover absolute inset-0 img-editorial-hover"
                />
              </AnimatePresence>
              
              {/* Carousel Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <button 
                  onClick={prevImage}
                  className="bg-white/70 hover:bg-white text-[#1A1A1A] rounded-full p-2 backdrop-blur-sm transition-all pointer-events-auto"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="bg-white/70 hover:bg-white text-[#1A1A1A] rounded-full p-2 backdrop-blur-sm transition-all pointer-events-auto"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {ABOUT_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#F0ECE4] p-8 sm:p-10 rounded-sm relative"
            >
              <span className="absolute top-4 left-6 text-4xl text-[#C5A059] font-serif opacity-40">"</span>
              <p className="text-sm sm:text-base font-serif italic text-[#1A1A1A] leading-relaxed mb-4 relative z-10 pt-2">
                {t.quote}
              </p>
              <p className="text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#8B2332]">
                {t.quoteAuthor}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


