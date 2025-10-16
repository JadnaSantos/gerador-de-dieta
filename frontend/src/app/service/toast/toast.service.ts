import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  success(message: string, title: string = 'Sucesso') {
    this.toastr.success(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true,
    });
  }

  error(message: string, title: string = 'Erro') {
    this.toastr.error(message, title, {
      timeOut: 4000,
      positionClass: 'toast-top-right',
      closeButton: true,
    });
  }

  info(message: string, title: string = 'Info') {
    this.toastr.info(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }

  warning(message: string, title: string = 'Atenção') {
    this.toastr.warning(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }
}
