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
  const { biography, profilePortrait } = useContent();

  return (
    <section id="hero" className="relative min-h-[85vh] pt-28 sm:pt-36 pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none -z-10"></div>

      {/* 45% / 55% Split Screen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center w-full">
        
        {/* LEFT COLUMN (45% Width on Desktop) */}
        <div className="lg:col-span-5 space-y-6 z-10">
          
          {/* Headline Name & Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0F172A] whitespace-nowrap">
              Dr. Naresh Bhatta
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-[#DC2626] font-normal">
              "Vision into reality."
            </p>
          </motion.div>

          {/* Clean Single Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#334155] font-light leading-relaxed max-w-lg"
          >
            A dedicated physician and youth mentor championing rural healthcare access, student empowerment, and transformative community development across Nepal.
          </motion.p>

          {/* CTA Buttons outside image in left column */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <button
              onClick={() => onNavigate('journey')}
              className="px-6 py-3 bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#DC2626] transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Journey</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('initiatives')}
              className="px-6 py-3 bg-white text-[#0F172A] border border-[#E2E8F0] font-bold text-xs uppercase tracking-wider rounded-full hover:border-[#0F172A] hover:bg-[#FAF9F5] transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
            >
              <span>Community Initiatives</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (55% Width on Desktop) */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px]">
          
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
              className="w-full max-w-lg h-auto filter drop-shadow-lg"
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

          {/* CLEAN PORTRAIT CUTOUT FRAME WITH UNIQUE BORDER CTAS */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md my-4"
          >
            {/* Soft Shadow Base */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-[#0F172A]/10 rounded-full blur-xl pointer-events-none"></div>

            {/* Minimal Portrait Container */}
            <div className="relative rounded-3xl overflow-hidden bg-white/50 backdrop-blur-xs border border-[#E2E8F0] p-2 sm:p-3 shadow-lg group">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-transparent via-[#E2E8F0]/20 to-[#E2E8F0]/60">
                <motion.img
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  src={profilePortrait || portraitImage}
                  alt={`${biography.name} - Official Portrait`}
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] sm:h-[490px] object-cover object-top filter brightness-102 contrast-102 transition-transform duration-700 group-hover:scale-102"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

