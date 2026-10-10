import React, { useState } from 'react';
import { LeomeBrand } from './LeomeLogo';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { X } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenConsultation: () => void;
  onOpenPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenConsultation,
  onOpenPlanner,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
            <div className="flex items-center p-0.5 rounded-full border border-mint-300/20 bg-forest-850 text-xs font-mono">
              <button
                onClick={() => onLanguageChange('TR')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'TR'
                    ? 'bg-mint-300 text-forest-900 font-bold shadow-sm'
                    : 'text-mint-muted hover:text-white'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => onLanguageChange('EN')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'EN'
                    ? 'bg-mint-300 text-forest-900 font-bold shadow-sm'
                    : 'text-mint-muted hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Leome Signature Mint Menu Pill */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-mint-300 hover:bg-white text-forest-900 font-semibold text-xs tracking-wider transition-all duration-200"
            >
              <span>{t.menu}</span>
              <span className="text-sm font-mono leading-none">☰</span>
            </button>

          </div>

        </div>
      </header>

      {/* Fullscreen Architectural Menu Drawer (Leome Style) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-forest-950/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-14 animate-fadeIn">
          
          <div className="flex items-center justify-between border-b border-mint-300/15 pb-6">
            <LeomeBrand />
            
            <div className="flex items-center gap-3">
              {/* Language inside drawer */}
              <div className="flex items-center p-0.5 rounded-full border border-mint-300/20 bg-forest-850 text-xs font-mono">
                <button
                  onClick={() => onLanguageChange('TR')}
                  className={`px-3 py-1 rounded-full ${
                    language === 'TR' ? 'bg-mint-300 text-forest-900 font-bold' : 'text-mint-muted'
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => onLanguageChange('EN')}
                  className={`px-3 py-1 rounded-full ${
                    language === 'EN' ? 'bg-mint-300 text-forest-900 font-bold' : 'text-mint-muted'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="px-5 py-2 rounded-full bg-mint-300/10 hover:bg-mint-300 text-mint-300 hover:text-forest-900 font-mono text-xs transition-colors flex items-center gap-2 border border-mint-300/30"
              >
                <span>{t.close}</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <nav className="my-auto py-10 space-y-6 max-w-4xl">
            {[
              { label: t.areasOfExpertise, href: '#expertise', sub: language === 'TR' ? 'Cerrahi Uzmanlık Alanları' : 'Surgical Specialties' },
              { label: t.ourFocus, href: '#billboard', sub: language === 'TR' ? 'Klinik Güven & Yaklaşım' : 'Clinical Confidence' },
              { label: t.faculty, href: '#team', sub: language === 'TR' ? 'Tıp Direktörleri & Cerrahlar' : 'Board Surgeons' },
              { label: t.rates, href: '#planner', sub: language === 'TR' ? 'Şeffaf Maliyet & AI Planlayıcı' : 'Transparent Pricing & AI' },
              { label: t.results, href: '#cases', sub: language === 'TR' ? 'Klinik Vaka Sonuçları' : 'Case Outcomes' },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline justify-between text-3xl sm:text-5xl font-extrabold text-white group-hover:text-mint-300 transition-colors tracking-tight"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-mint-muted group-hover:text-mint-300 hidden sm:inline">
                    0{idx + 1} ↗
                  </span>
                </a>
                <p className="text-xs font-mono text-mint-muted mt-1">{item.sub}</p>
              </div>
            ))}
          </nav>

          <div className="border-t border-mint-300/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-mint-muted">
            <div className="flex items-center gap-6">
              <span>{t.jciVerified}</span>
              <span>{t.hoursDesk}</span>
            </div>
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenConsultation();
              }}
              className="px-6 py-2.5 rounded-full bg-mint-300 text-forest-900 font-bold hover:bg-white transition-all"
            >
              {t.vipConsultation}
            </button>
          </div>

        </div>
      )}
    </>
  );
};
