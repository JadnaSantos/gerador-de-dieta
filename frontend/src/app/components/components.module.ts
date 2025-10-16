import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GeneratorComponent } from './generator/generator.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [ButtonComponent, FormComponent, GeneratorComponent],
  exports: [ButtonComponent, FormComponent, GeneratorComponent],
  imports: [ReactiveFormsModule, CommonModule, MarkdownModule.forRoot()],
})
export class ComponentsModule {}
