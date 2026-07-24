import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Stethoscope, Users, HeartHandshake, Sparkles, MapPin, Phone } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { NavigationTab } from '../types';

interface HeroProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { biography, profilePortrait } = useContent();

  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-32 pb-20 px-6 sm:px-8 flex flex-col justify-between max-w-7xl mx-auto">
      {/* Top Status & Role Pill */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Bio & Intro */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAFAF8] border border-[#D7D7D7] text-[#171717] text-xs font-medium shadow-xs"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] animate-pulse"></span>
            <span className="font-bold text-[#0F172A]">{biography.name}</span>
            <span className="text-[#475569]/40">·</span>
            <span className="text-[#334155]">{biography.title}</span>
            <span className="text-[#475569]/40 hidden sm:inline">·</span>
            <a href={`tel:${biography.phone}`} className="text-[#0D9488] font-mono font-bold hidden sm:inline flex items-center gap-1 hover:underline">
              <Phone className="w-3 h-3 inline" /> {biography.phone}
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#0F172A] leading-[1.04]"
          >
            Service in Action. <br />
            <span className="italic font-normal text-[#0D9488]">Leadership</span> with Purpose.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#334155] font-light max-w-2xl leading-relaxed"
          >
            {biography.missionStatement}
          </motion.p>

          {/* Quick Metrics Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2"
          >
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#0D9488] transition-colors">
              <div className="text-xs uppercase tracking-widest text-[#0D9488] font-bold flex items-center gap-1.5 mb-1">
                <Stethoscope className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Medicine</span>
              </div>
              <div className="font-serif text-2xl font-bold text-[#0F172A]">25,000+</div>
              <div className="text-xs text-[#64748B] mt-0.5">Patients Consulted</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#0D9488] transition-colors">
              <div className="text-xs uppercase tracking-widest text-[#D97706] font-bold flex items-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Youth</span>
              </div>
              <div className="font-serif text-2xl font-bold text-[#0F172A]">18,000+</div>
              <div className="text-xs text-[#64748B] mt-0.5">Students Mentored</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs col-span-2 sm:col-span-1 hover:border-[#0D9488] transition-colors">
              <div className="text-xs uppercase tracking-widest text-[#0D9488] font-bold flex items-center gap-1.5 mb-1">
                <HeartHandshake className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>Impact</span>
              </div>
              <div className="font-serif text-2xl font-bold text-[#0F172A]">50+</div>
              <div className="text-xs text-[#64748B] mt-0.5">Health Camps</div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => onNavigate('about')}
              className="px-7 py-3.5 bg-[#0F172A] text-white font-semibold text-xs uppercase tracking-widest rounded-full hover:bg-[#0D9488] transition-all shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <span>Read Story</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 bg-white text-[#0F172A] border border-[#E2E8F0] font-semibold text-xs uppercase tracking-widest rounded-full hover:border-[#0D9488] hover:text-[#0D9488] transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Request Keynote Speech</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Sketch Artwork Frame (Heynesh.com Reference Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Outer Fine Card Framing */}
          <div className="relative rounded-2xl overflow-hidden bg-[#F2EFE9] p-3 sm:p-4 shadow-xl border border-[#D7D7D7] group">
            {/* Paper Texture Sketch Image */}
            <div className="relative rounded-xl overflow-hidden border border-[#D7D7D7]/60 bg-[#FBF9F5] shadow-inner">
              <img
                src={profilePortrait}
                alt={`${biography.name} Portrait`}
                referrerPolicy="no-referrer"
                className="w-full h-[480px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-102"
              />

              {/* Artwork Badge Overlay */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0F172A]/85 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 border border-white/20">
                <Sparkles className="w-3 h-3 text-[#14B8A6]" />
                <span>Primary Portrait</span>
              </div>
            </div>

            {/* Overlay Quote Badge */}
            <div className="mt-3 p-5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] shadow-xs">
              <p className="font-serif italic text-sm sm:text-base text-[#0F172A] leading-snug">
                {biography.quote}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-[#E2E8F0] pt-2.5 text-xs">
                <span className="uppercase tracking-wider font-bold text-[#0D9488]">
                  {biography.name}
                </span>
                <span className="text-[10px] text-[#475569] tracking-widest uppercase font-mono font-bold">
                  Phone: {biography.phone}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 flex items-center justify-between border-t border-[#D7D7D7] pt-6 text-xs text-[#2B2B2B]/70 font-medium uppercase tracking-widest"
      >
        <span>Digital Biography & Leadership Movement</span>
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-2 hover:text-[#171717] transition-colors cursor-pointer"
        >
          <span>Explore Narrative</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};
