import { environment } from '../environments/environment';

export type SubscriptionProduct = {
  priceId: string;
  duration: string;
  durationUnit: string;
  perMonth: string;
  total: string;
  maxTotal: string;
  title: string;
};

export const subscriptionProducts: SubscriptionProduct[] = [
  {
    priceId: environment.paddleMonthlyPriceId,
    duration: '1',
    durationUnit: 'month',
    perMonth: '$4.99',
    total: '$4.99',
    maxTotal: '',
    title: 'Monthly premium',
  },
  {
    priceId: environment.paddleYearlyPriceId,
    duration: '1',
    durationUnit: 'year',
    perMonth: '$2.50',
    total: '$29.99',
    maxTotal: '$59.88',
    title: 'Yearly premium',
  },
  {
    priceId: environment.paddleLifetimePriceId,
    duration: 'Lifetime',
    durationUnit: '',
    perMonth: '',
    total: '$59.99',
    maxTotal: '',
    title: 'Lifetime   premium',
  },
];
