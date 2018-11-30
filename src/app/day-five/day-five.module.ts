import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayFiveComponent } from './day-five.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DayFiveRoutingModule } from './day-five-routing.module';
import { TestLoginComponent } from './test-login/test-login.component';
import { TestDirectiveComponent } from './test-directive/test-directive.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DayFiveRoutingModule
  ],
  declarations: [DayFiveComponent, TestLoginComponent, TestDirectiveComponent]
})
export class DayFiveModule { }
