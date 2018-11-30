import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './service/message.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpRequestService } from './service/http-request.service';
import { StarIndicateComponent } from './star-indicate/star-indicate.component';
import { RestrictNegativeDirective } from './directives/restrict-negative.directive';
import { HoverFocusDirective } from './directives/hover-focus.directive';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [
    DashboardComponent,
    StarIndicateComponent,
    RestrictNegativeDirective,
    HoverFocusDirective
  ],
  providers: [MessageService, HttpRequestService],
  declarations: [DashboardComponent, StarIndicateComponent, RestrictNegativeDirective, HoverFocusDirective]
})
export class SharedModule { }
