import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { InterestCalculationRequest } from '../dtos/interest-calculation-request.dto';
import { InterestRateAndMonthlyPayment } from '../dtos/interest-rate-and-monthly-payment.dto';

@Injectable({
  providedIn: 'root'
})
export class InterestRateAndMonthlyPaymentService {
  constructor(private httpClient: HttpClient) { }

  getCalculatedInterestRateAndMonthlyPayment(interestCalculationRequest: InterestCalculationRequest): Observable<InterestRateAndMonthlyPayment> {
    return this.httpClient.get<InterestRateAndMonthlyPayment>(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${interestCalculationRequest.loanAmount}&numMonths=${interestCalculationRequest.loanDurationInMonths}`);
  }
}
