import { Currency, CURRENCY_RATES } from '../types';

export function formatPrice(eurAmount: number, currency: Currency): string {
  const rateInfo = CURRENCY_RATES[currency];
  const converted = eurAmount * rateInfo.rateToEur;
  
  if (currency === 'TRY') {
    return `${Math.round(converted).toLocaleString('tr-TR')} ₺`;
  }
  
  return `${rateInfo.symbol}${Math.round(converted).toLocaleString('en-US')}`;
}

export function calculateSavings(eurTurkey: number, eurForeign: number, currency: Currency): {
  savedAmountFormatted: string;
  percent: number;
} {
  const diffEur = eurForeign - eurTurkey;
  const percent = Math.round((diffEur / eurForeign) * 100);
  const savedAmountFormatted = formatPrice(diffEur, currency);
  return { savedAmountFormatted, percent };
}
