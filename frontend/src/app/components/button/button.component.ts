import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input({ required: true, alias: 'text' }) buttonText: string = '';
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled && !this.isLoading) {
      this.clicked.emit();
    }
  }
}
