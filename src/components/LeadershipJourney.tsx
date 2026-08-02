import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Megaphone, GraduationCap, ArrowUpRight } from 'lucide-react';

export const LeadershipJourney: React.FC = () => {
  const leadershipItems = [
    {
      role: "Past President",
      organization: "Kathmandu University Student Welfare Council",
      tag: "University Governance",
      icon: <GraduationCap className="w-5 h-5 text-[#1E3A8A]" />,
      index: "01",
    },
    {
      role: "Past President",
      organization: "Nepal Doctors Network",
      tag: "Healthcare Advocacy",
      icon: <Award className="w-5 h-5 text-[#1E3A8A]" />,
      index: "02",
    },
    {
      role: "Past President",
      organization: "Federation of Nepalese Medical Students",
      tag: "National Medical Body",
      icon: <Users className="w-5 h-5 text-[#1E3A8A]" />,
      index: "03",
    },
    {
      role: "Coordinator & Spokesperson",
      organization: "Medical Student Struggle Committee",
      tag: "National Reform Movement",
      icon: <Megaphone className="w-5 h-5 text-[#DC2626]" />,
      index: "04",
    },
    {
      role: "National Student Leader",
      organization: "Engineering Education Fee and Quality Movement",
      tag: "Academic Reform",
      icon: <ShieldCheck className="w-5 h-5 text-[#1E3A8A]" />,
      index: "05",
    },
  ];

  return (
    <section id="leadership" className="py-20 sm:py-28 bg-[#FAF8F5] border-y border-[#E2E8F0] relative overflow-hidden">
      {/* Background Graphical Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#DC2626] font-mono font-bold mb-3 flex items-center gap-2">
            <span className="w-6 h-px bg-[#DC2626]"></span>
            <span>Public Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
            Institutional Leadership & Service
          </h2>
          <div className="w-16 h-0.5 bg-[#DC2626] mt-3 mb-2 rounded-full"></div>
          <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
            Elected stewardship across national medical networks, student welfare councils, and public education reform movements.
          </p>
        </div>

        {/* Minimalist Graphical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {leadershipItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#1E3A8A] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Corner Graphic Marker */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FAF8F5] to-transparent pointer-events-none rounded-bl-full border-b border-l border-[#E2E8F0]/50 group-hover:from-[#1E3A8A]/5 transition-colors"></div>

              <div>
                {/* Header row: Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#1E3A8A]/5 group-hover:border-[#1E3A8A]/30 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748B]">
                      {item.tag}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#DC2626] bg-[#DC2626]/5 px-2.5 py-1 rounded-md border border-[#DC2626]/10">
                    {item.index}
                  </span>
                </div>

                {/* Role Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#0F172A] text-white text-xs font-mono font-semibold uppercase tracking-wider mb-3 group-hover:bg-[#1E3A8A] transition-colors">
                  {item.role}
                </div>

                {/* Organization Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug tracking-tight mb-4 group-hover:text-[#1E3A8A] transition-colors">
                  {item.organization}
                </h3>
              </div>

              {/* Minimal Bottom Graphical Divider */}
              <div className="pt-4 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B] font-mono">
                <span>Elected Public Service</span>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#1E3A8A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



