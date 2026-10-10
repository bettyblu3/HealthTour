import { TreatmentOption, NorwoodStage, VipJourneyStep } from '../types';

export const TREATMENTS: TreatmentOption[] = [
  {
    id: 'sapphire-fue',
    category: 'hair',
    name: 'Saç Ekimi (Safir FUE & DHI)',
    shortDesc: 'Doğal açılı safir mikro uçlarla maksimum sıklık ve izsiz doku iyileşmesi.',
    description: 'Değerli safir cevherinden üretilen 0.6 - 0.8 mm mikro uçlarla açılan V şeklindeki mikro kanallar, greftlerin en doğal açıyla yerleştirilmesini sağlar. Sıfır doku hasarı ve 3 kat daha hızlı iyileşme.',
    basePriceEur: 1950,
    ukPriceEur: 7200,
    usPriceEur: 9800,
    stayDays: 3,
    recoveryDays: 7,
    features: [
      'Maksimum Greft Kapasitesi (5000+ greft)',
      'Ağrısız İğnesiz Sedasyon Anestezi',
      'Ömür Boyu Garanti Sertifikası',
      '1 Yıllık Orijinal Bakım & İlaç Seti',
      'Kök Hücre / PRP Terapisi Dahil'
    ],
    tags: ['En Çok Tercih Edilen', 'Safir Uç Teknolojisi', 'Ömür Boyu Garanti'],
    rating: 4.96,
    reviewsCount: 3840,
    iconName: 'Sparkles'
  },
  {
    id: 'hollywood-smile',
    category: 'dental',
    name: 'Diş & Gülüş Estetiği (Hollywood Smile)',
    shortDesc: 'Dijital gülüş tasarımı ve biyouyumlu estetik zirkonyum / E-Max kaplamalar.',
    description: '3D AI yüz ve dudak oranı tarayıcısı ile kişiye özel tasarlanan, ışık geçirgenliği doğal dişe en yakın olan E-Max ve zirkonyum porselen restorasyonları.',
    basePriceEur: 2750,
    ukPriceEur: 8500,
    usPriceEur: 14000,
    stayDays: 5,
    recoveryDays: 2,
    features: [
      '20 veya 24 Adet E-Max / Zirkonyum Kaplama',
      '3D AI Dijital Gülüş Tasarımı Simülasyonu',
      'Lazer Diş Eti Şekillendirme Dahil',
      'Geçici Dişler ve Biyouyumlu Malzeme',
      '10 Yıl Uluslararası Garanti'
    ],
    tags: ['3D Dijital Tasarım', 'E-Max Porselen', '10 Yıl Garanti'],
    rating: 4.95,
    reviewsCount: 1650,
    iconName: 'Smile'
  },
  {
    id: 'all-on-4-implants',
    category: 'dental',
    name: 'Diş İmplantı (All-on-4 / All-on-6 Sabit Diş)',
    shortDesc: 'Tam dişsizlik durumlarında aynı gün sabit hibrit protez konforu.',
    description: 'Straumann veya Nobel Biocare orijinal İsviçre/Alman implant sistemleri ile kemik erimesi olan çenelerde bile 1 günde sabit protez imkanı sunan devrimsel teknik.',
    basePriceEur: 3800,
    ukPriceEur: 13500,
    usPriceEur: 22000,
    stayDays: 5,
    recoveryDays: 7,
    features: [
      'Orijinal Straumann / Nobel İmplantlar',
      'Aynı Gün Geçici Sabit Köprü',
      'Kemik Grefti & Sinüs Lifting Desteği',
      'Ömür Boyu Global İmplant Pasaportu',
      'Genel veya Sedasyon Anestezi'
    ],
    tags: ['Ömür Boyu Pasaport', 'İsviçre İmplantı', '1 Günde Diş'],
    rating: 4.93,
    reviewsCount: 980,
    iconName: 'ShieldCheck'
  },
  {
    id: 'piezo-rhinoplasty',
    category: 'plastics',
    name: 'Burun Estetiği (Piezo Rinoplasti)',
    shortDesc: 'Ses dalgalarıyla kemiği milimetrik şekillendiren morluksuz burun estetiği.',
    description: 'Geleneksel kırma yöntemleri yerine ultrasonik ses dalgaları kullanan Piezo cihazıyla, yumuşak doku ve damarlara dokunmadan kemik ve kıkırdak milimetrik biçimde şekillendirilir.',
    basePriceEur: 3200,
    ukPriceEur: 9500,
    usPriceEur: 16000,
    stayDays: 6,
    recoveryDays: 7,
    features: [
      'Piezo Ultrasonik Kemik Şekillendirme',
      'Silikon Nefes Alabilen Tamponlar',
      '3D Ameliyat Öncesi Yüz Simülasyonu',
      'Maksimum Nefes & Estetik Uyumu',
      'JCI Akredite Tam Teşekküllü Hastane'
    ],
    tags: ['Morluksuz Teknik', 'Piezo Ultrasonik', '3D Yüz Simülasyonu'],
    rating: 4.97,
    reviewsCount: 1820,
    iconName: 'Eye'
  },
  {
    id: 'breast-aesthetics',
    category: 'plastics',
    name: 'Meme Estetiği (Büyütme, Dikleştirme & Protez)',
    shortDesc: 'FDA onaylı mentor/motiva protezler ile doğal dekolte ve simetri estetiği.',
    description: 'Kişiye özel anatomik veya yuvarlak kohezif jel silikon protezlerle, kas altı veya dual-plane teknikle izsiz meme büyütme, dikleştirme ve asimetri düzeltme cerrahisi.',
    basePriceEur: 3400,
    ukPriceEur: 10500,
    usPriceEur: 18000,
    stayDays: 6,
    recoveryDays: 7,
    features: [
      'FDA Onaylı Orijinal Mentor / Motiva Protezler',
      'Gizli İç Çamaşırı Altı Mikro Kesi',
      '3D Ameliyat Öncesi Beden Simülasyonu',
      'Ömür Boyu Uluslararası Protez Pasaportu',
      'Özel Medikal Destek Sütyeni Dahil'
    ],
    tags: ['FDA Onaylı Protez', 'Doğal Dekolte', 'Ömür Boyu Garanti'],
    rating: 4.98,
    reviewsCount: 1450,
    iconName: 'Sparkles'
  },
  {
    id: 'body-contouring',
    category: 'plastics',
    name: 'Vücut Şekillendirme (360 Vaser Lipo & BBL)',
    shortDesc: 'Ultrasonik ses dalgalarıyla bel inceltme, karın kası ve vücut hatları.',
    description: 'Gelişmiş Vaser ultrasonik liposuction teknolojisiyle çevre dokulara zarar vermeden inatçı yağların eritilmesi ve kum saati vücut hattı oluşturulması.',
    basePriceEur: 3600,
    ukPriceEur: 12000,
    usPriceEur: 21000,
    stayDays: 6,
    recoveryDays: 7,
    features: [
      '360 Derece Karın, Bel ve Sırt Şekillendirme',
      'Vaser Ultrasonik Morluksuz Teknoloji',
      'Özel Medikal Kompresyon Korsesi Dahil',
      '2 Seans Lenfatik Drenaj Masajı Dahil',
      'JCI Akredite Hastane & VIP Süit'
    ],
    tags: ['360 Vaser Lipo', 'Kum Saati Formu', 'İzsiz'],
    rating: 4.96,
    reviewsCount: 1120,
    iconName: 'Sparkles'
  },
  {
    id: 'deep-plane-facelift',
    category: 'plastics',
    name: 'Yüz & Boyun Germe (Deep Plane Facelift)',
    shortDesc: 'Mimikleri dondurmadan kas tabakasını gençleştiren doğal yüz cerrahisi.',
    description: 'Cildi sadece çekmek yerine, altındaki SMAS ve kas bağ dokusunu gençlik anatomisine geri taşıyan Deep Plane tekniği ile 10-15 yıl geriye dönük kalıcı gençleşme sağlanır.',
    basePriceEur: 4900,
    ukPriceEur: 16000,
    usPriceEur: 26000,
    stayDays: 7,
    recoveryDays: 10,
    features: [
      'Deep Plane SMAS Diseksiyonu',
      'Doğal Mimik Koruma Garantisi',
      'Boyun Askılama & Çene Hattı Belirginleştirme',
      'Mikro Dikiş & Görünmeyen Kulak Arkası İzi',
      'VIP Hemşire & Hastane Süiti'
    ],
    tags: ['Kalıcı Gençleşme', 'Doğal Mimik', 'Deep Plane'],
    rating: 4.99,
    reviewsCount: 740,
    iconName: 'Crown'
  },
  {
    id: 'laser-eye-lasik',
    category: 'eyes',
    name: 'Göz Cerrahisi & Lazer (Zeiss SMILE Pro)',
    shortDesc: 'Gözlüğe ve lense 10 saniyede son veren yeni nesil kornea cerrahisi.',
    description: 'Carl Zeiss VisuMax femtosaniye lazer teknolojisi ile kesisiz, ağrısız ve ertesi gün normal hayata dönülebilen en gelişmiş refraktif cerrahi uygulaması.',
    basePriceEur: 1600,
    ukPriceEur: 4800,
    usPriceEur: 7000,
    stayDays: 3,
    recoveryDays: 1,
    features: [
      'Carl Zeiss VisuMax SMILE Pro Teknolojisi',
      'Göz Başına Sadece 9 Saniye Lazer Süresi',
      'Ertesi Gün İşe ve Ekrana Dönüş',
      'Kuru Göz Riski Minimum',
      '1 Yıl Ücretsiz Kontrol Paketi'
    ],
    tags: ['SMILE Pro', '9 Saniye Lazer', 'Kesisiz'],
    rating: 4.94,
    reviewsCount: 1420,
    iconName: 'Eye'
  },
  {
    id: 'longevity-wellness',
    category: 'longevity',
    name: 'Longevity & Hücresel Gençleşme',
    shortDesc: 'NAD+, Kök Hücre eksozomları ve Boğaz manzaralı termal detoks terapisi.',
    description: 'Biyolojik yaşınızı geri çekmeyi hedefleyen fonksiyonel tıp testleri, IV NAD+ infüzyonları, hiperbarik oksijen ve lüks wellness tatili kombinasyonu.',
    basePriceEur: 3500,
    ukPriceEur: 11000,
    usPriceEur: 18000,
    stayDays: 4,
    recoveryDays: 0,
    features: [
      'Kapsamlı Genetik & Biyobelirteç Paneli',
      'Yüksek Doz IV NAD+ & Glutatyon Protokolü',
      'Hiperbarik Oksijen & Kriyoterapi',
      '5 Yıldızlı Termal / Wellness Otel Konaklaması',
      'Kişiye Özel Beslenme & Longevity Planı'
    ],
    tags: ['Hücresel Gençleşme', 'NAD+ Terapisi', 'Biyolojik Yaş'],
    rating: 4.92,
    reviewsCount: 510,
    iconName: 'HeartPulse'
  }
];

