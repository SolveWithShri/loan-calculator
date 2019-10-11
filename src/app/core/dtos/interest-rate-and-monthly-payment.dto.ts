import { MonthlyPayment } from './monthly-payment.dto';
import { Principal } from './principal.dto';

export class InterestRateAndMonthlyPayment {
    interestRate: number;
    numPayments: number;
    monthlyPayment: MonthlyPayment;
    principal: Principal;
}
