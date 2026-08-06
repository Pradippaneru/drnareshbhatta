import React from 'react';
import { motion } from 'motion/react';

export const AcademicJourney: React.FC = () => {
  const educationList = [
    {
      title: "Bachelor of Laws (LLB) — ongoing",
      description: "Constitutional law, governance, legislative reform, and public policy.",
    },
    {
      title: "MBBS",
      description: "Bachelor of Medicine, Bachelor of Surgery.",
    },
    {
      title: "Higher Secondary (Science)",
      description: "National Top 20.",
    },
    {
      title: "SLC",
      description: "Top 3 in Sudurpashchim Region.",
    },
  ];

  const honoursList = [
    "National Science Olympiad Winner",
    "District Topper, Class 8",
    "Debate & Public Speaking Awards",
    "Mathematics & Science Competitions",
    "National Table Tennis Player — 5th National Games",
  ];

  return (
    <section id="academic" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E2E8F0] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Top Eyebrow Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-px bg-[#B9832F]"></span>
          <span className="font-mono text-xs font-semibold tracking-widest text-[#B9832F] uppercase">
            EDUCATION & DISTINCTIONS
          </span>
        </div>

        {/* Main Title Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E232A] tracking-tight mb-14 sm:mb-20">
          Education, Honours & Distinctions
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — EDUCATION */}
          <div className="lg:col-span-7">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#64748B] mb-6 pb-2 border-b border-[#E2E8F0]">
              EDUCATION
            </h3>

            <div className="divide-y divide-[#E2E8F0]">
              {educationList.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="py-5 sm:py-6 flex items-start gap-3.5 group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#8B261D] shrink-0 mt-2.5 group-hover:scale-125 transition-transform"></span>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1E232A] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#525B68] font-normal leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column — HONOURS & DISTINCTIONS */}
          <div className="lg:col-span-5">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#64748B] mb-6 pb-2 border-b border-[#E2E8F0]">
              HONOURS & DISTINCTIONS
            </h3>

            <div className="flex flex-wrap gap-3 sm:gap-3.5 pt-2">
              {honoursList.map((honour, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="px-5 py-3 rounded-full bg-[#EAE5D9] hover:bg-[#1E3A8A] text-[#1E232A] hover:text-white transition-all duration-300 font-sans text-xs sm:text-sm font-medium tracking-tight shadow-2xs hover:shadow-md cursor-default"
                >
                  {honour}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
