import React from 'react';
import { Language } from '../i18n/translations';
import { ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';

interface OfficialTrustBarProps {
  language: Language;
}

export const OfficialTrustBar: React.FC<OfficialTrustBarProps> = ({ language }) => {
  const isTr = language === 'TR';

  const items = [
    {
      icon: ShieldCheck,
      badge: isTr ? 'T.C. SAĞLIK BAKANLIĞI' : 'MINISTRY OF HEALTH',
      title: isTr ? 'Yetkili Sağlık Turizmi Kuruluşu' : 'Authorized Medical Tourism Partner',
      subtitle: isTr ? 'Resmi Belge No: AK-0924' : 'Official License: AK-0924',
      pill: isTr ? 'Devlet Onaylı' : 'State Verified'
    },
    {
      icon: Award,
      badge: 'JCI ACCREDITED',
      title: isTr ? 'Altın Mühür Hastane Ağı' : 'Gold Seal Clinical Network',
      subtitle: isTr ? 'Global Klinik Standartlar' : 'Global Surgical Excellence',
      pill: isTr ? 'A+ Sınıfı Cerrahi' : 'A+ Grade Surgery'
    },
    {
      icon: Building2,
      badge: 'TÜRSAB ONAYLI',
      title: isTr ? 'A Grubu VIP Seyahat Sağlayıcısı' : 'Group A VIP Travel Provider',
      subtitle: isTr ? 'Lisanslı Transfer & Konaklama' : 'Licensed Luxury Logistics',
      pill: isTr ? 'Yasal Güvence' : 'Licensed Logistics'
    },
    {
      icon: CheckCircle2,
      badge: isTr ? '%100 GÜVENCE' : '100% COVERAGE',
      title: isTr ? 'Tıbbi Komplikasyon Sigortası' : 'Medical Complication Insurance',
      subtitle: isTr ? 'Ömür Boyu Garanti Pasaportu' : 'Lifetime Warranty Passport',
      pill: isTr ? 'Tam Koruma' : 'Full Protection'
    }
  ];

  return (
    <section id="accreditations" className="relative z-20 -mt-2 bg-[#FAF7F2] border-y border-[#E2DAD0] py-6 px-6 sm:px-12 text-[#15100B]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Micro Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E8DFD4] text-[11px] font-mono tracking-wider uppercase text-[#6B5A49]">
          <div className="flex items-center gap-2 font-bold text-[#1F1710]">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>{isTr ? 'RESMİ AKREDİTASYON & YASAL YETKİ BELGELERİ' : 'OFFICIAL ACCREDITATIONS & LICENSED CREDENTIALS'}</span>
          </div>
          <div className="text-[10px] text-[#7A6B5C] mt-1 sm:mt-0">
            {isTr ? 'TÜM OPERASYONLAR KORUMA VE DENETİM ALTINDADIR' : 'ALL SURGICAL PROTOCOLS LEGALLY PROTECTED & AUDITED'}
          </div>
        </div>

        {/* 4 Trust Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#EBE4DA] shadow-sm hover:border-[#C4A482] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF4ED] border border-[#DFCBB5] flex items-center justify-center shrink-0 text-[#7A614A]">
                  <Icon className="w-5 h-5 text-[#8C6D4A]" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#8C6D4A] uppercase">
                      {item.badge}
                    </span>
                    <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-[#FAF4ED] text-[#7A614A] border border-[#DFCBB5]/80 shrink-0">
                      {item.pill}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#1C140D] leading-tight truncate">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-[#635546] font-mono mt-0.5 truncate">
                    {item.subtitle}
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
