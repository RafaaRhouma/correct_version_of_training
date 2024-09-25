import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationComponent } from './bmi/components/calculation/calculation.component';
import { BilanComponent } from './bmi/components/bilan/bilan.component';

const routes: Routes = [
  {path:'calculation' , component:CalculationComponent},
  {path:'bilan' , component:BilanComponent},
  {path:'**' , redirectTo:'calculation' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
