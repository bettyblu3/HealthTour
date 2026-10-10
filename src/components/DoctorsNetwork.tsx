import React from 'react';
import { DOCTORS } from '../data/doctors';
import { ShieldCheck, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

interface DoctorsNetworkProps {
  onOpenConsultation: () => void;
}

export const DoctorsNetwork: React.FC<DoctorsNetworkProps> = ({ onOpenConsultation }) => {
  return (
    <section id="doctors" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-clinical-cyan mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>BOARD-CERTIFIED MASTER SURGEONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Alanında Otorite{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinical-cyan to-indigo-400">
              Uzman Hekim Kadromuz
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Uluslararası saygın tıp derneklerine üye, on binlerce başarılı vakaya imza atmış kıdemli tıp direktörlerimiz.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                {/* Doctor Photo */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-obsidian-900">
                  <img
                    src={doc.photoUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-obsidian-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{doc.experienceYears}+ Yıl Deneyim</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-clinical-cyan transition-colors">
                  {doc.name}
                </h3>
                <div className="text-xs font-mono text-clinical-cyan font-semibold mt-1">
                  {doc.title}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  Uzmanlık: {doc.specialty}
                </div>

                {/* Education */}
                <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-gray-300">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{doc.education}</span>
                </div>

                {/* Credentials */}
                <div className="mt-4 space-y-1.5">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                    Uluslararası Üyelikler & Kurullar:
                  </div>
                  {doc.credentials.map((cred, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-xs font-bold text-gray-200 hover:text-clinical-cyan border border-white/10 hover:border-cyan-500/30 transition-all text-center"
                >
                  {doc.name} ile Görüşme Talep Et
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