export const NORWOOD_STAGES: NorwoodStage[] = [
  {
    stage: 2,
    title: 'Norwood 2: Şakaklarda Hafif Gerileme',
    description: 'Şakak bölgesinde hafif V şeklinde açılma, ön saç çizgisinde minimal incelme.',
    graftRange: [1800, 2400],
    recommendation: 'Safir FUE veya DHI ile şakak dolgusu ve ön çizgi restorasyonu.',
    sessions: 1
  },
  {
    stage: 3,
    title: 'Norwood 3: Belirgin Şakak ve Alın Açıklığı',
    description: 'Şakaklar derinleşmiş, ön saç çizgisi geriye çekilmiş ve tepe bölgesinde hafif seyreklik.',
    graftRange: [2500, 3200],
    recommendation: 'Safir FUE mikro kanallarla yoğun ön hat dizaynı.',
    sessions: 1
  },
  {
    stage: 4,
    title: 'Norwood 4: Ön ve Tepe (Vertex) Seyrelmesi',
    description: 'Ön saç çizgisi belirgin şekilde kaybolmuş, tepe bölgesinde dairesel dökülme başlamıştır.',
    graftRange: [3200, 4000],
    recommendation: 'Maksimum greft FUE + Kök Hücre destekli ön ve vertex kombinasyonu.',
    sessions: 1
  },
  {
    stage: 5,
    title: 'Norwood 5: Genişlemiş Ön ve Tepe Dökülmesi',
    description: 'Ön bölge ile tepe bölgesi arasındaki saç köprüsü iyice incelmiş ve açılmıştır.',
    graftRange: [4000, 4800],
    recommendation: 'Safir FUE mega-seans; homojen dağılım ve yüksek sıklık protokolü.',
    sessions: 1
  },
  {
    stage: 6,
    title: 'Norwood 6: İleri Düzey Geniş Açıklık',
    description: 'Ön ve tepe bölgeleri birleşmiş, sadece yanlarda ve ense donör alanda saç kalmıştır.',
    graftRange: [4800, 5600],
    recommendation: 'Kombine Safir FUE + Sakal Donör Destekli hibrit mega seans.',
    sessions: 1
  }
];

