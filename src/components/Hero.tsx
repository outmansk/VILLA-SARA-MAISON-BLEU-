import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Volume2, VolumeX, Play, Pause, Eye, EyeOff } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  onDiscoverClick: () => void;
  lang: Language;
}

interface VideoSource {
  mp4: string;
  webm?: string;
}

const VIDEO_PLAYLIST: VideoSource[] = [
  {
    mp4: '/videos/day-architecture.mp4',
    webm: '/videos/day-architecture.webm',
  },
  {
    mp4: '/videos/living.mp4',
    webm: '/videos/living.webm',
  },
  {
    mp4: '/videos/poolside.mp4',
    webm: '/videos/poolside.webm',
  },
  {
    mp4: '/videos/drone-aerial.mp4',
  },
];

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, lang }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [cinematicMode, setCinematicMode] = useState<boolean>(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const t = translations[lang].hero;

  const handleVideoEnded = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % VIDEO_PLAYLIST.length);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === currentIndex) {
        if (isPlaying) video.play().catch(() => {});
      } else {
        // Pause other videos after the crossfade finishes
        setTimeout(() => {
          if (video && idx !== currentIndex) {
            video.pause();
            video.currentTime = 0;
          }
        }, 800);
      }
    });
  }, [currentIndex, isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const currentVideo = VIDEO_PLAYLIST[currentIndex];

  return (
    <section id="hero" className="relative h-screen w-full flex items-end justify-center overflow-hidden bg-[#1A1D1B] pt-16 sm:pt-20 pb-16 sm:pb-20">
      {/* Background Video - smoothly crossfades between all videos */}
      <div className="absolute inset-0 z-0 bg-black">
        {VIDEO_PLAYLIST.map((videoSource, idx) => (
          <video
            key={idx}
            ref={(el) => (videoRefs.current[idx] = el)}
            muted={isMuted}
            playsInline
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02] transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {videoSource.webm && (
              <source src={videoSource.webm} type="video/webm" />
            )}
            <source src={videoSource.mp4} type="video/mp4" />
          </video>
        ))}

        {/* Gradient overlay for text legibility */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${cinematicMode ? 'bg-black/10' : 'bg-gradient-to-t from-black/70 via-black/20 to-black/30'}`} />
      </div>

      {/* Video progress dots indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {VIDEO_PLAYLIST.map((_, idx) => (
          <div
            key={idx}
            className={`rounded-full transition-all duration-500 ${
              idx === currentIndex
                ? 'w-6 h-1.5 bg-white'
                : 'w-1.5 h-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Main Content Stage */}
      <AnimatePresence>
        {!cinematicMode && (
          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 pb-6 sm:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center text-center mx-auto max-w-3xl"
            >
              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white leading-[1.12] drop-shadow-md">
                {t.headlineMain} <br />
                <span className="italic font-normal text-[#E0D7C6] block mt-1 sm:inline sm:mt-0">{t.headlineItalic}</span>
              </h1>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Minimal Controls (Play/Pause, Mute, Cinematic) */}
      <div className="absolute bottom-5 right-4 sm:right-8 z-20 flex items-center gap-2">
        {/* Toggle Cinematic Mode */}
        <button
          onClick={() => setCinematicMode(!cinematicMode)}
          title={cinematicMode ? 'Afficher le texte' : 'Masquer le texte'}
          className={`p-2 sm:p-2.5 backdrop-blur-md border rounded-full transition-all cursor-pointer shadow-lg ${
            cinematicMode
              ? 'bg-white text-black border-white'
              : 'bg-black/50 text-white/90 border-white/20 hover:bg-black/70'
          }`}
        >
          {cinematicMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>

        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="p-2 sm:p-2.5 bg-black/50 backdrop-blur-md text-white/90 border border-white/20 rounded-full hover:bg-black/70 transition-colors cursor-pointer shadow-lg"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white" />}
        </button>

        {/* Mute/Unmute */}
        <button
          onClick={toggleMute}
          className="p-2 sm:p-2.5 bg-black/50 backdrop-blur-md text-white/90 border border-white/20 rounded-full hover:bg-black/70 transition-colors cursor-pointer shadow-lg"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
        </button>
      </div>

      {/* Scroll Indicator */}
      {!cinematicMode && (
        <motion.button
          onClick={onDiscoverClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-5 left-5 sm:left-8 flex items-center gap-2 text-white/80 hover:text-white transition-opacity cursor-pointer group z-10"
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-medium text-white/80">{t.explore}</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#8E9E8D]" />
          </motion.div>
        </motion.button>
      )}
    </section>
  );
};