import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DayThreeRoutingModule } from './day-three-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DayThreeComponent } from './day-three.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    DayThreeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TemplateDrivenFormComponent, DayThreeComponent, ReactiveFormComponent]
})
export class DayThreeModule { }
