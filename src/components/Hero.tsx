import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDown, Eye, EyeOff, Pause, Play } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  onDiscoverClick: () => void;
  lang: Language;
}

const HERO_POSTER = '/videos/hero-poster.webp';
const HERO_MOBILE_POSTER = '/videos/hero-mobile-poster.webp';

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, lang }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [cinematicMode, setCinematicMode] = useState(false);

  const t = translations[lang].hero;

  const handleVideoReady = () => {
    setHasVideoError(false);
    setIsVideoReady(true);
  };

  const handleVideoError = () => {
    setHasVideoError(true);
    setIsVideoReady(false);
    setIsPlaying(false);
  };

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video || hasVideoError) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-end justify-center overflow-hidden bg-[#111111] pt-16 sm:pt-20 pb-16 sm:pb-20"
    >
      <div className="absolute inset-0 z-0 bg-black">
        {/* The poster remains behind the video, so a slow or failed connection never shows black. */}
        <picture>
          <source media="(max-width: 767px)" srcSet={HERO_MOBILE_POSTER} type="image/webp" />
          <img
            src={HERO_POSTER}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={handleVideoReady}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={handleVideoError}
          className={`absolute inset-0 h-full w-full object-cover object-center filter brightness-[0.95] contrast-[1.02] transition-opacity duration-700 ease-out ${
            isVideoReady && !hasVideoError ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source media="(max-width: 767px)" src="/videos/hero-mobile.webm" type="video/webm" />
          <source media="(max-width: 767px)" src="/videos/hero-mobile.mp4" type="video/mp4" />
          <source src="/videos/hero-optimized.webm" type="video/webm" />
          <source src="/videos/hero-optimized.mp4" type="video/mp4" />
        </video>

        <div
          className={`absolute inset-0 z-20 transition-opacity duration-700 ${
            cinematicMode
              ? 'bg-black/10'
              : 'bg-gradient-to-t from-black/75 via-black/20 to-black/30'
          }`}
        />
      </div>

      <AnimatePresence>
        {!cinematicMode && (
          <div className="relative z-30 w-full max-w-7xl mx-auto px-5 sm:px-10 pb-6 sm:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center text-center mx-auto max-w-3xl"
            >
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white leading-[1.12] drop-shadow-md">
                {t.headlineMain} <br />
                <span className="italic font-normal text-[#E0D7C6] block mt-1 sm:inline sm:mt-0">
                  {t.headlineItalic}
                </span>
              </h1>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-5 right-4 sm:right-8 z-30 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setCinematicMode(!cinematicMode)}
          title={cinematicMode ? t.showContent : t.hideContent}
          aria-label={cinematicMode ? t.showContent : t.hideContent}
          className={`p-2 sm:p-2.5 backdrop-blur-md border rounded-full transition-all cursor-pointer shadow-lg ${
            cinematicMode
              ? 'bg-white text-black border-white'
              : 'bg-black/50 text-white/90 border-white/20 hover:bg-black/70'
          }`}
        >
          {cinematicMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>

        {!hasVideoError && (
          <button
            type="button"
            onClick={togglePlay}
            title={isPlaying ? t.pauseVideo : t.playVideo}
            aria-label={isPlaying ? t.pauseVideo : t.playVideo}
            className="p-2 sm:p-2.5 bg-black/50 backdrop-blur-md text-white/90 border border-white/20 rounded-full hover:bg-black/70 transition-colors cursor-pointer shadow-lg"
          >
            {isPlaying
              ? <Pause className="w-3.5 h-3.5 text-white" />
              : <Play className="w-3.5 h-3.5 text-white" />
            }
          </button>
        )}
      </div>

      {!cinematicMode && (
        <motion.button
          type="button"
          onClick={onDiscoverClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-5 left-5 sm:left-8 flex items-center gap-2 text-white/80 hover:text-white transition-opacity cursor-pointer group z-30"
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-medium text-white/80">
            {t.explore}
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#A64654]" />
          </motion.div>
        </motion.button>
      )}
    </section>
  );
};
