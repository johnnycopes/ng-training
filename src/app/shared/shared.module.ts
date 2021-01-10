import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { WellComponent } from "./well/well.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    ConditionsComponent,
    WellComponent,
  ],
  exports: [
    ButtonComponent,
    ConditionsComponent,
    WellComponent,
  ]
})
export class SharedModule { }
