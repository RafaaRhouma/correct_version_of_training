import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationComponent } from './components/calculation/calculation.component';
import { SharedModule } from '../shared/shared.module';
import { BilanComponent } from './components/bilan/bilan.component';



@NgModule({
  declarations: [
    CalculationComponent,
    BilanComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CalculationComponent
  ]
})
export class BmiModule { }
