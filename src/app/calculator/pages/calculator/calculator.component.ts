import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { MatSidenav } from '@angular/material/sidenav';
import { distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';

import { InterestRateAndMonthlyPaymentService } from './../../../core/services/interest-rate-and-monthly-payment.service';
import { InterestRateAndMonthlyPayment } from './../../../core/dtos/interest-rate-and-monthly-payment.dto';
import { InterestCalculationRequest } from './../../../core/dtos/interest-calculation-request.dto';
import { LoanDetailsRequestCacheService } from './../../../core/services/loan-details-request-cache.service';
import { InterestCalculationRequestCacheModel } from './../../../core/models/interest-calculation-request-cache.models';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  @ViewChild(MatSidenav)
  sideNav: MatSidenav;

  loanForm: FormGroup;
  interestRateAndMonthlyPayment: InterestRateAndMonthlyPayment;

  readonly loanAmountMin = 500;
  readonly loanAmountMax = 5000;

  readonly loanDurationInMonthsMin = 6;
  readonly loanDurationInMonthsMax = 24;
  readonly loanDurationInMonthsStep = 1;

  constructor(private formBuilder: FormBuilder, private interestRateAndMonthlyPaymentService: InterestRateAndMonthlyPaymentService, public loanDetailsRequestCacheService: LoanDetailsRequestCacheService) {

    this.loanForm = this.formBuilder.group({
      loanAmount: new FormControl(this.loanAmountMin, [Validators.required, Validators.min(this.loanAmountMin), Validators.max(this.loanAmountMax)]),
      loanDurationInMonths: new FormControl(this.loanDurationInMonthsMin, [Validators.required, Validators.min(this.loanDurationInMonthsMin), Validators.max(this.loanDurationInMonthsMax)])
    });

    this.loanForm.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      filter(() => this.loanForm.valid)
    ).subscribe((interestCalculationRequest: InterestCalculationRequest) => {
      console.log("interestCalculationRequest -> ", interestCalculationRequest);
      this.interestRateAndMonthlyPaymentService.getCalculatedInterestRateAndMonthlyPayment(interestCalculationRequest).subscribe((result: InterestRateAndMonthlyPayment) => {
        this.interestRateAndMonthlyPayment = result;
        console.log("interestRateAndMonthlyPayment -> ", this.interestRateAndMonthlyPayment, this.loanForm);
        this.loanDetailsRequestCacheService.saveDetails(interestCalculationRequest);
      });
    });
  }

  getLoanDetails(interestCalculationRequestCache: InterestCalculationRequestCacheModel) {
    this.loanForm.setValue(interestCalculationRequestCache.interestCalculationRequest);
    this.sideNav.close();
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
