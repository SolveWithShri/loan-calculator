import { Injectable } from '@angular/core';

import { InterestCalculationRequest } from '../dtos/interest-calculation-request.dto';
import { InterestCalculationRequestCacheModel } from '../models/interest-calculation-request-cache.models';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailsRequestCacheService {

  private readonly localStorageKey = 'interestCalculationRequestCache';

  interestCalculationRequests: InterestCalculationRequestCacheModel[] = [];

  constructor() {
    this.getRequestsFromLocalStorage();
  }

  saveDetails(interestCalculationRequest: InterestCalculationRequest) {
    this.interestCalculationRequests.push({
      interestCalculationRequest: interestCalculationRequest,
      cacheDateTime: new Date()
    });

    this.setRequestsToLocalStorage();
  }

  private getRequestsFromLocalStorage() {
    this.interestCalculationRequests = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  private setRequestsToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.interestCalculationRequests || []));
  }
}
