import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, Copy, Check } from 'lucide-react';
import { NavigationTab } from '../types';

interface NavbarProps {
  activeTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
}

const NAV_ITEMS: { id: NavigationTab; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Story' },
  { id: 'journey' as NavigationTab, label: 'Journey' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'vision', label: 'Vision' },
  { id: 'academic', label: 'Academics' },
  { id: 'media', label: 'Media' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      {/* Top Fixed Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/90 backdrop-blur-md py-3 shadow-md border-b border-[#E2E8F0]'
            : 'bg-[#FAF9F5]/80 backdrop-blur-xs py-4 border-b border-[#E2E8F0]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 text-left group focus:outline-none cursor-pointer"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-serif font-bold text-xs shadow-xs group-hover:bg-[#DC2626] transition-colors">
              NB
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E2E8F0] shadow-2xs">
            {NAV_ITEMS.slice(0, 9).map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-1 text-[11px] tracking-wider uppercase font-bold rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'text-white bg-[#0F172A] shadow-xs'
                      : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#E2E8F0]/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Phone Call & Action */}
          <div className="flex items-center gap-2.5">
            <div className="hidden md:flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-full px-3.5 py-1.5 text-xs shadow-2xs">
              <a href="tel:9851423026" className="font-mono font-bold text-[#0F172A] hover:text-[#DC2626] transition-colors flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>9851423026</span>
              </a>
              <button
                onClick={handleCopyPhone}
                title="Copy phone number"
                className="p-0.5 text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-full bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0F172A] hover:bg-[#E2E8F0]/60 rounded-xl focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#FAF9F5] pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="text-xs uppercase tracking-widest text-[#64748B] font-bold">
                  Menu Navigation
                </div>
                <a href="tel:9851423026" className="text-xs font-mono font-bold text-white flex items-center gap-1.5 bg-[#DC2626] px-3.5 py-1.5 rounded-full shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                  <span>9851423026</span>
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-serif transition-colors flex items-center justify-between ${
                      activeTab === item.id
                        ? 'bg-[#0F172A] text-white font-bold shadow-md'
                        : 'text-[#0F172A] hover:bg-[#E2E8F0]/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeTab === item.id && (
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
              <a
                href="tel:9851423026"
                className="w-full py-3.5 px-6 bg-[#0F172A] text-white text-xs uppercase tracking-wider font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm hover:bg-[#DC2626] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dr. Naresh: 9851423026</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

