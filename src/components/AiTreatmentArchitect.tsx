import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import { Currency, TreatmentOption } from '../types';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { ArrowRight, Check } from 'lucide-react';

interface AiTreatmentArchitectProps {
  language: Language;
  activeCurrency: Currency;
  onOpenConsultation: () => void;
}

export const AiTreatmentArchitect: React.FC<AiTreatmentArchitectProps> = ({
  language,
  onOpenConsultation
}) => {
  const t = TRANSLATIONS[language];
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentOption>(TREATMENTS[0]);
  const [hotelTier, setHotelTier] = useState<'bosphorus' | 'executive'>('bosphorus');
  const [guestCount, setGuestCount] = useState<number>(1);

  const getWhatsAppShareUrl = () => {
    const text = encodeURIComponent(
      `HealthTour & Partners — ${language === 'TR' ? 'VIP Tedavi Planı' : 'VIP Treatment Plan'}:\n` +
      `• ${language === 'TR' ? 'Cerrahi Tedavi' : 'Procedure'}: ${selectedTreatment.name}\n` +
      `• ${language === 'TR' ? 'Konaklama' : 'Accommodation'}: ${hotelTier === 'bosphorus' ? '5★ Boğaz Manzaralı Lüks Süit' : '5★ Executive Şehir Süiti'}\n` +
      `• ${language === 'TR' ? 'Misafir' : 'Guests'}: ${guestCount === 1 ? (language === 'TR' ? 'Yalnız (1 Kişi)' : 'Solo') : (language === 'TR' ? '+1 Refakatçi Dahil' : '+1 Companion Included')}\n\n` +
      `${language === 'TR' ? 'Resmi klinik dosya incelemesi ve kişiye özel VIP teklif talep ediyorum.' : 'I would like to request my official clinical review and bespoke VIP proposal.'}`
    );
    return `https://wa.me/905425305235?text=${text}`;
  };

  return (
    <section id="planner" className="relative py-24 sm:py-32 bg-forest-900 px-6 sm:px-12 border-b border-mint-300/10">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-white/60 uppercase">
              {t.architectBadge}
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mt-2 leading-[1.05]">
              {t.architectTitle}{' '}
              <span className="text-white/75">{t.architectTitleMint}</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="text-sm font-mono tracking-widest text-white/80 uppercase underline decoration-white/30 underline-offset-4">
              {t.transparentPricing}
            </span>
          </div>
        </div>

        {/* Architectural 2-Column Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Configuration */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Step 1: Treatment Selection */}
            <div>
              <div className="text-xs font-mono text-white/60 uppercase tracking-wider mb-3">
                {t.step1}
              </div>
              <div className="space-y-2.5">
                {TREATMENTS.map((item) => {
                  const isSelected = selectedTreatment.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedTreatment(item)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-white text-forest-900 border-white font-bold shadow-lg'
                          : 'border-white/10 hover:border-white/25 bg-[#061814]/70 text-white'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold">{item.name}</div>
                        <div className={`text-xs ${isSelected ? 'text-forest-900/75' : 'text-white/50'}`}>
                          {item.stayDays} {t.nightStay} • {item.recoveryDays} {t.recoveryDays}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[11px] font-mono px-3 py-1 rounded-full border transition-colors ${
                          isSelected
                            ? 'border-forest-900/30 bg-forest-900/10 text-forest-900 font-bold'
                            : 'border-white/15 bg-white/[0.04] text-white/75 font-medium'
                        }`}>
                          {language === 'TR' ? 'VIP Paket' : 'VIP Package'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Accommodation Tier */}
            <div>
              <div className="text-xs font-mono text-white/60 uppercase tracking-wider mb-3">
                {t.step2}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setHotelTier('bosphorus')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    hotelTier === 'bosphorus'
                      ? 'bg-white text-forest-900 border-white font-bold shadow-lg'
                      : 'border-white/10 hover:border-white/25 bg-[#061814]/70 text-white'
                  }`}
                >
                  <div className={`text-xs font-mono uppercase tracking-wider ${hotelTier === 'bosphorus' ? 'text-forest-900/70' : 'text-white/50'}`}>5★ Waterfront</div>
                  <div className="text-sm font-bold mt-1">{t.bosphorusWaterfront}</div>
                  <div className={`text-[11px] mt-0.5 ${hotelTier === 'bosphorus' ? 'text-forest-900/75' : 'text-white/60'}`}>{t.bosphorusDesc}</div>
                </button>

                <button
                  onClick={() => setHotelTier('executive')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    hotelTier === 'executive'
                      ? 'bg-white text-forest-900 border-white font-bold shadow-lg'
                      : 'border-white/10 hover:border-white/25 bg-[#061814]/70 text-white'
                  }`}
                >
                  <div className={`text-xs font-mono uppercase tracking-wider ${hotelTier === 'executive' ? 'text-forest-900/70' : 'text-white/50'}`}>5★ Executive</div>
                  <div className="text-sm font-bold mt-1">{t.executiveCity}</div>
                  <div className={`text-[11px] mt-0.5 ${hotelTier === 'executive' ? 'text-forest-900/75' : 'text-white/60'}`}>{t.executiveDesc}</div>
                </button>
              </div>
            </div>

            {/* Step 3: Guests */}
            <div>
              <div className="text-xs font-mono text-white/60 uppercase tracking-wider mb-3">
                {t.step3}
              </div>
              <div className="flex gap-3">
                {[1, 2].map((num) => (
                  <button
                    key={num}
                    onClick={() => setGuestCount(num)}
                    className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-mono font-bold transition-all ${
                      guestCount === num
                        ? 'bg-white text-forest-900 border-white shadow-sm'
                        : 'border-white/10 text-white/60 hover:border-white/25'
                    }`}
                  >
                    {num === 1 ? t.singleGuest : t.withCompanion}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Summary Ledger */}
          <div className="lg:col-span-6 rounded-2xl border border-white/15 bg-[#061814]/95 p-8 sm:p-10 space-y-8 shadow-2xl">
            
            <div className="flex items-start justify-between border-b border-white/10 pb-6">
              <div>
                <div className="text-xs font-mono tracking-widest text-white/60 uppercase">
                  {t.officialRateCard}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedTreatment.name}
                </h3>
                <p className="text-xs text-white/50 mt-1">
                  All-Inclusive VIP Protocol • Istanbul Clinical Campus
                </p>
              </div>

              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                  {language === 'TR' ? 'Kişiye Özel' : 'Bespoke VIP'}
                </div>
                <div className="text-[10px] font-mono text-white/50 mt-0.5">
                  {t.netCost}
                </div>
              </div>
            </div>

            {/* Comparative Breakdown (UK / US) */}
            <div className="space-y-3 font-mono text-xs">
              <div className="text-white/50 uppercase tracking-wider text-[10px]">
                {language === 'TR' ? 'Küresel Standartlar Karşılaştırması:' : 'Global Comparative Benchmark:'}
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <span className="text-white font-medium">{t.ukBenchmark}</span>
                  <div className="text-white/40 text-[11px]">
                    {language === 'TR' ? 'Harley St. Eşdeğer Standart Cerrahi' : 'Harley St. Standard Surgery'}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-white/10 text-white font-bold border border-white/15">
                  {language === 'TR' ? '%70+ Tasarruf Avantajı' : '70%+ Global Value'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <span className="text-white font-medium">{t.usBenchmark}</span>
                  <div className="text-white/40 text-[11px]">
                    {language === 'TR' ? 'New York Board Sertifikalı Cerrahi' : 'New York Board Certified Surgery'}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-white/10 text-white font-bold border border-white/15">
                  {language === 'TR' ? '%75+ Tasarruf Avantajı' : '75%+ Global Value'}
                </span>
              </div>
            </div>

            {/* Inclusions List */}
            <div className="space-y-2 pt-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                {t.inclusionsTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>JCI Akredite Cerrahi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>5★ Lüks Otel Süiti</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>Özel Maybach VIP Transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>Ömür Boyu Garanti Belgesi</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-full bg-white hover:bg-mint-300 text-forest-900 font-bold text-xs tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{t.sendViaWhatsapp}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="py-3.5 px-6 rounded-full border border-white/20 hover:border-white text-white font-mono text-xs transition-colors"
              >
                {t.requestOffer}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
