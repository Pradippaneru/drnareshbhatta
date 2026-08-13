import React, { useState } from 'react';
import { motion } from 'motion/react';

export interface ValueItem {
  id: string;
  name: string;
  color: string;
  lightBg: string;
  description: string;
}

export const PERSONAL_VALUES_DATA: ValueItem[] = [
  {
    id: 'patriotism',
    name: 'Patriotism',
    color: '#DC2626',
    lightBg: '#FEF2F2',
    description: 'Sovereign commitment and dedication to Nepal’s honor, self-reliance, and national dignity.',
  },
  {
    id: 'integrity',
    name: 'Integrity',
    color: '#1E3A8A',
    lightBg: '#EFF6FF',
    description: 'Uncompromising ethical standards, honesty, and moral truth in all public and private duties.',
  },
  {
    id: 'accountability',
    name: 'Accountability',
    color: '#059669',
    lightBg: '#ECFDF5',
    description: 'Direct answerability to the sovereign citizens of Nepal for every decision and policy outcome.',
  },
  {
    id: 'meritocracy',
    name: 'Meritocracy',
    color: '#D97706',
    lightBg: '#FFFBEB',
    description: 'Rewarding talent, hard work, competence, and character over political patronage or privilege.',
  },
  {
    id: 'compassion',
    name: 'Compassion',
    color: '#E11D48',
    lightBg: '#FFF1F2',
    description: 'Empathetic public stewardship centered on healing the vulnerable, rural, and underserved.',
  },
  {
    id: 'courage',
    name: 'Courage',
    color: '#EA580C',
    lightBg: '#FFEDD5',
    description: 'Standing firm for constitutional justice and institutional reform despite adversity or pressure.',
  },
  {
    id: 'transparency',
    name: 'Transparency',
    color: '#0284C7',
    lightBg: '#F0F9FF',
    description: 'Open governance, digital clarity, and clear public oversight without hidden agendas.',
  },
  {
    id: 'national-unity',
    name: 'National Unity',
    color: '#7C3AED',
    lightBg: '#F5F3FF',
    description: 'Bridging geographic, social, and economic divides to build one cohesive, proud nation.',
  },
  {
    id: 'service-above-self',
    name: 'Service Above Self',
    color: '#0D9488',
    lightBg: '#CCFBF1',
    description: 'Placing the collective welfare of the nation and citizens ahead of personal or partisan gain.',
  },
  {
    id: 'evidence-based-policy',
    name: 'Evidence-Based Policy',
    color: '#4F46E5',
    lightBg: '#EEF2FF',
    description: 'Relying on empirical data, scientific rigor, and proven results rather than unverified rhetoric.',
  },
  {
    id: 'pragmatic',
    name: 'Pragmatic',
    color: '#B9832F',
    lightBg: '#FEFCE8',
    description: 'Focusing on practical, effective solutions that produce measurable improvements in people’s lives.',
  },
];

