import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import { LeomeEmblem } from './LeomeLogo';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { X } from 'lucide-react';

interface ContactConsultationModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const ContactConsultationModal: React.FC<ContactConsultationModalProps> = ({
  language,
  isOpen,
  onClose,
}) => {
  const t = TRANSLATIONS[language];
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(TREATMENTS[0].id);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedTreatment = TREATMENTS.find(item => item.id === selectedTreatmentId) || TREATMENTS[0];

  const getTreatmentName = (item: { id: string; name: string }) => {
    if (language === 'TR') return item.name;
    const namesEn: Record<string, string> = {
      'sapphire-fue': 'Hair Restoration (Sapphire FUE & DHI)',
      'hollywood-smile': 'Smile Design (Hollywood Smile & Veneers)',
      'all-on-4-implants': 'Dental Implants (All-on-4 / All-on-6)',
      'piezo-rhinoplasty': 'Rhinoplasty (Ultrasonic Piezo Nose Surgery)',
      'breast-aesthetics': 'Breast Aesthetics (Augmentation, Lift & Implants)',
      'body-contouring': 'Body Contouring (360 Vaser Lipo & BBL)',
      'deep-plane-facelift': 'Facial & Neck Surgery (Deep Plane Facelift)',
      'laser-eye-lasik': 'Vision Laser Surgery (Zeiss SMILE Pro)',
      'longevity-wellness': 'Longevity & Cellular Medicine (Exosomes & NAD+)'
    };
    return namesEn[item.id] || item.name;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const treatmentName = getTreatmentName(selectedTreatment);

    try {
      await fetch('https://formsubmit.co/ajax/kemalberkozyigit@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `HealthTour VIP Talep: ${fullName} - ${treatmentName}`,
          _template: 'table',
          _captcha: 'false',
          name: fullName,
          phone: phone,
          email: email,
          treatment: treatmentName,
          notes: notes || (language === 'TR' ? 'Not belirtilmedi' : 'No notes provided')
        })
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      // Ensure smooth patient experience even if network fails
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{ backgroundColor: 'rgba(2, 10, 8, 0.88)' }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn"
    >
      <div 
        style={{ backgroundColor: '#061814' }}
        className="relative w-full max-w-xl rounded-3xl p-8 sm:p-12 border border-mint-300/35 shadow-[0_30px_90px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-y-auto ring-1 ring-black/80"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ backgroundColor: '#0A231E' }}
          className="absolute top-6 right-6 p-2 rounded-full text-mint-muted hover:text-white hover:bg-[#10332B] transition-colors border border-mint-300/20"
          title="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <LeomeEmblem size={28} className="text-mint-300 ring-1 ring-mint-300/40" />
                <span className="text-xs font-mono tracking-widest text-mint-muted uppercase font-bold">
                  {t.modalBadge}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t.modalTitle} <span className="text-mint-300">{t.modalTitleMint}</span>
              </h3>
              <p className="text-xs text-mint-muted mt-2 leading-relaxed">
                {t.modalDesc}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-mint-muted mb-1 font-semibold">
                  {t.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={language === 'TR' ? 'örn: James Alexander' : 'e.g. James Alexander'}
                  style={{ backgroundColor: '#0A231E' }}
                  className="w-full border border-mint-300/25 rounded-xl px-4 py-3 text-xs text-white placeholder-mint-muted/50 focus:outline-none focus:border-mint-300 font-sans shadow-inner"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-mint-muted mb-1 font-semibold">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7123 456789"
                    style={{ backgroundColor: '#0A231E' }}
                    className="w-full border border-mint-300/25 rounded-xl px-4 py-3 text-xs text-white placeholder-mint-muted/50 focus:outline-none focus:border-mint-300 font-sans shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-mint-muted mb-1 font-semibold">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'TR' ? 'ornek@domain.com' : 'james@example.com'}
                    style={{ backgroundColor: '#0A231E' }}
                    className="w-full border border-mint-300/25 rounded-xl px-4 py-3 text-xs text-white placeholder-mint-muted/50 focus:outline-none focus:border-mint-300 font-sans shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-mint-muted mb-1 font-semibold">
                  {t.selectTreatment}
                </label>
                <select
                  value={selectedTreatmentId}
                  onChange={(e) => setSelectedTreatmentId(e.target.value)}
                  style={{ backgroundColor: '#0A231E' }}
                  className="w-full border border-mint-300/25 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-mint-300 font-sans shadow-inner"
                >
                  {TREATMENTS.map((item) => (
                    <option key={item.id} value={item.id} style={{ backgroundColor: '#061814', color: '#FFFFFF' }}>
                      {getTreatmentName(item)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-mint-muted mb-1 font-semibold">
                  {t.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.notesPlaceholder}
                  style={{ backgroundColor: '#0A231E' }}
                  className="w-full border border-mint-300/25 rounded-xl px-4 py-2.5 text-xs text-white placeholder-mint-muted/50 focus:outline-none focus:border-mint-300 font-sans resize-none shadow-inner"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-mint-300 hover:bg-white text-forest-900 font-bold text-xs tracking-wider transition-all shadow-[0_4px_20px_rgba(158,247,215,0.25)] active:scale-[0.99] disabled:opacity-75 disabled:cursor-wait flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-forest-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>{language === 'TR' ? 'İletiliyor...' : 'Transmitting...'}</span>
                    </>
                  ) : (
                    t.submitBtn
                  )}
                </button>
              </div>

              <div className="text-center text-[10px] font-mono text-mint-muted pt-2">
                {t.guaranteeNote}
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation */
          <div className="text-center py-8 space-y-6">
            <LeomeEmblem size={56} className="text-mint-300 mx-auto" />
            
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {t.successTitle}
              </h3>
              <p className="text-xs text-mint-muted mt-2 max-w-sm mx-auto leading-relaxed">
                {language === 'TR' ? 'Sayın' : 'Dear'} <span className="text-white font-bold">{fullName}</span>, {t.successDesc}
              </p>
            </div>

            <div 
              style={{ backgroundColor: '#0A231E' }}
              className="p-3.5 rounded-xl border border-mint-300/20 text-xs font-mono text-mint-muted"
            >
              {getTreatmentName(selectedTreatment)} • 5★ VIP Protocol
            </div>

            <div className="pt-2 flex gap-3 justify-center">
              <a
                href={`https://wa.me/905425305235?text=${encodeURIComponent(
                  language === 'TR'
                    ? `Merhaba, ben ${fullName}. HealthTour & Partners üzerinden ${getTreatmentName(selectedTreatment)} için talep gönderdim.`
                    : `Hello, my name is ${fullName}. I have requested a VIP clinical review for ${getTreatmentName(selectedTreatment)} on HealthTour & Partners.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-mint-300 text-forest-900 font-bold text-xs hover:bg-white transition-colors"
              >
                {t.directWhatsapp}
              </a>

              <button
                onClick={onClose}
                style={{ backgroundColor: '#0A231E' }}
                className="px-5 py-2.5 rounded-full border border-mint-300/20 text-white text-xs hover:bg-[#10332B]"
              >
                {t.closeModal}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
