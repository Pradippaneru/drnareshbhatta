import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheBeginning } from './components/TheBeginning';
import { NationalVision } from './components/NationalVision';
import { TimelineFlow } from './components/TimelineFlow';
import { VisionMission } from './components/VisionMission';
import { LeadershipJourney } from './components/LeadershipJourney';
import { AcademicJourney } from './components/AcademicJourney';
import { CommunityImpact } from './components/CommunityImpact';
import { MediaGallery } from './components/MediaGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';
import { ContentProvider } from './context/ContentContext';
import { NavigationTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections: { id: NavigationTab; elemId: string }[] = [
        { id: 'home', elemId: 'hero' },
        { id: 'about', elemId: 'story' },
        { id: 'vision', elemId: 'vision' },
        { id: 'leadership', elemId: 'leadership' },
        { id: 'journey', elemId: 'journey' },
        { id: 'impact', elemId: 'impact' },
        { id: 'academic', elemId: 'academic' },
        { id: 'media', elemId: 'media' },
        { id: 'contact', elemId: 'contact' },
      ];

      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].elemId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (tab: NavigationTab) => {
    setActiveTab(tab);

    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionMap: Record<NavigationTab, string> = {
      home: 'hero',
      about: 'story',
      journey: 'journey',
      vision: 'vision',
      leadership: 'leadership',
      academic: 'academic',
      impact: 'impact',
      media: 'media',
      contact: 'contact',
    };

    const targetId = sectionMap[tab];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ContentProvider>
      <div className="min-h-screen bg-[#FAF9F5] text-[#0F172A] font-sans antialiased bg-grain selection:bg-[#DC2626] selection:text-white pb-24">
        {/* Navigation Header & Lower Dock */}
        <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

        {/* Main Storytelling Sections in PDF Flow Sequence */}
        <main>
          {/* 1. Hero — Opening Statement */}
          <Hero onNavigate={handleNavigate} />

          {/* 2. Introduction — Who He Is */}
          <TheBeginning />

          {/* 3. National Vision — Five Pillars */}
          <NationalVision />

          {/* Public Leadership — Simple Minimalist Graphical Grid */}
          <LeadershipJourney />

          {/* 4. The Journey — Scroll-Driven Timeline */}
          <TimelineFlow />

          {/* 5. National Achievements & 6. Humanitarian Leadership */}
          <CommunityImpact />

          {/* 7. Education & Distinctions */}
          <AcademicJourney />

          {/* 8. Policy Platform (15 Priorities) + 9. Philosophy & 7 Principles + 10. Vision for a New Nepal */}
          <VisionMission />

          {/* Supporting Media Section */}
          <MediaGallery />

          {/* 11. Call to Action — Join the Movement */}
          <ContactSection />
        </main>

        {/* Floating Admin Panel CMS */}
        <AdminPanel />

        {/* Editorial Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </ContentProvider>
  );
}