export const PersonalValuesDiagram: React.FC = () => {
  const [activeValue, setActiveValue] = useState<ValueItem>(PERSONAL_VALUES_DATA[0]);

  return (
    <div id="personal-values" className="scroll-mt-24 pt-8 pb-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <div className="text-xs uppercase tracking-widest text-[#DC2626] font-mono font-bold mb-2 flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-[#DC2626]"></span>
          <span>Core Ethical Foundation</span>
          <span className="w-6 h-px bg-[#DC2626]"></span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
          Personal Values
        </h3>
        <p className="text-sm sm:text-base text-[#475569] font-normal mt-3 leading-relaxed">
          The 11 foundational ethical standards guiding Dr. Naresh Bhatta's medical duty, public governance, and national reform.
        </p>
      </motion.div>

      {/* Main Reference-Style Hub-and-Spoke Radial Diagram on Clean Light Canvas */}
      <div className="relative max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E2E8F0] shadow-xs overflow-hidden">
        {/* Large Screen Radial Visual Layout */}
        <div className="hidden lg:block relative min-h-[620px] flex items-center justify-center my-2">
          {/* SVG Connecting Spokes Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 600">
            {PERSONAL_VALUES_DATA.map((val, idx) => {
              const total = PERSONAL_VALUES_DATA.length;
              const angle = (idx * (2 * Math.PI)) / total - Math.PI / 2;
              const radius = 220;
              const centerX = 400;
              const centerY = 300;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              const isActive = activeValue.id === val.id;

              return (
                <line
                  key={val.id}
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke={isActive ? val.color : '#CBD5E1'}
                  strokeWidth={isActive ? '2.5' : '1.5'}
                  strokeDasharray={isActive ? 'none' : '3 3'}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Center Hub Circle */}
          <div className="relative z-10 w-48 h-48 rounded-full bg-white border-4 border-[#E2E8F0] p-2 flex items-center justify-center shadow-md">
            <div className="w-full h-full rounded-full border border-[#CBD5E1] bg-[#FAF8F5] flex flex-col items-center justify-center p-4 text-center z-10">
              <div className="font-serif font-bold text-lg text-[#0F172A] uppercase tracking-wider leading-tight">
                PERSONAL<br /><span className="text-[#1E3A8A]">VALUES</span>
              </div>
              <div className="text-[10px] font-mono text-[#64748B] mt-1.5 uppercase tracking-widest border-t border-[#E2E8F0] pt-1">
                11 Pillars
              </div>
            </div>
          </div>

          {/* Radial Outer Value Nodes (11 Nodes) — Pure Text Inside Clean Circles */}
          {PERSONAL_VALUES_DATA.map((val, idx) => {
            const total = PERSONAL_VALUES_DATA.length;
            const angle = (idx * (2 * Math.PI)) / total - Math.PI / 2;
            const radius = 220;
            const centerX = 400;
            const centerY = 300;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const isActive = activeValue.id === val.id;

            return (
              <button
                key={val.id}
                onClick={() => setActiveValue(val)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 rounded-full flex items-center justify-center p-3 text-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${
                  isActive
                    ? 'bg-white shadow-xl scale-105 z-30 border-2'
                    : 'bg-white shadow-xs hover:shadow-md border border-[#E2E8F0]'
                }`}
                style={{
                  borderColor: isActive ? val.color : '#E2E8F0',
                  left: `${(x / 800) * 100}%`,
                  top: `${(y / 600) * 100}%`,
                }}
              >
                {/* Clean Text Label inside Circle */}
                <span className={`text-[10.5px] font-mono font-bold uppercase leading-tight tracking-tight text-center ${
                  isActive ? 'text-[#0F172A]' : 'text-[#334155]'
                }`}>
                  {val.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Value Explanation Card below the Wheel */}
        <div className="mt-6">
          <motion.div
            key={activeValue.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left z-20 relative"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-[#E2E8F0] font-serif font-bold text-lg"
              style={{ backgroundColor: activeValue.lightBg, color: activeValue.color }}
            >
              {activeValue.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-1">
                <span className="font-serif text-xl font-bold text-[#0F172A] tracking-tight">
                  {activeValue.name}
                </span>
                <span 
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
                  style={{ backgroundColor: activeValue.lightBg, color: activeValue.color }}
                >
                  Ethical Pillar
                </span>
              </div>
              <p className="text-sm text-[#475569] font-normal leading-relaxed">
                {activeValue.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Responsive Grid Layout (< lg) */}
        <div className="block lg:hidden mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PERSONAL_VALUES_DATA.map((val) => {
              const isActive = activeValue.id === val.id;

              return (
                <button
                  key={val.id}
                  onClick={() => setActiveValue(val)}
                  className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-center min-h-[90px] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0F172A] shadow-md border-2 border-[#1E3A8A]'
                      : 'bg-white text-[#0F172A] border-[#E2E8F0] hover:border-[#CBD5E1]'
                  }`}
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-tight leading-snug">
                    {val.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
