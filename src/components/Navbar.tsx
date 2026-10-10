import React, { useState } from 'react';
import { LeomeBrand } from './LeomeLogo';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { X } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenConsultation: () => void;
  onOpenPlanner: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenConsultation,
  onOpenPlanner,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-forest-900/90 backdrop-blur-md border-b border-mint-300/10">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-5 flex items-center justify-between">
          
          {/* Logo on Left */}
          <a href="#" className="flex items-center">
            <LeomeBrand />
          </a>

          {/* Right Controls: Language Switcher & Menü Pill */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Language Switcher Pill (TR | EN) */}
            <div className="flex items-center px-3 py-1.5 rounded-full border border-white/25 bg-forest-950/60 backdrop-blur-sm text-xs font-mono text-white/80 gap-2.5">
              <button
                onClick={() => onLanguageChange('TR')}
                className={`transition-colors ${
                  language === 'TR'
                    ? 'text-white font-bold'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => onLanguageChange('EN')}
                className={`transition-colors ${
                  language === 'EN'
                    ? 'text-white font-bold'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Menu Pill (Quiet Luxury Dark with White Text) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8C7154]/40 bg-[#140D08]/80 hover:bg-[#1E140C] hover:border-[#D8BEA3]/50 text-white font-medium text-xs tracking-wider transition-all duration-200 shadow-sm"
            >
              <span>{t.menu}</span>
              <span className="text-xs font-mono leading-none text-[#D8BEA3]">☰</span>
            </button>

          </div>

        </div>
      </header>

      {/* Fullscreen Architectural Menu Drawer (Quiet Luxury Espresso & Warm Bronze) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[1000] bg-[#0E0906]/98 backdrop-blur-3xl flex flex-col justify-between p-8 sm:p-14 animate-fadeIn">
          
          <div className="flex items-center justify-between border-b border-[#7A614A]/30 pb-6">
            <LeomeBrand />
            
            <div className="flex items-center gap-3">
              {/* Language inside drawer */}
              <div className="flex items-center p-0.5 rounded-full border border-[#8C7154]/30 bg-[#18110B] text-xs font-mono">
                <button
                  onClick={() => onLanguageChange('TR')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    language === 'TR' ? 'bg-[#D8BEA3] text-[#18110B] font-bold shadow-sm' : 'text-[#D8BEA3]/70 hover:text-white'
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => onLanguageChange('EN')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    language === 'EN' ? 'bg-[#D8BEA3] text-[#18110B] font-bold shadow-sm' : 'text-[#D8BEA3]/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-2 rounded-full bg-[#7A614A]/20 hover:bg-[#D8BEA3] text-[#D8BEA3] hover:text-[#18110B] font-mono text-xs transition-all flex items-center gap-2 border border-[#8C7154]/40"
              >
                <span>{t.close}</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <nav className="my-auto py-8 space-y-5 max-w-4xl">
            {[
              { 
                label: language === 'TR' ? 'Cerrahi Uzmanlık Alanları' : 'Surgical Specialties', 
                href: '#expertise', 
                sub: language === 'TR' ? 'Saç, Gülüş, Burun, Meme & Vücut Cerrahisi' : 'Hair, Dental, Rhinoplasty, Breast & Body' 
              },
              { 
                label: language === 'TR' ? 'VIP Seyahat & 5★ Konaklama' : 'VIP Travel & 5★ Concierge', 
                href: '#vip-travel', 
                sub: language === 'TR' ? 'Maybach VIP Transfer & Boğaz Manzaralı Süitler' : 'Maybach VIP Chauffeur & Bosphorus Suites' 
              },
              { 
                label: language === 'TR' ? 'Tıp Direktörleri & Cerrahlar' : 'Board Certified Faculty', 
                href: '#team', 
                sub: language === 'TR' ? 'JCI Akredite Cerrahi Heyeti & Klinik Kampüs' : 'JCI Accredited Surgical Faculty' 
              },
              { 
                label: language === 'TR' ? 'Şeffaf Maliyet & AI Planlayıcı' : 'Transparent Pricing & AI Planner', 
                href: '#planner', 
                sub: language === 'TR' ? 'İngiltere & ABD Karşılaştırmalı Şeffaf Paket Fiyatı' : 'All-Inclusive UK/US Comparative Benchmark' 
              },
              { 
                label: language === 'TR' ? 'Resmi Onaylar & Akreditasyonlar' : 'Official Accreditations & Licenses', 
                href: '#accreditations', 
                sub: language === 'TR' ? 'T.C. Sağlık Bakanlığı (AK-0924) • JCI • TÜRSAB' : 'Ministry of Health • JCI • TURSAB Licensed' 
              },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-baseline justify-between text-2xl sm:text-4xl font-extrabold text-white group-hover:text-[#D8BEA3] transition-colors tracking-tight"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#D8BEA3]/60 group-hover:text-[#D8BEA3] hidden sm:inline">
                    0{idx + 1} ↗
                  </span>
                </a>
                <p className="text-xs font-mono text-[#D8BEA3]/70 mt-1">{item.sub}</p>
              </div>
            ))}
          </nav>

          <div className="border-t border-[#7A614A]/30 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#D8BEA3]/80">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px]">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                T.C. SAĞLIK BAKANLIĞI ONAYLI (AK-0924)
              </span>
              <span>JCI AKREDİTE HASTANE AĞI</span>
              <span>TÜRSAB A GRUBU ACENTE</span>
            </div>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenConsultation();
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D8BEA3] to-[#C4A482] text-[#18110B] font-bold hover:from-white hover:to-white transition-all shadow-md"
            >
              {t.vipConsultation}
            </button>
          </div>

        </div>
      )}
    </>
  );
};
