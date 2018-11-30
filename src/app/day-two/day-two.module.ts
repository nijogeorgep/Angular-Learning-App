import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import {  DayTwoRoutingModule } from './day-two-routing.module';
import { DayTwoComponent } from './day-two.component';
import { AngularFiveComponent } from './angular-five/angular-five.component';
import { AngularFiveDirectiveComponent } from './angular-five-directive/angular-five-directive.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { VoterComponent } from './voter/voter.component';
import { CountdownParentVcComponent } from './countdown-parent-vc/countdown-parent-vc.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    DayTwoRoutingModule
  ],
  declarations: [DayTwoComponent, AngularFiveComponent, AngularFiveDirectiveComponent,
    HeroParentComponent, HeroChildComponent, NameParentComponent, NameChildComponent,
    VersionParentComponent, VersionChildComponent, VoteTakerComponent, VoterComponent,
    CountdownParentVcComponent, CountdownTimerComponent]
})
export class DayTwoModule { }
