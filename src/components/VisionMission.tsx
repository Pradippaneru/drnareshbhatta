import React from 'react';
import { motion } from 'motion/react';
import { POLICY_PRIORITIES, LEADERSHIP_PHILOSOPHY, PERSONAL_VALUES } from '../data/biographyData';
import { PersonalValuesDiagram } from './PersonalValuesDiagram';

const NumberBadge: React.FC<{ num: number }> = ({ num }) => (
  <div className="w-16 h-16 rounded-full border-2 border-[#1E3A8A] flex items-center justify-center relative mb-5 mx-auto shrink-0 bg-white">
    <div className="w-[50px] h-[50px] rounded-full border border-dashed border-[#1E3A8A]/50 flex items-center justify-center">
      <span className="font-serif text-2xl font-bold text-[#1E3A8A] leading-none">
        {num}
      </span>
    </div>
  </div>
);

export const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="py-20 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#E2E8F0] relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#DC2626] mb-2 font-mono">
            Policy Platform & Philosophy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
            Policy Agenda & Vision
          </h2>
          <div className="w-16 h-0.5 bg-[#DC2626] mt-3 mb-2 rounded-full"></div>
          <p className="text-base text-[#475569] font-normal max-w-2xl leading-relaxed">
            A concrete platform built on outcomes: linking 15 policy priorities, pragmatic governance, 7 leadership principles, and our ultimate vision for a new Nepal.
          </p>
        </div>

        {/* Quick Nav Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="#policy-priorities"
            className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#0F172A] hover:text-white text-[#0F172A] text-xs font-semibold tracking-wider transition-all border border-[#E2E8F0] shadow-xs"
          >
            15 Policy Priorities
          </a>
          <a
            href="#personal-values"
            className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#0F172A] hover:text-white text-[#0F172A] text-xs font-semibold tracking-wider transition-all border border-[#E2E8F0] shadow-xs"
          >
            Personal Values
          </a>
          <a
            href="#pragmatic-nationalism"
            className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#0F172A] hover:text-white text-[#0F172A] text-xs font-semibold tracking-wider transition-all border border-[#E2E8F0] shadow-xs"
          >
            Philosophy & 7 Principles
          </a>
          <a
            href="#vision-statement"
            className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#0F172A] hover:text-white text-[#0F172A] text-xs font-semibold tracking-wider transition-all border border-[#E2E8F0] shadow-xs"
          >
            Vision for a New Nepal
          </a>
        </div>
      </div>

      {/* Main Sections Stack in PDF Story Sequence */}
      <div className="space-y-24">

        {/* SECTION 8: 15 POLICY PRIORITIES */}
        <div id="policy-priorities" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-[#DC2626] font-semibold mb-2">
              Policy Priorities
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              15 Policy Priorities
            </h3>
            <p className="text-sm sm:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              A platform built on outcomes, not ideology. Every policy is judged on one question: does it improve the lives of the Nepali people?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POLICY_PRIORITIES.map((priority, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full border border-[#1E3A8A] flex items-center justify-center shrink-0 text-[#1E3A8A] font-serif font-bold text-sm bg-[#FAF8F5]">
                  {idx + 1}
                </div>
                <div className="text-sm sm:text-base font-serif font-semibold text-[#0F172A] leading-snug pt-1">
                  {priority}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PERSONAL VALUES RADIAL DIAGRAM SECTION */}
        <PersonalValuesDiagram />

        {/* SECTION 9: PHILOSOPHY — PRAGMATIC NATIONALISM & 7 PRINCIPLES */}
        <div id="pragmatic-nationalism" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-[#DC2626] font-semibold mb-2">
              Political Philosophy
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Pragmatic Nationalism & 7 Principles
            </h3>
            <p className="text-sm sm:text-base text-[#475569] font-normal mt-2 leading-relaxed">
              Judged by outcomes, not ideology. Evidence-based governance combining economic freedom, strong institutions, and national stewardship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            {/* Pragmatic Nationalism Detail Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-[#DC2626] font-semibold mb-2">
                  Political Philosophy
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
                  Pragmatic Governance
                </h4>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal mb-6">
                  {LEADERSHIP_PHILOSOPHY.pragmaticNationalism}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E2E8F0] text-[#0F172A]">
                <div className="text-[11px] uppercase tracking-wider text-[#DC2626] font-bold mb-1">
                  Core Motto
                </div>
                <div className="font-serif text-base sm:text-lg italic font-normal text-[#0F172A]">
                  "{LEADERSHIP_PHILOSOPHY.leadershipMotto}"
                </div>
              </div>
            </motion.div>

            {/* Personal Values Badge Cloud Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-[#DC2626] font-semibold mb-2">
                  Ethical Values
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#0F172A] mb-6">
                  Foundational Standards
                </h4>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_VALUES.map((val, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] text-[#0F172A] text-xs font-medium border border-[#E2E8F0]"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-[#E2E8F0] pt-6 space-y-3">
                <div className="text-xs sm:text-sm font-serif italic text-[#475569]">
                  "{LEADERSHIP_PHILOSOPHY.quotes[0]}"
                </div>
                <div className="text-xs sm:text-sm font-serif italic text-[#475569]">
                  "{LEADERSHIP_PHILOSOPHY.quotes[1]}"
                </div>
              </div>
            </motion.div>
          </div>

          {/* 7 Principles Cards with Double-Ring Number Badges */}
          <div id="leadership-principles" className="scroll-mt-24">
            <h4 className="font-serif text-2xl font-bold text-[#0F172A] mb-6 text-center">
              7 Principles of Leadership
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {LEADERSHIP_PHILOSOPHY.principles.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Double-Ring Number Circle */}
                  <NumberBadge num={idx + 1} />

                  {/* Title */}
                  <h4 className="font-serif text-2xl font-bold text-[#0F172A] mb-3 leading-tight">
                    {principle.title}
                  </h4>

                  {/* Body Text */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 10: A VISION FOR A NEW NEPAL — THE FUTURE HE'S PAINTING */}
        <div id="vision-statement" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-2xl bg-white text-[#0F172A] shadow-md relative overflow-hidden border border-[#E2E8F0]"
          >
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] text-[#DC2626] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider mb-6">
                A Vision for a New Nepal
              </div>

              <div className="space-y-6 text-[#334155] font-serif text-lg sm:text-xl leading-relaxed">
                <p className="font-normal text-[#0F172A]">
                  Dr. Bhatta envisions a Nepal where young people no longer leave their homeland because opportunity exists at home; where farmers prosper through modern agriculture; where industries manufacture products proudly bearing the label <span className="font-bold text-[#1E3A8A] bg-[#1E3A8A]/5 px-2 py-0.5 rounded">"Made in Nepal"</span>; where every child receives quality education regardless of background; where every family can access quality healthcare without financial hardship; and where honest work, innovation, and integrity are rewarded.
                </p>

                <p className="font-normal text-[#1E293B]">
                  He believes Nepal can become one of Asia's most dynamic economies by embracing entrepreneurship, industrialization, hydropower, tourism, technology, scientific research, and good governance. Economic growth must create opportunity in every province and improve the lives of ordinary citizens.
                </p>

                <p className="font-medium text-[#0F172A] border-l-4 border-[#DC2626] pl-5 py-1 bg-[#FAF8F5] rounded-r-lg">
                  His vision is not simply to increase national wealth, but to ensure that prosperity reaches villages and cities alike, strengthening families, expanding opportunity, and restoring confidence in the future.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E8F0] mt-8 pt-6 text-xs text-[#475569]">
                <div className="font-semibold text-[#0F172A]">
                  Dr. Naresh Bhatta <span className="font-normal text-[#64748B]">· Public Policy Reformer & Physician</span>
                </div>
                <div className="font-mono text-[#DC2626] font-bold uppercase tracking-wider">
                  Results Over Rhetoric · Service Over Power
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};



