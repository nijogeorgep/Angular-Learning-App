import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('In canActivate: ' + state.url);
    return this.checkLoggedIn(state.url);
  }

  canLoad(route: Route): boolean {
    console.log('In canLoad: ' + route.path);
    return this.checkLoggedIn(route.path);
  }

  checkLoggedIn(url: string): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // Retain the attempted URL for redirection
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
