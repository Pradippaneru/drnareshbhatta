import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle, Sparkles, X, Heart, Shield, Users } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { Initiative } from '../types';

export const CurrentInitiatives: React.FC = () => {
  const { initiatives } = useContent();
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  return (
    <section id="initiatives" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-3 flex items-center gap-2">
          <span className="w-8 h-px bg-[#2D3B4E]"></span>
          <span>Section 06 · Active Movements</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
          Current Initiatives & Programs
        </h2>
        <p className="text-base text-[#2B2B2B]/80 font-light mt-2">
          Long-term social programs built to scale across healthcare equity, student fellowship, and disaster relief.
        </p>
      </div>

      {/* Initiatives Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initiatives.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] hover:border-[#C8A96A] overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Image Banner */}
              <div className="relative h-60 overflow-hidden bg-[#171717]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#171717]/80 backdrop-blur-md text-[#F8F6F2] text-xs font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    item.status === 'Active' 
                      ? 'bg-[#C8A96A] text-[#171717]' 
                      : 'bg-[#2D3B4E] text-[#FAFAF8]'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-1">
                  {item.metrics}
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#171717] mb-2 group-hover:text-[#2D3B4E] transition-colors">
                  {item.title}
                </h3>
                <p className="font-serif italic text-sm text-[#2D3B4E] mb-4">
                  “{item.tagline}”
                </p>
                <p className="text-sm text-[#2B2B2B] leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Read More Trigger */}
            <div className="p-8 pt-0">
              <button
                onClick={() => setSelectedInitiative(item)}
                className="w-full py-3 px-6 bg-[#171717] text-[#F8F6F2] text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-[#2D3B4E] transition-colors flex items-center justify-center gap-2"
              >
                <span>Read Full Program Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Deep-Dive Initiative Modal */}
      <AnimatePresence>
        {selectedInitiative && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#171717]/70 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
            onClick={() => setSelectedInitiative(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAFAF8] border border-[#D7D7D7] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden relative my-8"
            >
              {/* Modal Banner */}
              <div className="relative h-64 bg-[#171717]">
                <img
                  src={selectedInitiative.image}
                  alt={selectedInitiative.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#171717]/80 text-[#F8F6F2] flex items-center justify-center hover:bg-[#C8A96A] hover:text-[#171717] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-[#C8A96A] text-[#171717] text-xs font-bold uppercase tracking-wider">
                    {selectedInitiative.category} · {selectedInitiative.metrics}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#F8F6F2] mt-2">
                    {selectedInitiative.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#2D3B4E] font-bold mb-2">
                    Background & Narrative
                  </h4>
                  <p className="text-sm text-[#2B2B2B] leading-relaxed font-light">
                    {selectedInitiative.fullStory}
                  </p>
                </div>

                <div className="border-t border-[#D7D7D7] pt-4">
                  <h4 className="text-xs uppercase tracking-widest text-[#2D3B4E] font-bold mb-3">
                    Strategic Objectives
                  </h4>
                  <div className="space-y-2">
                    {selectedInitiative.keyGoals.map((goal, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#2B2B2B]">
                        <CheckCircle className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end">
                  <button
                    onClick={() => setSelectedInitiative(null)}
                    className="px-6 py-2.5 bg-[#171717] text-[#F8F6F2] text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#2D3B4E] transition-colors"
                  >
                    Close Story
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
