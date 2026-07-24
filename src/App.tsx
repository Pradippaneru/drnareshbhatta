import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheBeginning } from './components/TheBeginning';
import { TimelineFlow } from './components/TimelineFlow';
import { VisionMission } from './components/VisionMission';
import { LeadershipJourney } from './components/LeadershipJourney';
import { AcademicJourney } from './components/AcademicJourney';
import { CommunityImpact } from './components/CommunityImpact';
import { CurrentInitiatives } from './components/CurrentInitiatives';
import { MediaGallery } from './components/MediaGallery';
import { SpeechesArchive } from './components/SpeechesArchive';
import { Testimonials } from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';
import { ContentProvider } from './context/ContentContext';
import { NavigationTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');

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
      initiatives: 'initiatives',
      media: 'media',
      speeches: 'speeches',
      testimonials: 'testimonials',
      blog: 'blog',
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
      <div className="min-h-screen bg-[#F8F6F2] text-[#171717] font-sans antialiased bg-grain selection:bg-[#C8A96A] selection:text-[#171717]">
        {/* Sticky Top Header */}
        <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

        {/* Main Storytelling Sections */}
        <main>
          <Hero onNavigate={handleNavigate} />
          <TheBeginning />
          <TimelineFlow />
          <VisionMission />
          <LeadershipJourney />
          <AcademicJourney />
          <CommunityImpact />
          <CurrentInitiatives />
          <MediaGallery />
          <SpeechesArchive onNavigate={handleNavigate} />
          <Testimonials />
          <BlogSection />
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
