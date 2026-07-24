import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, ShieldCheck, ExternalLink } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const AcademicJourney: React.FC = () => {
  const { academicRecords } = useContent();
  return (
    <section id="academic" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-3 flex items-center gap-2">
          <span className="w-8 h-px bg-[#2D3B4E]"></span>
          <span>Section 04 · Academic Rigor</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
          Academic Journey & Honors
        </h2>
        <p className="text-base text-[#2B2B2B]/80 font-light mt-2">
          Clinical medical qualifications, research publications, executive leadership fellowships at NSU, and national awards.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {academicRecords.map((record, idx) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] hover:border-[#C8A96A] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2D3B4E] px-3 py-1 rounded-full bg-[#2D3B4E]/10">
                  {record.year}
                </span>
                {record.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#171717] px-2.5 py-0.5 rounded bg-[#C8A96A]/20 border border-[#C8A96A]/40">
                    {record.badge}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2 leading-snug">
                {record.title}
              </h3>

              <div className="text-xs uppercase tracking-wider text-[#2D3B4E] font-medium mb-4 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#C8A96A]" />
                <span>{record.institution}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed font-light">
                {record.details}
              </p>
            </div>

            <div className="mt-6 border-t border-[#D7D7D7]/60 pt-4 text-[10px] uppercase tracking-widest text-[#2B2B2B]/60 font-medium">
              Verified Credential · {record.type.replace('_', ' ').toUpperCase()}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
