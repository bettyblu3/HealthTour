import React, { useState } from 'react';
import { VIP_JOURNEY_STEPS } from '../data/treatments';
import { BrainCircuit, Plane, Stethoscope, Award, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

interface VipJourneyProps {
  onOpenConsultation: () => void;
}

export const VipJourney: React.FC<VipJourneyProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return BrainCircuit;
      case 'Plane': return Plane;
      case 'Stethoscope': return Stethoscope;
      case 'Award': return Award;
      default: return HeartHandshake;
    }
  };

  const activeStep = VIP_JOURNEY_STEPS[activeStepIndex];
  const StepIcon = getStepIcon(activeStep.icon);

  return (
    <section id="vip-journey" className="relative py-20 lg:py-28 overflow-hidden bg-obsidian-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-clinical-cyan mb-3">
            <Plane className="w-3.5 h-3.5" />
            <span>5-STAR ALL-INCLUSIVE EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Uçaktan İyileşmeye:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan via-teal-300 to-emerald-400">
              5 Adımlı VIP Yolculuk
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Havalimanına indiğiniz andan operasyon sonrası 12. aya kadar, 
            uluslararası standartlarda kusursuz bir sağlık tatili organizasyonu.
          </p>
        </div>

        {/* Horizontal Step Tabs */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {VIP_JOURNEY_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const IconComp = getStepIcon(step.icon);

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 border-clinical-cyan shadow-glow-cyan text-white'
                      : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-clinical-cyan font-bold">
                      {step.dayLabel}
                    </span>
                    <IconComp className={`w-4 h-4 ${isActive ? 'text-clinical-cyan' : 'text-gray-500'}`} />
                  </div>
                  <div className="text-xs font-bold text-gray-200 truncate">
                    {step.title.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Card */}
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Graphic / Icon Box */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-b from-cyan-500/10 via-white/[0.02] to-transparent border border-white/10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 flex items-center justify-center text-clinical-cyan shadow-glow-cyan mb-4">
                <StepIcon className="w-10 h-10 animate-pulse" />
              </div>
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                {activeStep.dayLabel}
              </div>
              <div className="text-lg font-bold text-white mt-1">
                Aşama {activeStep.step} / 5
              </div>
            </div>

            {/* Right Information */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {activeStep.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Inclusions / Highlights */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  Bu Aşamada Dahil Olan VIP Ayrıcalıklar:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs text-gray-400 font-mono">
                  Soru veya özel transfer talebiniz var mı?
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 hover:border-cyan-500/40 transition-all"
                >
                  <span>VIP Koordinatör ile Görüş</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
