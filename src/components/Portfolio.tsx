import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { projectsData, fullVillaGallery, GalleryPhoto } from '../data';
import { ArrowUpRight, Images, ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
  lang: Language;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState<boolean>(false);
  const [galleryCategory, setGalleryCategory] = useState<string>('toutes');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const t = translations[lang].portfolio;

  const categories = ['All', 'Residential', 'Hospitality', 'Architectural'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const galleryCategories = [
    { id: 'toutes', label: 'Toutes les photos' },
    { id: 'extérieurs', label: 'Extérieurs & Piscine' },
    { id: 'suites', label: 'Suites & Chambres' },
    { id: 'salons', label: 'Salons & Espaces de vie' },
    { id: 'details', label: 'Détails & Atmosphère' }
  ];

  const filteredGalleryPhotos = galleryCategory === 'toutes'
    ? fullVillaGallery
    : fullVillaGallery.filter((item) => item.category === galleryCategory);

  const activePhoto = activePhotoIndex !== null ? filteredGalleryPhotos[activePhotoIndex] : null;

  const handlePrevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === 0 ? filteredGalleryPhotos.length - 1 : (prev! - 1)));
    }
  };

  const handleNextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === filteredGalleryPhotos.length - 1 ? 0 : (prev! + 1)));
    }
  };

  return (
    <section id="portfolio" className="py-14 sm:py-24 md:py-36 bg-[#F2EFE9] border-t border-[#EAE6DD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Minimalist Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center justify-center mb-10 sm:mb-16 gap-6 sm:gap-8 text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#B59960]">
            {t.title}
          </h2>

          {/* Minimal Filter Tabs - Scrollable on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeFilter === cat
                    ? 'bg-[#6C7D6B] text-white shadow-xs'
                    : 'bg-[#FBF9F5] text-[#2A2E2C]/70 hover:text-[#2A2E2C] hover:bg-[#EAE6DD]'
                }`}
              >
                {cat === 'All' ? t.allCategories : cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid of Selected Projects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isLarge = index === 0 || index === 3;
              const colSpanClass = isLarge ? 'lg:col-span-8' : 'lg:col-span-4';
              const aspectClass = isLarge ? 'aspect-[16/10]' : 'aspect-[4/5]';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                  onClick={() => onSelectProject(project)}
                  className={`${colSpanClass} group cursor-pointer`}
                >
                  <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden bg-[#EAE6DD] shadow-md mb-4`}>
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover img-editorial-hover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2E2C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                      <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#CBD4CB] mb-1">
                        {t.viewProject}
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-2xl font-light">{project.title}</span>
                        <div className="p-3 rounded-full bg-white/20 backdrop-blur-md">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between px-1">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#2A2E2C] group-hover:text-[#6C7D6B] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-sans text-[#5A605D] tracking-wider uppercase mt-1">
                        {project.location} • {project.year}
                      </p>
                    </div>
                    <span className="text-xs font-sans uppercase tracking-widest text-[#6C7D6B] px-3 py-1 bg-[#FBF9F5] rounded-full border border-[#EAE6DD]">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Link / Button to Open Full Gallery View */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsFullGalleryOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#6C7D6B] hover:bg-[#374436] text-white rounded-full text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer group"
          >
            <Images className="w-4 h-4 text-[#CBD4CB] group-hover:scale-110 transition-transform" />
            <span>{t.seeMoreBtn}</span>
            <ArrowRight className="w-4 h-4 text-[#CBD4CB] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Full Photo Gallery Full-Screen Modal Overlay */}
      <AnimatePresence>
        {isFullGalleryOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#FBF9F5] overflow-y-auto flex flex-col"
          >
            {/* Modal Sticky Header */}
            <div className="sticky top-0 z-20 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EAE6DD] px-4 sm:px-12 py-4 sm:py-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#6C7D6B] font-semibold block mb-0.5 sm:mb-1">
                  MY LITTLE BOHÈME • Galerie
                </span>
                <h3 className="font-serif text-lg sm:text-3xl text-[#2A2E2C]">
                  {t.fullGalleryTitle}
                </h3>
              </div>

              <button
                onClick={() => setIsFullGalleryOpen(false)}
                className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#2A2E2C] text-white rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-widest hover:bg-[#6C7D6B] transition-colors cursor-pointer shrink-0"
              >
                <span>{t.closeGallery}</span>
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Gallery Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-10 py-6 sm:py-12 w-full flex-1">
              <p className="text-xs sm:text-sm font-sans font-light text-[#5A605D] max-w-2xl mb-6 sm:mb-8">
                {t.fullGallerySubtitle}
              </p>

              {/* Category Filter Pills - Scrollable on mobile */}
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-4 mb-8 sm:mb-12 border-b border-[#EAE6DD] -mx-4 px-4 sm:mx-0 sm:px-0">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setGalleryCategory(cat.id)}
                    className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                      galleryCategory === cat.id
                        ? 'bg-[#6C7D6B] text-white shadow-xs'
                        : 'bg-[#F2EFE9] text-[#2A2E2C]/80 hover:bg-[#EAE6DD]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Photo Masonry Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredGalleryPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setActivePhotoIndex(index)}
                    className="group relative bg-[#EAE6DD] rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/2] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2E2C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#CBD4CB]">
                          {photo.locationTag || photo.category}
                        </span>
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-serif text-xl font-light">{photo.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Photo Preview Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-[#1C201E]/95 backdrop-blur-lg flex flex-col justify-between p-6 sm:p-10"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#CBD4CB] font-mono">
                  {activePhotoIndex! + 1} / {filteredGalleryPhotos.length}
                </span>
                <h4 className="font-serif text-xl text-white mt-0.5">{activePhoto.title}</h4>
              </div>

              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Image View with Navigation */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={handlePrevPhoto}
                className="absolute left-2 sm:left-6 z-10 p-4 bg-black/40 hover:bg-black/70 rounded-full text-white transition-colors cursor-pointer backdrop-blur-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={activePhoto.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={activePhoto.url}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
              />

              <button
                onClick={handleNextPhoto}
                className="absolute right-2 sm:right-6 z-10 p-4 bg-black/40 hover:bg-black/70 rounded-full text-white transition-colors cursor-pointer backdrop-blur-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="text-center text-xs uppercase tracking-[0.25em] text-[#CBD4CB] font-light">
              {activePhoto.locationTag ? `${activePhoto.locationTag} • ` : ''}MY LITTLE BOHÈME
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
