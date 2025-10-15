import { Injectable } from '@angular/core';
import { HttpClient, type HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import type { DietData } from '../interface/diet.interface';

@Injectable({ providedIn: 'root' })
export class DietService {
  private readonly apiUrl = 'http://localhost:3333/plan';

  constructor(private http: HttpClient) {}

  generatePlan(data: DietData): Observable<string> {
    return this.http
      .post(this.apiUrl, data, {
        responseType: 'text',
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Erro do lado do cliente:', error.error.message);
    } else {
      console.error(`Erro do servidor (${error.status}):`, error.message);
    }

    return throwError(
      () => new Error('Erro ao gerar a dieta. Tente novamente mais tarde.')
    );
  }
}
