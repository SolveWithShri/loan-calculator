import { Component, Input } from '@angular/core';

import { InterestRateAndMonthlyPayment } from './../../../core/dtos/interest-rate-and-monthly-payment.dto';

@Component({
  selector: 'app-loan-details-card',
  templateUrl: './loan-details-card.component.html',
  styleUrls: ['./loan-details-card.component.scss']
})
export class LoanDetailsCardComponent {

  @Input()
  interestRateAndMonthlyPayment: InterestRateAndMonthlyPayment;
}
