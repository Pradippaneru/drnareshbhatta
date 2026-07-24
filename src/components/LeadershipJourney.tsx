import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Building, Award, Check, Sparkles, Filter } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { Milestone } from '../types';

export const LeadershipJourney: React.FC = () => {
  const { milestones } = useContent();
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'student' | 'nsu' | 'medical' | 'community'>('all');
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  const filteredMilestones = categoryFilter === 'all'
    ? milestones
    : milestones.filter((m) => m.category === categoryFilter);

  return (
    <section id="leadership" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D3B4E]"></span>
            <span>Section 03 · Track Record</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
            Leadership Journey
          </h2>
          <p className="text-base text-[#2B2B2B]/80 font-light mt-2 max-w-xl">
            Key milestones spanning student governance at NSU, clinical residency leadership, and grassroots community organizing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#FAFAF8] rounded-2xl border border-[#D7D7D7]">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
              categoryFilter === 'all'
                ? 'bg-[#171717] text-[#F8F6F2] shadow-xs'
                : 'text-[#171717]/70 hover:text-[#171717]'
            }`}
          >
            All Tracks
          </button>
          <button
            onClick={() => setCategoryFilter('nsu')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
              categoryFilter === 'nsu'
                ? 'bg-[#171717] text-[#F8F6F2] shadow-xs'
                : 'text-[#171717]/70 hover:text-[#171717]'
            }`}
          >
            NSU Leadership
          </button>
          <button
            onClick={() => setCategoryFilter('medical')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
              categoryFilter === 'medical'
                ? 'bg-[#171717] text-[#F8F6F2] shadow-xs'
                : 'text-[#171717]/70 hover:text-[#171717]'
            }`}
          >
            Medical
          </button>
          <button
            onClick={() => setCategoryFilter('community')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl transition-all ${
              categoryFilter === 'community'
                ? 'bg-[#171717] text-[#F8F6F2] shadow-xs'
                : 'text-[#171717]/70 hover:text-[#171717]'
            }`}
          >
            Community
          </button>
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="relative border-l-2 border-[#D7D7D7] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {filteredMilestones.map((milestone, idx) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedMilestone(milestone)}
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#F8F6F2] border-4 border-[#171717] group-hover:border-[#C8A96A] group-hover:scale-125 transition-all shadow-xs"></div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] group-hover:border-[#C8A96A] group-hover:shadow-md transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#2D3B4E]/10 text-[#2D3B4E] text-xs font-semibold uppercase tracking-wider">
                  {milestone.year}
                </span>
                {milestone.impactMetric && (
                  <span className="px-3 py-1 rounded-full bg-[#C8A96A]/20 text-[#171717] text-xs font-bold border border-[#C8A96A]/40">
                    {milestone.impactMetric}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717] mb-1 group-hover:text-[#2D3B4E] transition-colors">
                {milestone.title}
              </h3>

              <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-medium mb-4 flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-[#C8A96A]" />
                <span>{milestone.organization}</span>
              </div>

              <p className="text-sm text-[#2B2B2B] leading-relaxed font-light mb-4">
                {milestone.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 border-t border-[#D7D7D7]/60 pt-4">
                {milestone.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#2B2B2B]/80">
                    <Check className="w-3.5 h-3.5 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Milestone Modal */}
      <AnimatePresence>
        {selectedMilestone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#171717]/60 backdrop-blur-sm p-6 flex items-center justify-center"
            onClick={() => setSelectedMilestone(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAFAF8] border border-[#D7D7D7] rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
            >
              <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-2">
                {selectedMilestone.year} · {selectedMilestone.category.toUpperCase()}
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#171717] mb-2">
                {selectedMilestone.title}
              </h3>
              <div className="text-sm text-[#2D3B4E] font-medium mb-4">
                {selectedMilestone.organization}
              </div>
              <p className="text-sm text-[#2B2B2B] leading-relaxed font-light mb-6">
                {selectedMilestone.description}
              </p>
              <div className="space-y-2 bg-[#F8F6F2] p-4 rounded-xl mb-6">
                <div className="text-xs font-semibold text-[#171717] uppercase tracking-wider mb-2">
                  Key Achievements
                </div>
                {selectedMilestone.highlights.map((h, i) => (
                  <div key={i} className="text-xs text-[#2B2B2B] flex items-start gap-2">
                    <Sparkles className="w-3 h-3 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="w-full py-2.5 bg-[#171717] text-[#F8F6F2] rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-[#2D3B4E] transition-colors"
              >
                Close Milestone View
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
