import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { DayTwoComponent } from './day-two.component';
import { AngularFiveComponent } from './angular-five/angular-five.component';
import { AngularFiveDirectiveComponent } from './angular-five-directive/angular-five-directive.component';

const routes: Routes = [
    {
        path: '',
        component: DayTwoComponent,
        children: [{
          path: 'components', component: AngularFiveComponent
        },{
          path: 'directive', component: AngularFiveDirectiveComponent
        },
        {
          path: '', redirectTo: 'components'
        }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DayTwoRoutingModule { }
