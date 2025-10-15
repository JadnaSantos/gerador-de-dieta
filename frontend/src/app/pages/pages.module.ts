import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [ComponentsModule, CommonModule],
  exports: [HomeComponent],
})
export class PagesModule {}
