import React from 'react';
import { LeomeEmblem } from './LeomeLogo';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface PhysicalBillboardProps {
  language: Language;
  onOpenConsultation: () => void;
}

export const PhysicalBillboard: React.FC<PhysicalBillboardProps> = ({ language, onOpenConsultation }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="billboard" className="relative w-full py-16 sm:py-24 bg-forest-950 overflow-hidden border-y border-mint-300/10">
      
      {/* Wood-Paneled Luxury Corridor Setting */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        
        {/* Outer Architectural Container */}
        <div className="relative w-full min-h-[480px] sm:min-h-[620px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-6 sm:p-14 bg-gradient-to-r from-[#21150F] via-[#3B2519] to-[#21150F]">
          
          {/* Vertical Wood Planks overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:18%_100%] pointer-events-none opacity-40" />
          
          {/* Soft architectural spotlight from above onto the wall */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-amber-100/15 to-transparent blur-3xl pointer-events-none" />

          {/* Motion Blurred Silhouette Guests */}
          <div className="absolute left-[-2%] bottom-0 top-0 w-1/4 bg-gradient-to-r from-black/80 via-black/40 to-transparent blur-[6px] opacity-75 pointer-events-none" />
          <div className="absolute right-[-2%] bottom-0 top-0 w-1/4 bg-gradient-to-l from-black/80 via-black/40 to-transparent blur-[6px] opacity-75 pointer-events-none" />

          {/* Left and Right Wall Accent Mint Squares */}
          <div className="hidden sm:block absolute left-8 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-mint-300 shadow-[0_0_12px_#9EF7D7]" />
          <div className="hidden sm:block absolute right-8 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-mint-300 shadow-[0_0_12px_#9EF7D7]" />

          {/* Central Recessed Luxury Digital Billboard Frame */}
          <div 
            onClick={onOpenConsultation}
            className="relative z-10 w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl p-2 sm:p-3.5 bg-gradient-to-b from-[#8C765C] via-[#4A3B2C] to-[#241A12] shadow-billboard cursor-pointer group transition-transform duration-500 hover:scale-[1.01]"
          >
            {/* Screen Inner Display */}
            <div className="relative w-full h-full rounded-lg sm:rounded-xl bg-forest-900 border border-mint-300/30 p-8 sm:p-14 flex flex-col justify-between overflow-hidden">
              
              {/* Corner Mint Dots */}
              <div className="absolute top-6 right-8 w-2 h-2 bg-mint-300" />
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-mint-300" />

              {/* Text Area */}
              <div className="max-w-xl space-y-4">
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
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

                <p className="text-sm sm:text-lg text-mint-muted font-normal leading-relaxed max-w-md pt-2">
                  {t.billboardSubtitle}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-end justify-between pt-6">
                <div className="text-xs font-mono text-mint-300/80 group-hover:text-mint-300 transition-colors flex items-center gap-2">
                  <span>{t.billboardCta}</span>
                </div>

                <div className="text-mint-300 transition-transform duration-500 group-hover:scale-110">
                  <LeomeEmblem size={64} className="text-mint-300" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
