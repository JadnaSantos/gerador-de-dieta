import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string = '';

  @Input() disabled: boolean = false;

  @Input() isLoading: boolean = false;

  @Input() variant: 'primary' | 'secondary' | 'icon' = 'primary';

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled && !this.isLoading) {
      this.clicked.emit();
    }
  }
}
