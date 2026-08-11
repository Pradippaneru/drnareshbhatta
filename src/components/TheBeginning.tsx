import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { useContent } from '../context/ContentContext';

import portraitImage from '../assets/images/dr_naresh_bhatta_portrait_1786291605566.jpg';

export const TheBeginning: React.FC = () => {
  const { biography, meetPortrait, profilePortrait, isContentLoading } = useContent();

  const currentMeet = meetPortrait || profilePortrait || portraitImage;
  const isCustomMeet = Boolean(currentMeet && currentMeet !== portraitImage);
  const showSkeleton = isContentLoading && !isCustomMeet;

  return (
    <section id="story" className="py-20 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#D7D7D7]/60">
      {/* Centered Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
          Meet Dr. Naresh Bhatta
        </h2>
        <div className="w-16 h-0.5 bg-[#DC2626] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Portrait Photo (Hidden on Mobile view, visible on Desktop lg+) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0] bg-white">
            {showSkeleton ? (
              <div className="w-full h-[450px] bg-gradient-to-t from-slate-200/80 via-slate-100/60 to-slate-200/30 animate-pulse rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-slate-300/40 animate-ping"></div>
              </div>
            ) : (
              <img
                src={currentMeet}
                alt={`${biography.name} Portrait`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
                className="w-full h-auto max-h-[550px] object-cover object-top rounded-2xl"
              />
            )}
          </div>
        </motion.div>

        {/* Right Column: Follow Header + Text + Message Button */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Follow Naresh Header with social icons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#DC2626]">
              Follow Naresh:
            </h3>
            <div className="flex items-center gap-4 text-[#1E293B]">
              <a href="https://www.facebook.com/profile.php?id=61590934972699" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors p-1" title="Facebook">
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590934972699" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors p-1" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590934972699" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors p-1" title="Twitter">
                <Twitter className="w-5 h-5 fill-current" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590934972699" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors p-1" title="YouTube">
                <Youtube className="w-5 h-5 fill-current" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590934972699" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors p-1" title="Telegram">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-[15px] sm:text-base md:text-[17px] text-[#475569] font-normal leading-[1.75]">
            <p>
              Dr. Naresh Bhatta is a Nepali physician, public policy reformer, youth leader, and social advocate committed to building a prosperous, sovereign, and globally respected Nepal. His public life has been defined by leadership in national student movements, healthcare reform, disaster response, constitutional advocacy, and grassroots public service.
            </p>

            <p>
              Guided by the principles of economic freedom, democratic accountability, meritocracy, and national unity, Dr. Bhatta envisions a Nepal where every citizen has the opportunity to prosper through enterprise, quality education, accessible healthcare, and transparent governance.
            </p>

            <p>
              His long-term public mission is to help transform Nepal into one of Asia's most developed, self-reliant, and investment-friendly nations through visionary leadership, institutional reform, and people-centered governance.
            </p>
          </div>

          {/* Red Message CTA Button */}
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Message Naresh
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


