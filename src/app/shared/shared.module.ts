import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellComponent } from "./well/well.component";
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    WellComponent,
  ],
  exports: [
    ButtonComponent,
    WellComponent,
  ]
})
export class SharedModule { }
