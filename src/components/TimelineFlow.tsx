import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ChevronRight, GraduationCap, ShieldAlert, Award, HeartHandshake, Scale, Award as TrophyIcon } from 'lucide-react';

interface JourneyNode {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge?: string;
  photoText?: string;
  icon: React.ReactNode;
  details?: string[];
}

export const TimelineFlow: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<JourneyNode | null>(null);

  const journeyNodes: JourneyNode[] = [
    {
      id: "node-1",
      tag: "Base Camp — School Years",
      title: "Top 3 in the region",
      description: "Ranked among the Top 3 students in Sudurpashchim Region on the SLC; National Science Olympiad winner and district topper. Discipline started early.",
      badge: "SLC TOPPER",
      icon: <GraduationCap className="w-5 h-5 text-[#1E3A8A]" />,
      details: [
        "Ranked Top 3 in Sudurpashchim Province in the School Leaving Certificate (SLC) examination.",
        "National Science Olympiad Winner and District Topper in Class 8.",
        "Developed early competitive instinct, leadership discipline, and commitment to public academic excellence."
      ]
    },
    {
      id: "node-2",
      tag: "Higher Secondary",
      title: "National Top 20",
      description: "Ranked among the National Top 20 in Science — while representing Sudurpashchim Province in table tennis at the 5th National Games of Nepal.",
      badge: "TOP 20 SCIENCE",
      icon: <Award className="w-5 h-5 text-[#1E3A8A]" />,
      details: [
        "Achieved National Top 20 rank in Higher Secondary Science Education.",
        "Represented Sudurpashchim Province in table tennis at the 5th National Games of Nepal.",
        "Balanced rigorous academic excellence with provincial-level athletic championship competition."
      ]
    },
    {
      id: "node-3",
      tag: "Medical School",
      title: "MBBS",
      description: "Built a strong academic interest in physiology, public health, and healthcare leadership — the foundation for a career defined by service, not status.",
      badge: "MEDICAL DEGREE",
      icon: <HeartHandshake className="w-5 h-5 text-[#1E3A8A]" />,
      details: [
        "Earned Bachelor of Medicine, Bachelor of Surgery (MBBS) degree.",
        "Distinction in Physiology, Public Health, and Community Medicine.",
        "Initiated grassroots health camps and organized medical student welfare initiatives."
      ]
    },
    {
      id: "node-4",
      tag: "Student Leadership",
      title: "President, three times over",
      description: "Elected President of the Kathmandu University Student Welfare Council, the Federation of Nepalese Medical Students, and the Nepal Doctors Network. Coordinator & Spokesperson of the Medical Student Struggle Committee, and national student leader in the Engineering Education Fee and Quality Movement.",
      badge: "3x PRESIDENT",
      icon: <TrophyIcon className="w-5 h-5 text-[#DC2626]" />,
      details: [
        "Elected President of Kathmandu University Student Welfare Council.",
        "Elected President of Federation of Nepalese Medical Students & Nepal Doctors Network.",
        "Spokesperson & Coordinator for the Medical Student Struggle Committee.",
        "Key national leader in the Engineering Education Fee and Quality Movement."
      ]
    },
    {
      id: "node-5",
      tag: "Frontline Service",
      title: "COVID-19 & earthquake response",
      description: "Served on the frontline during the COVID-19 pandemic, and joined volunteer medical relief missions after the 2015 Gorkha and 2023 Jajarkot earthquakes.",
      badge: "HUMANITARIAN",
      icon: <ShieldAlert className="w-5 h-5 text-[#1E3A8A]" />,
      details: [
        "Continuous ICU and emergency ward shifts during COVID-19 pandemic waves.",
        "Volunteer medical responder in 2015 Gorkha Earthquake (7.8 magnitude).",
        "Field medical relief mission commander during the 2023 Jajarkot Earthquake."
      ]
    },
    {
      id: "node-6",
      tag: "Reform at National Scale",
      title: "NPR 6M → 4M",
      description: "Led the advocacy that helped cut undergraduate medical education fees roughly in half, and campaigned for stronger legal protection of healthcare workers.",
      badge: "NPR 2M FEE REDUCTION",
      icon: <Scale className="w-5 h-5 text-[#DC2626]" />,
      details: [
        "Successfully negotiated reducing undergraduate medical fees from ~NPR 6 Million to ~NPR 4 Million.",
        "Protected thousands of future medical students from predatory fee structures.",
        "Campaigned nationwide for legal protections against workplace violence for doctors and health workers."
      ]
    },
    {
      id: "node-7",
      tag: "Law & Governance",
      title: "LLB — ongoing",
      description: "Currently pursuing an LLB focused on constitutional law, governance, legislative reform, and public policy — the legal foundation for the next phase of national service.",
      badge: "PUBLIC POLICY",
      icon: <Scale className="w-5 h-5 text-[#1E3A8A]" />,
      details: [
        "Pursuing Bachelor of Laws (LLB) specializing in Constitutional Law and Legislative Drafting.",
        "Building actionable public policy frameworks for judicial reform, anti-corruption, and meritocracy.",
        "Blending clinical medical background with constitutional expertise for national governance."
      ]
    }
  ];

  return (
    <section id="journey" className="relative py-24 sm:py-28 bg-[#FAF8F5] text-[#0F172A] overflow-hidden border-y border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-xs tracking-widest text-[#DC2626] uppercase font-bold mb-3 flex items-center gap-2">
            <span className="w-5 h-px bg-[#DC2626]"></span>
            <span>The Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A]">
            From classrooms to the frontlines of reform.
          </h2>
          <p className="mt-4 text-base text-[#475569] font-normal leading-relaxed">
            Every stage of this ascent shaped one conviction: leadership means responsibility, not privilege.
          </p>
        </div>

        {/* Winding Vertical Ascent Timeline */}
        <div className="relative pt-4 pb-8">
          {/* Central Vertical Winding Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1E3A8A]/30 via-[#1E3A8A] to-[#DC2626]/40"></div>

          {/* Left Vertical Line for Mobile */}
          <div className="block md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-[#1E3A8A]/30"></div>

          <div className="space-y-16">
            {journeyNodes.map((node, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Marker Dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-[#1E3A8A] flex items-center justify-center z-20 shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#DC2626]"></div>
                  </div>

                  {/* Card Content Container */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] pl-14 md:pl-0 ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#1E3A8A] transition-all duration-300 group shadow-xs hover:shadow-xl relative overflow-hidden">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1E3A8A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className={`flex items-center gap-2.5 mb-3 flex-wrap ${
                        isEven ? 'md:justify-start' : 'md:justify-end'
                      }`}>
                        <span className="font-mono text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                          {node.tag}
                        </span>
                        {node.badge && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/20 text-[#1E3A8A] font-mono text-[10px] font-bold tracking-wider">
                            {node.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-2 group-hover:text-[#1E3A8A] transition-colors leading-snug">
                        {node.title}
                      </h3>

                      <p className="text-sm text-[#475569] leading-relaxed font-normal mb-4">
                        {node.description}
                      </p>

                      <div className={`pt-4 border-t border-[#E2E8F0] flex items-center ${
                        isEven ? 'md:justify-start' : 'md:justify-end'
                      } justify-start`}>
                        <button
                          onClick={() => setSelectedNode(node)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#1E3A8A] hover:text-[#DC2626] font-semibold transition-colors cursor-pointer group/btn"
                        >
                          <span>Explore Details</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Modal for Expanded Milestone Story Details */}
        <AnimatePresence>
          {selectedNode && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/50 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-[#E2E8F0] text-[#0F172A] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedNode(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E2E8F0] text-[#0F172A] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header Tag */}
                <div className="font-mono text-xs font-bold text-[#DC2626] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-4 h-px bg-[#DC2626]"></span>
                  <span>{selectedNode.tag}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
                  {selectedNode.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {selectedNode.description}
                </p>

                {/* Highlights List */}
                {selectedNode.details && (
                  <div className="space-y-3 mb-8 pt-4 border-t border-[#E2E8F0]">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A]">
                      Key Highlights & Impact
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {selectedNode.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#64748B]">Dr. Naresh Bhatta</span>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="px-5 py-2 rounded-lg bg-[#1E3A8A] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0F172A] transition-colors cursor-pointer"
                  >
                    Close
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


