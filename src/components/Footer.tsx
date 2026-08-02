import React, { useState } from 'react';
import { ArrowUpRight, Heart, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { NavigationTab } from '../types';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0F172A] text-[#FAF9F5] pt-20 pb-12 border-t border-[#E2E8F0]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E2E8F0]/20">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-lg bg-[#0D9488] text-[#0F172A] font-bold font-mono text-sm tracking-tight border border-[#0F766E]">
                DR. NARESH®
              </div>
              <div>
                <div className="font-serif text-2xl font-bold tracking-tight text-[#FAF9F5]">
                  Dr. Naresh Bhatta
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#0D9488] font-mono font-semibold">
                  Physician · Youth Mentor · Phone: 9851423026
                </div>
              </div>
            </div>

            <p className="text-sm text-[#FAF9F5]/70 font-light leading-relaxed max-w-md">
              A digital biography, interactive flow journey, and movement dedicated to bridging healthcare equity with youth empowerment and public advocacy.
            </p>

            <div className="text-xs text-[#0D9488] font-serif italic">
              “Service is the rent we pay for living on this planet.”
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#D97706] font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#FAF9F5]/80">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#D97706] transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#D97706] transition-colors">
                  The Beginning (Story)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vision')} className="hover:text-[#D97706] transition-colors">
                  Vision & Values
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('leadership')} className="hover:text-[#D97706] transition-colors">
                  Leadership Journey
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('initiatives')} className="hover:text-[#D97706] transition-colors">
                  Active Movements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('speeches')} className="hover:text-[#D97706] transition-colors">
                  Keynotes & Speeches
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter Dispatch */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#D97706] font-bold">
              Leadership Dispatch
            </div>
            <p className="text-xs text-[#FAF9F5]/70 font-light leading-relaxed">
              Subscribe to receiving quarterly updates on upcoming rural health camps, student leadership workshops, and published essays.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#0F766E] text-[#D97706] text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you. You are subscribed to the dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F5]/10 border border-[#E2E8F0]/20 text-xs text-[#FAF9F5] focus:outline-none focus:border-[#D97706] transition-colors placeholder:text-[#FAF9F5]/40"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#D97706] text-[#0F172A] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#FAF9F5] transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F5]/50">
          <div>
            © {new Date().getFullYear()} Dr. Naresh Bhatta. Phone: 9851423026. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-[#FAF9F5]/70">
            <a href="https://www.facebook.com/profile.php?id=61590934972699" target="_blank" rel="noopener noreferrer" className="hover:text-[#D97706] transition-colors">
              Facebook
            </a>
            <a href="#contact" onClick={() => onNavigate('contact')} className="hover:text-[#D97706] transition-colors">
              Contact & Press
            </a>
            <a href="#contact" onClick={() => onNavigate('contact')} className="hover:text-[#D97706] transition-colors">
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
