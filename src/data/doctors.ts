import { Doctor } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-mehmet',
    name: 'Op. Dr. Mehmet Arslan',
    title: 'Medikal Direktör & Saç Cerrahisi Uzmanı',
    specialty: 'Safir FUE & DHI Rekonstrüksiyon',
    experienceYears: 16,
    surgeriesCount: 8400,
    credentials: ['ISHRS Member', 'FUE Europe Board', 'T.C. Sağlık Bakanlığı Başdanışman'],
    education: 'Hacettepe Üniversitesi Tıp Fakültesi / Londra Queen Mary Fellowship',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'dr-selin',
    name: 'Dt. Selin Yıldırım',
    title: 'Baş Hekim, Estetik Diş Hekimi',
    specialty: 'Hollywood Smile & Dijital Gülüş Tasarımı',
    experienceYears: 12,
    surgeriesCount: 5200,
    credentials: ['EDAD Estetik Dişhekimliği Akademisi', 'DSD Digital Smile Design Master', 'EPA Member'],
    education: 'İstanbul Üniversitesi Diş Hekimliği Fakültesi / Frankfurt Goethe Uni Prosthodontics',
    photoUrl: 'https://images.unsplash.com/photo-1594824813589-f5348bb95b05?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'dr-kerem',
    name: 'Prof. Dr. Kerem Aydın',
    title: 'Plastik, Rekonstrüktif ve Estetik Cerrahi Uzmanı',
    specialty: 'Piezo Rinoplasti & Deep Plane Facelift',
    experienceYears: 22,
    surgeriesCount: 11200,
    credentials: ['ISAPS Fellow', 'EBOPRAS European Board', 'Türk Plastik Cerrahi Derneği Üyesi'],
    education: 'Cerrahpaşa Tıp Fakültesi / New York University Langone Health Fellow',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80'
  }
];
