import React from 'react';
import { motion } from 'motion/react';

const NumberBadge: React.FC<{ num: number }> = ({ num }) => (
  <div className="w-16 h-16 rounded-full border-2 border-[#1E3A8A] flex items-center justify-center relative mb-6 mx-auto shrink-0 bg-white">
    <div className="w-[50px] h-[50px] rounded-full border border-dashed border-[#1E3A8A]/50 flex items-center justify-center">
      <span className="font-serif text-2xl font-bold text-[#1E3A8A] leading-none">
        {num}
      </span>
    </div>
  </div>
);

export const NationalVision: React.FC = () => {
  const visionItems = [
    {
      title: 'Prosperous Nepal',
      description:
        'Build a high-income Nepal through capitalism, entrepreneurship, industrialization, innovation, infrastructure development, tourism, hydropower, agriculture modernization, and technology.',
    },
    {
      title: 'Participatory Democracy',
      description:
        'Protect constitutional democracy, strengthen democratic institutions, uphold the rule of law, and ensure accountable governance.',
    },
    {
      title: 'Good Governance',
      description:
        'Create an efficient, corruption-free government that serves citizens with transparency, digital transformation, and professional public administration.',
    },
    {
      title: 'Human Development',
      description:
        'Guarantee quality healthcare and education as fundamental national priorities while expanding opportunities for every Nepali regardless of geography or economic status.',
    },
    {
      title: 'National Sovereignty',
      description:
        'Advance an independent foreign policy that safeguards Nepal\'s sovereignty while expanding strategic economic and diplomatic partnerships.',
    },
  ];

  return (
    <section id="vision" className="w-full bg-[#FAF8F5] text-[#0F172A] py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 relative overflow-hidden border-t border-b border-[#0F172A]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-2"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] uppercase">
            NATIONAL VISION
          </h2>
          <div className="w-16 h-0.5 bg-[#DC2626] mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* 5 Pillars Grid matching image sample design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch justify-center">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Double-ring Number Badge */}
              <NumberBadge num={index + 1} />

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-3 leading-tight">
                {item.title}
              </h3>

              {/* Body Text */}
              <p className="text-[#475569] text-xs sm:text-sm font-normal leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


