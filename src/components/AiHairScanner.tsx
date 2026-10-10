import React, { useState } from 'react';
import { NORWOOD_STAGES } from '../data/treatments';
import { NorwoodStage } from '../types';
import { Sparkles, ArrowRight, Shield, Activity } from 'lucide-react';

interface AiHairScannerProps {
  onOpenConsultation: () => void;
}

export const AiHairScanner: React.FC<AiHairScannerProps> = ({ onOpenConsultation }) => {
  const [selectedStage, setSelectedStage] = useState<NorwoodStage>(NORWOOD_STAGES[1]); // Norwood 3 default

  return (
    <section id="hair-scanner" className="relative py-20 lg:py-28 bg-obsidian-900/40 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-clinical-cyan mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>AI TRICHOLOGY & GRAFT ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Norwood Ölçeği ile{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan to-emerald-400">
              Yapay Zeka Greft Analizi
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Saç dökülme tipinizi seçin. Gelişmiş yapay zeka algoritması donör kapasitenizi, 
            ihtiyacınız olan greft sayısını ve 12 aylık uzama simülasyonunu anında çıkarsın.
          </p>
        </div>

        {/* Norwood Stage Selection Tabs */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {NORWOOD_STAGES.map((st) => {
              const isSelected = selectedStage.stage === st.stage;
              return (
                <button
                  key={st.stage}
                  onClick={() => setSelectedStage(st)}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? 'bg-cyan-500/15 border-clinical-cyan shadow-glow-cyan text-white'
                      : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200'
                  }`}
                >
                  <div className="text-xs font-mono font-bold text-clinical-cyan mb-1">
                    EVRE {st.stage}
                  </div>
                  <div className="text-xs font-semibold truncate">
                    {st.stage === 2 ? 'Hafif Şakak' : st.stage === 3 ? 'Ön Hat' : st.stage === 4 ? 'Ön + Tepe' : st.stage === 5 ? 'İleri Tepe' : 'Geniş Açıklık'}
                  </div>
                  <div className="text-[11px] font-mono text-gray-400 mt-2">
                    ~{st.graftRange[0]} Greft
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Analysis Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Visual Diagnostic Metric */}
            <div className="md:col-span-1 p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 text-center space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-clinical-cyan text-[11px] font-mono font-bold">
                TANI: EVRE {selectedStage.stage}
              </div>

              <div>
                <div className="text-xs text-gray-400 font-mono">Tahmini Gereken Greft:</div>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan to-emerald-400 mt-1">
                  {selectedStage.graftRange[0].toLocaleString()} - {selectedStage.graftRange[1].toLocaleString()}
                </div>
                <div className="text-xs text-emerald-400 font-mono mt-1">
                  ≈ {(selectedStage.graftRange[0] * 2.3).toFixed(0)} - {(selectedStage.graftRange[1] * 2.3).toFixed(0)} Saç Teli
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-gray-400 flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tek Seansta Mega Ekim</span>
              </div>
            </div>

            {/* AI Protocol Details */}
            <div className="md:col-span-2 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedStage.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedStage.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-xs font-mono font-semibold text-clinical-cyan uppercase tracking-wider">
                  Yapay Zeka Klinik Önerisi:
                </div>
                <div className="text-sm text-gray-200">
                  {selectedStage.recommendation}
                </div>
              </div>

              {/* 12-Month Timeline Simulation */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-gray-400 flex items-center justify-between">
                  <span>İyileşme & Çıkış Zaman Çizelgesi:</span>
                  <span className="text-emerald-400 font-bold">%100 Doğal Çıkış Garantisi</span>
                </div>
                
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-cyan-400 font-bold text-[11px]">10. Gün</div>
                    <div className="text-gray-400 text-[10px] mt-0.5">Kabuk Dökümü</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-cyan-400 font-bold text-[11px]">1. Ay</div>
                    <div className="text-gray-400 text-[10px] mt-0.5">Şok Dökülme</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-emerald-400 font-bold text-[11px]">6. Ay</div>
                    <div className="text-gray-400 text-[10px] mt-0.5">%65 Yoğunluk</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-mono text-emerald-400 font-bold text-[11px]">12. Ay</div>
                    <div className="text-gray-400 text-[10px] mt-0.5">Nihai Sonuç</div>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-indigo-600 text-obsidian-950 font-bold text-xs shadow-glow-cyan hover:opacity-95 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fotoğraflarınızla Ücretsiz Hekim Raporu Alın</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
