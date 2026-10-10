import React from 'react';
import { LeomeEmblem } from './LeomeLogo';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface HeroProps {
  language: Language;
  onOpenPlanner: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenPlanner, onOpenConsultation }) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-forest-900 pt-10 pb-8 px-6 sm:px-10 overflow-hidden">
      
      {/* Subtle Right-Edge Editorial Tag */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-forest-950 border-l border-y border-mint-300/20 py-6 px-1.5 rounded-l-md items-center">
        <span className="text-[10px] font-mono tracking-widest text-mint-muted uppercase [writing-mode:vertical-lr] rotate-180">
          JCI ACCREDITED • 2026
        </span>
      </div>

      {/* Main Monumental Composition (Image 1 Style) */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-8">
        
        {/* Top Giant Line */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight text-mint-300 leading-none select-none">
          {t.heroTop}
        </h1>

        {/* Centerpiece: The "Sağlığınız. Odağımız." Luxury Card (Image 2 Hallmark) */}
        <div 
          onClick={onOpenConsultation}
          className="my-8 sm:my-12 w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl p-2 sm:p-3.5 bg-gradient-to-b from-[#8C765C] via-[#4A3B2C] to-[#241A12] shadow-billboard cursor-pointer group transition-transform duration-500 hover:scale-[1.01] text-left"
        >
          {/* Screen Inner Display */}
          <div className="relative w-full h-full rounded-lg sm:rounded-xl bg-forest-900 border border-mint-300/30 p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
            
            {/* Corner Mint Dots */}
            <div className="absolute top-5 right-6 w-2 h-2 bg-mint-300" />
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-mint-300" />

            {/* Text Area */}
            <div className="max-w-xl space-y-2 sm:space-y-3">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {language === 'TR' ? (
                  <>
                    Sağlığınız. <span className="text-mint-300">Odağımız.</span>
                  </>
                ) : (
                  <>
                    Your health. <span className="text-mint-300">Our focus.</span>
                  </>
                )}
              </h3>

              <p className="text-xs sm:text-base text-mint-muted font-normal leading-relaxed max-w-lg">
                {t.billboardSubtitle}
              </p>
            </div>

            {/* Center: Enlarged Centered Medical Seal Emblem */}
            <div className="my-auto py-2 flex flex-col items-center justify-center text-center">
              <div className="transition-transform duration-500 group-hover:scale-110">
                <LeomeEmblem 
                  size={96} 
                  className="ring-2 ring-mint-300/40 shadow-[0_0_30px_rgba(158,247,215,0.25)]" 
                />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-2 border-t border-mint-300/15">
              <div className="text-xs font-mono text-mint-300/90 group-hover:text-white transition-colors flex items-center gap-2 font-medium">
                <span>{t.billboardCta}</span>
              </div>

              <div className="text-[10px] font-mono text-mint-muted">
                JCI • A+ ISTANBUL
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Giant Line */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight text-white leading-none select-none">
          {t.heroBottom}
        </h2>

      </div>

      {/* Bottom Horizontal Minimalist Services Ticker */}
      <div className="w-full border-t border-mint-300/10 pt-6 mt-4">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-y-2 text-xs sm:text-sm font-medium text-mint-muted">
          <a href="#expertise" className="hover:text-mint-300 transition-colors">
            {t.tickerHair}
          </a>
          <a href="#expertise" className="hover:text-mint-300 transition-colors">
            {t.tickerDental}
          </a>
          <a href="#expertise" className="hover:text-mint-300 transition-colors">
            {t.tickerPlastics}
          </a>
          <a href="#expertise" className="hover:text-mint-300 transition-colors">
            {t.tickerEyes}
          </a>
        </div>
      </div>

    </section>
  );
};
