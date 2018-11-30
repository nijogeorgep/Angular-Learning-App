import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DayFourRoutingModule } from './day-four-routing.module';
import { DayFourComponent } from './day-four.component';
import { PipeIlustrateComponent } from './pipe-ilustrate/pipe-ilustrate.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { ParentServiceComponent } from './parent-service/parent-service.component';
import { SiblingOneComponent } from './sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './sibling-two/sibling-two.component';
import { DetailsShareService } from './details-share.service';
import { SiblingOneComponentProviderComponent } from './sibling-one-component-provider/sibling-one-component-provider.component';
import { SiblingTwoComponentProviderComponent } from './sibling-two-component-provider/sibling-two-component-provider.component';
import { DetailsShareCompProviderService } from './details-share-comp-provider.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DayFourRoutingModule
  ],
  declarations: [
    DayFourComponent,
    PipeIlustrateComponent,
    ExponentialStrengthPipe,
    ParentServiceComponent,
    SiblingOneComponent,
    SiblingTwoComponent,
    SiblingOneComponentProviderComponent,
    SiblingTwoComponentProviderComponent
  ],
  providers: [
    DetailsShareService,
    DetailsShareCompProviderService
  ]
})
export class DayFourModule { }
