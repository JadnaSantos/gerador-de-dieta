import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import type { ActivityLevel, Objective, SelectOption } from './form.types';
import type { DietData } from 'src/app/interface/diet.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() formSubmit = new EventEmitter<DietData>();

  dietForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dietForm = this.fb.nonNullable.group({
      name: ['', Validators.required],
      age: [0, Validators.required],
      height: [0, Validators.required],
      weight: [0, Validators.required],
      activityLevel: ['', Validators.required],
      objective: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.dietForm.valid) {
      this.formSubmit.emit(this.dietForm.value);
    }
  }

  activityLevelPerWeek: SelectOption<ActivityLevel>[] = [
    { value: 'sedentary', label: 'Sedentário' },
    { value: 'two_per_week', label: '2x por semana' },
    { value: 'three_per_week', label: '3x por semana' },
    { value: 'five_per_week', label: '5x por semana' },
    { value: 'six_per_week', label: '6x por semana' },
  ];

  objectiveList: SelectOption<Objective>[] = [
    { value: 'lose_weight', label: 'Perder peso' },
    { value: 'gain_muscle', label: 'Ganhar massa muscular' },
    { value: 'maintain_weight', label: 'Manter peso' },
    { value: 'hypertrophy', label: 'Hipertrofia' },
  ];
}
