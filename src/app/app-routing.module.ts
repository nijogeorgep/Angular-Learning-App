import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    data: { preload: true },
    loadChildren: 'app/products/products.module#ProductsModule'
  },
  {
    path: 'daytwo',
    canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: 'app/day-two/day-two.module#DayTwoModule'
  },
  {
    path: 'daythree',
    canLoad: [AuthGuard],
    data: { preload: false },
    loadChildren: 'app/day-three/day-three.module#DayThreeModule'
  },
  {
    path: 'dayfour',
    canLoad: [AuthGuard],
    data: { preload: false },
    loadChildren: 'app/day-four/day-four.module#DayFourModule'
  },
  {
    path: 'dayfive',
    canLoad: [AuthGuard],
    data: { preload: false },
    loadChildren: 'app/day-five/day-five.module#DayFiveModule'
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
