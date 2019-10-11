import { Currency } from '../enums/currency.enum';

export interface MonthlyPayment {
    amount: number;
    currency: Currency;
}
