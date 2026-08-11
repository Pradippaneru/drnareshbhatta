import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Stethoscope, Activity, Heart } from 'lucide-react';

export const NationalAchievements: React.FC = () => {
  const nationalAchievements = [
    {
      number: "01",
      meta: "Advocacy | Education Reform",
      title: "Medical Education Fee Cut",
      detailTitle: "NPR 6M → 4M Fee Reduction",
      description: "Led nationwide advocacy that contributed to reducing undergraduate medical education fees from ~NPR 6M to ~NPR 4M, saving thousands of families.",
      badge: "Key Breakthrough"
    },
    {
      number: "02",
      meta: "Governance | Academic Accountability",
      title: "Education Reform & Rights",
      detailTitle: "Kathmandu University & State Colleges",
      description: "Spearheaded student campaigns promoting affordability, academic quality, and institutional transparency across medical and engineering colleges.",
      badge: "Verified Reform"
    },
    {
      number: "03",
      meta: "Healthcare | Frontline Safety",
      title: "Healthcare Worker Protection",
      detailTitle: "On-Duty Doctor Protection Acts",
      description: "Advocated for stronger legal protections and emergency safety acts against violence directed toward doctors and healthcare workers.",
      badge: "Legal Protection"
    },
    {
      number: "04",
      meta: "Civic Rights | Democracy",
      title: "Constitutional & Democratic Advocacy",
      detailTitle: "National Youth & Civic Movement",
      description: "Participated in peaceful civic movements supporting constitutional governance, responsible public leadership, and democratic rights.",
      badge: "Civic Movement"
    },
    {
      number: "05",
      meta: "Justice | Institutional Reform",
      title: "Public Justice & Transparency",
      detailTitle: "Nirmala Panta & Public Rights Campaigns",
      description: "Actively supported national campaigns seeking justice, transparency, and institutional accountability in major public interest issues.",
      badge: "Public Justice"
    },
  ];

  return (
    <section id="achievements" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-[#092CB0] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-[#1A41DB]">
        {/* Subtle Dotted Map Overlay Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Radial Center Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,90,240,0.4)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
              National Achievements
            </h2>
            <div className="w-16 h-1 bg-white/80 mx-auto rounded-full my-4"></div>
            <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed">
              Tangible legislative, educational, and institutional breakthroughs for Nepal.
            </p>
          </div>

          {/* List of Rows */}
          <div className="divide-y divide-white/20 border-t border-b border-white/20">
            {nationalAchievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                {/* Left: Number + Main Info */}
                <div className="flex items-start gap-6 sm:gap-10 max-w-3xl">
                  {/* Big Red Serif Number */}
                  <span className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#FF2D2D] tracking-tight shrink-0 leading-none">
                    {item.number}
                  </span>

                  <div>
                    {/* Meta Category */}
                    <div className="text-xs font-mono font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                      {item.meta}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug group-hover:text-white/90 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mt-2 max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Key Details & Pill Action */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto justify-between md:justify-end shrink-0 pt-2 md:pt-0">
                  <div className="text-left md:text-right">
                    <div className="text-sm sm:text-base font-bold text-white">
                      {item.detailTitle}
                    </div>
                    <div className="text-xs text-white/70 font-mono mt-0.5">
                      Verified Breakthrough
                    </div>
                  </div>

                  <button className="px-6 py-2.5 rounded-full border-2 border-white text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#092CB0] transition-all duration-300 shrink-0 cursor-pointer">
                    {item.badge}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Red Primary CTA Button */}
          <div className="mt-14 text-center">
            <button 
              onClick={() => {
                const elem = document.getElementById('contact');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-sans font-bold text-sm sm:text-base tracking-wide shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Support Dr. Naresh Bhatta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HumanitarianLeadership: React.FC = () => {
  const humanitarianMissions = [
    {
      title: "COVID-19 Response",
      description: "Served on the frontline during the COVID-19 pandemic, contributing to emergency healthcare delivery and public health efforts.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
      icon: <Stethoscope className="w-5 h-5 text-white" />
    },
    {
      title: "Jajarkot Earthquake (2023)",
      description: "Participated in volunteer medical relief missions providing emergency healthcare and humanitarian assistance.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      icon: <Activity className="w-5 h-5 text-white" />
    },
    {
      title: "Gorkha Earthquake (2015)",
      description: "Contributed to emergency medical response and relief efforts for affected communities.",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
      icon: <Heart className="w-5 h-5 text-white" />
    },
    {
      title: "Community Service",
      description: "Organized and participated in more than 100 free health camps, extending healthcare services to rural and underserved populations throughout Nepal.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      icon: <HeartHandshake className="w-5 h-5 text-white" />
    },
  ];

  return (
    <section id="humanitarian" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      <div className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-widest text-[#DC2626] font-bold mb-3 flex items-center gap-2">
          <span className="w-8 h-px bg-[#DC2626]"></span>
          <span>Crisis Relief</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#0F172A] tracking-tight">
          Humanitarian Leadership
        </h2>
        <p className="text-base text-[#475569] font-light mt-3 leading-relaxed">
          Frontline medical service during major national crises, natural disasters, and rural community health missions.
        </p>
      </div>

      {/* Large Image Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {humanitarianMissions.map((mission, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-[#0F172A] text-white shadow-xl min-h-[380px] flex flex-col justify-end p-8 border border-[#1E293B]"
          >
            {/* Background Image with Overlay */}
            <img
              src={mission.image}
              alt={mission.title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent"></div>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DC2626] w-fit text-xs font-bold uppercase tracking-wider">
                {mission.icon}
                <span>Frontline Mission</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {mission.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light max-w-lg">
                {mission.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const CommunityImpact: React.FC = () => {
  return (
    <div id="impact" className="space-y-24">
      <NationalAchievements />
      <HumanitarianLeadership />
    </div>
  );
};

