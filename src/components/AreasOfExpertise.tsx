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
    <section id="expertise" className="relative py-24 sm:py-32 bg-forest-900 px-6 sm:px-12 border-b border-[#7A614A]/25">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-16">
          <div className="flex items-start gap-5">
            <LeomeEmblem size={52} className="text-[#D8BEA3] shrink-0 mt-1" />
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              {t.expertiseTitleMain} <br />
              <span className="text-white/70">{t.expertiseTitleSub}</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="text-sm font-mono tracking-widest text-[#D8BEA3] uppercase underline decoration-[#8C7154]/40 underline-offset-4">
              {t.ourServices}
            </span>
            <div className="mt-2 text-xs font-mono text-[#D8BEA3]/70">
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
                  <div className="absolute inset-0 rounded-2xl p-7 sm:p-9 border border-[#8C7154]/30 hover:border-[#D8BEA3]/60 bg-[#160E09]/95 backface-hidden flex flex-col justify-between transition-colors shadow-2xl group">
                    
                    {/* Top Row: Number & Arrow / Flip hint */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#D8BEA3] tracking-widest font-bold">
                          {item.num}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#7A614A]/20 border border-[#8C7154]/40 text-[#D8BEA3]">
                          {item.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-white/60 group-hover:text-white transition-colors">
                        <span className="text-[11px] opacity-80">{t.clickToFlip}</span>
                        <RotateCw className="w-4 h-4 text-white/60 group-hover:rotate-180 transition-transform duration-500" />
                      </div>
                    </div>

                    {/* Middle Area: Perfect 16:9 Landscape High-Fashion Image */}
                    <div className="my-5 relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-forest-950 shadow-inner">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center contrast-105 group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Subtle gradient overlay at top corners for badge contrast */}
                      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-forest-950/70 to-transparent pointer-events-none" />

                      {/* Pill Tag at Top-Left */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white/90 flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                        <span>{item.categoryLabel}</span>
                      </div>

                      {/* Details Badge at Top-Right */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-forest-900 text-[10px] font-mono font-bold flex items-center gap-1 shadow-md hover:bg-white transition-colors">
                        <span>{language === 'TR' ? 'Ayrıntılar' : 'Details'}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Bottom Row: Large Title & Sub-instruction */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
                        {item.title}
                      </h3>
                      <div className="mt-2 flex items-center justify-between text-xs font-mono text-white/60">
                        <span>5 {language === 'TR' ? 'Prosedür Protokolü' : 'Procedure Protocols'}</span>
                        <span className="text-white/80 font-semibold group-hover:text-white transition-colors">
                          {t.flipToDetails} →
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* BACK SIDE (LUXURY ESPRESSO & BRONZE PROTOCOL SHEET) */}
                  <div className="absolute inset-0 rounded-2xl p-7 sm:p-9 bg-gradient-to-b from-[#2A1D14] via-[#1D140D] to-[#120C08] text-white border border-[#8C7154]/40 rotate-y-180 backface-hidden flex flex-col justify-between shadow-2xl">
                    
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#D8BEA3]">
                          {item.num} • {item.title}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(item.id);
                        }}
                        className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#D8BEA3] hover:text-white transition-colors"
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
                          className="text-sm sm:text-base font-bold tracking-tight flex items-center justify-between border-b border-[#8C7154]/25 pb-2.5 text-white/95"
                        >
                          <span className="pr-4">{proc}</span>
                          <span className="w-4 h-4 rounded-full bg-[#7A614A]/30 border border-[#8C7154]/50 text-[#D8BEA3] flex items-center justify-center text-[10px] shrink-0 font-mono font-bold">
                            ✓
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Bar: Protocol & Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#8C7154]/30">
                      <span className="text-xs font-mono font-semibold uppercase text-[#D8BEA3]/70">
                        {t.jciProtocol}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(item.id);
                          }}
                          className="px-3 py-1.5 rounded-full border border-[#8C7154]/40 text-xs font-mono text-[#D8BEA3] hover:bg-[#7A614A]/20 transition-colors"
                        >
                          ⟲ {t.flipToPhoto}
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenConsultation();
                          }}
                          className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D8BEA3] to-[#C4A482] hover:from-white hover:to-white text-[#18110B] text-xs font-bold transition-all shadow-md"
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
