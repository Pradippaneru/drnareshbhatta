import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, Sparkles, Copy, Check } from 'lucide-react';
import { NavigationTab } from '../types';

interface NavbarProps {
  activeTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
}

const NAV_ITEMS: { id: NavigationTab; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Story' },
  { id: 'journey' as NavigationTab, label: 'Journey Flow' },
  { id: 'vision', label: 'Vision' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'academic', label: 'Academics' },
  { id: 'impact', label: 'Impact' },
  { id: 'initiatives', label: 'Initiatives' },
  { id: 'media', label: 'Media' },
  { id: 'speeches', label: 'Speeches' },
  { id: 'testimonials', label: 'Endorsements' },
  { id: 'blog', label: 'Essays' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (tab: NavigationTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("9851423026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-glass py-2.5 shadow-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo & Identity (Badge) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="px-3 py-1 rounded-lg bg-[#0D9488] text-white font-bold font-mono text-sm tracking-tight border border-[#0F766E] shadow-xs group-hover:scale-105 transition-transform flex items-center gap-1">
              <span>DR. NARESH®</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-lg font-bold tracking-tight text-[#0F172A] leading-none group-hover:text-[#0D9488] transition-colors">
                Dr. Naresh Bhatta
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#475569] font-semibold mt-0.5">
                Physician & Mentor
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs">
            {NAV_ITEMS.slice(0, 8).map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-1 text-[11px] tracking-wider uppercase font-bold rounded-full transition-all relative cursor-pointer ${
                    isActive
                      ? 'text-white bg-[#0D9488] shadow-2xs'
                      : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#0D9488]/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Contact Direct Number & Action Button */}
          <div className="flex items-center gap-2.5">
            {/* Phone Number Copy/Call Pill */}
            <div className="hidden md:flex items-center gap-1.5 bg-white border border-[#E2E8F0] rounded-full px-3 py-1.5 text-xs shadow-2xs">
              <a href="tel:9851423026" className="font-mono font-bold text-[#0F172A] hover:text-[#0D9488] transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#0D9488]" />
                <span>9851423026</span>
              </a>
              <button
                onClick={handleCopyPhone}
                title="Copy phone number"
                className="p-1 text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-teal-600" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-full bg-[#0F172A] text-white hover:bg-[#0D9488] transition-all shadow-sm cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#171717] hover:bg-[#171717]/5 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#F8F6F2] pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="text-xs uppercase tracking-widest text-[#475569] font-bold">
                  Navigation Menu
                </div>
                <a href="tel:9851423026" className="text-xs font-mono font-bold text-white flex items-center gap-1 bg-[#0D9488] px-3 py-1 rounded-full border border-[#0F766E]">
                  <Phone className="w-3 h-3" />
                  <span>9851423026</span>
                </a>
              </div>
              <div className="grid grid-cols-1 gap-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-serif transition-colors flex items-center justify-between ${
                      activeTab === item.id
                        ? 'bg-[#0F172A] text-white font-semibold'
                        : 'text-[#0F172A] hover:bg-[#0D9488]/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeTab === item.id && (
                      <span className="w-2 h-2 rounded-full bg-[#0D9488]"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
              <a
                href="tel:9851423026"
                className="w-full py-3.5 px-6 bg-[#0D9488] text-white text-xs uppercase tracking-wider font-bold rounded-xl flex items-center justify-center gap-2 border border-[#0F766E] shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dr. Naresh: 9851423026</span>
              </a>
              <div className="text-center text-xs text-[#171717]/60">
                Dr. Naresh Bhatta · Digital Biography & Movement
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

