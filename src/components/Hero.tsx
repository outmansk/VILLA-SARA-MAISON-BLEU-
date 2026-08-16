import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Volume2, VolumeX, Play, Pause, Eye, EyeOff } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  onDiscoverClick: () => void;
  lang: Language;
}

interface VideoSegment {
  mp4: string;
  startTime: number;
  endTime: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 12 videos x 3 segments = 36 clips de 1-1.5s
const ALL_SEGMENTS: VideoSegment[] = [
  { mp4: '/videos/living-new.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/living-new.mp4', startTime: 6, endTime: 7.5 },
  { mp4: '/videos/living-new.mp4', startTime: 12, endTime: 13.5 },
  { mp4: '/videos/room1.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/room1.mp4', startTime: 3, endTime: 4.5 },
  { mp4: '/videos/room1.mp4', startTime: 6, endTime: 7.5 },
  { mp4: '/videos/lavabo.mp4', startTime: 0, endTime: 1.0 },
  { mp4: '/videos/lavabo.mp4', startTime: 1.5, endTime: 2.5 },
  { mp4: '/videos/lavabo.mp4', startTime: 3.0, endTime: 4.0 },
  { mp4: '/videos/living2.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/living2.mp4', startTime: 2.5, endTime: 4.0 },
  { mp4: '/videos/living2.mp4', startTime: 5.0, endTime: 6.5 },
  { mp4: '/videos/poolside.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/poolside.mp4', startTime: 2.5, endTime: 4.0 },
  { mp4: '/videos/poolside.mp4', startTime: 5.0, endTime: 6.5 },
  { mp4: '/videos/pool2.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/pool2.mp4', startTime: 5, endTime: 6.5 },
  { mp4: '/videos/pool2.mp4', startTime: 10, endTime: 11.5 },
  { mp4: '/videos/pool3.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/pool3.mp4', startTime: 5, endTime: 6.5 },
  { mp4: '/videos/pool3.mp4', startTime: 10, endTime: 11.5 },
  { mp4: '/videos/football.mp4', startTime: 2, endTime: 3.5 },
  { mp4: '/videos/football.mp4', startTime: 8, endTime: 9.5 },
  { mp4: '/videos/football.mp4', startTime: 14, endTime: 15.5 },
  { mp4: '/videos/drone-aerial.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/drone-aerial.mp4', startTime: 2.5, endTime: 4.0 },
  { mp4: '/videos/drone-aerial.mp4', startTime: 5.0, endTime: 6.5 },
  { mp4: '/videos/Luxury_villa_and_swimming_pool_202608131911.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/Luxury_villa_and_swimming_pool_202608131911.mp4', startTime: 5, endTime: 6.5 },
  { mp4: '/videos/Luxury_villa_and_swimming_pool_202608131911.mp4', startTime: 10, endTime: 11.5 },
  { mp4: '/videos/Create_real_estate_video_1080p_202608141256.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/Create_real_estate_video_1080p_202608141256.mp4', startTime: 4, endTime: 5.5 },
  { mp4: '/videos/Create_real_estate_video_1080p_202608141256.mp4', startTime: 8, endTime: 9.5 },
  { mp4: '/videos/Create_real_estate_video_1080p_202608141303.mp4', startTime: 0, endTime: 1.5 },
  { mp4: '/videos/Create_real_estate_video_1080p_202608141303.mp4', startTime: 5, endTime: 6.5 },
  { mp4: '/videos/Create_real_estate_video_1080p_202608141303.mp4', startTime: 10, endTime: 11.5 },
];

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, lang }) => {
  const [playlist] = useState<VideoSegment[]>(() => shuffle(ALL_SEGMENTS));
  const [currentSegIdx, setCurrentSegIdx] = useState(0);
  const [activeBuffer, setActiveBuffer]   = useState(0);
  const [bufferVisible, setBufferVisible] = useState<[boolean, boolean]>([true, false]);
  const [isPlaying, setIsPlaying]         = useState(true);
  const [isMuted, setIsMuted]             = useState(true);
  const [cinematicMode, setCinematicMode] = useState(false);

  const activeBufferRef    = useRef(0);
  const currentSegIdxRef   = useRef(0);
  const isTransitioningRef = useRef(false);
  const isPlayingRef       = useRef(true);
  const isMutedRef         = useRef(true);
  const videoRefs          = useRef<(HTMLVideoElement | null)[]>([null, null]);
  const playlistRef        = useRef(playlist);

  const t = translations[lang].hero;

  // ── Promise-based buffer preparation ─────────────────────────────────────────
  // Waits for loadedmetadata + seeked before resolving so the buffer is truly ready.
  const prepareBuffer = useCallback(
    (bufIdx: number, segIdx: number): Promise<void> =>
      new Promise<void>((resolve) => {
        const seg   = playlistRef.current[segIdx % playlistRef.current.length];
        const video = videoRefs.current[bufIdx];
        if (!video || !seg) { resolve(); return; }

        video.muted = isMutedRef.current;

        const doSeek = () => {
          // If already at the correct position, resolve immediately
          if (Math.abs(video.currentTime - seg.startTime) < 0.05) {
            resolve();
            return;
          }
          const onSeeked = () => {
            video.removeEventListener('seeked', onSeeked);
            resolve();
          };
          video.addEventListener('seeked', onSeeked);
          video.currentTime = seg.startTime;
        };

        const absUrl = new URL(seg.mp4, window.location.href).href;
        if (video.src !== absUrl) {
          // Different file: wait for metadata before seeking
          const onMeta = () => {
            video.removeEventListener('loadedmetadata', onMeta);
            doSeek();
          };
          video.addEventListener('loadedmetadata', onMeta);
          video.src = seg.mp4;
          video.load();
        } else {
          // Same file: just seek
          doSeek();
        }
      }),
    []
  );

  // ── Crossfade to next segment ─────────────────────────────────────────────────
  const goToNext = useCallback(async () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const currentBuf = activeBufferRef.current;
    const nextBuf    = 1 - currentBuf;
    const nextSegIdx = (currentSegIdxRef.current + 1) % playlistRef.current.length;

    // Play the preloaded standby buffer
    const nextVideo = videoRefs.current[nextBuf];
    if (nextVideo && isPlayingRef.current) {
      nextVideo.muted = isMutedRef.current;
      nextVideo.play().catch(() => {});
    }

    // Crossfade: show nextBuf, hide currentBuf
    setBufferVisible(nextBuf === 0 ? [true, false] : [false, true]);

    setTimeout(async () => {
      setCurrentSegIdx(nextSegIdx);
      setActiveBuffer(nextBuf);
      currentSegIdxRef.current = nextSegIdx;
      activeBufferRef.current  = nextBuf;

      // Preload segment after next into the now-hidden old buffer
      const afterNextIdx = (nextSegIdx + 1) % playlistRef.current.length;
      await prepareBuffer(currentBuf, afterNextIdx);

      isTransitioningRef.current = false;
    }, 650);
  }, [prepareBuffer]);

  // ── Bootstrap ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    playlistRef.current = playlist;

    (async () => {
      // Prepare seg 0 in buffer 0, then play
      await prepareBuffer(0, 0);
      const v0 = videoRefs.current[0];
      if (v0) v0.play().catch(() => {});

      // Preload seg 1 in buffer 1 (do not play yet)
      await prepareBuffer(1, 1 % playlist.length);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Time monitor to catch segment end ────────────────────────────────────────
  const handleTimeUpdate = useCallback((bufIdx: number) => {
    if (bufIdx !== activeBufferRef.current) return;
    const v   = videoRefs.current[bufIdx];
    if (!v)   return;
    const seg = playlistRef.current[currentSegIdxRef.current];
    if (!seg) return;
    if (v.currentTime >= seg.endTime) {
      goToNext();
    }
  }, [goToNext]);

  const handleEnded = useCallback((bufIdx: number) => {
    if (bufIdx === activeBufferRef.current) goToNext();
  }, [goToNext]);

  // ── Player controls ───────────────────────────────────────────────────────────
  const togglePlay = () => {
    const v          = videoRefs.current[activeBufferRef.current];
    const newPlaying = !isPlayingRef.current;
    isPlayingRef.current = newPlaying;
    if (v) { newPlaying ? v.play().catch(() => {}) : v.pause(); }
    setIsPlaying(newPlaying);
  };

  const toggleMute = () => {
    const newMuted     = !isMutedRef.current;
    isMutedRef.current = newMuted;
    videoRefs.current.forEach(v => { if (v) v.muted = newMuted; });
    setIsMuted(newMuted);
  };

  const DOT_COUNT = 7;
  const halfDots  = Math.floor(DOT_COUNT / 2);
  const total     = playlist.length;

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-end justify-center overflow-hidden bg-[#111111] pt-16 sm:pt-20 pb-16 sm:pb-20"
    >
      {/* Double-buffer background */}
      <div className="absolute inset-0 z-0 bg-black">
        {([0, 1] as const).map((bufIdx) => (
          <video
            key={bufIdx}
            ref={(el) => { videoRefs.current[bufIdx] = el; }}
            playsInline
            onTimeUpdate={() => handleTimeUpdate(bufIdx)}
            onEnded={() => handleEnded(bufIdx)}
            className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02] transition-opacity duration-700 ease-in-out ${
              bufferVisible[bufIdx] ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 z-20 transition-opacity duration-700 ${
            cinematicMode
              ? 'bg-black/10'
              : 'bg-gradient-to-t from-black/75 via-black/20 to-black/30'
          }`}
        />
      </div>

      {/* Sliding-window dot indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
        {Array.from({ length: DOT_COUNT }).map((_, i) => {
          const offset   = i - halfDots;
          const dotIdx   = ((currentSegIdx + offset) % total + total) % total;
          const isActive = dotIdx === currentSegIdx;
          return (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${
                isActive
                  ? 'w-6 h-1.5 bg-white'
                  : Math.abs(offset) === 1
                  ? 'w-1.5 h-1.5 bg-white/50'
                  : 'w-1 h-1 bg-white/20'
              }`}
            />
          );
        })}
      </div>

      {/* Main headline */}
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

      {/* Controls */}
      <div className="absolute bottom-5 right-4 sm:right-8 z-30 flex items-center gap-2">
        <button
          onClick={() => setCinematicMode(!cinematicMode)}
          title={cinematicMode ? 'Afficher le texte' : 'Mode cinematique'}
          className={`p-2 sm:p-2.5 backdrop-blur-md border rounded-full transition-all cursor-pointer shadow-lg ${
            cinematicMode
              ? 'bg-white text-black border-white'
              : 'bg-black/50 text-white/90 border-white/20 hover:bg-black/70'
          }`}
        >
          {cinematicMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={togglePlay}
          className="p-2 sm:p-2.5 bg-black/50 backdrop-blur-md text-white/90 border border-white/20 rounded-full hover:bg-black/70 transition-colors cursor-pointer shadow-lg"
        >
          {isPlaying
            ? <Pause className="w-3.5 h-3.5 text-white" />
            : <Play  className="w-3.5 h-3.5 text-white" />
          }
        </button>

        <button
          onClick={toggleMute}
          className="p-2 sm:p-2.5 bg-black/50 backdrop-blur-md text-white/90 border border-white/20 rounded-full hover:bg-black/70 transition-colors cursor-pointer shadow-lg"
        >
          {isMuted
            ? <VolumeX className="w-3.5 h-3.5 text-white" />
            : <Volume2 className="w-3.5 h-3.5 text-white" />
          }
        </button>
      </div>

      {/* Scroll indicator */}
      {!cinematicMode && (
        <motion.button
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
