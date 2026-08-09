import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { NavigationTab } from '../types';
import portraitImage from '../assets/images/dr_abrar_portrait_1784881890848.jpg';

interface HeroProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { biography, heroPortrait, profilePortrait, isContentLoading } = useContent();

  const currentPortrait = heroPortrait || profilePortrait || portraitImage;
  const isCustomPortrait = Boolean(currentPortrait && currentPortrait !== portraitImage);
  const showSkeleton = isContentLoading && !isCustomPortrait;

  return (
    <section id="hero" className="relative pt-24 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none -z-10"></div>

      {/* 50% / 50% Split Screen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center w-full">
        
        {/* LEFT COLUMN (50% Width on Desktop) */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 z-10">
          
          {/* Headline Name & Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2.5 sm:space-y-3"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#0F172A] leading-tight sm:whitespace-nowrap">
              Dr. Naresh Bhatta
            </h1>
            <div className="text-sm sm:text-base md:text-lg xl:text-xl text-[#334155] font-normal leading-relaxed flex items-start gap-2">
              <span className="shrink-0 text-[#334155] font-medium mt-0.5">-</span>
              <span className="leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>National Leader</span>
                <span className="text-[#94A3B8] hidden sm:inline">|</span>
                <span>Healthcare Professional</span>
                <span className="text-[#94A3B8] hidden sm:inline">|</span>
                <span>Public Policy Reformer</span>
                <span className="text-[#94A3B8] hidden sm:inline">|</span>
                <span>Advocate for a Prosperous Nepal</span>
              </span>
            </div>
          </motion.div>


          {/* CTA Buttons outside image in left column */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2"
          >
            <button
              onClick={() => onNavigate('journey')}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#DC2626] transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Journey</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('initiatives')}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#0F172A] border border-[#E2E8F0] font-bold text-xs uppercase tracking-wider rounded-full hover:border-[#0F172A] hover:bg-[#FAF9F5] transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
            >
              <span>Community Initiatives</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (50% Width on Desktop) */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[540px]">
          
          {/* ARTISTIC NEPAL FLAG BACKGROUND (Watercolor / Brush-stroke Effect at 20-30% Opacity) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0.22, 0.30, 0.22], 
              scale: 1,
              y: [0, -6, 0]
            }}
            transition={{ 
              opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 0.8 }
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10"
          >
            <svg
              className="w-full max-w-xs sm:max-w-lg h-auto filter drop-shadow-lg"
              viewBox="0 0 400 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="watercolor-brush" x="-10%" y="-10%" width="120%" height="120%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                
                <linearGradient id="flagRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#991B1B" stopOpacity="0.75" />
                </linearGradient>

                <linearGradient id="flagBlueBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0F172A" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Thick artistic Nepal double-pennon shape */}
              <path
                d="M 40 30 L 340 210 L 150 210 L 340 390 L 40 390 Z"
                fill="url(#flagBlueBorder)"
                filter="url(#watercolor-brush)"
                stroke="#1E3A8A"
                strokeWidth="8"
                strokeLinejoin="round"
              />

              {/* Inner Crimson Red Pennons */}
              <path
                d="M 52 45 L 315 200 L 140 200 L 315 378 L 52 378 Z"
                fill="url(#flagRedGrad)"
                filter="url(#watercolor-brush)"
              />

              {/* Crescent Moon */}
              <g transform="translate(100, 115) scale(0.75)" fill="#FAF9F5" opacity="0.95">
                <path d="M -25 0 A 25 25 0 0 0 25 0 A 20 20 0 0 1 -25 0 Z" />
                <circle cx="0" cy="-5" r="8" />
              </g>

              {/* 12-Pointed Sun */}
              <g transform="translate(110, 290) scale(0.85)" fill="#FAF9F5" opacity="0.95">
                <circle cx="0" cy="0" r="14" />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                  <polygon
                    key={angle}
                    points="0,-22 -4,-15 4,-15"
                    transform={`rotate(${angle})`}
                  />
                ))}
              </g>
            </svg>
          </motion.div>

          {/* SEAMLESS BLENDED PORTRAIT DISPLAY */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md my-0 sm:my-4 flex items-end justify-center"
          >
            {/* Soft Ambient Radial Shadow behind portrait */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-[#0F172A]/15 to-transparent rounded-full blur-xl pointer-events-none -z-10"></div>

            {/* Frameless Blended Image Container */}
            <div className="relative w-full flex items-end justify-center group">
              {showSkeleton ? (
                <div className="w-[280px] sm:w-[380px] h-[350px] sm:h-[520px] rounded-3xl bg-gradient-to-t from-slate-200/80 via-slate-100/60 to-slate-200/30 animate-pulse border border-slate-200/60 shadow-sm flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-slate-300/40 animate-ping"></div>
                </div>
              ) : (
                <motion.img
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={currentPortrait}
                  alt={`${biography.name} - Official Portrait`}
                  referrerPolicy="no-referrer"
                  className="w-auto h-[350px] sm:h-[520px] max-w-full object-contain object-bottom filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
                />
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

