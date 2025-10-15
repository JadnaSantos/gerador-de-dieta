import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { DietData } from 'src/app/interface/diet.interface';
import { DietService } from 'src/app/service/diet.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent {
  @Input() data!: DietData;
  @Output() goBack = new EventEmitter<void>();

  output: string = '';
  isLoading: boolean = false;

  constructor(private dietService: DietService) {}

  async onGenerate() {
    this.isLoading = true;
    this.output = '';

    this.dietService.generatePlan(this.data).subscribe({
      next: (response) => (this.output = response),
      error: (err) => {
        console.error(err);
        this.output = err.message || 'Erro ao gerar a dieta.';
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  handleGoBack() {
    this.goBack.emit();
  }
}
