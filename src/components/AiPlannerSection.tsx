import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import { Currency, TreatmentOption } from '../types';
import { formatPrice, calculateSavings } from '../utils/formatters';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar,
  Building2,
  ShieldCheck,
  MessageCircle,
  Users,
  CheckCircle2
} from 'lucide-react';

interface AiPlannerSectionProps {
  activeCurrency: Currency;
  onOpenConsultation: () => void;
}

export const AiPlannerSection: React.FC<AiPlannerSectionProps> = ({
  activeCurrency,
  onOpenConsultation
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentOption>(TREATMENTS[0]);
  const [urgency, setUrgency] = useState<string>('next-30-days');
  const [hotelTier, setHotelTier] = useState<'bosphorus' | 'executive'>('bosphorus');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  // Price Calculation logic
  const hotelPremiumEur = hotelTier === 'bosphorus' ? 250 : 0;
  const guestSurchargeEur = guestCount > 1 ? (guestCount - 1) * 180 : 0;
  const totalPriceEur = selectedTreatment.basePriceEur + hotelPremiumEur + guestSurchargeEur;

  const ukSavings = calculateSavings(totalPriceEur, selectedTreatment.ukPriceEur, activeCurrency);
  const usSavings = calculateSavings(totalPriceEur, selectedTreatment.usPriceEur, activeCurrency);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setCurrentStep(4);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }, 700);
  };

  const getWhatsAppShareUrl = () => {
    const text = encodeURIComponent(
      `Merhaba HealthTour AI Ekibi,\n\nOluşturduğum AI Seyahat Planı:\n` +
      `• Tedavi: ${selectedTreatment.name}\n` +
      `• Tahmini Fiyat: ${formatPrice(totalPriceEur, activeCurrency)} (Her Şey Dahil)\n` +
      `• Konaklama: ${hotelTier === 'bosphorus' ? '5★ Boğaz Manzaralı Lüks Süit' : '5★ Executive Şehir Oteli'}\n` +
      `• Seyahat Planı: ${urgency}\n` +
      `• Kişi Sayısı: ${guestCount}\n\n` +
      `Doktor ön analizi ve resmi teklif detaylarını almak istiyorum.`
    );
    return `https://wa.me/905425305235?text=${text}`;
  };

  return (
    <section id="ai-planner" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-clinical-cyan mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI MEDICAL TRIP GENERATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Kişiselleştirilmiş Sağlık Seyahatinizi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan via-teal-300 to-emerald-400">
              Yapay Zeka ile Planlayın
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Tedavinizi ve konaklama tercihlerinizi seçin; yapay zeka anında 4 günlük operasyon takviminizi, 
            tüm transferleri ve İngiltere/ABD ile kıyaslamalı net maliyet dökümünüzü çıkarsın.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span className={currentStep >= 1 ? 'text-clinical-cyan font-bold' : ''}>1. Tedavi</span>
            <span className={currentStep >= 2 ? 'text-clinical-cyan font-bold' : ''}>2. Özelleştirme</span>
            <span className={currentStep >= 3 ? 'text-clinical-cyan font-bold' : ''}>3. VIP Otel & Tarih</span>
            <span className={currentStep >= 4 ? 'text-clinical-cyan font-bold' : ''}>4. AI Sonuç Raporu</span>
          </div>
          <div className="mt-2 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-clinical-cyan to-emerald-400 transition-all duration-500"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Planner Workspace Card (Glassmorphic) */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
          
          {/* STEP 1: Treatment Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Hangi tedaviyi planlamak istiyorsunuz?</span>
                </h3>
                <span className="text-xs text-gray-400 font-mono">Adım 1 / 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TREATMENTS.map((treatment) => {
                  const isSelected = selectedTreatment.id === treatment.id;
                  return (
                    <button
                      key={treatment.id}
                      onClick={() => setSelectedTreatment(treatment)}
                      className={`text-left p-5 rounded-2xl transition-all border ${
                        isSelected
                          ? 'bg-cyan-500/10 border-clinical-cyan shadow-glow-cyan'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-base text-white">{treatment.name}</span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-clinical-cyan text-obsidian-950 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed mb-3">
                        {treatment.shortDesc}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-mono">
                        <span className="text-gray-400">Her Şey Dahil:</span>
                        <span className="text-clinical-cyan font-bold">
                          {formatPrice(treatment.basePriceEur, activeCurrency)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-indigo-600 text-obsidian-950 font-bold text-sm shadow-glow-cyan hover:opacity-95 transition-all"
                >
                  <span>Sonraki Adım: Hedef & Detaylar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Customization & Objectives */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedTreatment.name} İçin Tedavi Detayları
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Bu bilgiler AI motorunun operasyon süresini ve greft/doktor ekibini ayarlamasını sağlar.
                  </p>
                </div>
                <span className="text-xs text-gray-400 font-mono">Adım 2 / 3</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                <div className="text-sm font-semibold text-gray-200">
                  Paket Kapsamındaki Standart Özellikler:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  {selectedTreatment.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">
                  Ne kadar sürede operasyonu planlamak istiyorsunuz?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'urgent-14', label: 'Hemen / 14 Gün İçinde', badge: 'Hızlı Randevu' },
                    { id: 'next-30-days', label: 'Gelecek 1 Ay İçinde', badge: 'Popüler' },
                    { id: 'flexible', label: '1 - 3 Ay Sonrası', badge: 'Esnek Tarih' },
                  ].map((timeOpt) => (
                    <button
                      key={timeOpt.id}
                      onClick={() => setUrgency(timeOpt.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        urgency === timeOpt.id
                          ? 'bg-cyan-500/10 border-clinical-cyan text-white shadow-glow-cyan'
                          : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-mono text-cyan-400 mb-1">{timeOpt.badge}</div>
                      <div className="text-sm font-semibold">{timeOpt.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Geri</span>
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-indigo-600 text-obsidian-950 font-bold text-sm shadow-glow-cyan hover:opacity-95 transition-all"
                >
                  <span>Sonraki Adım: Otel & VIP Seçenekleri</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Accommodation & Guest */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Konaklama ve VIP Transfer Tercihiniz
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Tüm paketlerimizde VIP Mercedes havalimanı ve hastane transferleri dahildir.
                  </p>
                </div>
                <span className="text-xs text-gray-400 font-mono">Adım 3 / 3</span>
              </div>

              {/* Hotel Tier Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setHotelTier('bosphorus')}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    hotelTier === 'bosphorus'
                      ? 'bg-cyan-500/10 border-clinical-cyan shadow-glow-cyan'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-base flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      5★ Boğaz Manzaralı Lüks Otel
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-clinical-cyan font-bold">
                      Önerilen
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">
                    Marriott / Swissôtel The Bosphorus vb. Boğaz manzaralı geniş süit, açık büfe kahvaltı ve spa erişimi.
                  </p>
                  <div className="text-xs font-mono text-cyan-400">
                    +{formatPrice(250, activeCurrency)} VIP Yükseltme
                  </div>
                </button>

                <button
                  onClick={() => setHotelTier('executive')}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    hotelTier === 'executive'
                      ? 'bg-cyan-500/10 border-clinical-cyan shadow-glow-cyan'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-base flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      5★ Executive Şehir Oteli
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      Standart Paket
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">
                    Hastaneye 10 dakika mesafede lüks 5 yıldızlı iş ve konfor oteli konaklaması.
                  </p>
                  <div className="text-xs font-mono text-emerald-400">
                    Paket Fiyatına Dahil
                  </div>
                </button>
              </div>

              {/* Guests Count */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-400" />
                    Yanınızda refakatçi getirecek misiniz?
                  </div>
                  <div className="text-xs text-gray-400">
                    Refakatçinizin çift kişilik oda konaklaması ve tüm VIP transferleri dahildir.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {[1, 2].map((num) => (
                    <button
                      key={num}
                      onClick={() => setGuestCount(num)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                        guestCount === num
                          ? 'bg-clinical-cyan text-obsidian-950 shadow-glow-cyan'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {num === 1 ? 'Yalnızım (1 Kişi)' : '+1 Refakatçi'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Geri</span>
                </button>
                <button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan via-teal-300 to-emerald-400 text-obsidian-950 font-extrabold text-sm shadow-glow-cyan hover:opacity-95 transition-all"
                >
                  {isCalculating ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>AI Planı Oluşturuluyor...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>AI Seyahat Planımı Hesapla</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: AI Results & Final Itinerary */}
          {currentStep === 4 && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Top Success Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-indigo-500/10 border border-cyan-500/30">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-clinical-cyan mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>AI TEDAVİ PROTOKOLÜ OLUŞTURULDU</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {selectedTreatment.name} • VIP Seyahat Planı
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    İstanbul'da {selectedTreatment.stayDays} gece konaklama • 
                    İyileşme süresi: {selectedTreatment.recoveryDays} gün
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono text-gray-400">Her Şey Dahil Paket</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan to-emerald-400">
                    {formatPrice(totalPriceEur, activeCurrency)}
                  </div>
                  <div className="text-[11px] text-emerald-400 font-mono">
                    Tüm Otel + Transfer + Operasyon Dahil
                  </div>
                </div>
              </div>

              {/* Global Savings Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-gray-400">İngiltere (NHS / Private) Kıyaslaması</div>
                    <div className="text-lg font-bold text-gray-200">
                      {formatPrice(selectedTreatment.ukPriceEur, activeCurrency)}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs font-mono">
                      {ukSavings.savedAmountFormatted} Tasarruf (%{ukSavings.percent})
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-gray-400">ABD (Klinik Ortalaması) Kıyaslaması</div>
                    <div className="text-lg font-bold text-gray-200">
                      {formatPrice(selectedTreatment.usPriceEur, activeCurrency)}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs font-mono">
                      {usSavings.savedAmountFormatted} Tasarruf (%{usSavings.percent})
                    </span>
                  </div>
                </div>
              </div>

              {/* 4-Day Treatment Journey Timeline */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Kişiselleştirilmiş 4 Günlük Tıbbi Seyahat Takvimi</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                    <div className="text-[10px] font-mono font-bold text-cyan-400">1. GÜN: VARIŞ</div>
                    <div className="text-xs font-bold text-white">VIP Karşılama</div>
                    <div className="text-[11px] text-gray-400">
                      İstanbul Havalimanı kapısında özel Maybach transferi ve 5★ otele yerleşim.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-cyan-500/30 bg-cyan-500/[0.03] space-y-1.5">
                    <div className="text-[10px] font-mono font-bold text-clinical-cyan">2. GÜN: OPERASYON</div>
                    <div className="text-xs font-bold text-white">JCI Hastane & Cerrahi</div>
                    <div className="text-[11px] text-gray-400">
                      Doktor konsültasyonu, kan tahlilleri ve uzman hekim kontrolünde işlem.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                    <div className="text-[10px] font-mono font-bold text-emerald-400">3. GÜN: KONTROL</div>
                    <div className="text-xs font-bold text-white">Medikal Bakım</div>
                    <div className="text-[11px] text-gray-400">
                      İlk yıkama/pansuman, ilaç seti teslimi ve Boğaz/şehir turu istirahati.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                    <div className="text-[10px] font-mono font-bold text-indigo-400">4. GÜN: UĞURLAMA</div>
                    <div className="text-xs font-bold text-white">Dönüş & AI Takip</div>
                    <div className="text-[11px] text-gray-400">
                      VIP araçla havalimanına transfer ve 12 aylık uzaktan AI kontrol başlangıcı.
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs: WhatsApp & Instant Booking */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium transition-colors"
                >
                  Planı Baştan Düzenle
                </button>

                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={getWhatsAppShareUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-obsidian-950 font-extrabold text-xs tracking-wide shadow-glow-emerald transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-obsidian-950" />
                    <span>Bu Planı WhatsApp ile Doktora Gönder</span>
                  </a>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-indigo-600 text-white font-extrabold text-xs tracking-wide shadow-glow-cyan hover:opacity-90 transition-all"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Resmi VIP Teklifini Onayla</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
