import React from 'react';
import { LeomeEmblem } from './LeomeLogo';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface SurgicalFacultyProps {
  language: Language;
  onOpenConsultation: () => void;
}

export const SurgicalFaculty: React.FC<SurgicalFacultyProps> = ({ language, onOpenConsultation }) => {
  const t = TRANSLATIONS[language];

  const doctors = [
    {
      name: 'Op. Dr. Mehmet Arslan',
      role: language === 'TR' ? 'Saç Cerrahisi Direktörü' : 'Managing Hair Surgeon',
      board: 'ISHRS Fellow',
      image: '/images/doctor-mehmet-arslan.jpg'
    },
    {
      name: 'Dt. Selin Yıldırım',
      role: language === 'TR' ? 'Estetik Diş Direktörü' : 'Chief Dental Director',
      board: 'EDAD Member',
      image: '/images/doctor-selin-yildirim.jpg'
    },
    {
      name: 'Prof. Dr. Kerem Aydın',
      role: language === 'TR' ? 'Plastik Cerrahi Uzmanı' : 'Plastic Surgery Fellow',
      board: 'ISAPS & EBOPRAS',
      image: '/images/doctor-kerem-aydin.jpg'
    },
    {
      name: 'Op. Dr. Aylin Demir',
      role: language === 'TR' ? 'Göz Cerrahisi Direktörü' : 'Ophthalmology Lead',
      board: 'ESCRS Member',
      image: '/images/doctor-aylin-demir.jpg'
    }
  ];

  return (
    <section id="team" className="relative py-24 sm:py-32 bg-forest-950 px-6 sm:px-12 border-b border-mint-300/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,35,30,0.4)_0%,rgba(4,16,13,0.95)_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px]">
        
        {/* Top Floating Leome Brand Mark */}
        <div className="flex items-center gap-3 mb-10">
          <LeomeEmblem size={32} className="text-mint-300" />
          <span className="text-xs font-mono tracking-widest text-mint-muted uppercase">
            {t.facultyBadge}
          </span>
        </div>

        {/* Centerpiece Device Container (Image 4 Style) */}
        <div className="relative flex justify-center mb-16">
          
          {/* Hand & Phone Mockup Frame */}
          <div className="relative w-full max-w-[420px] aspect-[9/17] sm:aspect-[9/16] rounded-[42px] p-4 bg-gradient-to-b from-[#1C2623] via-[#0D1614] to-[#050C0A] border-[4px] border-[#3B4D47] shadow-[0_35px_80px_rgba(0,0,0,0.95)]">
            
            {/* Dynamic Island */}
            <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full bg-black z-30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-forest-900 border border-white/20 mr-4" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
            </div>

            {/* Screen Inner Display */}
            <div className="w-full h-full rounded-[32px] bg-forest-900 border border-mint-300/20 pt-14 pb-6 px-5 flex flex-col justify-between overflow-hidden">
              
              {/* Header note inside phone */}
              <div>
                <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed font-sans pr-4">
                  {t.facultyQuote}
                </p>
              </div>

              {/* 2x2 Doctors Portraits inside phone */}
              <div className="grid grid-cols-2 gap-3 my-auto py-2">
                {doctors.map((doc, idx) => (
                  <div
                    key={idx}
                    onClick={onOpenConsultation}
                    className="group/card cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-forest-850 border border-white/10 mb-2">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover/card:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="text-[11px] font-bold text-white leading-tight">
                      {doc.name}
                    </div>
                    <div className="text-[9px] font-mono text-white/50 truncate">
                      {doc.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom pin inside phone */}
              <div className="flex items-center justify-between text-[8px] font-mono text-white/50 border-t border-white/10 pt-3">
                <span>ISTANBUL CLINICAL CAMPUS</span>
                <span className="text-white font-bold">● ACTIVE</span>
              </div>

            </div>

          </div>

        </div>

        {/* Monumental Headline Below Phone */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/10 pt-10">
          <div>
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              {t.facultyHeading1}
            </h3>
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white/70 leading-tight">
              {t.facultyHeading2}
            </h3>
          </div>

          <div className="text-right">
            <button
              onClick={onOpenConsultation}
              className="text-sm font-mono tracking-widest text-white/80 hover:text-white uppercase underline decoration-white/30 underline-offset-4 transition-colors"
            >
              {t.aboutFaculty}
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
