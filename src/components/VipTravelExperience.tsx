import React from 'react';
import { Language } from '../i18n/translations';
import { Car, Hotel, Languages, Stethoscope, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface VipTravelExperienceProps {
  language: Language;
  onOpenConsultation: () => void;
  onScrollToPlanner: () => void;
}

export const VipTravelExperience: React.FC<VipTravelExperienceProps> = ({
  language,
  onOpenConsultation,
  onScrollToPlanner,
}) => {
  const isTr = language === 'TR';

  const pillars = [
    {
      icon: Car,
      num: '01',
      tag: isTr ? 'Özel Şoförlü Maybach & Sprinter' : 'Private Chauffeur Maybach',
      title: isTr ? 'Havalimanı VIP Karşılama & Transfer' : 'VIP Airport Chauffeur & Transfers',
      desc: isTr 
        ? 'İstanbul Havalimanı (IST) veya Sabiha Gökçen (SAW) kapısında özel karşılama. Lüks Maybach veya VIP Mercedes Sprinter ile tüm klinik, otel ve havalimanı transferleriniz sınırsız olarak sağlanır.'
        : 'VIP meet-and-greet at IST or SAW airports. Seamless private chauffeur transfers between airport, luxury hotel, and accredited surgical campus in a Mercedes Maybach.',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
      highlights: isTr 
        ? ['VIP Terminal Lounge Karşılama', 'Özel Şoför & Wi-Fi Donanımlı Araç', 'Tüm Randevulara Özel Transfer']
        : ['Airport VIP Gate Greeting', 'Wi-Fi & Refreshments Chauffeur', 'Direct Hospital & Hotel Shuttles']
    },
    {
      icon: Hotel,
      num: '02',
      tag: isTr ? '5 Yıldızlı Boğaz Kıyısında Konaklama Konforu' : '5-Star Bosphorus Waterfront Stay',
      title: isTr ? '5★ Boğaz Manzaralı Lüks Süit Konaklaması' : '5-Star Bosphorus Luxury Suite Stay',
      desc: isTr
        ? 'İyileşme sürecinizi stresten uzak, Boğaz manzaralı seçkin 5 yıldızlı süitlerde geçirin. Mandarin Oriental, Four Seasons veya Swissotel iş ortaklığımız ile refakatçiniz dahil her şey dahil konaklama.'
        : 'Rest and recover in tranquil 5-star suites with panoramic Bosphorus views. In partnership with Mandarin Oriental and Swissotel, all-inclusive for you and your companion.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      highlights: isTr
        ? ['Refakatçiniz Dahil Oda & Kahvaltı', 'Boğaz Manzaralı Özel Balkon', 'Otel İçi Spa & Dinlenme Alanı']
        : ['Companion Included at No Cost', 'Private Waterfront Balconies', 'Luxury Post-Op Comfort']
    },
    {
      icon: Languages,
      num: '03',
      tag: isTr ? 'Kişisel Sağlık Hostu' : 'Dedicated Personal Host',
      title: isTr ? 'Özel Medikal Tercüman & 7/24 Rehber' : 'Private Medical Interpreter 24/7',
      desc: isTr
        ? 'Yabancı bir ülkede dil bariyeri olmadan tedavi olun. Ana dilinizi ana dili gibi konuşan özel medikal tercümanınız konsültasyondan taburculuğa kadar her an yanınızda.'
        : 'Zero language barriers. Your assigned certified medical translator accompanies you across all physician consultations, surgical checks, and admissions.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      highlights: isTr
        ? ['Ana Dilde Birebir Medikal Rehberlik', '24/7 WhatsApp & Telefon Erişimi', 'Şehir İçi VIP Concierge Desteği']
        : ['Fluent Native Medical Translation', '24/7 Personal WhatsApp Liaison', 'Istanbul Concierge Guidance']
    },
    {
      icon: Stethoscope,
      num: '04',
      tag: isTr ? 'Özel Hemşirelik & Klinik Takip' : 'Private In-Suite Nursing Care',
      title: isTr ? 'Otelde Özel Hemşirelik Hizmeti & 12 Ay Dijital Takip' : 'In-Suite Private Nursing Care & 12-Month Follow-Up',
      desc: isTr
        ? 'Operasyon sonrası otel odanıza gelen uzman hemşirelerimiz pansuman ve vital kontrollerinizi yapar. Ülkenize döndükten sonra da 12 ay boyunca cerrahınızla dijital kontrolleriniz sürer.'
        : 'Specialist clinical nurses visit your hotel suite for routine dressing and vital checks. Enjoy 12 months of structured remote consultations once back home.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      highlights: isTr
        ? ['Otel Odasında Hemşirelik Ziyareti', 'Orijinal İlaç & Medikal Bakım Paketi', 'Ömür Boyu Uluslararası Garanti']
        : ['Hotel Suite Nursing Visits', 'Full Medical Care & Rx Kit', 'Lifetime Global Warranty Certificate']
    }
  ];

  return (
    <section id="vip-travel" className="relative py-24 sm:py-32 bg-[#FFFFFF] px-6 sm:px-12 border-b border-[#E8E2D8] text-[#15100B] overflow-hidden">
      
      {/* Subtle Luminous Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(216,190,163,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(196,164,130,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px]">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#E8E2D8]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EE] border border-[#DFCBB5] text-xs font-mono font-bold tracking-widest text-[#7A614A] uppercase mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D4A]" />
              <span>{isTr ? '5★ ALL-INCLUSIVE VIP SEYAHAT STANDARDI' : '5★ ALL-INCLUSIVE VIP TRAVEL PROTOCOL'}</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#15100B] leading-[1.08]">
              {isTr ? (
                <>
                  VIP Seyahat, Konaklama & <br />
                  <span className="text-[#7A614A]">5★ İyileşme Deneyimi</span>
                </>
              ) : (
                <>
                  VIP Travel, Suites & <br />
                  <span className="text-[#7A614A]">5★ Recovery Experience</span>
                </>
              )}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#57493C] font-normal leading-relaxed max-w-2xl">
              {isTr
                ? 'Tedaviniz sadece ameliyathanede bitmez. İstanbul’a indiğiniz ilk andan operasyon sonrası 12. aya kadar, 5 yıldızlı Boğaz süitleri ve özel Maybach transferlerle her detayı sizin için kusursuzca yönetiyoruz.'
                : 'Your journey extends far beyond the operating room. From arrival at Istanbul to your 12-month milestone, we manage all private transfers, 5-star suites, and recovery protocols.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onScrollToPlanner}
              className="py-3.5 px-6 rounded-full bg-[#15100B] hover:bg-[#7A614A] text-white font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-md group"
            >
              <span>{isTr ? 'Paketinizi Oluşturun & Fiyatı Görün' : 'Calculate Your VIP Package'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="py-3.5 px-6 rounded-full border border-[#D5C7B7] hover:border-[#7A614A] text-[#15100B] hover:text-[#7A614A] bg-[#FAF8F5] font-mono text-xs transition-colors text-center"
            >
              {isTr ? 'VIP Ön Danışmanlık Al' : 'Request VIP Review'}
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid (Crisp Luminous White Luxury Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl p-6 sm:p-8 bg-[#FAF8F5] hover:bg-white border border-[#E8E2D8] hover:border-[#C4A482] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#EDE5DB]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E0D4C5] shadow-sm flex items-center justify-center text-[#7A614A] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#7A614A] uppercase">
                        {item.tag}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-bold text-[#A89887]">
                      {item.num} / 04
                    </span>
                  </div>

                  {/* 16:9 Image Preview */}
                  <div className="my-5 relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#E0D4C5] shadow-inner bg-[#EFEBE4]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[10px] flex items-center gap-1.5 shadow">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{isTr ? 'Her Şey Dahil VIP Protokolü' : 'All-Inclusive Protocol'}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#15100B] group-hover:text-[#7A614A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#57493C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="mt-6 pt-5 border-t border-[#EDE5DB] space-y-2">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-[#2E2319] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8C6D4A] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FAF6EE] border border-[#DFCBB5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-[#D5C2AA] flex items-center justify-center shrink-0 shadow-sm text-[#7A614A]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#15100B]">
                {isTr ? 'Tam Şeffaflık & Gizli Ücretsiz Garanti' : 'Full Transparency & No Hidden Costs'}
              </div>
              <div className="text-xs text-[#6B5A49] font-mono mt-0.5">
                {isTr 
                  ? 'Fiyat hesaplayıcımızda gördüğünüz tutar; otel, transfer, cerrahi ve kontroller dahil nihai fiyattır.' 
                  : 'All fees shown in our architect include accommodation, VIP chauffeur, surgery, and 12-month care.'}
              </div>
            </div>
          </div>

          <button
            onClick={onScrollToPlanner}
            className="py-3 px-6 rounded-full bg-[#7A614A] hover:bg-[#15100B] text-white text-xs font-bold font-mono tracking-wider transition-colors shrink-0 shadow-md"
          >
            {isTr ? 'Şeffaf Fiyatları İncele ↓' : 'View Transparent Rates ↓'}
          </button>
        </div>

      </div>

    </section>
  );
};
