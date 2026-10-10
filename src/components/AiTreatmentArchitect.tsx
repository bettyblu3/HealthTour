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
    <section id="planner" className="relative py-24 sm:py-32 bg-forest-900 px-6 sm:px-12 border-b border-[#7A614A]/25">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#D8BEA3] uppercase">
              {t.architectBadge}
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mt-2 leading-[1.05]">
              {t.architectTitle}{' '}
              <span className="text-white/75">{t.architectTitleMint}</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="text-sm font-mono tracking-widest text-[#D8BEA3] uppercase underline decoration-[#8C7154]/40 underline-offset-4">
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
              <div className="text-xs font-mono text-[#D8BEA3] uppercase tracking-wider mb-3">
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
                          ? 'bg-gradient-to-r from-[#3D2C1E] to-[#251A11] border-[#8C7154] text-white font-bold ring-1 ring-[#8C7154]/50 shadow-lg'
                          : 'border-[#8C7154]/25 hover:border-[#8C7154]/60 bg-[#160E09]/80 text-white'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold">{item.name}</div>
                        <div className={`text-xs ${isSelected ? 'text-[#D8BEA3]/90' : 'text-white/50'}`}>
                          {item.stayDays} {t.nightStay} • {item.recoveryDays} {t.recoveryDays}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[11px] font-mono px-3 py-1 rounded-full border transition-colors ${
                          isSelected
                            ? 'border-[#8C7154]/60 bg-[#7A614A]/30 text-[#D8BEA3] font-bold'
                            : 'border-white/15 bg-white/[0.04] text-white/70 font-medium'
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
              <div className="text-xs font-mono text-[#D8BEA3] uppercase tracking-wider mb-3">
                {t.step2}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setHotelTier('bosphorus')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    hotelTier === 'bosphorus'
                      ? 'bg-gradient-to-r from-[#3D2C1E] to-[#251A11] border-[#8C7154] text-white font-bold ring-1 ring-[#8C7154]/50 shadow-lg'
                      : 'border-[#8C7154]/25 hover:border-[#8C7154]/60 bg-[#160E09]/80 text-white'
                  }`}
                >
                  <div className={`text-xs font-mono uppercase tracking-wider ${hotelTier === 'bosphorus' ? 'text-[#D8BEA3]' : 'text-white/50'}`}>5★ Waterfront</div>
                  <div className="text-sm font-bold mt-1">{t.bosphorusWaterfront}</div>
                  <div className={`text-[11px] mt-0.5 ${hotelTier === 'bosphorus' ? 'text-[#D8BEA3]/80' : 'text-white/60'}`}>{t.bosphorusDesc}</div>
                </button>

                <button
                  onClick={() => setHotelTier('executive')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    hotelTier === 'executive'
                      ? 'bg-gradient-to-r from-[#3D2C1E] to-[#251A11] border-[#8C7154] text-white font-bold ring-1 ring-[#8C7154]/50 shadow-lg'
                      : 'border-[#8C7154]/25 hover:border-[#8C7154]/60 bg-[#160E09]/80 text-white'
                  }`}
                >
                  <div className={`text-xs font-mono uppercase tracking-wider ${hotelTier === 'executive' ? 'text-[#D8BEA3]' : 'text-white/50'}`}>5★ Executive</div>
                  <div className="text-sm font-bold mt-1">{t.executiveCity}</div>
                  <div className={`text-[11px] mt-0.5 ${hotelTier === 'executive' ? 'text-[#D8BEA3]/80' : 'text-white/60'}`}>{t.executiveDesc}</div>
                </button>
              </div>
            </div>

            {/* Step 3: Guests */}
            <div>
              <div className="text-xs font-mono text-[#D8BEA3] uppercase tracking-wider mb-3">
                {t.step3}
              </div>
              <div className="flex gap-3">
                {[1, 2].map((num) => (
                  <button
                    key={num}
                    onClick={() => setGuestCount(num)}
                    className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-mono font-bold transition-all ${
                      guestCount === num
                        ? 'bg-gradient-to-r from-[#3D2C1E] to-[#251A11] border-[#8C7154] text-white shadow-sm'
                        : 'border-white/10 text-white/60 hover:border-[#8C7154]/40'
                    }`}
                  >
                    {num === 1 ? t.singleGuest : t.withCompanion}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Summary Ledger (Signature Luxury Bronze Card) */}
          <div className="lg:col-span-6 rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-[#7A614A] via-[#483728] to-[#221811] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            <div className="rounded-xl bg-gradient-to-b from-[#322317] via-[#241910] to-[#18110B] border border-[#8C7154]/40 p-7 sm:p-9 space-y-8">
              
              <div className="flex items-start justify-between border-b border-[#8C7154]/30 pb-6">
                <div>
                  <div className="text-xs font-mono tracking-widest text-[#D8BEA3] uppercase">
                    {t.officialRateCard}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {selectedTreatment.name}
                  </h3>
                  <p className="text-xs text-[#D8BEA3]/70 mt-1">
                    All-Inclusive VIP Protocol • Istanbul Clinical Campus
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                    {language === 'TR' ? 'Kişiye Özel' : 'Bespoke VIP'}
                  </div>
                  <div className="text-[10px] font-mono text-[#D8BEA3]/70 mt-0.5">
                    {t.netCost}
                  </div>
                </div>
              </div>

              {/* Comparative Breakdown (UK / US) */}
              <div className="space-y-3 font-mono text-xs">
                <div className="text-[#D8BEA3]/80 uppercase tracking-wider text-[10px]">
                  {language === 'TR' ? 'Küresel Standartlar Karşılaştırması:' : 'Global Comparative Benchmark:'}
                </div>

                <div className="p-3.5 rounded-xl border border-[#8C7154]/30 bg-[#22170F]/70 flex items-center justify-between">
                  <div>
                    <span className="text-white font-medium">{t.ukBenchmark}</span>
                    <div className="text-white/40 text-[11px]">
                      {language === 'TR' ? 'Harley St. Eşdeğer Standart Cerrahi' : 'Harley St. Standard Surgery'}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#7A614A]/30 text-[#D8BEA3] font-bold border border-[#8C7154]/40">
                    {language === 'TR' ? '%70+ Tasarruf Avantajı' : '70%+ Global Value'}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border border-[#8C7154]/30 bg-[#22170F]/70 flex items-center justify-between">
                  <div>
                    <span className="text-white font-medium">{t.usBenchmark}</span>
                    <div className="text-white/40 text-[11px]">
                      {language === 'TR' ? 'New York Board Sertifikalı Cerrahi' : 'New York Board Certified Surgery'}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#7A614A]/30 text-[#D8BEA3] font-bold border border-[#8C7154]/40">
                    {language === 'TR' ? '%75+ Tasarruf Avantajı' : '75%+ Global Value'}
                  </span>
                </div>
              </div>

              {/* Inclusions List */}
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#D8BEA3]/70">
                  {t.inclusionsTitle}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D8BEA3] shrink-0" />
                    <span>JCI Akredite Cerrahi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D8BEA3] shrink-0" />
                    <span>5★ Lüks Otel Süiti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D8BEA3] shrink-0" />
                    <span>Özel Maybach VIP Transfer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D8BEA3] shrink-0" />
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
                  className="flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D8BEA3] to-[#C4A482] hover:from-white hover:to-white text-forest-900 font-bold text-xs tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>{t.sendViaWhatsapp}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="py-3.5 px-6 rounded-full border border-[#8C7154]/40 hover:border-[#D8BEA3] text-white hover:text-[#D8BEA3] font-mono text-xs transition-colors"
                >
                  {t.requestOffer}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
