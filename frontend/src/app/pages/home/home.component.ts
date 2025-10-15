import { Component } from '@angular/core';
import { DietData } from 'src/app/interface/diet.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data: DietData | null = null;

  onSubmit(userData: DietData) {
    this.data = userData;
  }
}
