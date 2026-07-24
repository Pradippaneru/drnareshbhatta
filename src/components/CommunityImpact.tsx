import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Hospital, GraduationCap, Mic, Heart, MapPin, ArrowUpRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CounterProps> = ({ end, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = Math.ceil(end / steps);
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const CommunityImpact: React.FC = () => {
  const { impactStats } = useContent();
  return (
    <section id="impact" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-3 flex items-center gap-2">
          <span className="w-8 h-px bg-[#2D3B4E]"></span>
          <span>Section 05 · Measured Change</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#171717] tracking-tight">
          Community Impact in Numbers
        </h2>
        <p className="text-base text-[#2B2B2B]/80 font-light mt-2">
          Real-world outcomes generated through rural free healthcare camps, student leadership workshops, and youth disaster relief taskforces.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {impactStats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-[#FAFAF8] border border-[#D7D7D7] hover:border-[#C8A96A] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-xs uppercase tracking-widest text-[#2D3B4E] font-semibold mb-2">
                {stat.label}
              </div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#171717] my-3">
                <CountUp end={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-[#2B2B2B]/80 font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
            <div className="mt-6 border-t border-[#D7D7D7]/60 pt-3 text-[10px] uppercase tracking-widest text-[#C8A96A] font-bold">
              Verified Metric
            </div>
          </motion.div>
        ))}
      </div>

      {/* Documentary Photo Feature Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-[#171717] border border-[#D7D7D7] p-8 sm:p-12 text-[#F8F6F2]">
        <img
          src="/src/assets/images/medical_camp_impact_1784881905195.jpg"
          alt="Rural Health Camp Impact"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A96A] text-[#171717] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Sylhet & Sunamganj Rural Outreach</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            “When medicine leaves the hospital walls, hope returns to the villages.”
          </h3>
          <p className="text-sm text-[#F8F6F2]/80 leading-relaxed font-light">
            Through portable electrocardiograms, digital glucose monitors, and volunteer student doctors, our team delivers complete diagnostic evaluations and 30-day medication packs to elder villagers without travel burden.
          </p>
        </div>
      </div>
    </section>
  );
};
