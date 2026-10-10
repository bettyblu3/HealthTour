import React from 'react';
import { TREATMENTS } from '../data/treatments';
import { Currency, TreatmentOption } from '../types';
import { formatPrice, calculateSavings } from '../utils/formatters';
import { TrendingDown, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface GlobalCostComparisonProps {
  activeCurrency: Currency;
  onSelectTreatment: (treatment: TreatmentOption) => void;
}

export const GlobalCostComparison: React.FC<GlobalCostComparisonProps> = ({
  activeCurrency,
  onSelectTreatment,
}) => {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-obsidian-900/50 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>ŞEFFAF FİYAT POLİTİKASI & TASARRUF</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Türkiye vs. Dünya:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-clinical-cyan">
              Maliyet Karşılaştırması
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Türkiye, gelişmiş sağlık altyapısı ve kur avantajı sayesinde Avrupa ve ABD ile aynı altın standarttaki cerrahi malzemeleri %70 daha avantajlı sunar.
          </p>
        </div>

        {/* Global Pricing Comparison Table */}
        <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Tedavi / Operasyon</th>
                  <th className="py-4 px-6 font-semibold text-clinical-cyan">
                    Türkiye (Her Şey Dahil VIP)
                  </th>
                  <th className="py-4 px-6 font-semibold">Birleşik Krallık (İngiltere)</th>
                  <th className="py-4 px-6 font-semibold">Amerika Birleşik Devletleri</th>
                  <th className="py-4 px-6 font-semibold text-emerald-400">Tasarruf Oranı</th>
                  <th className="py-4 px-6 font-semibold text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {TREATMENTS.map((t) => {
                  const ukSaving = calculateSavings(t.basePriceEur, t.ukPriceEur, activeCurrency);

                  return (
                    <tr key={t.id} className="hover:bg-white/[0.02] transition-colors group">
                      {/* Name */}
                      <td className="py-5 px-6">
                        <div className="font-bold text-white group-hover:text-clinical-cyan transition-colors">
                          {t.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {t.stayDays} Gece 5★ Otel + VIP Maybach Dahil
                        </div>
                      </td>

                      {/* Turkey */}
                      <td className="py-5 px-6">
                        <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan to-emerald-400">
                          {formatPrice(t.basePriceEur, activeCurrency)}
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
                          <Check className="w-3 h-3" />
                          <span>Gizli Ücret Yok</span>
                        </div>
                      </td>

                      {/* UK */}
                      <td className="py-5 px-6">
                        <div className="font-mono text-gray-300 font-semibold line-through text-gray-500">
                          {formatPrice(t.ukPriceEur, activeCurrency)}
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Sadece işlem ücreti
                        </div>
                      </td>

                      {/* US */}
                      <td className="py-5 px-6">
                        <div className="font-mono text-gray-300 font-semibold line-through text-gray-500">
                          {formatPrice(t.usPriceEur, activeCurrency)}
                        </div>
                        <div className="text-[11px] text-gray-400">
                          + Hastane masrafları
                        </div>
                      </td>

                      {/* Savings */}
                      <td className="py-5 px-6">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                          <span>-%{ukSaving.percent}</span>
                          <span className="text-[10px] text-emerald-300">({ukSaving.savedAmountFormatted})</span>
                        </div>
                      </td>

                      {/* Action */}
                      <td className="py-5 px-6 text-right">
                        <button
                          onClick={() => onSelectTreatment(t)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-200 border border-white/10 hover:border-cyan-500/40 transition-all"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-clinical-cyan" />
                          <span>AI Planla</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Notes */}
          <div className="p-4 bg-white/[0.01] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Tüm paket fiyatlarımıza cerrahi, 5 yıldızlı otel, VIP transfer ve 1 yıllık ilaç seti dahildir.</span>
            </div>
            <div className="text-gray-500">
              * Fiyatlar döviz kuruna göre otomatik güncellenir.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
