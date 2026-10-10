import React, { useState } from 'react';
import { LeomeEmblem } from './LeomeLogo';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { RotateCw, Check, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface AreasOfExpertiseProps {
  language: Language;
  onOpenConsultation: () => void;
}

export const AreasOfExpertise: React.FC<AreasOfExpertiseProps> = ({
  language,
  onOpenConsultation
}) => {
  const t = TRANSLATIONS[language];

  // By default all cards start on the photo front side so user can see all images immediately
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({
    '01': false,
    '02': false,
    '03': false,
    '04': false,
  });

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const specialties = [
    {
      id: '01',
      num: '01',
      title: t.hairTitle,
      categoryLabel: language === 'TR' ? 'Safir FUE & DHI Trikomi' : 'Sapphire FUE & DHI Trichology',
      image: '/images/hair-transplant-perfect.jpg',
      procedures: t.hairProcedures,
      badge: 'Safir FUE & DHI',
      objectPosition: 'object-center'
    },
    {
      id: '02',
      num: '02',
      title: t.dentalTitle,
      categoryLabel: language === 'TR' ? 'Hollywood Smile Mimarisi' : 'Hollywood Smile Architecture',
      image: '/images/hollywood-smile-perfect.jpg',
      procedures: t.dentalProcedures,
      badge: 'E-Max & Zirconia',
      objectPosition: 'object-center'
    },
    {
      id: '03',
      num: '03',
      title: t.plasticsTitle,
      categoryLabel: language === 'TR' ? 'Yüz & Vücut Rekonstrüksiyonu' : 'Facial & Body Aesthetics',
      image: '/images/plastic-surgery-perfect.jpg',
      procedures: t.plasticsProcedures,
      badge: 'Piezo Ultrasonic',
      objectPosition: 'object-center'
    },
    {
      id: '04',
      num: '04',
      title: t.eyesTitle,
      categoryLabel: language === 'TR' ? 'Refraktif Lazer & Göz Cerrahisi' : 'Refractive Laser & Eye Surgery',
      image: '/images/eye-surgery.png',
      procedures: t.eyesProcedures,
      badge: 'Zeiss SMILE Pro',
      objectPosition: 'object-center'
    }
  ];

  return (
    <section id="expertise" className="relative py-24 sm:py-32 bg-forest-900 px-6 sm:px-12 border-b border-mint-300/10">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-16">
          <div className="flex items-start gap-5">
            <LeomeEmblem size={52} className="text-mint-300 shrink-0 mt-1" />
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-mint-300 leading-[1.05]">
              {t.expertiseTitleMain} <br />
              <span className="text-white">{t.expertiseTitleSub}</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="text-sm font-mono tracking-widest text-mint-300 uppercase underline decoration-mint-300/40 underline-offset-4">
              {t.ourServices}
            </span>
            <div className="mt-2 text-xs font-mono text-mint-muted">
              {language === 'TR' ? 'Ayrıntıları görmek için kartlara tıklayın ⟳' : 'Click cards to flip for details ⟳'}
            </div>
          </div>
        </div>

        {/* 2x2 Architectural Grid with 3D Flip Mechanics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {specialties.map((item) => {
            const isFlipped = !!flippedCards[item.id];

            return (
              <div
                key={item.id}
                className="perspective-1000 min-h-[460px] sm:min-h-[500px] w-full"
              >
                <div
                  onClick={() => toggleFlip(item.id)}
                  className={`relative w-full h-full rounded-2xl transform-style-3d transition-transform duration-700 cursor-pointer select-none ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* FRONT SIDE (PHOTO + TITLE + FLIP CTA) */}
                  <div className="absolute inset-0 rounded-2xl p-7 sm:p-9 border border-mint-300/20 hover:border-mint-300/60 bg-forest-850/60 backface-hidden flex flex-col justify-between transition-colors shadow-xl group">
                    
                    {/* Top Row: Number & Arrow / Flip hint */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-mint-300 tracking-widest font-bold">
                          {item.num}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-forest-900 border border-mint-300/20 text-mint-muted">
                          {item.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-mint-300 group-hover:text-white transition-colors">
                        <span className="text-[11px] opacity-80">{t.clickToFlip}</span>
                        <RotateCw className="w-4 h-4 text-mint-300 group-hover:rotate-180 transition-transform duration-500" />
                      </div>
                    </div>

                    {/* Middle Area: Perfect 16:9 Landscape High-Fashion Image */}
                    <div className="my-5 relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-mint-300/25 bg-forest-950 shadow-inner">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center contrast-105 group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Subtle gradient overlay at top corners for badge contrast */}
                      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-forest-950/70 to-transparent pointer-events-none" />

                      {/* Pill Tag at Top-Left */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-950/85 backdrop-blur-md border border-mint-300/30 text-[10px] font-mono text-mint-300 flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-mint-300 animate-pulse" />
                        <span>{item.categoryLabel}</span>
                      </div>

                      {/* Details Badge at Top-Right */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-mint-300/95 text-forest-900 text-[10px] font-mono font-bold flex items-center gap-1 shadow-md">
                        <span>{language === 'TR' ? 'Ayrıntılar' : 'Details'}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Bottom Row: Large Title & Sub-instruction */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-mint-300 transition-colors">
                        {item.title}
                      </h3>
                      <div className="mt-2 flex items-center justify-between text-xs font-mono text-mint-muted">
                        <span>5 {language === 'TR' ? 'Prosedür Protokolü' : 'Procedure Protocols'}</span>
                        <span className="text-mint-300 font-semibold group-hover:underline">
                          {t.flipToDetails} →
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* BACK SIDE (SOLID MINT CARD WITH PROCEDURES - Image 3 Style) */}
                  <div className="absolute inset-0 rounded-2xl p-7 sm:p-9 bg-mint-300 text-forest-900 rotate-y-180 backface-hidden flex flex-col justify-between shadow-mint-pill">
                    
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold tracking-widest uppercase opacity-75">
                          {item.num} • {item.title}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(item.id);
                        }}
                        className="flex items-center gap-1.5 text-xs font-mono font-bold hover:underline opacity-80"
                        title={t.flipToPhoto}
                      >
                        <span>{t.flipToPhoto}</span>
                        <ArrowDownLeft className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Procedures List */}
                    <div className="my-auto py-4 space-y-3">
                      {item.procedures.map((proc, pIdx) => (
                        <div
                          key={pIdx}
                          className="text-sm sm:text-base font-bold tracking-tight flex items-center justify-between border-b border-forest-900/10 pb-2.5"
                        >
                          <span className="pr-4">{proc}</span>
                          <span className="w-4 h-4 rounded-full bg-forest-900 text-mint-300 flex items-center justify-center text-[10px] shrink-0 font-mono font-bold">
                            ✓
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Bar: Protocol & Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-forest-900/15">
                      <span className="text-xs font-mono font-semibold uppercase opacity-80">
                        {t.jciProtocol}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(item.id);
                          }}
                          className="px-3 py-1.5 rounded-full border border-forest-900/30 text-xs font-mono hover:bg-forest-900/10 transition-colors"
                        >
                          ⟲ {t.flipToPhoto}
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenConsultation();
                          }}
                          className="px-4 py-1.5 rounded-full bg-forest-900 text-mint-300 text-xs font-bold hover:bg-black transition-colors"
                        >
                          {t.getConsultation}
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
