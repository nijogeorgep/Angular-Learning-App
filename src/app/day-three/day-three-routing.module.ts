import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DayThreeComponent } from './day-three.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: DayThreeComponent,
    children: [
      {
        path: 'templatedrivenform', component: TemplateDrivenFormComponent
      },
      {
        path: 'reactiveform', component: ReactiveFormComponent
      },
      {
        path: '', redirectTo: 'templatedrivenform'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThreeRoutingModule { }
