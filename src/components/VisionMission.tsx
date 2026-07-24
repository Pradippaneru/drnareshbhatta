import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, ShieldCheck, Sparkles, Stethoscope, Target, Compass, Eye, CheckCircle2 } from 'lucide-react';
import { CORE_BELIEFS } from '../data/biographyData';

export const VisionMission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'beliefs'>('vision');

  const iconsMap: Record<string, React.ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#C8A96A]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C8A96A]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#C8A96A]" />,
    Stethoscope: <Stethoscope className="w-6 h-6 text-[#C8A96A]" />,
  };

  return (
    <section id="vision" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D3B4E]"></span>
            <span>Section 02 · Guiding Principles</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
            Vision & Core Values
          </h2>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex items-center p-1 bg-[#FAFAF8] rounded-full border border-[#D7D7D7]">
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all ${
              activeTab === 'vision'
                ? 'bg-[#171717] text-[#F8F6F2] shadow-sm'
                : 'text-[#171717]/70 hover:text-[#171717]'
            }`}
          >
            Vision & Goals
          </button>
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all ${
              activeTab === 'mission'
                ? 'bg-[#171717] text-[#F8F6F2] shadow-sm'
                : 'text-[#171717]/70 hover:text-[#171717]'
            }`}
          >
            Mission
          </button>
          <button
            onClick={() => setActiveTab('beliefs')}
            className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all ${
              activeTab === 'beliefs'
                ? 'bg-[#171717] text-[#F8F6F2] shadow-sm'
                : 'text-[#171717]/70 hover:text-[#171717]'
            }`}
          >
            Core Beliefs
          </button>
        </div>
      </div>

      {/* Dynamic Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'vision' && (
          <motion.div
            key="vision"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] relative overflow-hidden shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#2D3B4E]/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[#2D3B4E]" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#171717] mb-4">
                The Long-Term Vision
              </h3>
              <p className="text-base text-[#2B2B2B] leading-relaxed font-light mb-6">
                To construct a scalable model of community healthcare and youth governance where no rural citizen lacks essential medical diagnostics, and every passionate young student is mentored into an impactful, ethical civic leader.
              </p>
              <div className="space-y-3 border-t border-[#D7D7D7] pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A96A] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#2B2B2B]">100,000+ Rural Citizens Screened by 2028</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A96A] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#2B2B2B]">Self-sustaining NSU Leadership Fellowship Chapters</span>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#2D3B4E] text-[#FAFAF8] relative overflow-hidden shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#FAFAF8]/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#C8A96A]" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">
                Strategic Goals
              </h3>
              <p className="text-base text-[#FAFAF8]/80 leading-relaxed font-light mb-6">
                Targeted benchmarks designed to create sustainable, lasting institutional impact across healthcare access, student governance, and youth empowerment.
              </p>
              <ul className="space-y-3 border-t border-[#FAFAF8]/20 pt-6 text-sm text-[#FAFAF8]/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                  <span>Expand Rural Diagnostics & Health Bridge to 20 sub-districts.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                  <span>Establish 1,000 free digital medical coaching stipends.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
                  <span>Publish 5 policy frameworks on youth civic engagement.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}

        {activeTab === 'mission' && (
          <motion.div
            key="mission"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] shadow-xs"
          >
            <div className="max-w-3xl">
              <div className="w-12 h-12 rounded-full bg-[#2D3B4E]/10 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[#2D3B4E]" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#171717] mb-4">
                The Core Mission
              </h3>
              <p className="text-lg sm:text-xl text-[#2B2B2B] leading-relaxed font-light mb-8">
                “To fuse clinical precision with compassionate youth leadership, creating grass-roots health systems and mentoring generations of purpose-driven change-makers.”
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#D7D7D7] pt-8">
                <div>
                  <div className="font-serif text-xl font-bold text-[#171717] mb-1">01. Service</div>
                  <div className="text-xs text-[#2B2B2B]/70">Direct medical relief & free diagnostic access for the underserved.</div>
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-[#171717] mb-1">02. Leadership</div>
                  <div className="text-xs text-[#2B2B2B]/70">Institutional stewardship at NSU & national student bodies.</div>
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-[#171717] mb-1">03. Mentorship</div>
                  <div className="text-xs text-[#2B2B2B]/70">Coaching aspiring medical & student leaders to achieve excellence.</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'beliefs' && (
          <motion.div
            key="beliefs"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CORE_BELIEFS.map((belief, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] hover:border-[#C8A96A] transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-[#2D3B4E]/10 mb-4">
                    {iconsMap[belief.iconName] || <Sparkles className="w-6 h-6 text-[#C8A96A]" />}
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#171717] mb-2">
                    {belief.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed font-light">
                    {belief.description}
                  </p>
                </div>
                <div className="mt-6 text-[10px] uppercase tracking-widest text-[#2D3B4E] font-semibold border-t border-[#D7D7D7]/60 pt-3">
                  Pillar 0{idx + 1}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
