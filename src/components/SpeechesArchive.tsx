import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Play, Calendar, MapPin, Clock, Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { Speech, NavigationTab } from '../types';

interface SpeechesArchiveProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const SpeechesArchive: React.FC<SpeechesArchiveProps> = ({ onNavigate }) => {
  const { speeches } = useContent();
  const [activeSpeech, setActiveSpeech] = useState<Speech | null>(null);

  return (
    <section id="speeches" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D3B4E]"></span>
            <span>Section 08 · Public Advocacy</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
            Speeches & Keynotes
          </h2>
          <p className="text-base text-[#2B2B2B]/80 font-light mt-2 max-w-xl">
            Keynote addresses delivered at university convocations, national youth summits, and medical ethics forums.
          </p>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 bg-[#171717] text-[#F8F6F2] text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#2D3B4E] transition-colors flex items-center gap-2 shrink-0"
        >
          <span>Invite for Keynote Speech</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Featured Photo Banner for Speeches */}
      <div className="relative rounded-2xl overflow-hidden bg-[#171717] mb-12 border border-[#D7D7D7]">
        <img
          src="/src/assets/images/youth_leadership_speech_1784881918435.jpg"
          alt="Dr. Naresh Bhatta Keynote Speech"
          referrerPolicy="no-referrer"
          className="w-full h-[320px] sm:h-[400px] object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent p-8 sm:p-12 flex flex-col justify-end text-[#F8F6F2]">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C8A96A] mb-2">
            Featured Keynote
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold max-w-2xl">
            “Your title gives you authority, but only your empathy grants you authentic influence.”
          </h3>
          <p className="text-xs text-[#F8F6F2]/80 mt-2">
            Delivered at National Youth Leadership Conclave · Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Speeches Cards List */}
      <div className="space-y-6">
        {speeches.map((speech, idx) => (
          <motion.div
            key={speech.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] hover:border-[#C8A96A] transition-all shadow-xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider font-semibold text-[#2D3B4E]">
                  <span className="px-3 py-1 rounded-full bg-[#2D3B4E]/10">
                    {speech.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C8A96A]" />
                    {speech.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A96A]" />
                    {speech.location}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717]">
                  {speech.title}
                </h3>

                <p className="font-serif italic text-base text-[#171717]/90 border-l-2 border-[#C8A96A] pl-4 py-1">
                  {speech.quote}
                </p>

                <p className="text-sm text-[#2B2B2B] leading-relaxed font-light">
                  {speech.summary}
                </p>
              </div>

              {/* Action Button */}
              <div className="shrink-0">
                <button
                  onClick={() => setActiveSpeech(speech)}
                  className="px-6 py-3 bg-[#FAFAF8] text-[#171717] border border-[#D7D7D7] hover:border-[#C8A96A] text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-[#F8F6F2] transition-colors flex items-center gap-2"
                >
                  <Mic className="w-4 h-4 text-[#C8A96A]" />
                  <span>Speech Key Takeaways</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Speech Detail Drawer Modal */}
      <AnimatePresence>
        {activeSpeech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#171717]/70 backdrop-blur-md p-6 flex items-center justify-center"
            onClick={() => setActiveSpeech(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAFAF8] border border-[#D7D7D7] rounded-2xl p-8 max-w-xl w-full shadow-2xl relative"
            >
              <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-2">
                {activeSpeech.event} · {activeSpeech.date}
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#171717] mb-3">
                {activeSpeech.title}
              </h3>
              <p className="font-serif italic text-lg text-[#2D3B4E] mb-6 border-l-2 border-[#C8A96A] pl-4">
                {activeSpeech.quote}
              </p>

              <div className="space-y-3 bg-[#F8F6F2] p-6 rounded-xl border border-[#D7D7D7] mb-6">
                <div className="text-xs uppercase tracking-widest font-bold text-[#171717]">
                  Key Takeaways
                </div>
                {activeSpeech.keyTakeaways.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#2B2B2B]">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveSpeech(null);
                    onNavigate('contact');
                  }}
                  className="px-5 py-2.5 bg-[#171717] text-[#F8F6F2] text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#2D3B4E] transition-colors"
                >
                  Request Keynote Recording
                </button>
                <button
                  onClick={() => setActiveSpeech(null)}
                  className="px-4 py-2 text-xs uppercase tracking-wider text-[#171717]/70 hover:text-[#171717]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
