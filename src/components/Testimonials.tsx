import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, User, HeartHandshake, GraduationCap, Building } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Testimonials: React.FC = () => {
  const { testimonials } = useContent();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Patient', 'Student', 'Faculty', 'Community Leader'];

  const filtered = filterCategory === 'All'
    ? testimonials
    : testimonials.filter((t) => t.category === filterCategory);

  const handleNext = () => {
    if (filtered.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const handlePrev = () => {
    if (filtered.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const current = filtered[currentIndex] || testimonials[0];

  return (
    <section id="testimonials" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D3B4E]"></span>
            <span>Section 09 · Community Endorsements</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
            Voices of Trust & Impact
          </h2>
          <p className="text-base text-[#2B2B2B]/80 font-light mt-2 max-w-xl">
            Testimonials from patients treated in rural camps, students mentored at NSU, and community leaders.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#FAFAF8] rounded-2xl border border-[#D7D7D7]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilterCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
                filterCategory === cat
                  ? 'bg-[#171717] text-[#F8F6F2] shadow-xs'
                  : 'text-[#171717]/70 hover:text-[#171717]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Quote Showcase */}
      <div className="relative p-8 sm:p-14 rounded-3xl bg-[#FAFAF8] border border-[#D7D7D7] shadow-sm overflow-hidden">
        <Quote className="w-16 h-16 text-[#C8A96A]/20 absolute top-8 right-8" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 max-w-4xl"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#2D3B4E]/10 text-[#2D3B4E] text-xs font-semibold uppercase tracking-wider">
              {current.category} Endorsement
            </span>

            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#171717] leading-relaxed">
              “{current.quote}”
            </p>

            <div className="pt-4 border-t border-[#D7D7D7]">
              <div className="font-serif text-2xl font-bold text-[#171717]">
                {current.author}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#2D3B4E] font-medium mt-0.5">
                {current.role} · {current.organization}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#D7D7D7]/60">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-[#171717] text-[#F8F6F2] flex items-center justify-center hover:bg-[#2D3B4E] transition-colors shadow-xs"
            aria-label="Previous endorsement"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold px-2">
            0{currentIndex + 1} / 0{filtered.length}
          </span>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-[#171717] text-[#F8F6F2] flex items-center justify-center hover:bg-[#2D3B4E] transition-colors shadow-xs"
            aria-label="Next endorsement"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
