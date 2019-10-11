import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

import { LoanDetailsCardComponent } from './components/loan-details-card/loan-details-card.component';
import { LoanDetailsRequestCardComponent } from './components/loan-details-request-card/loan-details-request-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoanDetailsCardComponent, LoanDetailsRequestCardComponent],
  exports: [LoanDetailsCardComponent, LoanDetailsRequestCardComponent,    FormsModule,
    ReactiveFormsModule, MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    MatCardModule],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    MatCardModule
  ]
})
export class SharedModule { }
