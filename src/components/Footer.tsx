import React from 'react';
import { LeomeEmblem } from './LeomeLogo';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="relative bg-gradient-to-b from-[#140D08] via-[#0E0906] to-[#070403] border-t border-[#7A614A]/40 pt-20 pb-10 px-6 sm:px-12 overflow-hidden">
      
      {/* Warm Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-[radial-gradient(ellipse_at_top,rgba(122,97,74,0.22)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px]">
        
        {/* Top Section with Signet and Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 items-start">
          
          {/* Top-Left: Large Illuminated Signet */}
          <div className="md:col-span-4">
            <LeomeEmblem size={96} className="text-[#D8BEA3]" />
            <div className="mt-4 text-xs font-mono text-[#D8BEA3]/75 max-w-xs leading-relaxed">
              {t.footerDesc}
            </div>
          </div>

          {/* Center Links */}
          <div className="md:col-span-4 space-y-3 text-lg font-medium text-white">
            <div><a href="#expertise" className="hover:text-[#D8BEA3] transition-colors">{t.servicesMenu}</a></div>
            <div><a href="#billboard" className="hover:text-[#D8BEA3] transition-colors">{t.aboutMenu}</a></div>
            <div><a href="#team" className="text-[#D8BEA3] font-semibold hover:text-white transition-colors">HealthTour &amp; Partners</a></div>
            <div><a href="#cases" className="hover:text-[#D8BEA3] transition-colors">{t.insightsMenu}</a></div>
            <div><a href="#planner" className="hover:text-[#D8BEA3] transition-colors">{t.contactMenu}</a></div>
          </div>

          {/* Right Hours & Desk */}
          <div className="md:col-span-4 space-y-2 text-sm text-white/70 font-sans relative">
            <div className="font-mono text-xs uppercase tracking-wider text-[#C4A482]">{t.hoursHeader}</div>
            <div className="text-white font-medium">{t.daysOpen}</div>
            <div className="font-mono text-xs text-[#D8BEA3]">{t.hoursTime}</div>
            <div className="pt-2 text-xs text-white/50">
              {t.address}
            </div>
          </div>

        </div>

        {/* Monumental Giant Brand Typography Across the Screen (Pure White Luxury) */}
        <div className="w-full border-t border-[#7A614A]/30 pt-8 pb-4 select-none flex items-center justify-center">
          <svg
            viewBox="0 0 1350 140"
            className="w-full h-auto max-h-[130px] select-none"
            aria-label="HealthTour & Partners"
          >
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FFFFFF"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '108px',
                fontWeight: 800,
                letterSpacing: '-0.035em'
              }}
            >
              HealthTour &amp; Partners
            </text>
          </svg>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#7A614A]/25 text-[10px] font-mono tracking-widest text-[#D8BEA3]/70 uppercase">
          <div>
            DESIGN: HEALTHTOUR ARCHITECTS
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.legal}</a>
            <span>2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