export const VIP_JOURNEY_STEPS: VipJourneyStep[] = [
  {
    step: 1,
    dayLabel: '1. Adım: Öncesi',
    title: 'AI Ön Analiz & Doktor Onaylı Tedavi Planı',
    description: 'Fotoğraflarınızı sistemimize yükleyin. Yapay zeka motorumuz ve uzman cerrahlarımız 2 saat içinde kişisel tedavi planınızı, greft/işlem haritanızı ve net maliyetinizi hazırlar.',
    highlights: ['Ücretsiz 3D Simülasyon', 'Gizli Maliyet Olmayan Şeffaf Fiyat', 'Uçuş & Vize Koordinasyonu'],
    icon: 'BrainCircuit'
  },
  {
    step: 2,
    dayLabel: '1. Gün: Varış',
    title: 'VIP Karşılama & 5 Yıldızlı Boğaz Oteli',
    description: 'İstanbul Havalimanı kapısında özel şoförlü VIP Mercedes aracınız ve çok dilli hasta koordinatörünüz sizi karşılar, doğrudan 5 yıldızlı lüks otelinize ulaştırır.',
    highlights: ['Özel Şoförlü Maybach / Vito Transfer', '5* Hilton / Marriott Konaklama', 'Hoşgeldin Sağlık Kiti'],
    icon: 'Plane'
  },
  {
    step: 3,
    dayLabel: '2. Gün: Cerrahi',
    title: 'JCI Akredite Hastane & Cerrahi Operasyon',
    description: 'Kapsamlı kan tahlilleri ve cerrahınızla yüz yüze son tasarım konsültasyonunun ardından, en modern laminar hava akışlı ameliyathanelerde konforlu operasyonunuz gerçekleşir.',
    highlights: ['Uluslararası JCI Akreditasyonu', 'Ağrısız Sedasyon Seçeneği', 'Kişisel Çevirmen Eşliği'],
    icon: 'Stethoscope'
  },
  {
    step: 4,
    dayLabel: '3-4. Gün: Bakım',
    title: 'İlk Yıkama, Medikal Pansuman & Şehir Turu',
    description: 'Kliniğimizde uzman ekibimiz tarafından ilk bakım ve medikal pansuman yapılır. Kapsamlı 1 yıllık bakım seti teslim edilir. İsteğinize göre tarihi yarımada veya Boğaz turu deneyimi sunulur.',
    highlights: ['Uzman Medikal Yıkama & Pansuman', 'Ömür Boyu Garanti Sertifikası', 'VIP Havalimanı Dönüş Transferi'],
    icon: 'Award'
  },
  {
    step: 5,
    dayLabel: 'Sonraki 12 Ay',
    title: '12 Aylık Uzaktan AI Destekli İyileşme Takibi',
    description: 'Ülkenize döndükten sonra yalnız değilsiniz. HealthTour AI mobil platformu ve atanmış sağlık asistanınız 1, 3, 6 ve 12. aylarda iyileşme fotoğraflarınızı analiz eder ve doktor kontrolü sağlar.',
    highlights: ['Aylık Düzenli Fotoğraf Kontrolü', '24/7 Doktor & Asistan Erişimi', '%100 Sonuç Memnuniyet Garantisi'],
    icon: 'HeartHandshake'
  }
];

export const TRUST_BADGES = [
  {
    title: 'T.C. Sağlık Bakanlığı',
    subtitle: 'Uluslararası Sağlık Turizmi Yetki Belgeli',
    icon: 'ShieldCheck'
  },
  {
    title: 'JCI Akredite Hastaneler',
    subtitle: 'Joint Commission International Altın Mühür',
    icon: 'Award'
  },
  {
    title: 'Turkish Airlines Partner',
    subtitle: 'Sağlık Turizmi Özel Bilet İndirimi',
    icon: 'Plane'
  },
  {
    title: 'TÜV SÜD & ISO 9001',
    subtitle: 'Alman Kalite ve Hijyen Güvencesi',
    icon: 'CheckCircle2'
  },
  {
    title: '50.000+ Başarılı Vaka',
    subtitle: '94 Ülkeden Global Hasta Ağı',
    icon: 'Users'
  }
];
