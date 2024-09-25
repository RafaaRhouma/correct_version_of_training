import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
})
export class CalculationComponent implements OnInit {
  calculationForm!: FormGroup;
  bmi: number = -1;
  unitLabel = { weight: 'kg', height: 'm' };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.calculationForm = this.fb.group({
      weight: ['', [Validators.required, Validators.min(0)]],
      height: ['', [Validators.required, Validators.min(0)]],
      unit: ['metric'],
    });

    this.calculationForm.valueChanges.subscribe(() => {
      this.calculateBMI();
    });
  }

  onUnitChange(): void {
    const currentUnit = this.calculationForm.get('unit')?.value;
    const weight = this.calculationForm.get('weight')?.value;
    const height = this.calculationForm.get('height')?.value;

    if (currentUnit === 'imperial') {
      this.unitLabel.weight = 'lbs';
      this.unitLabel.height = 'in';
      this.calculationForm.patchValue({
        weight: this.convertKgToLbs(weight),
        height: this.convertMetersToInches(height),
      });
    } else {
      this.unitLabel.weight = 'kg';
      this.unitLabel.height = 'm';
      this.calculationForm.patchValue({
        weight: this.convertLbsToKg(weight),
        height: this.convertInchesToMeters(height),
      });
    }

    this.calculateBMI();
  }

  calculateBMI(): void {
    const weight = this.calculationForm.get('weight')?.value;
    const height = this.calculationForm.get('height')?.value;
    const unit = this.calculationForm.get('unit')?.value;

    if (this.calculationForm.valid && weight > 0 && height > 0) {
      if (unit === 'imperial') {
        this.bmi = (weight / (height * height)) * 703;
      } else {
        this.bmi = weight / (height * height);
      }
    } else {
      this.bmi = -1;
    }
  }

  convertKgToLbs(kg: number): number {
    return kg * 2.20462;
  }

  convertLbsToKg(lbs: number): number {
    return lbs / 2.20462;
  }

  convertMetersToInches(meters: number): number {
    return meters * 39.3701;
  }

  convertInchesToMeters(inches: number): number {
    return inches / 39.3701;
  }

}
