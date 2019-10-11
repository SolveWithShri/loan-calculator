import { Component, Input } from '@angular/core';

import { InterestCalculationRequestCacheModel } from './../../../core/models/interest-calculation-request-cache.models';

@Component({
  selector: 'app-loan-details-request-card',
  templateUrl: './loan-details-request-card.component.html',
  styleUrls: ['./loan-details-request-card.component.scss']
})
export class LoanDetailsRequestCardComponent {

  @Input()
  interestCalculationRequest: InterestCalculationRequestCacheModel;
}
