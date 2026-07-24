import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Users, HeartHandshake, Quote, Sparkles } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const TheBeginning: React.FC = () => {
  const { biography, profilePortrait } = useContent();
  const story = biography.aboutStory;

  return (
    <section id="story" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-3 flex items-center gap-2">
          <span className="w-8 h-px bg-[#2D3B4E]"></span>
          <span>Section 01 · Emotional Narrative</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
          {story.title}
        </h2>
        <p className="text-lg text-[#2D3B4E] font-serif italic mt-3">
          {story.subtitle}
        </p>
      </div>

      {/* Main Narrative Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Deep Narrative Text */}
        <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#2B2B2B] leading-relaxed font-light">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#171717]">
            {story.narrative1}
          </p>

          <p>{story.narrative2}</p>

          {/* Editorial Quote Box */}
          <div className="p-8 my-8 rounded-2xl bg-[#FAFAF8] border-l-4 border-[#C8A96A] shadow-xs relative">
            <Quote className="w-8 h-8 text-[#C8A96A]/30 absolute top-4 right-4" />
            <p className="font-serif text-xl sm:text-2xl italic text-[#171717] leading-snug">
              “When you hold a patient's hand in a village clinic, you realize that true medicine is not just science—it is an act of human solidarity.”
            </p>
            <div className="mt-4 text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold">
              — {biography.name}
            </div>
          </div>
        </div>

        {/* Right Column: Sketch Illustration Card & Three Pillars */}
        <div className="lg:col-span-5 space-y-6">
          {/* Sketch Card */}
          <div className="p-4 rounded-2xl bg-[#F2EFE9] border border-[#D7D7D7] shadow-xs flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#D7D7D7] shrink-0 bg-[#FAFAF8]">
              <img
                src={profilePortrait}
                alt={`${biography.name} Portrait`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#10B981] font-bold mb-0.5">
                <Sparkles className="w-3 h-3" />
                <span>Primary Portrait</span>
              </div>
              <div className="font-serif font-bold text-base text-[#171717]">{biography.name}</div>
              <div className="text-xs text-[#2B2B2B]/70 font-light mt-0.5">
                {biography.title}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] hover:border-[#C8A96A] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#2D3B4E]/10 text-[#2D3B4E] flex items-center justify-center mb-4">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2">
              Why Medicine?
            </h3>
            <p className="text-sm text-[#2B2B2B] leading-relaxed font-light">
              {story.whyMedicine}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] hover:border-[#C8A96A] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#2D3B4E]/10 text-[#2D3B4E] flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2">
              Why Leadership?
            </h3>
            <p className="text-sm text-[#2B2B2B] leading-relaxed font-light">
              {story.whyLeadership}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] hover:border-[#C8A96A] transition-colors shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#2D3B4E]/10 text-[#2D3B4E] flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2">
              Why Serving People?
            </h3>
            <p className="text-sm text-[#2B2B2B] leading-relaxed font-light">
              {story.whyServing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
