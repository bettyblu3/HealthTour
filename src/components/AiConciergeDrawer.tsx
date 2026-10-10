import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, ArrowRight, PhoneCall } from 'lucide-react';

interface AiConciergeDrawerProps {
  onOpenPlanner: () => void;
  onOpenConsultation: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AiConciergeDrawer: React.FC<AiConciergeDrawerProps> = ({
  onOpenPlanner,
  onOpenConsultation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Merhaba! Ben HealthTour AI Klinik Asistanıyım. Tedavi yöntemleri, VIP transfer, 5 yıldızlı otel paketleri veya operasyon süreciyle ilgili sorularınızı 7/24 yanıtlamaya hazırım. Nasıl yardımcı olabilirim?',
      timestamp: 'Şimdi'
    }
  ]);

  const presetQuestions = [
    {
      label: 'Safir FUE ile DHI farkı nedir?',
      answer: 'Safir FUE tekniğinde V-şekilli safir uçlarla mikro kanallar açılır ve 5.000+ greft ekilebilir. DHI tekniğinde ise Choi implanter kalemi ile kanal açılmadan direkt ekim yapılır; tıraşsız saç ekimi ve saç aralarını sıklaştırmak için idealdir. Her iki yöntem de ömür boyu garanti sertifikalıdır.'
    },
    {
      label: 'Vize ve Havalimanı Karşılama nasıl işliyor?',
      answer: 'İstanbul Havalimanı kapısında özel şoförlü VIP Mercedes (Maybach veya Vito) aracınız ve adınızın yazılı olduğu tabela ile karşılanırsınız. Vize gereksinimi olan hastalarımıza Sağlık Bakanlığı onaylı resmi tıbbi davet mektubu göndererek e-vize sürecini 24 saatte tamamlıyoruz.'
    },
    {
      label: 'Otel ve Refakatçi fiyata dahil mi?',
      answer: 'Evet! Tüm paketlerimize 5 yıldızlı lüks otel konaklaması (Hilton / Marriott / Swissôtel) ve kahvaltı dahildir. Yanınızda getireceğiniz 1 refakatçi için ekstra transfer veya çift kişilik oda ücreti alınmaz.'
    },
    {
      label: 'Ömür boyu garanti sertifikası neleri kapsar?',
      answer: 'Kliniğimizde ekilen saç greftlerinin %95+ tutunma oranı uluslararası sertifika ile garanti altındadır. Olası bir dökülme durumunda ücretsiz revizyon seansı hakkınız ömür boyu saklıdır.'
    }
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: 'Şimdi'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // AI Simulated Response
    setTimeout(() => {
      let reply = 'Sorunuzu uzman medikal koordinatörlerimize ilettim. Kişisel sağlık durumunuz için en doğru analiz fotoğraflarınızın hekimimiz tarafından incelenmesidir.';
      
      const foundPreset = presetQuestions.find(p => p.label === text);
      if (foundPreset) {
        reply = foundPreset.answer;
      } else if (text.toLowerCase().includes('fiyat') || text.toLowerCase().includes('ücret') || text.toLowerCase().includes('maliyet')) {
        reply = 'Her Şey Dahil paketlerimiz 1.950 €\'dan başlamaktadır. Bu fiyata cerrahi işlem, 5 yıldızlı otel, VIP transfer, refakatçi konaklaması ve 1 yıllık ilaç seti dahildir. Sitemizdeki "AI Tedavi Planlayıcı" üzerinden anında kişisel fiyatınızı görebilirsiniz.';
      } else if (text.toLowerCase().includes('ağrı') || text.toLowerCase().includes('acı')) {
        reply = 'Tüm operasyonlarımızda iğnesiz ve ağrısız basınçlı lokal anestezi veya konforlu sedasyon seçeneği uygulanmaktadır. İşlem sırasında ve sonrasında hiçbir ağrı hissetmezsiniz.';
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        timestamp: 'Şimdi'
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-emerald-500 text-white shadow-glow-cyan hover:scale-105 transition-all duration-300 flex items-center gap-2.5 focus:outline-none"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-obsidian-950 animate-pulse" />
          </div>
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            AI Medikal Asistan (24/7)
          </span>
        </button>
      </div>

      {/* Slide-in Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[94vw] sm:w-[420px] max-h-[600px] h-[80vh] z-50 glass-panel rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl bg-obsidian-900/95 animate-fadeIn">
          
          {/* Drawer Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-clinical-cyan">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>HealthTour AI Concierge</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[11px] font-mono text-gray-400">
                  Uluslararası Sağlık Asistanı
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-clinical-cyan flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-clinical-cyan to-indigo-600 text-obsidian-950 font-medium'
                      : 'bg-white/[0.04] border border-white/10 text-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Prompts list */}
            <div className="pt-2 space-y-1.5">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                Hızlı Sorular:
              </div>
              {presetQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q.label)}
                  className="w-full text-left p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 text-[11px] text-gray-300 hover:text-white transition-all flex items-center justify-between"
                >
                  <span>{q.label}</span>
                  <ArrowRight className="w-3 h-3 text-cyan-400 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Input & Action Bar */}
          <div className="p-3 border-t border-white/10 bg-white/[0.01]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Tedaviler, transfer veya otel sorusu yazın..."
                className="flex-1 bg-obsidian-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-clinical-cyan hover:bg-cyan-400 text-obsidian-950 transition-all font-bold"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2.5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenPlanner();
                }}
                className="text-clinical-cyan hover:underline flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>AI Seyahat Planı Oluştur</span>
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation();
                }}
                className="text-emerald-400 hover:underline flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Doktorla Görüş</span>
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
