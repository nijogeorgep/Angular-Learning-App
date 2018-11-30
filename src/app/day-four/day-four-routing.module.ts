import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayFourComponent } from './day-four.component';
import { PipeIlustrateComponent } from './pipe-ilustrate/pipe-ilustrate.component';
import { ParentServiceComponent } from './parent-service/parent-service.component';

const routes: Routes = [
  {
    path: '',
    component: DayFourComponent,
    children: [
      {
        path: 'pipe', component: PipeIlustrateComponent
      },
      {
        path: 'service', component: ParentServiceComponent
      },
      {
        path: '', redirectTo: 'pipe'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourRoutingModule { }
