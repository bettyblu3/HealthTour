import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Currency } from './types';
import { Language } from './i18n/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OfficialTrustBar } from './components/OfficialTrustBar';
import { AreasOfExpertise } from './components/AreasOfExpertise';
import { VipTravelExperience } from './components/VipTravelExperience';
import { SurgicalFaculty } from './components/SurgicalFaculty';
import { AiTreatmentArchitect } from './components/AiTreatmentArchitect';
import { Footer } from './components/Footer';
import { ContactConsultationModal } from './components/ContactConsultationModal';
import { QuickWhatsAppChat } from './components/QuickWhatsAppChat';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('healthtour_lang');
    return (saved === 'EN' || saved === 'TR') ? saved : 'TR';
  });
  const [activeCurrency, setActiveCurrency] = useState<Currency>('EUR');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('healthtour_lang', newLang);
    } catch {
      // ignore
    }
  };

  // Initialize Leome & Partners style Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Dynamic SEO Title and Language Attribute
  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    if (language === 'TR') {
      document.title = 'Health Tour Istanbul | HealthTour & Partners — Lüks Cerrahi & Sağlık Turizmi';
    } else {
      document.title = 'Health Tour Istanbul | HealthTour & Partners — Quiet Luxury Medical Tourism';
    }
  }, [language]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-forest-900 text-white selection:bg-mint-300 selection:text-forest-900 font-sans">
      
      {/* 1. Navbar with Language Switcher (TR | EN) and Menü */}
      <Navbar
        language={language}
        onLanguageChange={handleLanguageChange}
        onOpenPlanner={() => scrollToSection('planner')}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* 2. Hero: "HAYALİNİZDEKİ / [Sağlığınız. Odağımız. Card] / SAĞLIK GELECEĞİ" */}
      <Hero
        language={language}
        onOpenPlanner={() => scrollToSection('planner')}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* 2.5. Official Accreditation & Trust Bar (Ministry of Health, JCI, TURSAB) */}
      <OfficialTrustBar
        language={language}
      />

      {/* 3. Architectural Areas of Expertise with Images & 3D Flip */}
      <AreasOfExpertise
        language={language}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* 3.5. Crisp Luminous White VIP Travel & 5★ Concierge Experience */}
      <VipTravelExperience
        language={language}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        onScrollToPlanner={() => scrollToSection('planner')}
      />

      {/* 4. Surgical Faculty with Hand-Held Phone Mockup */}
      <SurgicalFaculty
        language={language}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* 5. Quiet Luxury Treatment Architect & Transparent Ledger */}
      <AiTreatmentArchitect
        language={language}
        activeCurrency={activeCurrency}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* 6. Monumental Leome Footer */}
      <Footer
        language={language}
      />

      {/* 7. VIP Consultation Modal */}
      <ContactConsultationModal
        language={language}
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      {/* 8. Quick WhatsApp Floating Interactive Chat (Hidden when Menu or Modal is Open) */}
      <QuickWhatsAppChat
        language={language}
        isVisible={!isMenuOpen && !isConsultationModalOpen}
      />

    </div>
  );
};

export default App;
