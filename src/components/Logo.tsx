import React from 'react';

interface LogoProps {
  variant?: 'badge' | 'transparent-dark' | 'transparent-light' | 'wordmark' | 'monochrome-dark';
  className?: string;
  size?: number | string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'badge',
  className = '',
  size = 120
}) => {
  // Color presets based on logo specs
  const colors = {
    badge: { bg: '#8B2332', fg: '#FAF6F0' },
    'monochrome-dark': { bg: '#5C121F', fg: '#FAF6F0' },
    'transparent-dark': { bg: 'transparent', fg: '#5C121F' },
    'transparent-light': { bg: 'transparent', fg: '#FAF6F0' },
    wordmark: { bg: 'transparent', fg: '#1A1A1A' }
  };

  const current = colors[variant] || colors.badge;

  if (variant === 'wordmark') {
    return (
      <div className={`inline-flex flex-col items-center justify-center text-center ${className}`}>
        <span className="font-serif tracking-[0.25em] text-lg sm:text-xl md:text-2xl font-medium uppercase text-[#1A1A1A]">
          MY LITTLE BOHÈME
        </span>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.35em] text-[#8B2332] uppercase mt-0.5">
          BY SARA • INTERIOR
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none transition-transform duration-300 sm:hover:scale-[1.01] active:scale-[0.98] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Outer Circle for Badge modes */}
        {current.bg !== 'transparent' && (
          <circle cx="250" cy="250" r="240" fill={current.bg} />
        )}

        <g stroke={current.fg} strokeLinecap="round" strokeLinejoin="round">
          {/* Top Arch Contour */}
          <path
            d="M 130,300 L 130,190 A 120,120 0 0,1 370,190 L 370,300"
            strokeWidth="3.5"
            fill="none"
          />

          {/* House Gable Roof Structure */}
          <path
            d="M 160,300 L 160,205 L 250,115 L 340,205 L 340,300"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Plant on Tripod Stool (Left) */}
          {/* Stool Legs */}
          <path d="M 175,290 L 168,255" strokeWidth="2.5" />
          <path d="M 195,290 L 202,255" strokeWidth="2.5" />
          <path d="M 185,290 L 185,255" strokeWidth="2.5" />
          {/* Stool Top */}
          <ellipse cx="185" cy="255" rx="18" ry="4" strokeWidth="2.5" fill={current.bg === 'transparent' ? 'none' : current.bg} />
          {/* Pot */}
          <path d="M 178,255 L 180,238 L 190,238 L 192,255 Z" strokeWidth="2.5" fill="none" />
          {/* Leaves */}
          <path d="M 185,238 Q 170,225 162,228 Q 175,235 185,238" strokeWidth="2.5" />
          <path d="M 185,238 Q 170,210 178,202 Q 183,220 185,238" strokeWidth="2.5" />
          <path d="M 185,238 Q 185,200 192,202 Q 190,220 185,238" strokeWidth="2.5" />
          <path d="M 185,238 Q 200,210 205,218 Q 195,230 185,238" strokeWidth="2.5" />
          <path d="M 185,238 Q 205,225 212,230 Q 198,236 185,238" strokeWidth="2.5" />

          {/* Center Armchair */}
          {/* Main Upholstered Back & Seat Outline */}
          <path
            d="M 235,225 C 220,225 220,260 220,270 C 210,260 220,285 225,292 L 275,292 C 280,285 290,260 280,270 C 280,260 280,225 265,225 C 255,225 250,230 250,230 C 250,230 245,225 235,225 Z"
            strokeWidth="3.5"
            fill="none"
          />
          {/* Armchair Inner Seat Cushion */}
          <path
            d="M 225,270 Q 250,282 275,270"
            strokeWidth="3"
            fill="none"
          />
          {/* Left Armrest Loop */}
          <path
            d="M 230,250 C 215,250 215,280 230,280"
            strokeWidth="3"
            fill="none"
          />
          {/* Right Armrest Loop */}
          <path
            d="M 270,250 C 285,250 285,280 270,280"
            strokeWidth="3"
            fill="none"
          />
          {/* Armchair Legs */}
          <path d="M 226,292 L 222,310" strokeWidth="3" />
          <path d="M 238,292 L 236,305" strokeWidth="2.5" />
          <path d="M 262,292 L 264,305" strokeWidth="2.5" />
          <path d="M 274,292 L 278,310" strokeWidth="3" />

          {/* Floor Arched Reading Lamp (Right) */}
          {/* Base */}
          <ellipse cx="315" cy="288" rx="14" ry="5" strokeWidth="2.5" />
          {/* Stem & Arch */}
          <path
            d="M 315,285 C 315,230 320,170 270,180"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Joint Knob */}
          <circle cx="318" cy="250" r="3" fill={current.fg} />
          {/* Lamp Shade */}
          <path d="M 258,190 L 282,180 L 272,202 Z" strokeWidth="2.5" fill="none" />
          {/* Light Rays */}
          <path d="M 258,200 L 250,208" strokeWidth="2" />
          <path d="M 265,206 L 260,216" strokeWidth="2" />
          <path d="M 272,208 L 270,220" strokeWidth="2" />

          {/* Bottom Baseline Divider Lines */}
          <line x1="120" y1="338" x2="200" y2="338" strokeWidth="2.5" />
          <line x1="300" y1="338" x2="380" y2="338" strokeWidth="2.5" />
        </g>

        {/* Text Along Arch Path - BY SARA */}
        <path id="archPath" d="M 180,95 A 130,130 0 0,1 320,95" fill="none" />
        <text fill={current.fg} fontSize="22" letterSpacing="6" fontFamily="Cormorant Garamond, serif">
          <textPath href="#archPath" startOffset="50%" textAnchor="middle">
            BY SARA
          </textPath>
        </text>

        {/* INTERIOR Text Centered at Base */}
        <text
          x="250"
          y="344"
          fill={current.fg}
          fontSize="20"
          letterSpacing="8"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
        >
          INTERIOR
        </text>

        {/* Main Title below Logo: MY LITTLE BOHÈME */}
        <text
          x="250"
          y="382"
          fill={current.fg}
          fontSize="27"
          fontWeight="500"
          letterSpacing="6"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
        >
          MY LITTLE BOHÈME
        </text>
      </svg>
    </div>
  );
};
