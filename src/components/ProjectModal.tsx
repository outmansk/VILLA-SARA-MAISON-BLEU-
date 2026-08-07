import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, MapPin, Calendar, Maximize2, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full max-w-5xl bg-[#FBF9F5] rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#EAE6DD] my-auto max-h-[90vh] flex flex-col"
        >
          {/* Modal Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-3 bg-[#FBF9F5]/80 hover:bg-[#6C7D6B] text-[#2A2E2C] hover:text-white rounded-full transition-colors border border-[#EAE6DD] shadow-sm cursor-pointer"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content Scroll Area */}
          <div className="overflow-y-auto p-6 sm:p-10 md:p-12 space-y-10">
            {/* Project Header */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#6C7D6B] block mb-2">
                {project.category} • {project.year}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A2E2C] font-light">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-6 mt-4 text-xs font-sans text-[#5A605D] tracking-wider uppercase border-b border-[#EAE6DD] pb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6C7D6B]" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#6C7D6B]" />
                  {project.area}
                </span>
              </div>
            </div>

            {/* Hero Gallery Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#EAE6DD]">
              <img
                src={project.heroImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Narrative & Quote */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-serif text-2xl text-[#2A2E2C]">Spatial Narrative</h3>
                <p className="text-sm md:text-base font-sans font-light text-[#5A605D] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="md:col-span-5 bg-[#F2EFE9] p-6 rounded-2xl border border-[#EAE6DD] space-y-4">
                <h4 className="font-serif text-lg text-[#2A2E2C] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#6C7D6B]" />
                  Material Palette
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-3 py-1 bg-[#FBF9F5] border border-[#EAE6DD] rounded-full text-[#374436] font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Project Gallery Photos */}
            {project.gallery.length > 1 && (
              <div className="space-y-4 pt-6 border-t border-[#EAE6DD]">
                <h3 className="font-serif text-2xl text-[#2A2E2C]">Detail Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.gallery.slice(1).map((imgUrl, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EAE6DD]">
                      <img
                        src={imgUrl}
                        alt={`${project.title} Detail ${index + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover img-editorial-hover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-8 border-t border-[#EAE6DD] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-serif text-xl text-[#2A2E2C]">Inspired by this project?</p>
                <p className="text-xs text-[#5A605D]">Let us discuss your residence or studio space.</p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="px-8 py-3.5 bg-[#6C7D6B] hover:bg-[#374436] text-white rounded-full text-xs font-medium uppercase tracking-[0.25em] transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Inquire Similar Space</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
