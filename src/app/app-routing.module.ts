import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'calculator',
  pathMatch: 'full'
}, {
  path: 'calculator',
  loadChildren: './calculator/calculator.module#CalculatorModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
