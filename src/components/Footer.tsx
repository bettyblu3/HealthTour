import React from 'react';
import { LeomeEmblem } from './LeomeLogo';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="relative bg-forest-900 border-t border-mint-300/10 pt-20 pb-10 px-6 sm:px-12 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Top Section with Signet and Nav Columns (Image 5 Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 items-start">
          
          {/* Top-Left: Large Illuminated Mint Signet (Image 5) */}
          <div className="md:col-span-4">
            <LeomeEmblem size={96} className="text-mint-300" />
            <div className="mt-4 text-xs font-mono text-mint-muted max-w-xs leading-relaxed">
              {t.footerDesc}
            </div>
          </div>

          {/* Center Links (Image 5) */}
          <div className="md:col-span-4 space-y-3 text-lg font-medium text-white">
            <div><a href="#expertise" className="hover:text-mint-300 transition-colors">{t.servicesMenu}</a></div>
            <div><a href="#billboard" className="hover:text-mint-300 transition-colors">{t.aboutMenu}</a></div>
            <div><a href="#team" className="hover:text-mint-300 transition-colors">HealthTour &amp; Partners</a></div>
            <div><a href="#cases" className="hover:text-mint-300 transition-colors">{t.insightsMenu}</a></div>
            <div><a href="#planner" className="hover:text-mint-300 transition-colors">{t.contactMenu}</a></div>
          </div>

          {/* Right Hours & Desk (Image 5) */}
          <div className="md:col-span-4 space-y-2 text-sm text-mint-muted font-sans relative">
            <div className="absolute top-0 right-0 w-2 h-2 bg-mint-300" />
            <div className="font-mono text-xs uppercase tracking-wider text-white">{t.hoursHeader}</div>
            <div className="text-white font-medium">{t.daysOpen}</div>
            <div className="font-mono text-xs text-mint-300">{t.hoursTime}</div>
            <div className="pt-2 text-xs text-mint-muted">
              {t.address}
            </div>
          </div>

        </div>

        {/* Monumental Giant Brand Typography Across the Screen (Fitted Perfectly) */}
        <div className="w-full border-t border-mint-300/10 pt-8 pb-4 select-none flex items-center justify-center">
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
              fill="#9EF7D7"
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

        {/* Bottom Metadata Bar (Image 5) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-mint-300/10 text-[10px] font-mono tracking-widest text-mint-muted uppercase">
          <div>
            DESIGN: HEALTHTOUR ARCHITECTS
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-mint-300 transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-mint-300 transition-colors">{t.legal}</a>
            <span>2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
