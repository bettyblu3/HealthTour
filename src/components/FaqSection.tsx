import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Neden Türkiye ve HealthTour AI sağlık turizminde küresel olarak tercih ediliyor?',
      a: 'Türkiye; JCI akredite ileri teknoloji hastaneleri, on binlerce vaka tecrübesine sahip board sertifikalı cerrahları ve Avrupa/ABD’ye kıyasla %70’e varan maliyet avantajıyla dünyanın lider medikal turizm merkezidir. HealthTour AI ise bu süreci şeffaf yapay zeka planlaması, 5 yıldızlı Boğaz otelleri ve VIP transferlerle lüks bir deneyime dönüştürür.'
    },
    {
      q: 'Her Şey Dahil VIP Pakete tam olarak hangi hizmetler dahildir?',
      a: 'Paketlerimize; cerrahi operasyon, hastane ve hekim ücretleri, 5 yıldızlı otel konaklaması (kahvaltı dahil), özel şoförlü VIP Mercedes havalimanı ve hastane transferleri, 1 yıllık medikal şampuan/ilaç seti, çok dilli kişisel sağlık asistanı ve ömür boyu garanti sertifikası dahildir. Kesinlikle sonradan çıkan gizli masraf yoktur.'
    },
    {
      q: 'Operasyondan sonra ülkeme döndüğümde hekim kontrolü nasıl devam eder?',
      a: 'HealthTour AI platformumuz üzerinden 1., 3., 6. ve 12. aylarda iyileşme fotoğraflarınızı hekiminize iletirsiniz. Yapay zeka ve cerrahi ekibimiz iyileşme seyrinizi takip eder, sorularınızı 7/24 WhatsApp üzerinden anında yanıtlar.'
    },
    {
      q: 'Vize ve uçuş bileti konusunda destek sağlıyor musunuz?',
      a: 'Evet. Turkish Airlines ile olan sağlık turizmi partnerliğimiz sayesinde uçak biletinizde özel indirimlerden faydalanabilirsiniz. Vize gereksinimi duyan hastalarımıza ise T.C. Sağlık Bakanlığı onaylı resmi tıbbi davet mektubu 24 saat içinde iletilerek hızlı e-vize alımı sağlanır.'
    },
    {
      q: 'Ödeme nasıl yapılır? Hangi para birimleri geçerlidir?',
      a: 'Ödemenizi operasyon günü hastanede nakit (EUR, USD, GBP, TL) veya uluslararası kredi kartı ile yapabilirsiniz. Kliniğimizde döviz kuru kaybı yaşamadan en güncel merkez bankası kurları uygulanır.'
    }
  ];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-clinical-cyan mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>SIKÇA SORULAN SORULAR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Merak Ettiğiniz{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan to-emerald-400">
              Her Şey
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Sağlık seyahatinizin tüm detayları hakkında şeffaf ve açık bilgilendirme.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-clinical-cyan transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
