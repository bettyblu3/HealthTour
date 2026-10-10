import React, { useState } from 'react';
import { Language } from '../i18n/translations';
import { LeomeEmblem } from './LeomeLogo';
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface QuickWhatsAppChatProps {
  language: Language;
  isVisible?: boolean;
}

export const QuickWhatsAppChat: React.FC<QuickWhatsAppChatProps> = ({ language, isVisible = true }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [customText, setCustomText] = useState<string>('');

  const WHATSAPP_PHONE = '905425305235'; // Official HealthTour clinic line

  const topicsTR = [
    { id: 'hair', label: '💇‍♂️ Saç Ekimi (Safir/DHI)', msg: 'Merhaba, Safir FUE / DHI Saç Ekimi VIP protokolü hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.' },
    { id: 'dental', label: '🦷 Hollywood Smile & Diş', msg: 'Merhaba, Hollywood Smile ve E-Max porselen kaplama tedavisi için bilgi almak istiyorum.' },
    { id: 'plastics', label: '💎 Burun & Yüz Germe', msg: 'Merhaba, Piezo Rinoplasti / Deep Plane Yüz Germe cerrahisi hakkında bilgi almak istiyorum.' },
    { id: 'breast_body', label: '✨ Meme & Vücut Estetiği', msg: 'Merhaba, Meme estetiği ve 360 Vaser Liposuction ameliyat paketleri hakkında görüşmek istiyorum.' },
    { id: 'eyes', label: '👁️ Zeiss SMILE Pro Göz', msg: 'Merhaba, Zeiss SMILE Pro No-Touch göz lazeri operasyonu için bilgi almak istiyorum.' },
    { id: 'vip', label: '🏨 VIP Süit & Transfer', msg: 'Merhaba, 5★ Boğaz manzaralı süit ve Maybach VIP transfer dahil her şey dahil tedavi süreci hakkında görüşmek istiyorum.' }
  ];

  const topicsEN = [
    { id: 'hair', label: '💇‍♂️ Hair Restoration (FUE/DHI)', msg: 'Hello, I would like to inquire about your Sapphire FUE & DHI Hair Restoration VIP protocols.' },
    { id: 'dental', label: '🦷 Hollywood Smile & Veneers', msg: 'Hello, I would like a consultation regarding Hollywood Smile architecture and dental aesthetics in Istanbul.' },
    { id: 'plastics', label: '💎 Rhinoplasty & Facelift', msg: 'Hello, I would like to consult with your board-certified plastic surgery team for nose/face surgery.' },
    { id: 'breast_body', label: '✨ Breast & Body Aesthetics', msg: 'Hello, I would like to inquire about Breast Surgery / 360 Vaser Liposuction procedures.' },
    { id: 'eyes', label: '👁️ Zeiss SMILE Laser', msg: 'Hello, I am interested in Zeiss SMILE Pro refractive laser surgery details and availability.' },
    { id: 'vip', label: '🏨 5★ Suites & Concierge', msg: 'Hello, I would like to learn more about your all-inclusive 5-star Bosphorus suites and VIP transfers.' }
  ];

  const currentTopics = language === 'TR' ? topicsTR : topicsEN;

  if (!isVisible) return null;

  const handleTopicClick = (msg: string) => {
    setSelectedTopic(msg);
    setCustomText(msg);
  };

  const handleSend = () => {
    const message = customText.trim() || (language === 'TR' 
      ? 'Merhaba, HealthTour & Partners VIP sağlık hizmetleri hakkında bilgi almak istiyorum.' 
      : 'Hello, I would like to inquire about HealthTour & Partners VIP medical concierge services.');
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end pointer-events-none">
      
      {/* Expanded Interactive Chat Modal (WARM LUXURY CREAM & ALABASTER PALETTE) */}
      {isOpen && (
        <div 
          style={{ backgroundColor: '#FAF7F2', borderColor: '#E3DCcf' }}
          className="pointer-events-auto mb-4 w-[92vw] sm:w-[390px] rounded-2xl border shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300 ring-1 ring-black/10"
        >
          
          {/* Header (Warm Sand & Ivory Luxury Banner) */}
          <div 
            style={{ backgroundColor: '#F1ECE3', borderColor: '#E2DBD0' }}
            className="p-4 border-b flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <LeomeEmblem size={40} className="ring-1 ring-[#09221C]/20 shadow-sm" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#F1ECE3] animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#09221C] tracking-tight leading-tight">
                  HealthTour &amp; Partners
                </div>
                <div className="text-[10px] font-mono text-[#186049] flex items-center gap-1.5 mt-0.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{language === 'TR' ? '24/7 Canlı Sağlık Masası' : '24/7 International Medical Desk'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-[#E5DFD4] hover:bg-[#D9D1C4] text-[#09221C] flex items-center justify-center transition-colors border border-[#D5CDBC]"
              title="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body (Soft Warm Cream Surface) */}
          <div 
            style={{ backgroundColor: '#FAF7F2' }}
            className="p-4 space-y-3.5 text-xs overflow-y-auto max-h-[380px]"
          >
            
            {/* Incoming Welcome Bubble (Crisp White Card with Soft Shadow) */}
            <div className="flex items-start gap-2.5">
              <LeomeEmblem size={24} className="mt-1 shrink-0" />
              <div 
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E7E1D5' }}
                className="border rounded-2xl rounded-tl-sm p-3.5 text-[#2B3D36] text-xs leading-relaxed max-w-[88%] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="text-[#09221C] font-bold mb-1 flex items-center gap-1.5">
                  <span>{language === 'TR' ? 'Hoş Geldiniz' : 'Welcome'}</span>
                  <span className="text-sm">👋</span>
                </div>
                <p className="text-[11.5px] leading-relaxed text-[#354841]">
                  {language === 'TR'
                    ? 'Uzman cerrahi heyetimiz, VIP paketler ve size özel transfer/konaklama detayları hakkında WhatsApp üzerinden anında yardımcı olabiliriz.'
                    : 'Our senior surgical faculty and patient coordinators are available to assist you with bespoke treatment plans on WhatsApp.'}
                </p>
                <div className="mt-2 text-[9px] font-mono text-[#768780] text-right font-medium">
                  {language === 'TR' ? 'Şimdi • Çevrimiçi' : 'Now • Online'}
                </div>
              </div>
            </div>

            {/* Topic Select Prompt */}
            <div className="pt-1">
              <div className="text-[10px] font-mono text-[#186049] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#186049]" />
                <span>{language === 'TR' ? 'Hızlı Konu Seçin:' : 'Select Topic:'}</span>
              </div>

              {/* Topic Pills: 2-column clean layout for effortless clicking */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {currentTopics.map((item) => {
                  const isChosen = selectedTopic === item.msg;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleTopicClick(item.msg)}
                      style={{
                        backgroundColor: isChosen ? '#09221C' : '#FFFFFF',
                        borderColor: isChosen ? '#09221C' : '#E3DDD1',
                        color: isChosen ? '#FFFFFF' : '#1C3129'
                      }}
                      className={`text-left px-2.5 py-2 rounded-xl text-[11px] font-medium border transition-all flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-[#CFC5B3] hover:bg-[#F3EFE7]`}
                    >
                      <span className="truncate pr-1">{item.label}</span>
                      {isChosen && <CheckCircle2 className="w-3.5 h-3.5 text-[#9EF7D7] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Action Input Area (Warm Ivory Footer) */}
          <div 
            style={{ backgroundColor: '#F1ECE3', borderColor: '#E2DBD0' }}
            className="p-3.5 border-t flex flex-col gap-2.5"
          >
            <div className="relative">
              <textarea
                rows={2}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={language === 'TR' ? 'Mesajınızı yazın veya yukarıdaki konulara dokunun...' : 'Type your message or select an option above...'}
                style={{ backgroundColor: '#FFFFFF', borderColor: '#D9D2C4' }}
                className="w-full rounded-xl border px-3 py-2 text-xs text-[#09221C] placeholder-[#8C9C95] focus:outline-none focus:border-[#09221C] resize-none font-sans shadow-inner"
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-all shadow-[0_4px_16px_rgba(37,211,102,0.35)] active:scale-[0.99] font-sans"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>{language === 'TR' ? 'WhatsApp ile Hemen Bağlan' : 'Connect via WhatsApp'}</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Compact Circular FAB Trigger Button (Never Obstructs Content) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        title={language === 'TR' ? 'WhatsApp Hızlı Danışman' : 'WhatsApp Concierge'}
        aria-label="WhatsApp"
      >
        {/* Subtle Online Ping Indicator */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-white animate-ping pointer-events-none" />
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-white pointer-events-none" />

        {/* Dynamic Icon: MessageCircle when closed, X when open */}
        {isOpen ? (
          <X className="w-6 h-6 text-white stroke-[2.5]" />
        ) : (
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        )}

        {/* Elegant Desktop Floating Tooltip (Visible on Hover Only, Left Side) */}
        <span className="hidden lg:group-hover:flex absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-full bg-[#1A120B]/95 backdrop-blur-md text-[#FAF7F2] text-xs font-sans font-medium border border-[#8C7154]/40 shadow-xl pointer-events-none transition-all duration-200">
          <span className="font-bold text-[#D8BEA3] mr-1.5">●</span>
          {language === 'TR' ? '7/24 Canlı WhatsApp Danışmanı' : '24/7 WhatsApp Concierge'}
        </span>
      </button>

    </div>
  );
};
