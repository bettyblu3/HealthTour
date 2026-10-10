import React from 'react';
import { ShieldCheck, Award, Plane, CheckCircle2, Building2 } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  const credentials = [
    {
      title: 'T.C. Sağlık Bakanlığı',
      desc: 'Yetkili Sağlık Turizmi Kuruluşu',
      icon: ShieldCheck,
      color: 'text-red-400'
    },
    {
      title: 'JCI Akreditasyonu',
      desc: 'Joint Commission Int. Gold Seal',
      icon: Award,
      color: 'text-amber-400'
    },
    {
      title: 'Turkish Airlines',
      desc: 'Resmi Sağlık Turizmi Uçuş İndirimi',
      icon: Plane,
      color: 'text-cyan-400'
    },
    {
      title: 'TÜV SÜD Kalite Güvencesi',
      desc: 'ISO 9001 & Hijyen Standartları',
      icon: CheckCircle2,
      color: 'text-emerald-400'
    },
    {
      title: '5★ Marriott & Hilton',
      desc: 'VIP Partner Otel Konaklaması',
      icon: Building2,
      color: 'text-indigo-400'
    }
  ];

  return (
    <div className="border-y border-white/10 bg-obsidian-900/60 backdrop-blur-md py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500">
            Resmi Akreditasyonlar & Küresel Hizmet Ortaklıkları
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
              >
                <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-200">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-gray-400 font-sans">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
