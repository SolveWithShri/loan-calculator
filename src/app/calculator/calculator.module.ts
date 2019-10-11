import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from './pages/calculator/calculator.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{
  path: '',
  component: CalculatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    SharedModule
  ]
})
export class CalculatorModule { }
