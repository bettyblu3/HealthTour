import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import { Currency, TreatmentOption } from '../types';
import { formatPrice } from '../utils/formatters';
import { Sparkles, ArrowUpRight, Star, CheckCircle2 } from 'lucide-react';

interface BentoSpecialtiesProps {
  activeCurrency: Currency;
  onSelectTreatment: (treatment: TreatmentOption) => void;
  onOpenConsultation: () => void;
}

export const BentoSpecialties: React.FC<BentoSpecialtiesProps> = ({
  activeCurrency,
  onSelectTreatment,
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tüm Uzmanlıklar' },
    { id: 'hair', label: 'Saç Cerrahisi' },
    { id: 'dental', label: 'Gülüş Tasarımı' },
    { id: 'plastics', label: 'Plastik Cerrahi' },
    { id: 'eyes', label: 'Göz & Lazer' },
    { id: 'longevity', label: 'Longevity' },
  ];

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <section id="specialties" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-clinical-cyan mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JCI AKREDİTE MEDİKAL DALLAR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Klinik Mükemmeliyet ve{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan via-teal-300 to-emerald-400">
                Uzmanlık Alanlarımız
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-base">
              Her işlem, uluslararası board sertifikalı kıdemli cerrahlarımız ve en gelişmiş tıbbi teknolojik altyapımızla gerçekleştirilir.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-clinical-cyan text-obsidian-950 font-bold shadow-glow-cyan'
                    : 'bg-white/[0.03] text-gray-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout (Leome & Partners Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment, idx) => {
            const isFeatured = idx === 0 || idx === 2;
            return (
              <div
                key={treatment.id}
                className={`glass-panel rounded-3xl p-7 border border-white/10 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 ${
                  isFeatured ? 'lg:col-span-2 bg-gradient-to-br from-white/[0.04] to-transparent' : ''
                }`}
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

                <div>
                  {/* Top tags & rating */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {treatment.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-xs font-mono font-bold text-amber-400 shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{treatment.rating}</span>
                      <span className="text-gray-500">({treatment.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-clinical-cyan transition-colors mb-3">
                    {treatment.name}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {treatment.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6">
                    {treatment.features.slice(0, 3).map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer bar with Pricing & Action button */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-gray-400">Her Şey Dahil VIP:</div>
                    <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan to-emerald-400">
                      {formatPrice(treatment.basePriceEur, activeCurrency)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectTreatment(treatment)}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-200 border border-white/10 transition-all hover:border-cyan-500/40"
                    >
                      <span>AI Planı İncele</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                    
                    <button
                      onClick={onOpenConsultation}
                      className="px-3 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-clinical-cyan border border-cyan-500/30 text-xs font-bold transition-all"
                      title="Hızlı Ön Konsültasyon"
                    >
                      Danış
                    </button>
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
