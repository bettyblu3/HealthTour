export type Currency = 'EUR' | 'USD' | 'GBP' | 'TRY';

export interface CurrencyRate {
  symbol: string;
  rateToEur: number;
}

export const CURRENCY_RATES: Record<Currency, CurrencyRate> = {
  EUR: { symbol: '€', rateToEur: 1 },
  USD: { symbol: '$', rateToEur: 1.08 },
  GBP: { symbol: '£', rateToEur: 0.85 },
  TRY: { symbol: '₺', rateToEur: 38.5 },
};

export type TreatmentCategory = 
  | 'hair'
  | 'dental'
  | 'plastics'
  | 'eyes'
  | 'longevity';

export interface TreatmentOption {
  id: string;
  category: TreatmentCategory;
  name: string;
  shortDesc: string;
  description: string;
  basePriceEur: number;
  ukPriceEur: number;
  usPriceEur: number;
  stayDays: number;
  recoveryDays: number;
  features: string[];
  tags: string[];
  rating: number;
  reviewsCount: number;
  iconName: string;
}

export interface NorwoodStage {
  stage: number;
  title: string;
  description: string;
  graftRange: [number, number];
  recommendation: string;
  sessions: number;
}

export interface CaseStudy {
  id: string;
  treatmentName: string;
  patientName: string;
  patientCountry: string;
  patientFlag: string;
  beforeImage: string;
  afterImage: string;
  timeframe: string;
  metricLabel: string;
  metricValue: string;
  surgeon: string;
  reviewQuote: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experienceYears: number;
  surgeriesCount: number;
  credentials: string[];
  education: string;
  photoUrl: string;
}

export interface VipJourneyStep {
  step: number;
  dayLabel: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
}
