import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
} from '@angular/core';
import type { DietData } from 'src/app/interface/diet.interface';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/service/toast/toast.service';
import { ToastMessages } from 'src/app/service/toast/types';
import { DietService } from 'src/app/service/diet/diet.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnDestroy {
  @Input() data!: DietData;
  @Output() goBack = new EventEmitter<void>();

  output: string = '';
  isStreaming: boolean = false;
  private subscription?: Subscription;

  constructor(private dietService: DietService, private toast: ToastService) {}

  ngOnDestroy(): void {
    this.stopStreaming();
  }

  onGenerate() {
    if (this.isStreaming) {
      this.stopStreaming();
      return;
    }

    this.startStreaming();
  }

  private startStreaming(): void {
    this.isStreaming = true;
    this.output = '';

    this.subscription = this.dietService
      .generatePlanStream(this.data)
      .subscribe({
        next: (accumulatedText) => {
          this.output = accumulatedText;
        },
        error: (err) => {
          console.error('Erro:', err);
          this.output = 'Erro ao gerar a dieta. Tente novamente mais tarde.';
          this.isStreaming = false;
        },
        complete: () => {
          console.log('Stream finalizado');
          this.isStreaming = false;
        },
      });
  }

  private stopStreaming(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.dietService.cancelStream();
    }
    this.isStreaming = false;
  }

  handleGoBack(): void {
    this.stopStreaming();
    this.goBack.emit();
  }

  copyToClipboard(): void {
    if (this.output) {
      navigator.clipboard.writeText(this.output).then(
        () => this.toast.success(ToastMessages.DietCopied),
        () => this.toast.error(ToastMessages.DietError)
      );
    }
  }

  downloadDiet(): void {
    if (!this.output) return;

    const blob = new Blob([this.output], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dieta-${this.data.name
      .toLowerCase()
      .replace(/\s+/g, '-')}.txt`;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
