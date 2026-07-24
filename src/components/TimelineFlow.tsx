import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, X, Heart, CheckCircle2, User, Award, Shield, Phone } from 'lucide-react';
import { useContent, FlowCardItem } from '../context/ContentContext';

interface TimelineFlowProps {
  onSelectYear?: (year: string) => void;
}

export const TimelineFlow: React.FC<TimelineFlowProps> = () => {
  const { flowCards, biography } = useContent();
  const [selectedCard, setSelectedCard] = useState<FlowCardItem | null>(null);

  return (
    <section id="journey" className="relative py-24 bg-[#E5E2DA] border-y border-[#D0CCC2] overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-[#0F172A]/5_1px,transparent_1px] [background-size:24px_24px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-widest mb-3 shadow-xs border border-[#0F766E]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Flow Animation</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0F172A]">
              The Journey & Milestones Flow
            </h2>
            <p className="text-sm text-[#475569] font-normal max-w-xl mt-2 leading-relaxed">
              Explore Dr. Naresh Bhatta's leadership evolution across clinical practice, youth mentorship, and public service through connected animated nodes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:9851423026"
              className="px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0D9488] transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Call 9851423026</span>
            </a>
          </div>
        </div>

        {/* Interactive Desktop Flow Canvas with Curved Path */}
        <div className="relative pt-8 pb-12">
          {/* SVG Connecting S-Curve Path */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 650" fill="none" preserveAspectRatio="none">
              {/* Main Thick Background S-Curve Path */}
              <path
                d="M 100 180 C 300 180, 300 480, 500 480 C 700 480, 700 180, 900 180 C 1050 180, 1100 380, 1150 380"
                stroke="#CBD5E1"
                strokeWidth="3"
                strokeDasharray="6 6"
              />

              {/* Animated Solid Flowing Line */}
              <motion.path
                d="M 100 180 C 300 180, 300 480, 500 480 C 700 480, 700 180, 900 180 C 1050 180, 1100 380, 1150 380"
                stroke="#0F172A"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Connected Teal Node Circles along the curve */}
              {/* Node 1 */}
              <circle cx="100" cy="180" r="9" fill="#0D9488" stroke="#0F172A" strokeWidth="3" />
              <circle cx="100" cy="180" r="16" fill="none" stroke="#0D9488" strokeWidth="2" className="animate-ping opacity-30" />

              {/* Node 2 */}
              <circle cx="500" cy="480" r="9" fill="#0D9488" stroke="#0F172A" strokeWidth="3" />
              <circle cx="500" cy="480" r="16" fill="none" stroke="#0D9488" strokeWidth="2" className="animate-ping opacity-30" />

              {/* Node 3 */}
              <circle cx="900" cy="180" r="9" fill="#0D9488" stroke="#0F172A" strokeWidth="3" />
              <circle cx="900" cy="180" r="16" fill="none" stroke="#0D9488" strokeWidth="2" className="animate-ping opacity-30" />

              {/* Node 4 */}
              <circle cx="1150" cy="380" r="9" fill="#0D9488" stroke="#0F172A" strokeWidth="3" />
            </svg>
          </div>

          {/* Cards Grid Laid out along the S-Curve Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {flowCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex flex-col justify-between rounded-3xl p-7 bg-white border border-[#E2E8F0] hover:border-[#0D9488] transition-all duration-300 shadow-md hover:shadow-xl group relative overflow-hidden ${
                  card.position === 'bottom' ? 'lg:translate-y-24' : ''
                }`}
              >
                {/* Accent Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Big Year Badge Display */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-6xl sm:text-7xl font-bold tracking-tighter text-[#0F172A] group-hover:text-[#0D9488] transition-colors leading-none">
                      {card.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#0D9488] text-white font-mono text-[11px] font-bold uppercase tracking-wider border border-[#0F766E]">
                      {card.fullYear}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-normal mb-6">
                    {card.subtitle}
                  </p>
                </div>

                {/* Footer Tag, Handle, and Action Button */}
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-[#0F172A]/20 shrink-0 bg-[#FAF9F5]">
                      <img src={card.avatar} alt={card.handle} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#0F172A] font-mono leading-none">
                        {card.handle}
                      </div>
                      <div className="text-[10px] text-[#64748B]">
                        {card.timestamp}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCard(card)}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF9F5] hover:bg-[#0D9488] hover:text-white text-[#0F172A] text-[11px] font-bold uppercase tracking-wider transition-all border border-[#E2E8F0] hover:border-[#0D9488] shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>Read story</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal / Drawer for Expanded Story Details */}
        <AnimatePresence>
          {selectedCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-[#FAF9F5] border border-[#E2E8F0] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-[#E5E2DA] hover:bg-[#0F172A] hover:text-[#FAF9F5] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-5xl font-bold text-[#0F172A]">
                    {selectedCard.year}
                  </span>
                  <div>
                    <div className="px-3 py-1 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider inline-block">
                      {selectedCard.fullYear} · {selectedCard.handleTag}
                    </div>
                    <div className="text-xs text-[#64748B] font-mono mt-1">
                      {selectedCard.handle}
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
                  {selectedCard.title}
                </h3>

                {/* Quote Block */}
                <div className="p-4 rounded-xl bg-[#0D9488]/10 border border-[#0D9488]/30 text-[#0F172A] font-serif italic text-sm mb-6">
                  {selectedCard.quote}
                </div>

                {/* Detailed Highlights */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                    Key Achievements & Impact
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#334155] leading-relaxed">
                    {selectedCard.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Footer */}
                <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#2B2B2B]/70 font-medium">
                    Dr. Naresh Bhatta · <a href="tel:9851423026" className="font-bold underline text-[#0F172A]">9851423026</a>
                  </div>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0F172A] text-[#FAF9F5] font-bold text-xs uppercase tracking-wider hover:bg-[#0F766E] transition-colors cursor-pointer"
                  >
                    Close Story
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
