import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import type { DietData } from 'src/app/interface/diet.interface';

@Injectable({ providedIn: 'root' })
export class DietService {
  private readonly apiUrl = 'http://localhost:3333/plan';
  private abortController: AbortController | null = null;

  generatePlanStream(data: DietData): Observable<string> {
    const subject = new Subject<string>();

    this.cancelStream();

    this.abortController = new AbortController();

    fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        age: data.age,
        height: data.height,
        weight: data.weight,
        gender: data.gender,
        activityLevel: data.activityLevel,
        objective: data.objective,
      }),
      signal: this.abortController.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(
            `Erro HTTP: ${response.status} - ${response.statusText}`
          );
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder('utf-8');

        if (!reader) {
          throw new Error('Stream não disponível');
        }

        let accumulated = '';

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            subject.complete();
            break;
          }

          const chunk = decoder.decode(value, { stream: true });
          accumulated += chunk;
          subject.next(accumulated);
        }
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Requisição cancelada pelo usuário');
          subject.complete();
        } else {
          console.error('Erro ao gerar dieta:', error);
          subject.error({
            message: 'Erro ao gerar a dieta. Tente novamente mais tarde.',
            originalError: error,
          });
        }
      });

    return subject.asObservable();
  }

  cancelStream(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  async checkServerHealth(): Promise<boolean> {
    try {
      const response = await fetch(this.apiUrl.replace('/plan', '/health'), {
        method: 'GET',
        signal: AbortSignal.timeout(5000),
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}
