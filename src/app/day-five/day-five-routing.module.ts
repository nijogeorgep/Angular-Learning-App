import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayFiveComponent } from './day-five.component';
import { TestLoginComponent } from './test-login/test-login.component';
import { TestDirectiveComponent } from './test-directive/test-directive.component';

const routes: Routes = [
  {
    path: '',
    component: DayFiveComponent,
    children: [
      {
        path: 'testlogincomponent', component: TestLoginComponent
      },
      {
        path: 'testdirective', component: TestDirectiveComponent
      },
      {
        path: '', redirectTo: 'testlogincomponent'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFiveRoutingModule { }
