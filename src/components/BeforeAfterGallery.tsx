import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/cases';
import { CaseStudy } from '../types';
import { Star, Award, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const BeforeAfterGallery: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50); // 0 to 100%

  const currentCase: CaseStudy = CASE_STUDIES[selectedCaseIndex];

  const handlePrev = () => {
    setSelectedCaseIndex((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
    setSliderPos(50);
  };

  const handleNext = () => {
    setSelectedCaseIndex((prev) => (prev === CASE_STUDIES.length - 1 ? 0 : prev + 1));
    setSliderPos(50);
  };

  return (
    <section id="cases" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-clinical-cyan mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CLINICALLY VERIFIED RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Gerçek Hastalar,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan via-teal-300 to-emerald-400">
              Kalıcı Dönüşümler
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Uluslararası hastalarımızın operasyon öncesi ve sonrası belgelenmiş klinik sonuçlarını 
            interaktif kaydırıcı ile detaylı inceleyin.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
            {CASE_STUDIES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCaseIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  selectedCaseIndex === idx
                    ? 'bg-clinical-cyan text-obsidian-950 font-bold shadow-glow-cyan'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{c.patientFlag}</span>
                <span>{c.patientName}</span>
                <span className="text-[10px] opacity-75">({c.treatmentName.split(' ')[0]})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Transformation Showcase Card */}
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Before / After Image Comparison */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none border border-white/10 shadow-2xl bg-obsidian-900">
                {/* AFTER Image (Background) */}
                <img
                  src={currentCase.afterImage}
                  alt={`${currentCase.patientName} Sonrası`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* BEFORE Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={currentCase.beforeImage}
                    alt={`${currentCase.patientName} Öncesi`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-obsidian-950/80 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/20">
                    ÖNCESİ
                  </div>
                </div>

                {/* AFTER Label */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-cyan-500/80 backdrop-blur-md text-obsidian-950 text-[11px] font-mono font-bold border border-cyan-400">
                  SONRASI ({currentCase.timeframe})
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-clinical-cyan shadow-[0_0_15px_#00F2FE] pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-clinical-cyan text-obsidian-950 flex items-center justify-center text-xs font-bold shadow-xl border-2 border-white">
                    ↔
                  </div>
                </div>

                {/* Range Slider Controller */}
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                />
              </div>

              <div className="mt-3 text-center text-xs text-gray-500 font-mono">
                ← Kaydırıcıyı sola/sağa sürükleyerek sonucu karşılaştırın →
              </div>
            </div>

            {/* Case Details & Verified Testimonial */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{currentCase.patientFlag}</span>
                  <span className="text-sm font-mono text-gray-400">{currentCase.patientCountry}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white">
                  {currentCase.patientName}
                </h3>
                <div className="text-sm font-semibold text-clinical-cyan mt-1">
                  {currentCase.treatmentName}
                </div>
              </div>

              {/* Clinical Metrics */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">{currentCase.metricLabel}:</span>
                  <span className="text-white font-bold text-sm text-emerald-400">{currentCase.metricValue}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">Operasyon Hekimi:</span>
                  <span className="text-gray-200 font-bold">{currentCase.surgeon}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">Takip Süresi:</span>
                  <span className="text-cyan-400 font-bold">{currentCase.timeframe}</span>
                </div>
              </div>

              {/* Review Quote */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 relative">
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  "{currentCase.reviewQuote}"
                </p>
                <div className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Doğrulanmış Uluslararası Hasta İncelemesi</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-gray-500">
                  Vaka {selectedCaseIndex + 1} / {CASE_STUDIES.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
