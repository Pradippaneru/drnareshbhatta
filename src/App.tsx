import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheBeginning } from './components/TheBeginning';
import { TimelineFlow } from './components/TimelineFlow';
import { LeadershipJourney } from './components/LeadershipJourney';
import { HumanitarianLeadership, NationalAchievements } from './components/CommunityImpact';
import { NationalVision } from './components/NationalVision';
import { VisionMission } from './components/VisionMission';
import { AcademicJourney } from './components/AcademicJourney';
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
        { id: 'journey', elemId: 'journey' },
        { id: 'leadership', elemId: 'leadership' },
        { id: 'vision', elemId: 'vision' },
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
      leadership: 'leadership',
      vision: 'vision',
      academic: 'academic',
      impact: 'humanitarian',
      initiatives: 'humanitarian',
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

        {/* Main Storytelling Sections in Restructured Flow Sequence */}
        <main>
          {/* 1. Home — Hero Greeting */}
          <Hero onNavigate={handleNavigate} />

          {/* 2. Story — Meet Dr. Naresh Bhatta */}
          <TheBeginning />

          {/* 3. The Journey — Timeline & Milestones */}
          <TimelineFlow />

          {/* 4. Leadership — Public Leadership & Humanitarian Crisis Relief */}
          <div id="leadership" className="space-y-0">
            <LeadershipJourney />
            <HumanitarianLeadership />
          </div>

          {/* 5. Vision — Five Pillars, Policy Agenda, 7 Principles & Vision for New Nepal */}
          <div id="vision" className="space-y-0">
            <NationalVision />
            <VisionMission />
          </div>

          {/* 6. Academics — Education, Honours & National Achievements */}
          <div id="academic" className="space-y-0">
            <AcademicJourney />
            <NationalAchievements />
          </div>

          {/* 7. Media Gallery & Publications */}
          <MediaGallery />

          {/* 8. Call to Action — Connect */}
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
