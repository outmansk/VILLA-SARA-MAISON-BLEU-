import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BookingSection } from './components/BookingSection';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { MobileBookingBar } from './components/MobileBookingBar';
import { Project } from './types';
import { Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Intersection Observer to update active navigation tab dynamically as user scrolls
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'reservation', 'portfolio', 'services', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireFromService = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] font-sans antialiased selection:bg-[#8B2332] selection:text-white">
      {/* Editorial Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        lang={lang}
        onLanguageChange={setLang}
      />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero lang={lang} onDiscoverClick={() => handleNavigate('reservation')} />

        {/* 2. Le Domaine Section */}
        <About lang={lang} />

        {/* 3. Galerie Section */}
        <Portfolio lang={lang} onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Réservation Directe Section (With Dates) */}
        <BookingSection lang={lang} selectedSuiteId={''} />

        {/* 5. Conciergerie & Services Section */}
        <Services lang={lang} onInquire={handleInquireFromService} />

        {/* 6. Contact & Accès Section */}
        <Contact lang={lang} preselectedService={preselectedService} />
      </main>

      {/* Studio Footer */}
      <Footer lang={lang} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => {
          setSelectedProject(null);
          handleInquireFromService(title);
        }}
      />
      {/* Sticky Mobile Booking Bar */}
      <MobileBookingBar lang={lang} onNavigateToBooking={() => handleNavigate('reservation')} />
    </div>
  );
}


